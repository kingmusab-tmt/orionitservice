import type { Metadata } from "next";
import EndpointProtectionContent from "./EndpointProtectionContent";
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Endpoint Protection Las Vegas | Ransomware & Malware Defense | Orion IT",
  description:
    "Advanced endpoint protection for Las Vegas businesses. Defend against ransomware, malware, and zero-day threats. Real-time monitoring & instant response.",
  keywords:
    "endpoint protection Las Vegas, EDR, endpoint detection and response, ransomware protection, malware defense, endpoint security, threat detection",
  openGraph: {
    title: "Endpoint Protection Las Vegas | Orion IT Service",
    description:
      "Enterprise-grade endpoint protection to defend your devices against ransomware, malware, and cyber attacks. 24/7 monitoring included.",
    url: "https://www.orionitservice.com/endpoint-protection-las-vegas",
    type: "website",
  },
  alternates: {
    canonical: "https://www.orionitservice.com/endpoint-protection-las-vegas",
  },
};

export default function EndpointProtectionLandingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Orion IT Service - Endpoint Protection",
          description:
            "Professional endpoint protection and EDR services in Las Vegas",
          url: "https://www.orionitservice.com/endpoint-protection-las-vegas",
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
            reviewCount: "55+",
          },
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Endpoint Protection",
          description:
            "Advanced endpoint protection with real-time threat detection, EDR, and ransomware defense",
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
              name: "What's the difference between antivirus and endpoint protection?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Traditional antivirus is reactive, blocking known threats. Endpoint protection is proactive with EDR (Endpoint Detection and Response), AI-powered threat hunting, behavior analysis, and automatic response to zero-day threats.",
              },
            },
            {
              "@type": "Question",
              name: "Will endpoint protection slow down my computers?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Modern endpoint protection uses minimal system resources. You may see <5% performance impact with premium features, but most users notice no difference. Protection far outweighs any minor performance impact.",
              },
            },
            {
              "@type": "Question",
              name: "Does this protect against ransomware?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Our endpoint protection includes advanced ransomware defense, behavioral analysis, and automatic isolation of suspicious processes before encryption occurs.",
              },
            },
          ],
        }}
      />

      <EndpointProtectionContent />
    </>
  );
}
