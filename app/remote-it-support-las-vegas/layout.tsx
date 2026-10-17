import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Remote IT Support Las Vegas | 24/7 Expert Help | Orion IT",
  description:
    "Professional remote IT support for Las Vegas businesses. 24/7 monitoring, instant troubleshooting, and proactive maintenance. Get expert help without the downtime.",
  alternates: {
    canonical: "/remote-it-support-las-vegas",
  },
  openGraph: {
    title: "Remote IT Support Las Vegas | Orion IT Cybersecurity",
    description:
      "Professional remote IT support for Las Vegas businesses. 24/7 monitoring, instant troubleshooting, and proactive maintenance.",
    url: "https://www.orionitservice.com/remote-it-support-las-vegas",
  },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
