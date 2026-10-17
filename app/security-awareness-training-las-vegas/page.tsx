import type { Metadata } from "next";
import SecurityAwarenessContent from "./SecurityAwarenessContent";
import JsonLd from "@/app/components/JsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title:
    "Security Awareness Training Las Vegas | Orion IT",
  description:
    "Employee security awareness training in Las Vegas. Reduce human error, prevent data breaches, and protect your business. HIPAA, PCI, SOC 2 compliant training.",
  openGraph: {
    title: "Security Awareness Training Las Vegas | Orion IT Service",
    description:
      "Comprehensive security awareness training to protect your employees and business from cyber threats. HIPAA, PCI, and SOC 2 compliant.",
    url: "https://www.orionitservice.com/security-awareness-training-las-vegas",
    type: "website",
  },
  alternates: {
    canonical:
      "https://www.orionitservice.com/security-awareness-training-las-vegas",
  },
});

export default function SecurityAwarenessLandingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Orion IT Service - Security Awareness Training",
          description:
            "Professional security awareness training services in Las Vegas",
          url: "https://www.orionitservice.com/security-awareness-training-las-vegas",
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
          name: "Security Awareness Training",
          description:
            "Comprehensive employee security awareness training to reduce human error and prevent cyber attacks",
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
              name: "How long is security awareness training?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Initial training typically takes 30-60 minutes. We also provide monthly micro-training sessions (10-15 minutes) and annual refresher courses to keep employees updated on new threats.",
              },
            },
            {
              "@type": "Question",
              name: "Is the training compliant with regulations?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Our training is compliant with HIPAA, PCI DSS, SOC 2, NIST, and other regulatory requirements. We provide compliance documentation for audits.",
              },
            },
            {
              "@type": "Question",
              name: "Does training include phishing simulations?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We run realistic phishing simulations and provide targeted training to employees who fall for them. This real-world approach is highly effective.",
              },
            },
          ],
        }}
      />

      <SecurityAwarenessContent />
    </>
  );
}
