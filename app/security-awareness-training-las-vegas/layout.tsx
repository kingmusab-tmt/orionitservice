import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Security Awareness Training Las Vegas | Orion IT",
  description:
    "Professional security awareness training in Las Vegas. Protect your employees and business from cyber threats and data breaches.",
  alternates: {
    canonical: "/security-awareness-training-las-vegas",
  },
  openGraph: {
    title: "Security Awareness Training Las Vegas | Orion IT Cybersecurity",
    description:
      "Comprehensive security awareness training to educate employees and reduce cyber risks.",
    url: "https://www.orionitservice.com/security-awareness-training-las-vegas",
  },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
