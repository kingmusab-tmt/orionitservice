import type { Metadata } from "next";
import TicketAdminDashboard from "./TicketAdminDashboard";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Ticket Admin Dashboard | Orion IT Service",
  description:
    "Internal ticket dashboard for Orion IT Service to update status, priority, assignment, and support replies.",
  alternates: {
    canonical: "/tickets/admin",
  },
  robots: {
    index: false,
    follow: false,
  },
});

export default function TicketAdminPage() {
  return <TicketAdminDashboard />;
}
