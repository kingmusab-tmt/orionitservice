import type { Metadata } from "next";
import HelpdeskSupportContent from "./HelpdeskSupportContent";
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = {
  title: "Helpdesk Support Las Vegas | 24/7 IT Help Desk | Orion IT",
  description:
    "Professional helpdesk support in Las Vegas. 24/7 IT support for employees. Fast ticket resolution, user support, and technical assistance.",
  keywords:
    "helpdesk support, IT helpdesk, user support, technical support, IT help desk, employee support, ticket management",
  openGraph: {
    title: "Helpdesk Support Las Vegas | Orion IT Service",
    description:
      "24/7 helpdesk support for your employees. Fast resolution, professional support, multi-channel assistance.",
    url: "https://www.orionitservice.com/helpdesk-support-las-vegas",
    type: "website",
  },
  alternates: {
    canonical: "https://www.orionitservice.com/helpdesk-support-las-vegas",
  },
};

export default function HelpdeskSupportLandingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Orion IT Service - Helpdesk Support",
          description:
            "Professional 24/7 helpdesk support services in Las Vegas",
          url: "https://www.orionitservice.com/helpdesk-support-las-vegas",
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
            reviewCount: "95+",
          },
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Helpdesk Support",
          description:
            "24/7 helpdesk support services including user support, ticket management, software troubleshooting, and IT assistance",
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
              name: "How quickly do you respond to helpdesk tickets?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Most tickets are responded to within 15-30 minutes during business hours. Priority tickets get immediate response. After-hours tickets are handled by our night support team.",
              },
            },
            {
              "@type": "Question",
              name: "Do you support remote employees?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We provide full helpdesk support for remote, hybrid, and in-office employees through phone, chat, email, and remote desktop support.",
              },
            },
            {
              "@type": "Question",
              name: "What types of issues do you handle?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We handle all helpdesk issues including password resets, software troubleshooting, hardware issues, email problems, printer issues, application support, and general IT assistance.",
              },
            },
          ],
        }}
      />

      <HelpdeskSupportContent />
    </>
  );
}
