import { NextRequest, NextResponse } from "next/server";
import { randomBytes } from "crypto";
import {
  buildStatusActivity,
  isValidEmail,
  normalizeTicketCode,
  toPublicTicket,
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
    let nextStatusValue: TicketStatus | null = null;
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
        nextStatusValue = nextStatus;
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
