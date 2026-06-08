import type { Metadata } from "next";
import NetworkSecurityHardeningContent from "./NetworkSecurityHardeningContent";
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = {
  title: "Network Security Hardening Las Vegas | Fortress Networks | Orion IT",
  description:
    "Professional network security hardening services in Las Vegas. Strengthen your network defenses, close vulnerabilities, and protect against threats.",
  keywords:
    "network security hardening, network security, security hardening, vulnerability management, network defense, cybersecurity, firewall setup",
  openGraph: {
    title: "Network Security Hardening Las Vegas | Orion IT Service",
    description:
      "Network security hardening services. Fortress your network. Eliminate vulnerabilities.",
    url: "https://www.orionitservice.com/network-security-hardening-las-vegas",
    type: "website",
  },
  alternates: {
    canonical:
      "https://www.orionitservice.com/network-security-hardening-las-vegas",
  },
};

export default function NetworkSecurityHardeningLandingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Orion IT Service - Network Security Hardening",
          description:
            "Professional network security hardening and fortress network services in Las Vegas",
          url: "https://www.orionitservice.com/network-security-hardening-las-vegas",
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
            reviewCount: "130+",
          },
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Network Security Hardening",
          description:
            "Network security hardening services including firewall configuration, access controls, vulnerability patching, and security best practices implementation",
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
              name: "What is network security hardening?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Network security hardening is the process of reducing vulnerabilities, implementing security controls, configuring firewalls, access controls, and security policies to strengthen your network against attacks.",
              },
            },
            {
              "@type": "Question",
              name: "How long does network hardening take?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Network hardening typically takes 2-8 weeks depending on network size and complexity. We assess your network, identify vulnerabilities, implement controls, and test thoroughly.",
              },
            },
            {
              "@type": "Question",
              name: "Will hardening impact network performance?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Properly implemented hardening has minimal performance impact. We optimize security controls to balance protection with performance. Testing ensures no negative impact.",
              },
            },
          ],
        }}
      />

      <NetworkSecurityHardeningContent />
    </>
  );
}
