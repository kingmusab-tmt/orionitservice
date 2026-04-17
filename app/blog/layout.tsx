import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Orion IT Blog | Managed IT, Security, and Network Tips",
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
