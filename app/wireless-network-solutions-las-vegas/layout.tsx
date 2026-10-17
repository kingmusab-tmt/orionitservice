import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Wireless Network Solutions Las Vegas | Orion IT",
  description:
    "Professional wireless network solutions in Las Vegas. Enterprise Wi-Fi design, implementation, and support.",
  alternates: {
    canonical: "/wireless-network-solutions-las-vegas",
  },
  openGraph: {
    title: "Wireless Network Solutions Las Vegas | Orion IT Cybersecurity",
    description:
      "Enterprise-grade wireless networks with complete coverage, security, and performance.",
    url: "https://www.orionitservice.com/wireless-network-solutions-las-vegas",
  },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
