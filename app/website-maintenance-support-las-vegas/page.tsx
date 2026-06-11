import type { Metadata } from "next";
import WebsiteMaintenanceContent from "./WebsiteMaintenanceContent";
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Website Maintenance & Support Las Vegas | Managed Website Services | Orion IT",
  description:
    "Professional website maintenance and support services in Las Vegas. Keep your website secure, fast, and up-to-date. Managed hosting and ongoing support.",
  keywords:
    "website maintenance, website support, managed hosting, website updates, website security, site maintenance, website hosting support",
  openGraph: {
    title: "Website Maintenance & Support Las Vegas | Orion IT Service",
    description:
      "Professional website maintenance and support. Keep your site secure, fast, and always up.",
    url: "https://www.orionitservice.com/website-maintenance-support-las-vegas",
    type: "website",
  },
  alternates: {
    canonical:
      "https://www.orionitservice.com/website-maintenance-support-las-vegas",
  },
};

export default function WebsiteMaintenanceLandingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Orion IT Service - Website Maintenance & Support",
          description:
            "Professional website maintenance and support services in Las Vegas",
          url: "https://www.orionitservice.com/website-maintenance-support-las-vegas",
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
            reviewCount: "125+",
          },
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Website Maintenance & Support",
          description:
            "Website maintenance services including updates, security monitoring, backup, performance optimization, and 24/7 support",
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
              name: "How much does website maintenance cost?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Website maintenance plans typically cost $299-999/month depending on website complexity and support level. Includes updates, backups, security monitoring, and support.",
              },
            },
            {
              "@type": "Question",
              name: "How often should a website be updated?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Websites should have regular security updates, plugin updates, and content updates. We recommend at least monthly maintenance. Critical security updates are applied immediately.",
              },
            },
            {
              "@type": "Question",
              name: "What if my website goes down?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our plans include 24/7 monitoring and support. We detect downtime immediately and work to restore service. Response time depends on your support tier.",
              },
            },
          ],
        }}
      />

      <WebsiteMaintenanceContent />
    </>
  );
}
