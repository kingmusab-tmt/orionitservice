import type { Metadata } from "next";
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = {
  title: "Network Engineering & IT Networking Solutions | Las Vegas",
  description:
    "Expert network design, troubleshooting, and maintenance services from Orion IT Service. Fast connectivity solutions, WiFi optimization, and ongoing network support for Las Vegas businesses.",
  keywords:
    "network engineering Las Vegas, IT networking solutions, network troubleshooting, WiFi setup business, network design Nevada, managed network services, network infrastructure, business networking Las Vegas, network monitoring",
  alternates: {
    canonical: "https://www.orionitservice.com/services/networking",
  },
  openGraph: {
    title: "Network Engineering & Solutions | Orion IT Service Las Vegas",
    description:
      "Reliable network design, installation, and ongoing management for businesses. Fast troubleshooting, WiFi optimization, and proactive network monitoring.",
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
    title: "Network Engineering & IT Networking Solutions | Orion IT Service",
    description:
      "Reliable network design, troubleshooting, and managed network services for businesses in Las Vegas.",
    images: ["/images/networkeng.webp"],
  },
  robots: { index: true, follow: true },
};

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
      "Professional network design, troubleshooting, installation, and ongoing management for businesses — including WiFi optimization, network security, and proactive monitoring.",
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
