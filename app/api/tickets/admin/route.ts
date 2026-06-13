import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { getTicketsCollection } from "@/lib/mongodb";
import { isAuthorizedAdminEmail } from "@/lib/admin-auth";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  try {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (!token?.email || !isAuthorizedAdminEmail(token.email)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const ticketsCollection = await getTicketsCollection();
    const tickets = await ticketsCollection
      .find(
        {},
        {
          projection: {
            code: 1,
            name: 1,
            email: 1,
            subject: 1,
            category: 1,
            priority: 1,
            status: 1,
            assignedTo: 1,
            createdAt: 1,
            updatedAt: 1,
            lastCustomerReplyAt: 1,
            lastSupportReplyAt: 1,
          },
        },
      )
      .sort({ createdAt: -1 })
      .limit(200)
      .toArray();

    return NextResponse.json(
      {
        tickets: tickets.map((ticket) => ({
          code: ticket.code,
          name: ticket.name,
          email: ticket.email,
          subject: ticket.subject,
          category: ticket.category,
          priority: ticket.priority,
          status: ticket.status,
          assignedTo: ticket.assignedTo || "",
          createdAt:
            ticket.createdAt instanceof Date
              ? ticket.createdAt.toISOString()
              : String(ticket.createdAt),
          updatedAt:
            ticket.updatedAt instanceof Date
              ? ticket.updatedAt.toISOString()
              : String(ticket.updatedAt),
          lastCustomerReplyAt:
            ticket.lastCustomerReplyAt instanceof Date
              ? ticket.lastCustomerReplyAt.toISOString()
              : String(ticket.lastCustomerReplyAt),
          lastSupportReplyAt:
            ticket.lastSupportReplyAt instanceof Date
              ? ticket.lastSupportReplyAt.toISOString()
              : ticket.lastSupportReplyAt
                ? String(ticket.lastSupportReplyAt)
                : null,
        })),
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Ticket list failed:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch tickets",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
