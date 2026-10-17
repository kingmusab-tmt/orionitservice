import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Helpdesk Support Las Vegas | Orion IT",
  description:
    "Professional 24/7 helpdesk support in Las Vegas. Fast IT support for your employees.",
  alternates: {
    canonical: "/helpdesk-support-las-vegas",
  },
  openGraph: {
    title: "Helpdesk Support Las Vegas | Orion IT Cybersecurity",
    description:
      "24/7 helpdesk support for employees. Fast ticket resolution and professional IT assistance.",
    url: "https://www.orionitservice.com/helpdesk-support-las-vegas",
  },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
