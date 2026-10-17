import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Custom Web Applications Development Las Vegas | Orion IT",
  description:
    "Custom web application development in Las Vegas. Tailored business software and web apps.",
  alternates: {
    canonical: "/custom-web-applications-development-las-vegas",
  },
  openGraph: {
    title:
      "Custom Web Applications Development Las Vegas | Orion IT Cybersecurity",
    description:
      "Custom web applications built for your business. Scalable, secure, and high-performing.",
    url: "https://www.orionitservice.com/custom-web-applications-development-las-vegas",
  },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
