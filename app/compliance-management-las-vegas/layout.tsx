import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compliance Management Las Vegas | Orion IT",
  description:
    "Professional compliance management for Las Vegas businesses. HIPAA, PCI, SOC 2, and regulatory compliance expertise.",
  alternates: {
    canonical: "/compliance-management-las-vegas",
  },
  openGraph: {
    title: "Compliance Management Las Vegas | Orion IT Cybersecurity",
    description:
      "Stay compliant with expert guidance on HIPAA, PCI, SOC 2, and other regulatory requirements.",
    url: "https://www.orionitservice.com/compliance-management-las-vegas",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
