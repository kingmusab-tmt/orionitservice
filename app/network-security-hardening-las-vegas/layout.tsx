import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Network Security Hardening Las Vegas | Orion IT",
  description:
    "Professional network security hardening services in Las Vegas. Strengthen your network defenses.",
  alternates: {
    canonical: "/network-security-hardening-las-vegas",
  },
  openGraph: {
    title: "Network Security Hardening Las Vegas | Orion IT Cybersecurity",
    description:
      "Network security hardening services. Fortress your network. Eliminate vulnerabilities.",
    url: "https://www.orionitservice.com/network-security-hardening-las-vegas",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
