import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Maintenance & Support Las Vegas | Orion IT",
  description:
    "Professional website maintenance and support services in Las Vegas. Secure, fast, and always up.",
  alternates: {
    canonical: "/website-maintenance-support-las-vegas",
  },
  openGraph: {
    title: "Website Maintenance & Support Las Vegas | Orion IT Cybersecurity",
    description:
      "Managed website maintenance and support. Security, speed, and reliability.",
    url: "https://www.orionitservice.com/website-maintenance-support-las-vegas",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
