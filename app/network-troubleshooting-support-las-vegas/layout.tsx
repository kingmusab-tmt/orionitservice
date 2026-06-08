import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Network Troubleshooting & Support Las Vegas | Orion IT",
  description:
    "24/7 network troubleshooting and support in Las Vegas. Fast resolution for network issues and outages.",
  alternates: {
    canonical: "/network-troubleshooting-support-las-vegas",
  },
  openGraph: {
    title:
      "Network Troubleshooting & Support Las Vegas | Orion IT Cybersecurity",
    description:
      "24/7 network support with fast resolution. Expert troubleshooting for all network issues.",
    url: "https://www.orionitservice.com/network-troubleshooting-support-las-vegas",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
