import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Optimization Support Las Vegas | Orion IT",
  description:
    "Professional SEO optimization services in Las Vegas. Improve Google rankings and increase organic traffic.",
  alternates: {
    canonical: "/seo-optimization-support-las-vegas",
  },
  openGraph: {
    title: "SEO Optimization Support Las Vegas | Orion IT Cybersecurity",
    description:
      "SEO services that improve rankings and drive organic traffic. Proven results.",
    url: "https://www.orionitservice.com/seo-optimization-support-las-vegas",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
