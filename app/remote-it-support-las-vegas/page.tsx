import type { Metadata } from "next";
import RemoteITContent from "./RemoteITContent";
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = {
  title: "24/7 Remote IT Support Las Vegas | Orion IT Service",
  description:
    "Expert remote IT support available 24/7 in Las Vegas. Get instant troubleshooting without on-site visits. 99.9% uptime guarantee. No downtime. Call now!",
  keywords:
    "remote IT support Las Vegas, remote IT services, 24/7 IT support, remote computer support, IT help desk, remote troubleshooting",
  openGraph: {
    title: "24/7 Remote IT Support Las Vegas | Orion IT Service",
    description:
      "Expert remote IT support available 24/7 in Las Vegas. Get instant troubleshooting without on-site visits.",
    url: "https://www.orionitservice.com/remote-it-support-las-vegas",
    type: "website",
  },
  alternates: {
    canonical: "https://www.orionitservice.com/remote-it-support-las-vegas",
  },
};

export default function RemoteITSupportLandingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Orion IT Service - Remote IT Support",
          description:
            "24/7 Remote IT support services for Las Vegas businesses",
          url: "https://www.orionitservice.com/remote-it-support-las-vegas",
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
            reviewCount: "50+",
          },
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Remote IT Support",
          description:
            "24/7 remote IT support services with instant troubleshooting and proactive monitoring",
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
              name: "How does remote IT support work?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our technicians securely connect to your systems using encrypted remote access tools. This allows us to diagnose and resolve issues without needing to be physically on-site.",
              },
            },
            {
              "@type": "Question",
              name: "Is remote support secure?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely. We use industry-leading encryption and security protocols. All connections are password-protected, logged, and monitored.",
              },
            },
            {
              "@type": "Question",
              name: "What's the typical response time?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Critical issues receive immediate response, typically within 15-30 minutes. Standard support requests are handled within 1-2 hours.",
              },
            },
          ],
        }}
      />
      <RemoteITContent />
    </>
  );
}
