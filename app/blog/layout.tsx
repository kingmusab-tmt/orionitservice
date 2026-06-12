import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Orion IT Blog | IT Support, Security, and Network Tips",
  },
  description:
    "Practical articles on IT support, cybersecurity, networking, website development, and business technology strategy.",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
