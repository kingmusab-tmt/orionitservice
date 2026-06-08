import type { Metadata } from "next";
import NetworkDesignContent from "./NetworkDesignContent";
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Network Design & Implementation Las Vegas | Enterprise-Grade Solutions | Orion IT",
  description:
    "Professional network design, implementation, and management in Las Vegas. Secure, scalable, high-performance networks for businesses of all sizes.",
  keywords:
    "network design Las Vegas, network implementation, managed network, enterprise network, network security, network infrastructure, wireless networks",
  openGraph: {
    title: "Network Design & Implementation Las Vegas | Orion IT Service",
    description:
      "Custom network design and implementation. Secure, reliable, high-performance networks built for your business growth.",
    url: "https://www.orionitservice.com/network-design-implementation-las-vegas",
    type: "website",
  },
  alternates: {
    canonical:
      "https://www.orionitservice.com/network-design-implementation-las-vegas",
  },
};

export default function NetworkDesignLandingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Orion IT Service - Network Design & Implementation",
          description:
            "Professional network design and implementation services in Las Vegas",
          url: "https://www.orionitservice.com/network-design-implementation-las-vegas",
          telephone: "+1-888-841-2885",
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
            reviewCount: "80+",
          },
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Network Design & Implementation",
          description:
            "Custom network design, implementation, security, and management for enterprise-grade performance and reliability",
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
              name: "How much does network design and implementation cost?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Costs depend on network size, complexity, and components needed. Small office networks start at $15,000-30,000. Enterprise networks range $50,000-200,000+. We provide detailed quotes after assessing your needs.",
              },
            },
            {
              "@type": "Question",
              name: "How long does network implementation take?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Implementation timeline varies by scope. Small networks typically take 2-4 weeks. Larger enterprises may take 8-12 weeks. We plan migrations to minimize downtime and work during off-hours when possible.",
              },
            },
            {
              "@type": "Question",
              name: "Will my network go down during implementation?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We design implementations to minimize downtime through phased rollouts, redundant systems, and careful change management. Most implementations have zero to minimal downtime.",
              },
            },
          ],
        }}
      />

      <NetworkDesignContent />
    </>
  );
}
