import type { Metadata } from "next";
import NetworkPerformanceContent from "./NetworkPerformanceContent";
import JsonLd from "@/app/components/JsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title:
    "Network Performance Optimization Las Vegas | Orion IT",
  description:
    "Professional network performance optimization in Las Vegas. Reduce latency, increase speed, maximize bandwidth. Improve productivity and save costs.",
  openGraph: {
    title: "Network Performance Optimization Las Vegas | Orion IT Service",
    description:
      "Optimize your network for maximum speed and efficiency. Reduce latency, increase throughput, and improve user experience.",
    url: "https://www.orionitservice.com/network-performance-optimization-las-vegas",
    type: "website",
  },
  alternates: {
    canonical:
      "https://www.orionitservice.com/network-performance-optimization-las-vegas",
  },
});

export default function NetworkPerformanceLandingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Orion IT Service - Network Performance Optimization",
          description:
            "Professional network performance optimization services in Las Vegas",
          url: "https://www.orionitservice.com/network-performance-optimization-las-vegas",
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
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Network Performance Optimization",
          description:
            "Network optimization services including speed improvement, latency reduction, bandwidth optimization, and performance monitoring",
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
              name: "How much faster will my network be after optimization?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Typical improvements range from 30-70% speed increase depending on current bottlenecks. We measure baseline performance and guarantee specific improvements through our optimization process.",
              },
            },
            {
              "@type": "Question",
              name: "What causes network slowdowns?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Common causes include outdated equipment, poor network design, bandwidth hogging applications, wireless interference, too many devices on network, and misconfiguration. We identify and fix root causes.",
              },
            },
            {
              "@type": "Question",
              name: "Do you need to replace equipment to improve performance?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Not always. We optimize existing equipment first through configuration tuning. Equipment upgrades are recommended only when necessary for significant improvements.",
              },
            },
          ],
        }}
      />

      <NetworkPerformanceContent />
    </>
  );
}
