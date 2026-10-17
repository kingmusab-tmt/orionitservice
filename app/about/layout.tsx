import type { Metadata } from "next";
import JsonLd from "@/app/components/JsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Orion IT Service | Las Vegas IT Experts & Mission",
  description:
    "Orion IT Service is a Las Vegas IT company providing cybersecurity training, IT support, network engineering, and web development, security-first.",
  alternates: {
    canonical: "https://www.orionitservice.com/about",
  },
  openGraph: {
    title: "About Orion IT Service | Las Vegas IT Experts & Mission",
    description:
      "Learn about Orion IT Service — expert IT solutions with a security-first approach, serving businesses in Las Vegas and nationwide.",
    url: "https://www.orionitservice.com/about",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Orion IT Service Team – Las Vegas IT Professionals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Orion IT Service | Las Vegas IT Experts & Mission",
    description:
      "Expert IT solutions with a security-first approach — serving businesses in Las Vegas and nationwide.",
    images: ["/images/og-image.webp"],
  },
  robots: { index: true, follow: true },
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://www.orionitservice.com/about#webpage",
    name: "About Orion IT Service",
    url: "https://www.orionitservice.com/about",
    description:
      "Orion IT Service is a Las Vegas-based technology company delivering cybersecurity training, IT support, and network engineering.",
    publisher: {
      "@type": "Organization",
      "@id": "https://www.orionitservice.com/#organization",
      name: "Orion IT Service",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.orionitservice.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: "https://www.orionitservice.com/about",
        },
      ],
    },
  };

  return (
    <>
      <JsonLd data={aboutSchema} />
      {children}
    </>
  );
}
