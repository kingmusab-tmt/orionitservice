import type { Metadata } from "next";
import ComplianceManagementContent from "./ComplianceManagementContent";
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = {
  title: "Compliance Management Las Vegas | HIPAA, PCI, SOC 2 | Orion IT",
  description:
    "Expert compliance management for Las Vegas businesses. HIPAA, PCI DSS, SOC 2, NIST compliance. Audits, documentation, training, and continuous monitoring.",
  keywords:
    "compliance management Las Vegas, HIPAA compliance, PCI compliance, SOC 2, regulatory compliance, compliance audit, compliance consulting",
  openGraph: {
    title: "Compliance Management Las Vegas | Orion IT Service",
    description:
      "Stay compliant with HIPAA, PCI, SOC 2, and other regulations. Expert guidance, documentation, audits, and ongoing compliance management.",
    url: "https://www.orionitservice.com/compliance-management-las-vegas",
    type: "website",
  },
  alternates: {
    canonical: "https://www.orionitservice.com/compliance-management-las-vegas",
  },
};

export default function ComplianceLandingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Orion IT Service - Compliance Management",
          description:
            "Professional compliance management and consulting services in Las Vegas",
          url: "https://www.orionitservice.com/compliance-management-las-vegas",
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
            reviewCount: "70+",
          },
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Compliance Management",
          description:
            "Comprehensive compliance management including audits, documentation, training, and ongoing monitoring for regulatory requirements",
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
              name: "What compliance regulations apply to my business?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "It depends on your industry. Healthcare requires HIPAA, payment processing requires PCI DSS, many require SOC 2, and others may need NIST, HIPAA, GDPR, or industry-specific requirements. We assess and advise which apply to you.",
              },
            },
            {
              "@type": "Question",
              name: "How often do you perform compliance audits?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Initial compliance assessments identify gaps. Then we perform ongoing quarterly or annual audits depending on your requirements and regulatory deadlines.",
              },
            },
            {
              "@type": "Question",
              name: "Can you help us pass an audit?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We help prepare documentation, implement controls, train staff, and remediate issues. Many clients pass audits on their first attempt after working with us.",
              },
            },
          ],
        }}
      />

      <ComplianceManagementContent />
    </>
  );
}
