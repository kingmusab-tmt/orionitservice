import type { Metadata } from "next";
import JsonLd from "@/app/components/JsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Network Engineering Las Vegas | Secure Business Networking",
  description:
    "Network design, troubleshooting, and maintenance for Las Vegas businesses: fast connectivity, Wi-Fi optimization, and ongoing network support.",
  alternates: {
    canonical: "https://www.orionitservice.com/services/networking",
  },
  openGraph: {
    title: "Network Engineering Las Vegas | Secure Business Networking",
    description:
      "Reliable network design, installation, and ongoing support for businesses. Fast troubleshooting, WiFi optimization, and proactive network monitoring.",
    url: "https://www.orionitservice.com/services/networking",
    images: [
      {
        url: "/images/networkeng.webp",
        width: 1200,
        height: 630,
        alt: "Network Engineering Solutions – Orion IT Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Network Engineering Las Vegas | Secure Business Networking",
    description:
      "Reliable network design, troubleshooting, and network support services for businesses in Las Vegas.",
    images: ["/images/networkeng.webp"],
  },
  robots: { index: true, follow: true },
});

export default function NetworkingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.orionitservice.com/services/networking#service",
    name: "Network Engineering & IT Networking Solutions",
    description:
      "Professional network design, troubleshooting, installation, and ongoing support for businesses — including WiFi optimization, network security, and proactive monitoring.",
    url: "https://www.orionitservice.com/services/networking",
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
    serviceType: "Network Engineering",
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
        name: "Network Engineering & Solutions",
        item: "https://www.orionitservice.com/services/networking",
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
