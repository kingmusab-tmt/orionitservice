import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Patch Management IT Support Las Vegas | Orion IT",
  description:
    "Professional patch management services in Las Vegas. Automated security updates and vulnerability patching.",
  alternates: {
    canonical: "/patch-management-support-las-vegas",
  },
  openGraph: {
    title: "Patch Management IT Support Las Vegas | Orion IT Cybersecurity",
    description:
      "Automated patch management and security updates. Keep systems secure and compliant.",
    url: "https://www.orionitservice.com/patch-management-support-las-vegas",
  },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
