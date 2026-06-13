import { NextRequest, NextResponse } from "next/server";
import { randomBytes } from "crypto";
import {
  buildCreatedActivity,
  createTicketCode,
  isValidEmail,
  toPublicTicket,
  type TicketDocument,
  type TicketPriority,
} from "@/lib/tickets";
import { notifyTicketCreated } from "@/lib/ticket-notifications";
import { getTicketsCollection } from "@/lib/mongodb";

export const runtime = "nodejs";

const allowedPriorities: TicketPriority[] = ["low", "normal", "high", "urgent"];

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { error: "Request must be JSON" },
        { status: 400 },
      );
    }

    const body = await request.json();
    const validationErrors = validateCreateTicket(body);
    if (validationErrors.length > 0) {
      return NextResponse.json({ errors: validationErrors }, { status: 400 });
    }

    const ticketsCollection = await getTicketsCollection();
    await ensureTicketIndexes(ticketsCollection);

    const now = new Date();

    for (let attempt = 0; attempt < 5; attempt += 1) {
      const code = createTicketCode();

      const ticket: TicketDocument = {
        code,
        name: body.name.trim(),
        email: body.email.trim().toLowerCase(),
        phone: body.phone?.trim() || "",
        subject: body.subject.trim(),
        category: body.category.trim(),
        priority: body.priority,
        status: "open",
        description: body.description.trim(),
        replies: [
          {
            id: randomBytes(8).toString("hex"),
            authorType: "customer",
            authorName: body.name.trim(),
            message: body.description.trim(),
            createdAt: now,
          },
        ],
        activity: [buildCreatedActivity("Ticket created by the customer")],
        createdAt: now,
        updatedAt: now,
        lastCustomerReplyAt: now,
      };

      try {
        await ticketsCollection.insertOne(ticket);
        await notifyTicketCreated(ticket);
        return NextResponse.json(
          {
            success: true,
            message: "Ticket created successfully",
            ticket: toPublicTicket(ticket),
          },
          { status: 201 },
        );
      } catch (error) {
        if (!isDuplicateKeyError(error)) {
          throw error;
        }
      }
    }

    return NextResponse.json(
      { error: "Unable to generate a unique ticket code. Please try again." },
      { status: 500 },
    );
  } catch (error) {
    console.error("Ticket creation failed:", error);
    return NextResponse.json(
      {
        error: "Failed to create ticket",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}

async function ensureTicketIndexes(
  collection: Awaited<ReturnType<typeof getTicketsCollection>>,
) {
  await collection.createIndex({ code: 1 }, { unique: true });
  await collection.createIndex({ email: 1, createdAt: -1 });
  await collection.createIndex({ status: 1, updatedAt: -1 });
}

function validateCreateTicket(body: Record<string, unknown>): string[] {
  const errors: string[] = [];

  if (!body.name || typeof body.name !== "string" || !body.name.trim()) {
    errors.push("Name is required");
  }

  if (
    !body.email ||
    typeof body.email !== "string" ||
    !isValidEmail(body.email)
  ) {
    errors.push("A valid email address is required");
  }

  if (
    !body.subject ||
    typeof body.subject !== "string" ||
    !body.subject.trim()
  ) {
    errors.push("Subject is required");
  }

  if (
    !body.category ||
    typeof body.category !== "string" ||
    !body.category.trim()
  ) {
    errors.push("Category is required");
  }

  if (
    !body.description ||
    typeof body.description !== "string" ||
    !body.description.trim()
  ) {
    errors.push("Description is required");
  }

  if (body.phone && typeof body.phone !== "string") {
    errors.push("Phone must be a string when provided");
  }

  if (
    !body.priority ||
    typeof body.priority !== "string" ||
    !allowedPriorities.includes(body.priority as TicketPriority)
  ) {
    errors.push("Priority must be one of low, normal, high, or urgent");
  }

  return errors;
}

function isDuplicateKeyError(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    (error as { code?: number }).code === 11000
  );
}
