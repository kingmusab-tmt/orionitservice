import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Network Performance Optimization Las Vegas | Orion IT",
  description:
    "Professional network performance optimization in Las Vegas. Increase speed, reduce latency, maximize efficiency.",
  alternates: {
    canonical: "/network-performance-optimization-las-vegas",
  },
  openGraph: {
    title:
      "Network Performance Optimization Las Vegas | Orion IT Cybersecurity",
    description:
      "Optimize your network for speed and efficiency. Reduce latency and increase throughput.",
    url: "https://www.orionitservice.com/network-performance-optimization-las-vegas",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
