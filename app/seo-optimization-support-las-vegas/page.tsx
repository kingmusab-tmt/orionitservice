import type { Metadata } from "next";
import SEOOptimizationContent from "./SEOOptimizationContent";
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = {
  title: "SEO Optimization Support Las Vegas | Google Rankings | Orion IT",
  description:
    "Professional SEO optimization services in Las Vegas. Improve Google rankings, increase organic traffic, and grow your business with proven SEO strategies.",
  keywords:
    "SEO optimization, SEO services, Google rankings, search engine optimization, organic traffic, SEO Las Vegas, local SEO, SEO marketing",
  openGraph: {
    title: "SEO Optimization Support Las Vegas | Orion IT Service",
    description:
      "Professional SEO services. Improve rankings. Increase organic traffic. Proven results.",
    url: "https://www.orionitservice.com/seo-optimization-support-las-vegas",
    type: "website",
  },
  alternates: {
    canonical:
      "https://www.orionitservice.com/seo-optimization-support-las-vegas",
  },
};

export default function SEOOptimizationLandingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Orion IT Service - SEO Optimization Support",
          description:
            "Professional SEO optimization and digital marketing services in Las Vegas",
          url: "https://www.orionitservice.com/seo-optimization-support-las-vegas",
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
            reviewCount: "120+",
          },
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "SEO Optimization Support",
          description:
            "SEO optimization services including keyword research, technical SEO, content optimization, link building, and local SEO",
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
              name: "How long does it take to improve Google rankings?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "SEO takes time. You typically see initial results in 3-6 months. Significant improvements usually happen within 6-12 months. Ongoing optimization continues to improve results over time.",
              },
            },
            {
              "@type": "Question",
              name: "What is technical SEO?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Technical SEO involves optimizing website structure, speed, mobile-friendliness, XML sitemaps, robots.txt, schema markup, and other technical factors that affect search engine crawling.",
              },
            },
            {
              "@type": "Question",
              name: "Do you guarantee first page Google ranking?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No one can guarantee rankings, but we use proven strategies to improve your visibility. We're transparent about what we do and track results with detailed reporting.",
              },
            },
          ],
        }}
      />

      <SEOOptimizationContent />
    </>
  );
}
