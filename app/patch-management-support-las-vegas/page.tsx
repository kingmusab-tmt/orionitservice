import type { Metadata } from "next";
import PatchManagementContent from "./PatchManagementContent";
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = {
  title: "Patch Management IT Support Las Vegas | Security Updates | Orion IT",
  description:
    "Professional patch management services in Las Vegas. Automated security updates, vulnerability patching, compliance, and system maintenance.",
  keywords:
    "patch management, security updates, vulnerability patches, software patching, system updates, patch deployment, compliance patching",
  openGraph: {
    title: "Patch Management IT Support Las Vegas | Orion IT Service",
    description:
      "Automated patch management and security updates. Keep systems secure and compliant with latest patches.",
    url: "https://www.orionitservice.com/patch-management-support-las-vegas",
    type: "website",
  },
  alternates: {
    canonical:
      "https://www.orionitservice.com/patch-management-support-las-vegas",
  },
};

export default function PatchManagementLandingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Orion IT Service - Patch Management",
          description:
            "Professional patch management and security update services in Las Vegas",
          url: "https://www.orionitservice.com/patch-management-support-las-vegas",
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
            reviewCount: "105+",
          },
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Patch Management",
          description:
            "Patch management and security update services including automated patching, vulnerability management, compliance, and system maintenance",
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
              name: "Why is patch management important?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Patches fix security vulnerabilities that attackers exploit. Unpatched systems are targets. Patch management is critical to preventing breaches, ransomware, and compliance violations.",
              },
            },
            {
              "@type": "Question",
              name: "How often should patches be applied?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Critical security patches should be applied immediately or within days. Monthly patches can be scheduled monthly. We have processes to deploy urgent patches within hours.",
              },
            },
            {
              "@type": "Question",
              name: "Will patching cause downtime?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Most patches require no downtime. We schedule reboots outside business hours when needed. Windows Update and Linux patches often install without interruption.",
              },
            },
          ],
        }}
      />

      <PatchManagementContent />
    </>
  );
}
