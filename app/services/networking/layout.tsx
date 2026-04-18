import type { Metadata } from "next";
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = {
  title: "Network Engineering Las Vegas | Secure Business Networking",
  description:
    "Expert network design, troubleshooting, and maintenance services from Orion IT Service. Fast connectivity solutions, WiFi optimization, and ongoing network support for Las Vegas businesses.",
  keywords:
    "network engineering Las Vegas, network engineering Henderson, network engineering North Las Vegas, network engineering Summerlin, network engineering Boulder City, network engineering Pahrump, network engineering Los Angeles, network engineering Phoenix, network engineering Salt Lake City, network engineering Reno, network engineering Dallas, network engineering Austin, network engineering Houston, network engineering Denver, network engineering Seattle, network engineering Chicago, network engineering Atlanta, network engineering Miami, network engineering New York, IT networking solutions, network troubleshooting, WiFi setup business, network design Nevada, managed network services, network infrastructure, business networking Las Vegas, network monitoring, remote router configuration service USA, remote switch configuration IT service nationwide, VLAN setup service remote network engineer, remote port forwarding setup service USA, remote DNS configuration service for business,network bandwidth optimization remote service,remote DHCP configuration and troubleshooting,remote IP addressing and subnetting service,remote network topology design for small business,remote load balancing setup service for business USA, remote network security configuration service nationwide, remote network performance monitoring service for small companies, remote network documentation and reporting service USA, remote network upgrade and migration services for small business nationwide, remote network troubleshooting and repair service USA, urgent remote network support for business, remote WiFi optimization service for offices nationwide, affordable remote IT networking services USA, low cost network support remote nationwide,budget remote network engineer service USA,pay as you go remote IT network support,fixed price remote network setup service,monthly remote network management plan USA,cheap remote network troubleshooting service,cost effective IT networking support remote, freelance network engineer remote USA,best value remote network support services",
  alternates: {
    canonical: "https://www.orionitservice.com/services/networking",
  },
  openGraph: {
    title: "Network Engineering Las Vegas | Secure Business Networking",
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
    title: "Network Engineering Las Vegas | Secure Business Networking",
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
