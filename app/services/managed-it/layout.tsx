import type { Metadata } from "next";
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = {
  title: "Managed IT Services Las Vegas | 24/7 Monitoring & Support",
  description:
    "Orion IT Service's managed IT plans give your business proactive 24/7 monitoring, patch management, help desk support, and cybersecurity protection — predictable pricing, zero surprises.",
  keywords:
    "managed IT services Las Vegas, 24/7 IT support Nevada, IT help desk Las Vegas, proactive IT monitoring, patch management services, managed security services, outsourced IT Las Vegas, IT support small business Nevada",
  alternates: {
    canonical: "https://www.orionitservice.com/services/managed-it",
  },
  openGraph: {
    title: "Managed IT Services Las Vegas | 24/7 Monitoring & Support",
    description:
      "Proactive managed IT services for Las Vegas businesses — 24/7 monitoring, help desk support, patch management, and cybersecurity protection with predictable monthly pricing.",
    url: "https://www.orionitservice.com/services/managed-it",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Managed IT Services – Orion IT Service Las Vegas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Managed IT Services Las Vegas | 24/7 Monitoring & Support",
    description:
      "Proactive 24/7 IT monitoring, help desk, patch management, and cybersecurity for Las Vegas businesses.",
    images: ["/images/og-image.webp"],
  },
  robots: { index: true, follow: true },
};

export default function ManagedItLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.orionitservice.com/services/managed-it#service",
    name: "Managed IT Services",
    description:
      "Comprehensive managed IT services including 24/7 system monitoring, help desk support, patch management, backup solutions, and cybersecurity protection — with flat-rate predictable pricing.",
    url: "https://www.orionitservice.com/services/managed-it",
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
    serviceType: "Managed IT Services",
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
        name: "Managed IT Services",
        item: "https://www.orionitservice.com/services/managed-it",
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
