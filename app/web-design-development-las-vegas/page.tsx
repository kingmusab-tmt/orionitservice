import type { Metadata } from "next";
import WebDesignContent from "./WebDesignContent";
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Web Design & Development Las Vegas | Convert More Customers | Orion IT",
  description:
    "Professional web design & development in Las Vegas. Custom, fast, mobile-responsive websites that convert. Get your free design consultation today!",
  keywords:
    "web design Las Vegas, web development Las Vegas, website design, website development, custom website, responsive web design, Las Vegas web designer",
  openGraph: {
    title: "Web Design & Development Las Vegas | Orion IT Service",
    description:
      "Custom websites that drive sales. Professional web design and development in Las Vegas. Mobile-responsive, fast, and conversion-focused.",
    url: "https://www.orionitservice.com/web-design-development-las-vegas",
    type: "website",
  },
  alternates: {
    canonical:
      "https://www.orionitservice.com/web-design-development-las-vegas",
  },
};

export default function WebDesignLandingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Orion IT Service - Web Design & Development",
          description:
            "Professional web design and development services in Las Vegas",
          url: "https://www.orionitservice.com/web-design-development-las-vegas",
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
            reviewCount: "40+",
          },
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Web Design & Development",
          description:
            "Custom website design and development services with focus on conversion and user experience",
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
              name: "How much does a website cost?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Website costs vary based on complexity and features. We offer packages starting from $2,500 for basic business websites to custom enterprise solutions. Get a personalized quote during your free consultation.",
              },
            },
            {
              "@type": "Question",
              name: "How long does it take to build a website?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Most websites are completed in 4-8 weeks depending on complexity. We keep you updated at every milestone and handle everything from design to launch.",
              },
            },
            {
              "@type": "Question",
              name: "Is my website mobile-friendly?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely. All our websites are built mobile-first and are fully responsive across all devices. Mobile performance is critical for SEO and user experience.",
              },
            },
          ],
        }}
      />

      <WebDesignContent />
    </>
  );
}
