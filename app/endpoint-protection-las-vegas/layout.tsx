import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Endpoint Protection Las Vegas | Orion IT",
  description:
    "Advanced endpoint protection and EDR for Las Vegas businesses. Protect devices from ransomware, malware, and zero-day threats.",
  alternates: {
    canonical: "/endpoint-protection-las-vegas",
  },
  openGraph: {
    title: "Endpoint Protection Las Vegas | Orion IT Cybersecurity",
    description:
      "Enterprise endpoint protection with real-time monitoring and advanced threat detection.",
    url: "https://www.orionitservice.com/endpoint-protection-las-vegas",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
