import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: {
    template: "%s",
    default: "Orion IT Blog | IT Support, Security, and Network Tips",
  },
  description:
    "Practical articles on IT support, cybersecurity, networking, website development, and business technology strategy.",
  alternates: {
    canonical: "/blog",
  },
});

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
