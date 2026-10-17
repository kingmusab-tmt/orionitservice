import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Web Design & Development Las Vegas | Orion IT",
  description:
    "Professional web design and development services in Las Vegas. Custom websites that convert visitors into customers.",
  alternates: {
    canonical: "/web-design-development-las-vegas",
  },
  openGraph: {
    title: "Web Design & Development Las Vegas | Orion IT Cybersecurity",
    description:
      "Professional web design and development in Las Vegas. Fast, mobile-responsive, conversion-focused websites.",
    url: "https://www.orionitservice.com/web-design-development-las-vegas",
  },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
