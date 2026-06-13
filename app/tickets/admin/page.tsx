import type { Metadata } from "next";
import TicketAdminDashboard from "./TicketAdminDashboard";

export const metadata: Metadata = {
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
};

export default function TicketAdminPage() {
  return <TicketAdminDashboard />;
}
