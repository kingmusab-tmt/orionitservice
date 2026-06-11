import type { Metadata } from "next";
import StrategicITPlanningContent from "./StrategicITPlanningContent";
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = {
  title: "Strategic IT Planning Las Vegas | IT Roadmap & Strategy | Orion IT",
  description:
    "Professional strategic IT planning services in Las Vegas. Develop IT roadmaps, technology strategy, digital transformation, and business technology alignment.",
  keywords:
    "strategic IT planning, IT roadmap, IT strategy, technology strategy, digital transformation, IT consulting, business technology alignment",
  openGraph: {
    title: "Strategic IT Planning Las Vegas | Orion IT Service",
    description:
      "Expert IT strategy and planning. Align technology with business goals. Build a roadmap for digital growth.",
    url: "https://www.orionitservice.com/strategic-it-planning-las-vegas",
    type: "website",
  },
  alternates: {
    canonical: "https://www.orionitservice.com/strategic-it-planning-las-vegas",
  },
};

export default function StrategicITPlanningLandingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Orion IT Service - Strategic IT Planning",
          description:
            "Professional strategic IT planning and consulting services in Las Vegas",
          url: "https://www.orionitservice.com/strategic-it-planning-las-vegas",
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
            reviewCount: "110+",
          },
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Strategic IT Planning",
          description:
            "Strategic IT planning and consulting services including technology strategy, IT roadmaps, digital transformation, and business alignment",
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
              name: "What does an IT roadmap include?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "An IT roadmap outlines technology investments over 1-3 years, aligned with business goals. It includes infrastructure upgrades, software implementations, security improvements, and digital transformation initiatives.",
              },
            },
            {
              "@type": "Question",
              name: "How often should I review my IT strategy?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We recommend annual IT strategy reviews. Technology changes fast, so strategy should be updated yearly to reflect new opportunities, threats, and business changes.",
              },
            },
            {
              "@type": "Question",
              name: "How does IT planning improve business results?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Strategic IT planning aligns technology with business goals, improves efficiency, reduces costs, enables growth, and ensures you're investing in the right technology.",
              },
            },
          ],
        }}
      />

      <StrategicITPlanningContent />
    </>
  );
}
