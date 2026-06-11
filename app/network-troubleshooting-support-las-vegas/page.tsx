import type { Metadata } from "next";
import NetworkTroubleshootingContent from "./NetworkTroubleshootingContent";
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Network Troubleshooting & Support Las Vegas | 24/7 Support | Orion IT",
  description:
    "Professional network troubleshooting and 24/7 support in Las Vegas. Fast resolution for network issues, connectivity problems, and outages.",
  keywords:
    "network troubleshooting, network support, network issues, connectivity problems, network outage, network repair, IT support las vegas",
  openGraph: {
    title: "Network Troubleshooting & Support Las Vegas | Orion IT Service",
    description:
      "24/7 network troubleshooting and support. Fast resolution for connectivity issues, outages, and network problems.",
    url: "https://www.orionitservice.com/network-troubleshooting-support-las-vegas",
    type: "website",
  },
  alternates: {
    canonical:
      "https://www.orionitservice.com/network-troubleshooting-support-las-vegas",
  },
};

export default function NetworkTroubleshootingLandingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Orion IT Service - Network Troubleshooting & Support",
          description:
            "Professional 24/7 network troubleshooting and support services in Las Vegas",
          url: "https://www.orionitservice.com/network-troubleshooting-support-las-vegas",
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
            reviewCount: "90+",
          },
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Network Troubleshooting & Support",
          description:
            "24/7 network troubleshooting, support, and rapid resolution services for connectivity issues and outages",
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
              name: "How fast can you resolve network issues?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Critical outages are handled within 30 minutes. Most issues are resolved within 2-4 hours. We provide same-day resolution for 95% of issues.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer 24/7 support?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We provide 24/7/365 network support with dedicated support teams available nights, weekends, and holidays.",
              },
            },
            {
              "@type": "Question",
              name: "What types of network issues do you handle?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We handle all network issues including connectivity problems, outages, slow speeds, configuration issues, hardware failures, and security concerns.",
              },
            },
          ],
        }}
      />

      <NetworkTroubleshootingContent />
    </>
  );
}
