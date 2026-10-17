import type { Metadata } from "next";
import TicketPortal from "./TicketPortal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Support Ticket Portal | Orion IT Service",
  description:
    "Create a support ticket, track its progress with your ticket code, and reply to the Orion IT Service support team without logging in.",
  alternates: {
    canonical: "/tickets",
  },
  // Utility page for existing customers; kept out of search results
  robots: {
    index: false,
    follow: true,
  },
});

export default function TicketsPage() {
  return <TicketPortal />;
}
