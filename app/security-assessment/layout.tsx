import type { Metadata } from "next";
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = {
  title: "Free Cybersecurity Risk Assessment Tool | Check Your Security Score",
  description:
    "Take Orion IT Service's free interactive cybersecurity risk assessment to identify vulnerabilities in your business. Get your security score and personalized recommendations in minutes.",
  keywords:
    "free security assessment, cybersecurity risk assessment, business security score, IT security quiz, cyber risk tool, vulnerability assessment Las Vegas, cybersecurity health check",
  alternates: {
    canonical: "https://www.orionitservice.com/security-assessment",
  },
  openGraph: {
    title: "Free Cybersecurity Risk Assessment | Orion IT Service",
    description:
      "Discover your business's cybersecurity vulnerabilities with our free interactive assessment tool. Get your security score and actionable recommendations.",
    url: "https://www.orionitservice.com/security-assessment",
    images: [
      {
        url: "/images/cyber.avif",
        width: 1200,
        height: 630,
        alt: "Free Cybersecurity Risk Assessment Tool – Orion IT Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Cybersecurity Risk Assessment | Orion IT Service",
    description:
      "Identify your business's cybersecurity weak spots. Free interactive assessment with instant scoring and recommendations.",
    images: ["/images/cyber.avif"],
  },
  robots: { index: true, follow: true },
};

export default function SecurityAssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": "https://www.orionitservice.com/security-assessment#app",
    name: "Cybersecurity Risk Assessment Tool",
    description:
      "Interactive cybersecurity risk assessment that evaluates your business's security posture and provides a risk score with actionable improvement recommendations.",
    url: "https://www.orionitservice.com/security-assessment",
    applicationCategory: "SecurityApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    provider: {
      "@type": "Organization",
      "@id": "https://www.orionitservice.com/#organization",
      name: "Orion IT Service",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.orionitservice.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Security Assessment",
        item: "https://www.orionitservice.com/security-assessment",
      },
    ],
  };

  return (
    <>
      <JsonLd data={[webAppSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
