import nodemailer from "nodemailer";
import type { TicketDocument, TicketStatus } from "./tickets";

type MailMessage = {
  to: string;
  subject: string;
  text: string;
  html: string;
};

type EmailRow = {
  label: string;
  value: string;
};

const BRAND = {
  background: "#eef3f9",
  card: "#ffffff",
  header: "#0f2f57",
  accent: "#1f7ae0",
  accentDark: "#165fb0",
  text: "#122238",
  muted: "#5a6b7f",
  border: "#d8e1ec",
  soft: "#f6f9fc",
};

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!host || !port || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port: Number(port),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user,
      pass,
    },
  });
}

function getSupportEmail(): string | null {
  return process.env.SMTP_SUPPORT_EMAIL || process.env.SMTP_INFO_EMAIL || null;
}

function getFromAddress(): string | null {
  const fromEmail =
    process.env.SMTP_INFO_EMAIL ||
    process.env.SMTP_SUPPORT_EMAIL ||
    process.env.SMTP_CONTACT_EMAIL ||
    null;

  return fromEmail;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeText(value: string): string {
  return value.replaceAll(/\r?\n/g, "\n");
}

function formatStatus(value: TicketStatus): string {
  return value.replace(/_/g, " ");
}

function buildRowsHtml(rows: EmailRow[]): string {
  return rows
    .map(
      (row) => `
        <tr>
          <td style="padding: 12px 0; color: ${BRAND.muted}; font-size: 13px; width: 160px; vertical-align: top;">${escapeHtml(row.label)}</td>
          <td style="padding: 12px 0; color: ${BRAND.text}; font-size: 14px; font-weight: 600; vertical-align: top;">${row.value}</td>
        </tr>
      `,
    )
    .join("");
}

function buildMessageCardHtml(message: string): string {
  return `
    <div style="margin-top: 8px; padding: 16px; background: ${BRAND.soft}; border: 1px solid ${BRAND.border}; border-radius: 14px; color: ${BRAND.text}; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">
      ${escapeHtml(message).replaceAll("\n", "<br />")}
    </div>
  `;
}

function buildListHtml(items: string[]): string {
  return `
    <ul style="margin: 8px 0 0; padding-left: 20px; color: ${BRAND.text}; font-size: 14px; line-height: 1.7;">
      ${items.map((item) => `<li style="margin-bottom: 8px;">${escapeHtml(item)}</li>`).join("")}
    </ul>
  `;
}

function buildButtonHtml(label: string, url: string): string {
  return `
    <a href="${escapeHtml(url)}" style="display: inline-block; background: ${BRAND.accent}; color: #ffffff; text-decoration: none; font-weight: 700; font-size: 14px; padding: 12px 20px; border-radius: 10px; margin-top: 8px;">
      ${escapeHtml(label)}
    </a>
  `;
}

function buildEmailHtml(params: {
  preheader: string;
  eyebrow: string;
  title: string;
  intro: string;
  rows?: EmailRow[];
  message?: string;
  listItems?: string[];
  ctaLabel?: string;
  ctaUrl?: string;
  footerNote: string;
}): string {
  const rowsHtml = params.rows?.length
    ? `
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; margin-top: 18px;">
        ${buildRowsHtml(params.rows)}
      </table>
    `
    : "";

  const messageHtml = params.message
    ? buildMessageCardHtml(params.message)
    : "";
  const listHtml = params.listItems?.length
    ? buildListHtml(params.listItems)
    : "";
  const buttonHtml =
    params.ctaLabel && params.ctaUrl
      ? buildButtonHtml(params.ctaLabel, params.ctaUrl)
      : "";

  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>${escapeHtml(params.title)}</title>
      </head>
      <body style="margin: 0; padding: 0; background: ${BRAND.background}; font-family: Arial, Helvetica, sans-serif; color: ${BRAND.text};">
        <div style="display:none; max-height:0; overflow:hidden; opacity:0; color: transparent;">
          ${escapeHtml(params.preheader)}
        </div>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; background: ${BRAND.background};">
          <tr>
            <td align="center" style="padding: 28px 16px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 680px; border-collapse: collapse; background: ${BRAND.card}; border-radius: 18px; overflow: hidden; box-shadow: 0 10px 30px rgba(18, 34, 56, 0.08); border: 1px solid ${BRAND.border};">
                <tr>
                  <td style="background: linear-gradient(135deg, ${BRAND.header} 0%, ${BRAND.accent} 100%); padding: 28px 32px; color: #ffffff;">
                    <div style="font-size: 12px; letter-spacing: 1.8px; text-transform: uppercase; opacity: 0.85; font-weight: 700; margin-bottom: 8px;">${escapeHtml(params.eyebrow)}</div>
                    <div style="font-size: 28px; line-height: 1.2; font-weight: 800; margin-bottom: 10px;">${escapeHtml(params.title)}</div>
                    <div style="font-size: 15px; line-height: 1.7; opacity: 0.94; max-width: 560px;">${escapeHtml(params.intro)}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 30px 32px 8px;">
                    ${rowsHtml}
                    ${messageHtml}
                    ${listHtml}
                    ${buttonHtml ? `<div style="margin-top: 24px;">${buttonHtml}</div>` : ""}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 24px 32px 30px; color: ${BRAND.muted}; font-size: 13px; line-height: 1.7; border-top: 1px solid ${BRAND.border}; background: #fcfdff;">
                    ${escapeHtml(params.footerNote)}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

async function sendMail(message: MailMessage) {
  const transporter = getTransporter();
  const fromAddress = getFromAddress();

  if (!transporter || !fromAddress) {
    return;
  }

  await transporter.sendMail({
    from: `"Orion IT Service" <${fromAddress}>`,
    ...message,
  });
}

export async function notifyTicketCreated(ticket: TicketDocument) {
  const supportEmail = getSupportEmail();
  if (!supportEmail) {
    return;
  }

  await Promise.allSettled([
    sendMail({
      to: supportEmail,
      subject: `New support ticket ${ticket.code} - ${ticket.subject}`,
      text: `New support ticket received\n\nTicket code: ${ticket.code}\nCustomer: ${ticket.name}\nEmail: ${ticket.email}\nPhone: ${ticket.phone || "Not provided"}\nCategory: ${ticket.category}\nPriority: ${ticket.priority}\nSubject: ${ticket.subject}\n\nDescription:\n${escapeText(ticket.description)}`,
      html: buildEmailHtml({
        preheader: `New support ticket ${ticket.code} from ${ticket.name}`,
        eyebrow: "New Ticket",
        title: `Ticket ${ticket.code} has been created`,
        intro:
          "A customer has submitted a new support request. Review the details below and assign it to the right workflow.",
        rows: [
          { label: "Ticket code", value: escapeHtml(ticket.code) },
          { label: "Customer", value: escapeHtml(ticket.name) },
          {
            label: "Email",
            value: `<a href="mailto:${escapeHtml(ticket.email)}" style="color:${BRAND.accent}; text-decoration:none;">${escapeHtml(ticket.email)}</a>`,
          },
          { label: "Phone", value: escapeHtml(ticket.phone || "Not provided") },
          { label: "Category", value: escapeHtml(ticket.category) },
          { label: "Priority", value: escapeHtml(ticket.priority) },
          { label: "Subject", value: escapeHtml(ticket.subject) },
        ],
        message: ticket.description,
        ctaLabel: "Open Ticket Portal",
        ctaUrl: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.orionitservice.com"}/tickets/admin`,
        footerNote:
          "This is an internal notification for the Orion IT Service support team. Respond from the admin dashboard to keep the ticket timeline updated.",
      }),
    }),
    sendMail({
      to: ticket.email,
      subject: `We received your ticket ${ticket.code}`,
      text: `Thank you for contacting Orion IT Service.\n\nYour ticket has been received and is now in our queue.\n\nTicket code: ${ticket.code}\nSubject: ${ticket.subject}\nStatus: ${formatStatus(ticket.status)}\n\nYou can use your ticket code in the portal to track progress and reply at any time.`,
      html: buildEmailHtml({
        preheader: `Your Orion IT Service ticket ${ticket.code} has been received`,
        eyebrow: "Ticket Received",
        title: `We received your request`,
        intro:
          "Thank you for reaching out to Orion IT Service. Your support ticket has been created and our team will review it shortly.",
        rows: [
          {
            label: "Ticket code",
            value: `<span style="font-size:18px; font-weight:800; letter-spacing:0.5px; color:${BRAND.header};">${escapeHtml(ticket.code)}</span>`,
          },
          { label: "Subject", value: escapeHtml(ticket.subject) },
          { label: "Status", value: formatStatus(ticket.status) },
          { label: "Category", value: escapeHtml(ticket.category) },
        ],
        ctaLabel: "View Ticket Portal",
        ctaUrl: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.orionitservice.com"}/tickets`,
        footerNote:
          "Keep your ticket code safe. You can return to the portal at any time to check progress or add a reply.",
      }),
    }),
  ]);
}

export async function notifyCustomerReplyReceived(
  ticket: TicketDocument,
  message: string,
) {
  const supportEmail = getSupportEmail();
  if (!supportEmail) {
    return;
  }

  await sendMail({
    to: supportEmail,
    subject: `Customer reply on ${ticket.code}`,
    text: `Customer reply received\n\nTicket code: ${ticket.code}\nCustomer: ${ticket.name}\nEmail: ${ticket.email}\n\nReply:\n${escapeText(message)}`,
    html: buildEmailHtml({
      preheader: `Customer replied to ticket ${ticket.code}`,
      eyebrow: "Customer Reply",
      title: `A customer replied on ticket ${ticket.code}`,
      intro:
        "The customer has added a new message to the support conversation. Review it below and respond if needed.",
      rows: [
        { label: "Ticket code", value: escapeHtml(ticket.code) },
        { label: "Customer", value: escapeHtml(ticket.name) },
        {
          label: "Email",
          value: `<a href="mailto:${escapeHtml(ticket.email)}" style="color:${BRAND.accent}; text-decoration:none;">${escapeHtml(ticket.email)}</a>`,
        },
      ],
      message,
      footerNote:
        "This message was generated from the Orion IT Service ticket portal to keep your response workflow up to date.",
    }),
  });
}

export async function notifySupportReplySent(
  ticket: TicketDocument,
  message: string,
  supportName: string,
) {
  await sendMail({
    to: ticket.email,
    subject: `Update on ticket ${ticket.code}`,
    text: `Orion IT Service has updated your ticket.\n\nTicket code: ${ticket.code}\nSupport contact: ${supportName}\nStatus: ${formatStatus(ticket.status)}\n\nReply:\n${escapeText(message)}`,
    html: buildEmailHtml({
      preheader: `There is a new update on your ticket ${ticket.code}`,
      eyebrow: "Ticket Update",
      title: `Your ticket has a new update`,
      intro:
        "Our support team has responded to your ticket. Review the update below and reply from the portal if you need to add more details.",
      rows: [
        {
          label: "Ticket code",
          value: `<span style="font-size:18px; font-weight:800; letter-spacing:0.5px; color:${BRAND.header};">${escapeHtml(ticket.code)}</span>`,
        },
        { label: "Support contact", value: escapeHtml(supportName) },
        { label: "Status", value: formatStatus(ticket.status) },
      ],
      message,
      ctaLabel: "Open Ticket Portal",
      ctaUrl: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.orionitservice.com"}/tickets`,
      footerNote:
        "You can use your ticket code to follow the full conversation and send another reply at any time.",
    }),
  });
}

export async function notifyTicketStatusChanged(
  ticket: TicketDocument,
  previousStatus: TicketStatus,
  nextStatus: TicketStatus,
  actorName?: string,
) {
  await sendMail({
    to: ticket.email,
    subject: `Ticket ${ticket.code} is now ${nextStatus.replace(/_/g, " ")}`,
    text: `Your ticket ${ticket.code} has been updated.\n\nPrevious status: ${formatStatus(previousStatus)}\nNew status: ${formatStatus(nextStatus)}\n${actorName ? `Updated by: ${actorName}\n` : ""}\nUse your ticket code in the portal to review the latest progress.`,
    html: buildEmailHtml({
      preheader: `Ticket ${ticket.code} status updated from ${formatStatus(previousStatus)} to ${formatStatus(nextStatus)}`,
      eyebrow: "Status Update",
      title: `Your ticket status has changed`,
      intro:
        "The support team has updated your ticket. See the latest progress below.",
      rows: [
        {
          label: "Ticket code",
          value: `<span style="font-size:18px; font-weight:800; letter-spacing:0.5px; color:${BRAND.header};">${escapeHtml(ticket.code)}</span>`,
        },
        { label: "Previous status", value: formatStatus(previousStatus) },
        { label: "New status", value: formatStatus(nextStatus) },
        ...(actorName
          ? [{ label: "Updated by", value: escapeHtml(actorName) }]
          : []),
      ],
      ctaLabel: "View Ticket Portal",
      ctaUrl: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.orionitservice.com"}/tickets`,
      footerNote:
        "Please use your ticket code in the portal to view the full timeline and respond if more information is needed.",
    }),
  });
}

export async function notifyTicketAdminUpdate(
  ticket: TicketDocument,
  changes: string[],
  actorName?: string,
) {
  if (changes.length === 0) {
    return;
  }

  await sendMail({
    to: ticket.email,
    subject: `Update on ticket ${ticket.code}`,
    text: `Your ticket ${ticket.code} has been updated.${actorName ? `\n\nUpdated by: ${actorName}` : ""}\n\nCurrent status: ${formatStatus(ticket.status)}\nPriority: ${ticket.priority}${ticket.assignedTo ? `\nAssigned to: ${ticket.assignedTo}` : ""}\n\nUpdates:\n${changes.map((change) => `- ${change}`).join("\n")}\n\nPlease use your ticket code in the portal to review the latest progress or send another reply.`,
    html: buildEmailHtml({
      preheader: `Your ticket ${ticket.code} has new progress updates`,
      eyebrow: "Ticket Progress",
      title: `Your ticket is moving forward`,
      intro:
        "One of our Orion IT staff members updated your ticket. Here is the latest progress summary.",
      rows: [
        {
          label: "Ticket code",
          value: `<span style="font-size:18px; font-weight:800; letter-spacing:0.5px; color:${BRAND.header};">${escapeHtml(ticket.code)}</span>`,
        },
        { label: "Current status", value: formatStatus(ticket.status) },
        { label: "Priority", value: escapeHtml(ticket.priority) },
        ...(ticket.assignedTo
          ? [{ label: "Assigned to", value: escapeHtml(ticket.assignedTo) }]
          : []),
        ...(actorName
          ? [{ label: "Updated by", value: escapeHtml(actorName) }]
          : []),
      ],
      listItems: changes,
      ctaLabel: "Review Ticket Progress",
      ctaUrl: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.orionitservice.com"}/tickets`,
      footerNote:
        "Use your ticket code to open the portal, review the full history, and add another message if needed.",
    }),
  });
}
