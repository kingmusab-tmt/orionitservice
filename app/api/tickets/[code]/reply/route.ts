import { NextRequest, NextResponse } from "next/server";
import { randomBytes } from "crypto";
import {
  buildReplyActivity,
  normalizeTicketCode,
  toPublicTicket,
} from "@/lib/tickets";
import { notifyCustomerReplyReceived } from "@/lib/ticket-notifications";
import { getTicketsCollection } from "@/lib/mongodb";

export const runtime = "nodejs";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ code: string }> },
) {
  try {
    const body = await request.json();
    const message = typeof body.message === "string" ? body.message.trim() : "";
    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 },
      );
    }

    const { code } = await params;
    const ticketsCollection = await getTicketsCollection();
    const ticket = await ticketsCollection.findOne({
      code: normalizeTicketCode(code),
    });

    if (!ticket) {
      return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
    }

    const reply = {
      id: randomBytes(8).toString("hex"),
      authorType: "customer" as const,
      authorName:
        typeof body.name === "string" && body.name.trim()
          ? body.name.trim()
          : ticket.name,
      message,
      createdAt: new Date(),
    };

    const now = new Date();
    await ticketsCollection.updateOne(
      { code: ticket.code },
      {
        $set: {
          replies: [...ticket.replies, reply],
          status:
            ticket.status === "resolved" || ticket.status === "closed"
              ? "in_progress"
              : ticket.status,
          updatedAt: now,
          lastCustomerReplyAt: now,
        },
        $push: {
          activity: buildReplyActivity({
            type: "customer_reply",
            message,
            actorName: reply.authorName,
          }),
        },
      },
    );

    const updatedTicket = await ticketsCollection.findOne({
      code: ticket.code,
    });
    await notifyCustomerReplyReceived(updatedTicket || ticket, message);
    return NextResponse.json(
      {
        success: true,
        message: "Reply added successfully",
        ticket: toPublicTicket(updatedTicket || ticket),
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Ticket reply failed:", error);
    return NextResponse.json(
      {
        error: "Failed to submit ticket reply",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
