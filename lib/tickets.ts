import { randomBytes } from "crypto";

export type TicketStatus =
  | "open"
  | "in_progress"
  | "awaiting_customer"
  | "resolved"
  | "closed";

export type TicketPriority = "low" | "normal" | "high" | "urgent";
export type TicketBillingType = "fixed" | "hourly";
export const TICKET_CURRENCIES = ["USD", "EUR", "GBP", "NGN"] as const;
export type TicketCurrency = (typeof TICKET_CURRENCIES)[number];

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
    | "status_changed"
    | "billing_updated"
    | "work_timer_changed";
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
  billingType?: TicketBillingType | null;
  billingAmount?: number | null;
  billingCurrency?: TicketCurrency;
  hourlyRatePerMinute?: number | null;
  workTimeMs?: number;
  workTimerRunning?: boolean;
  workTimerStartedAt?: Date | null;
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
  billingType?: TicketBillingType | null;
  billingAmount?: number | null;
  billingCurrency: TicketCurrency;
  hourlyRatePerMinute?: number | null;
  workTimeMs: number;
  workTimerRunning: boolean;
  workTimerStartedAt?: string | null;
  elapsedWorkMs: number;
  totalCharge: number | null;
  createdAt: string;
  updatedAt: string;
  lastCustomerReplyAt: string;
  lastSupportReplyAt?: string;
}

type TimerAndBillingTicketLike = {
  status: TicketStatus;
  billingType?: TicketBillingType | null;
  billingAmount?: number | null;
  billingCurrency?: TicketCurrency;
  hourlyRatePerMinute?: number | null;
  workTimeMs?: number | null;
  workTimerRunning?: boolean | null;
  workTimerStartedAt?: Date | string | null;
};

function toStartMs(value: Date | string | null | undefined): number | null {
  if (!value) {
    return null;
  }

  const startMs =
    value instanceof Date ? value.getTime() : new Date(value).getTime();
  return Number.isFinite(startMs) ? startMs : null;
}

export function getTicketElapsedWorkMs(
  ticket: TimerAndBillingTicketLike,
  nowMs = Date.now(),
): number {
  const baseMs = Math.max(0, ticket.workTimeMs ?? 0);
  const isRunning =
    ticket.status === "in_progress" &&
    ticket.workTimerRunning === true &&
    !!ticket.workTimerStartedAt;

  if (!isRunning) {
    return baseMs;
  }

  const startMs = toStartMs(ticket.workTimerStartedAt);
  if (!startMs) {
    return baseMs;
  }

  return baseMs + Math.max(0, nowMs - startMs);
}

export function getTicketTotalCharge(
  ticket: TimerAndBillingTicketLike,
  nowMs = Date.now(),
): number | null {
  if (ticket.billingType === "fixed") {
    return typeof ticket.billingAmount === "number"
      ? ticket.billingAmount
      : null;
  }

  if (ticket.billingType !== "hourly") {
    return null;
  }

  const perMinuteRate =
    typeof ticket.hourlyRatePerMinute === "number"
      ? ticket.hourlyRatePerMinute
      : typeof ticket.billingAmount === "number"
        ? ticket.billingAmount / 60
        : null;

  if (perMinuteRate === null) {
    return null;
  }

  const elapsedMinutes = getTicketElapsedWorkMs(ticket, nowMs) / 60000;
  return perMinuteRate * elapsedMinutes;
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
  const elapsedWorkMs = getTicketElapsedWorkMs(ticket);
  const totalCharge = getTicketTotalCharge(ticket);

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
    billingType: ticket.billingType ?? null,
    billingAmount: ticket.billingAmount ?? null,
    billingCurrency: ticket.billingCurrency ?? "USD",
    hourlyRatePerMinute: ticket.hourlyRatePerMinute ?? null,
    workTimeMs: Math.max(0, ticket.workTimeMs ?? 0),
    workTimerRunning: ticket.workTimerRunning === true,
    workTimerStartedAt: ticket.workTimerStartedAt
      ? ticket.workTimerStartedAt.toISOString()
      : null,
    elapsedWorkMs,
    totalCharge,
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

export function buildBillingActivity(message: string): TicketActivity {
  return {
    id: randomBytes(8).toString("hex"),
    type: "billing_updated",
    message,
    createdAt: new Date(),
  };
}

export function buildWorkTimerActivity(message: string): TicketActivity {
  return {
    id: randomBytes(8).toString("hex"),
    type: "work_timer_changed",
    message,
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
