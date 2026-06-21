import { NextRequest, NextResponse } from "next/server";
import { randomBytes } from "crypto";
import {
  TICKET_CURRENCIES,
  buildBillingActivity,
  buildStatusActivity,
  buildWorkTimerActivity,
  isValidEmail,
  normalizeTicketCode,
  toPublicTicket,
  type TicketBillingType,
  type TicketCurrency,
  type TicketDocument,
  type TicketPriority,
  type TicketStatus,
} from "@/lib/tickets";
import {
  notifyTicketAdminUpdate,
  notifyTicketStatusChanged,
} from "@/lib/ticket-notifications";
import { getTicketsCollection } from "@/lib/mongodb";
import { getToken } from "next-auth/jwt";
import {
  isAuthorizedAdminEmail,
  isGoogleAuthConfigured,
} from "@/lib/admin-auth";

export const runtime = "nodejs";

const allowedPriorities: TicketPriority[] = ["low", "normal", "high", "urgent"];
const allowedBillingTypes: TicketBillingType[] = ["fixed", "hourly"];
const allowedCurrencies: readonly TicketCurrency[] = TICKET_CURRENCIES;
const allowedWorkTimerActions = ["pause", "resume"] as const;
const allowedStatuses: TicketStatus[] = [
  "open",
  "in_progress",
  "awaiting_customer",
  "resolved",
  "closed",
];

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ code: string }> },
) {
  try {
    const { code } = await params;
    const ticket = await findTicketByCode(code);

    if (!ticket) {
      return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
    }

    return NextResponse.json(
      { ticket: toPublicTicket(ticket) },
      { status: 200 },
    );
  } catch (error) {
    console.error("Ticket lookup failed:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch ticket",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ code: string }> },
) {
  try {
    if (!isGoogleAuthConfigured()) {
      return NextResponse.json(
        { error: "Google admin authentication is not configured" },
        { status: 503 },
      );
    }

    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });
    if (!token?.email || !isAuthorizedAdminEmail(token.email)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { code } = await params;
    const ticket = await findTicketByCode(code);

    if (!ticket) {
      return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
    }

    const updates: Partial<TicketDocument> = { updatedAt: new Date() };
    const activity = [...ticket.activity];
    const previousStatus = ticket.status;
    const changeSummary: string[] = [];

    if (body.status) {
      if (
        typeof body.status !== "string" ||
        !allowedStatuses.includes(body.status as TicketStatus)
      ) {
        return NextResponse.json(
          { error: "Invalid status value" },
          { status: 400 },
        );
      }

      const nextStatus = body.status as TicketStatus;
      if (ticket.status !== nextStatus) {
        updates.status = nextStatus;
        changeSummary.push(
          `Status updated from ${ticket.status.replace(/_/g, " ")} to ${nextStatus.replace(/_/g, " ")}`,
        );
        activity.push(
          buildStatusActivity({
            status: nextStatus,
            message: `Status updated to ${nextStatus.replace(/_/g, " ")}`,
          }),
        );
      }
    }

    if (body.billingType !== undefined || body.billingAmount !== undefined) {
      const nextBillingType =
        body.billingType !== undefined
          ? body.billingType
          : (ticket.billingType ?? null);
      const nextBillingAmount =
        body.billingAmount !== undefined
          ? body.billingAmount
          : (ticket.billingAmount ?? null);

      if (
        typeof nextBillingType !== "string" ||
        !allowedBillingTypes.includes(nextBillingType as TicketBillingType)
      ) {
        return NextResponse.json(
          { error: "billingType must be fixed or hourly" },
          { status: 400 },
        );
      }

      const parsedAmount =
        typeof nextBillingAmount === "number"
          ? nextBillingAmount
          : typeof nextBillingAmount === "string"
            ? Number(nextBillingAmount)
            : NaN;

      if (!Number.isFinite(parsedAmount) || parsedAmount <= 0) {
        return NextResponse.json(
          { error: "billingAmount must be a number greater than 0" },
          { status: 400 },
        );
      }

      const normalizedBillingType = nextBillingType as TicketBillingType;
      const nextBillingCurrency =
        body.billingCurrency !== undefined
          ? body.billingCurrency
          : (ticket.billingCurrency ?? "USD");

      if (
        typeof nextBillingCurrency !== "string" ||
        !allowedCurrencies.includes(nextBillingCurrency as TicketCurrency)
      ) {
        return NextResponse.json(
          { error: "billingCurrency must be one of USD, EUR, GBP, or NGN" },
          { status: 400 },
        );
      }

      updates.billingType = normalizedBillingType;
      updates.billingAmount = parsedAmount;
      updates.billingCurrency = nextBillingCurrency as TicketCurrency;
      updates.hourlyRatePerMinute =
        normalizedBillingType === "hourly" ? parsedAmount / 60 : null;

      if (
        ticket.billingType !== normalizedBillingType ||
        ticket.billingAmount !== parsedAmount ||
        (ticket.billingCurrency ?? "USD") !== nextBillingCurrency
      ) {
        const billingSummary =
          normalizedBillingType === "hourly"
            ? `Billing updated to hourly (${nextBillingCurrency} ${parsedAmount}/hour, ${nextBillingCurrency} ${(parsedAmount / 60).toFixed(4)}/minute)`
            : `Billing updated to fixed (${nextBillingCurrency} ${parsedAmount})`;
        changeSummary.push(billingSummary);
        activity.push(buildBillingActivity(billingSummary));
      }
    }

    if (body.priority) {
      if (
        typeof body.priority !== "string" ||
        !allowedPriorities.includes(body.priority as TicketPriority)
      ) {
        return NextResponse.json(
          { error: "Invalid priority value" },
          { status: 400 },
        );
      }

      const nextPriority = body.priority as TicketPriority;
      if (ticket.priority !== nextPriority) {
        updates.priority = nextPriority;
        changeSummary.push(
          `Priority changed from ${ticket.priority} to ${nextPriority}`,
        );
      }
    }

    if (body.assignedTo !== undefined) {
      if (typeof body.assignedTo !== "string") {
        return NextResponse.json(
          { error: "assignedTo must be a string" },
          { status: 400 },
        );
      }

      const nextAssignedTo = body.assignedTo.trim();
      if ((ticket.assignedTo || "") !== nextAssignedTo) {
        updates.assignedTo = nextAssignedTo;
        changeSummary.push(
          nextAssignedTo
            ? `Assigned to ${nextAssignedTo}`
            : `Assignment cleared from ${ticket.assignedTo}`,
        );
      }
    }

    if (body.response !== undefined) {
      if (typeof body.response !== "string" || !body.response.trim()) {
        return NextResponse.json(
          { error: "response must be a non-empty string" },
          { status: 400 },
        );
      }

      const responseMessage = body.response.trim();
      const supportReplyAuthor =
        typeof body.supportName === "string" && body.supportName.trim()
          ? body.supportName.trim()
          : "Orion IT Support";
      const supportReply = {
        id: randomBytes(8).toString("hex"),
        authorType: "support" as const,
        authorName: supportReplyAuthor,
        message: responseMessage,
        createdAt: new Date(),
      };

      updates.replies = [...ticket.replies, supportReply];
      updates.lastSupportReplyAt = new Date();
      changeSummary.push(`Support reply added by ${supportReplyAuthor}`);
      activity.push({
        id: randomBytes(8).toString("hex"),
        type: "support_reply",
        message: responseMessage,
        actorName: supportReply.authorName,
        createdAt: new Date(),
      });
      if (!updates.status) {
        updates.status = "awaiting_customer";
      }
    }

    const nowMs = Date.now();
    const nextStatus = updates.status ?? ticket.status;
    const wasInProgress = previousStatus === "in_progress";
    const willBeInProgress = nextStatus === "in_progress";

    if (!wasInProgress && willBeInProgress) {
      updates.workTimerRunning = true;
      updates.workTimerStartedAt = new Date(nowMs);
      if (typeof ticket.workTimeMs !== "number") {
        updates.workTimeMs = 0;
      }
      changeSummary.push("Work timer started");
      activity.push(buildWorkTimerActivity("Work timer started"));
    }

    if (wasInProgress && !willBeInProgress) {
      const startMs = ticket.workTimerStartedAt
        ? new Date(ticket.workTimerStartedAt).getTime()
        : null;
      const additionalMs = startMs ? Math.max(0, nowMs - startMs) : 0;

      updates.workTimeMs = Math.max(0, (ticket.workTimeMs ?? 0) + additionalMs);
      updates.workTimerRunning = false;
      updates.workTimerStartedAt = null;
      changeSummary.push("Work timer stopped");
      activity.push(buildWorkTimerActivity("Work timer stopped"));
    }

    if (body.workTimerAction !== undefined) {
      if (
        typeof body.workTimerAction !== "string" ||
        !allowedWorkTimerActions.includes(
          body.workTimerAction as (typeof allowedWorkTimerActions)[number],
        )
      ) {
        return NextResponse.json(
          { error: "workTimerAction must be pause or resume" },
          { status: 400 },
        );
      }

      if (nextStatus !== "in_progress") {
        return NextResponse.json(
          {
            error:
              "workTimerAction can only be used when ticket status is in progress",
          },
          { status: 400 },
        );
      }

      const action = body.workTimerAction as "pause" | "resume";
      const currentRunning =
        updates.workTimerRunning !== undefined
          ? updates.workTimerRunning === true
          : ticket.workTimerRunning === true;
      const currentWorkTimeMs = Math.max(
        0,
        updates.workTimeMs ?? ticket.workTimeMs ?? 0,
      );
      const currentStart =
        updates.workTimerStartedAt !== undefined
          ? updates.workTimerStartedAt
          : (ticket.workTimerStartedAt ?? null);

      if (action === "pause" && currentRunning) {
        const startMs = currentStart ? new Date(currentStart).getTime() : null;
        const additionalMs = startMs ? Math.max(0, nowMs - startMs) : 0;
        updates.workTimeMs = currentWorkTimeMs + additionalMs;
        updates.workTimerRunning = false;
        updates.workTimerStartedAt = null;
        changeSummary.push("Work timer paused");
        activity.push(buildWorkTimerActivity("Work timer paused"));
      }

      if (action === "resume" && !currentRunning) {
        updates.workTimerRunning = true;
        updates.workTimerStartedAt = new Date(nowMs);
        if (
          updates.workTimeMs === undefined &&
          typeof ticket.workTimeMs !== "number"
        ) {
          updates.workTimeMs = 0;
        }
        changeSummary.push("Work timer resumed");
        activity.push(buildWorkTimerActivity("Work timer resumed"));
      }
    }

    if (body.email) {
      if (typeof body.email !== "string" || !isValidEmail(body.email)) {
        return NextResponse.json(
          { error: "Invalid email value" },
          { status: 400 },
        );
      }
      const nextEmail = body.email.trim().toLowerCase();
      if (ticket.email !== nextEmail) {
        updates.email = nextEmail;
        changeSummary.push(`Contact email updated to ${nextEmail}`);
      }
    }

    if (body.phone !== undefined) {
      if (typeof body.phone !== "string") {
        return NextResponse.json(
          { error: "Phone must be a string" },
          { status: 400 },
        );
      }
      const nextPhone = body.phone.trim();
      if (ticket.phone !== nextPhone) {
        updates.phone = nextPhone;
        changeSummary.push(
          nextPhone
            ? `Contact phone updated to ${nextPhone}`
            : `Contact phone cleared`,
        );
      }
    }

    updates.activity = activity;

    const ticketsCollection = await getTicketsCollection();
    await ticketsCollection.updateOne({ code: ticket.code }, { $set: updates });

    const updatedTicket = await findTicketByCode(code);

    if (updatedTicket) {
      await Promise.allSettled([
        notifyTicketAdminUpdate(
          updatedTicket,
          changeSummary,
          token.name || undefined,
        ),
      ]);
    }

    return NextResponse.json(
      { success: true, ticket: toPublicTicket(updatedTicket || ticket) },
      { status: 200 },
    );
  } catch (error) {
    console.error("Ticket update failed:", error);
    return NextResponse.json(
      {
        error: "Failed to update ticket",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}

async function findTicketByCode(code: string) {
  const ticketsCollection = await getTicketsCollection();
  const normalizedCode = normalizeTicketCode(code);
  return ticketsCollection.findOne({ code: normalizedCode });
}
