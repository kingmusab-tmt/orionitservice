import type { Metadata } from "next";
import TicketPortal from "./TicketPortal";

export const metadata: Metadata = {
  title: "Support Ticket Portal | Orion IT Service",
  description:
    "Create a support ticket, track its progress with your ticket code, and reply to the Orion IT Service support team without logging in.",
  alternates: {
    canonical: "/tickets",
  },
};

export default function TicketsPage() {
  return <TicketPortal />;
}
