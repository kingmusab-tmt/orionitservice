import type { Metadata } from "next";
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = {
  title: "IT Support Services Las Vegas | Proactive IT Support & Cybersecurity",
  description:
    "Orion IT Service's remote IT support plans give your business proactive 24/7 monitoring, patch management, help desk support, and cybersecurity protection — predictable pricing, zero surprises.",
  keywords:
    "remote IT support Las Vegas, remote IT support Henderson, remote IT support North Las Vegas, remote IT support Summerlin, remote IT support Boulder City, remote IT support Pahrump, remote IT support Los Angeles, remote IT support Phoenix, remote IT support Salt Lake City, remote IT support Reno, remote IT support Dallas, remote IT support las vegas, remote IT support Austin, remote IT support Houston, remote IT support Denver, remote IT support Seattle, remote IT support Chicago, remote IT support Atlanta, remote IT support Miami, remote IT support New York, 24/7 IT support Nevada, IT help desk Las Vegas, proactive IT monitoring, patch management services, remote security services, outsourced IT Las Vegas, IT support small business Nevada, remote IT networking support for small businesses USA, nationwide remote network administration services, affordable remote network engineer for hire, remote IT infrastructure management services USA, virtual network support specialist nationwide, outsourced network management remote service, remote network troubleshooting service USA, cloud network support for small companies remote, remote network monitoring and maintenance service, IT network consulting services remote nationwide, remote network security services for small businesses USA, remote network performance optimization service nationwide, remote network upgrade and migration services USA, remote network documentation and reporting service nationwide",
  alternates: {
    canonical: "https://www.orionitservice.com/services/remote-it-support",
  },
  openGraph: {
    title: "Remote IT Support Las Vegas | 24/7 Monitoring & Support",
    description:
      "Proactive remote IT support for Las Vegas businesses — 24/7 monitoring, help desk support, patch management, and cybersecurity protection with predictable monthly pricing.",
    url: "https://www.orionitservice.com/services/remote-it-support",
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
};

export default function RemoteItLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.orionitservice.com/services/remote-it-support#service",
    name: "Remote IT Support",
    description:
      "Comprehensive remote IT support including 24/7 system monitoring, help desk support, patch management, backup solutions, and cybersecurity protection — with flat-rate predictable pricing.",
    url: "https://www.orionitservice.com/services/remote-it-support",
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
        item: "https://www.orionitservice.com/services/remote-it-support",
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
