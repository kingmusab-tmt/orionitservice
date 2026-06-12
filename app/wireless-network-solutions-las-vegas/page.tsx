import type { Metadata } from "next";
import WirelessNetworkContent from "./WirelessNetworkContent";
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = {
  title: "Wireless Network Solutions Las Vegas | Enterprise Wi-Fi | Orion IT",
  description:
    "Professional wireless network design and implementation in Las Vegas. Enterprise-grade Wi-Fi with security, coverage, and reliability. Fast, secure, scalable wireless networks.",
  keywords:
    "wireless network Las Vegas, Wi-Fi solutions, enterprise wireless, secure Wi-Fi, wireless coverage, mesh networks, access points, wireless security",
  openGraph: {
    title: "Wireless Network Solutions Las Vegas | Orion IT Service",
    description:
      "Enterprise-grade wireless networks with complete coverage, security, and performance. Professional design, implementation, and support.",
    url: "https://www.orionitservice.com/wireless-network-solutions-las-vegas",
    type: "website",
  },
  alternates: {
    canonical:
      "https://www.orionitservice.com/wireless-network-solutions-las-vegas",
  },
};

export default function WirelessNetworkLandingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Orion IT Service - Wireless Network Solutions",
          description:
            "Professional wireless network design and implementation services in Las Vegas",
          url: "https://www.orionitservice.com/wireless-network-solutions-las-vegas",
          telephone: "+1-888-210-4378",
          areaServed: {
            "@type": "City",
            name: "Las Vegas",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Las Vegas",
              addressRegion: "Nevada",
              addressCountry: "US",
            },
          },
          priceRange: "$$",
          image: "https://www.orionitservice.com/images/og-image.webp",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "75+",
          },
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Wireless Network Solutions",
          description:
            "Enterprise-grade wireless networks with design, implementation, security, and management services",
          provider: {
            "@type": "LocalBusiness",
            name: "Orion IT Service",
          },
          areaServed: {
            "@type": "City",
            name: "Las Vegas",
          },
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What's the difference between consumer and enterprise Wi-Fi?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Consumer Wi-Fi (standard routers) is for light use and provides poor coverage. Enterprise Wi-Fi uses centrally configured access points for complete coverage, seamless roaming, security features, and can handle hundreds of simultaneous users.",
              },
            },
            {
              "@type": "Question",
              name: "How much does enterprise wireless cost?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Enterprise wireless networks range from $8,000-40,000+ depending on coverage area, building size, and features needed. We provide detailed quotes after site assessment.",
              },
            },
            {
              "@type": "Question",
              name: "Is enterprise Wi-Fi secure?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Enterprise Wi-Fi includes WPA3 encryption, certificate-based authentication, separate guest networks, and advanced security monitoring. Much more secure than standard consumer routers.",
              },
            },
          ],
        }}
      />

      <WirelessNetworkContent />
    </>
  );
}
