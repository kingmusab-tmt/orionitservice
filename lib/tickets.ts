import { randomBytes } from "crypto";

export type TicketStatus =
  | "open"
  | "in_progress"
  | "awaiting_customer"
  | "resolved"
  | "closed";

export type TicketPriority = "low" | "normal" | "high" | "urgent";

export type TicketReplyAuthor = "customer" | "support" | "system";

export interface TicketReply {
  id: string;
  authorType: TicketReplyAuthor;
  authorName: string;
  message: string;
  createdAt: Date;
}

export interface TicketActivity {
  id: string;
  type:
    | "ticket_created"
    | "customer_reply"
    | "support_reply"
    | "status_changed";
  message: string;
  status?: TicketStatus;
  actorName?: string;
  createdAt: Date;
}

export interface TicketDocument {
  _id?: string;
  code: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  category: string;
  priority: TicketPriority;
  status: TicketStatus;
  description: string;
  replies: TicketReply[];
  activity: TicketActivity[];
  assignedTo?: string;
  createdAt: Date;
  updatedAt: Date;
  lastCustomerReplyAt: Date;
  lastSupportReplyAt?: Date;
}

export interface PublicTicketReply {
  id: string;
  authorType: TicketReplyAuthor;
  authorName: string;
  message: string;
  createdAt: string;
}

export interface PublicTicketActivity {
  id: string;
  type: TicketActivity["type"];
  message: string;
  status?: TicketStatus;
  actorName?: string;
  createdAt: string;
}

export interface PublicTicket {
  code: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  category: string;
  priority: TicketPriority;
  status: TicketStatus;
  description: string;
  replies: PublicTicketReply[];
  activity: PublicTicketActivity[];
  assignedTo?: string;
  createdAt: string;
  updatedAt: string;
  lastCustomerReplyAt: string;
  lastSupportReplyAt?: string;
}

export function createTicketCode(): string {
  const rawCode = randomBytes(6).toString("hex").toUpperCase();
  return `OIS-${rawCode.slice(0, 4)}-${rawCode.slice(4, 8)}-${rawCode.slice(8, 12)}`;
}

export function normalizeTicketCode(value: string): string {
  return value.trim().toUpperCase().replace(/\s+/g, "");
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function toPublicTicket(ticket: TicketDocument): PublicTicket {
  return {
    code: ticket.code,
    name: ticket.name,
    email: ticket.email,
    phone: ticket.phone,
    subject: ticket.subject,
    category: ticket.category,
    priority: ticket.priority,
    status: ticket.status,
    description: ticket.description,
    replies: ticket.replies.map((reply) => ({
      ...reply,
      createdAt: reply.createdAt.toISOString(),
    })),
    activity: ticket.activity.map((item) => ({
      ...item,
      createdAt: item.createdAt.toISOString(),
    })),
    assignedTo: ticket.assignedTo,
    createdAt: ticket.createdAt.toISOString(),
    updatedAt: ticket.updatedAt.toISOString(),
    lastCustomerReplyAt: ticket.lastCustomerReplyAt.toISOString(),
    lastSupportReplyAt: ticket.lastSupportReplyAt?.toISOString(),
  };
}

export function buildReplyActivity(params: {
  type: "customer_reply" | "support_reply";
  message: string;
  actorName: string;
}): TicketActivity {
  return {
    id: randomBytes(8).toString("hex"),
    type: params.type,
    message: params.message,
    actorName: params.actorName,
    createdAt: new Date(),
  };
}

export function buildStatusActivity(params: {
  status: TicketStatus;
  message: string;
}): TicketActivity {
  return {
    id: randomBytes(8).toString("hex"),
    type: "status_changed",
    message: params.message,
    status: params.status,
    createdAt: new Date(),
  };
}

export function buildCreatedActivity(message: string): TicketActivity {
  return {
    id: randomBytes(8).toString("hex"),
    type: "ticket_created",
    message,
    createdAt: new Date(),
  };
}
