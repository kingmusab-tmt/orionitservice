import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Orion IT Insights",
    default: "Orion IT Insights",
  },
  description:
    "Practical articles on managed IT, cybersecurity, networking, website development, and business technology strategy.",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
