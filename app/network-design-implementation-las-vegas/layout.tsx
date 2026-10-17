import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Network Design & Implementation Las Vegas | Orion IT",
  description:
    "Professional network design and implementation in Las Vegas. Secure, scalable, high-performance networks for your business.",
  alternates: {
    canonical: "/network-design-implementation-las-vegas",
  },
  openGraph: {
    title: "Network Design & Implementation Las Vegas | Orion IT Cybersecurity",
    description:
      "Custom network design and implementation built for security, performance, and growth.",
    url: "https://www.orionitservice.com/network-design-implementation-las-vegas",
  },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
