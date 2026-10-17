import type { Metadata } from "next";
import JsonLd from "@/app/components/JsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Remote IT Support Las Vegas | 24/7 Monitoring & Support",
  description:
    "Remote IT support plans with proactive 24/7 monitoring, patch management, help desk support, and cybersecurity protection at predictable monthly pricing.",
  alternates: {
    canonical: "/services/it-support",
  },
  openGraph: {
    title: "Remote IT Support Las Vegas | 24/7 Monitoring & Support",
    description:
      "Proactive remote IT support for Las Vegas businesses — 24/7 monitoring, help desk support, patch management, and cybersecurity protection with predictable monthly pricing.",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Remote IT Support – Orion IT Service Las Vegas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Remote IT Support Las Vegas | 24/7 Monitoring & Support",
    description:
      "Proactive 24/7 IT monitoring, help desk, patch management, and cybersecurity for Las Vegas businesses.",
    images: ["/images/og-image.webp"],
  },
  robots: { index: true, follow: true },
});

export default function RemoteItLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.orionitservice.com/services/it-support#service",
    name: "Remote IT Support",
    description:
      "Comprehensive remote IT support including 24/7 system monitoring, help desk support, patch management, backup solutions, and cybersecurity protection — with flat-rate predictable pricing.",
    url: "https://www.orionitservice.com/services/it-support",
    provider: {
      "@type": "Organization",
      "@id": "https://www.orionitservice.com/#organization",
      name: "Orion IT Service",
    },
    areaServed: [
      { "@type": "City", name: "Las Vegas" },
      { "@type": "State", name: "Nevada" },
      { "@type": "Country", name: "United States" },
    ],
    serviceType: "Remote IT Support",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: "https://www.orionitservice.com/contact",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
        name: "Services",
        item: "https://www.orionitservice.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Remote IT Support",
        item: "https://www.orionitservice.com/services/it-support",
      },
    ],
  };

  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
