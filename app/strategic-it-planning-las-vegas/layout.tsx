import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Strategic IT Planning Las Vegas | Orion IT",
  description:
    "Professional strategic IT planning in Las Vegas. Develop IT roadmaps and technology strategy aligned with business goals.",
  alternates: {
    canonical: "/strategic-it-planning-las-vegas",
  },
  openGraph: {
    title: "Strategic IT Planning Las Vegas | Orion IT Cybersecurity",
    description:
      "Expert IT strategy and planning. Build a roadmap for technology growth and business success.",
    url: "https://www.orionitservice.com/strategic-it-planning-las-vegas",
  },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
