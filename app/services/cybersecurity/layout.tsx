import type { Metadata } from "next";
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = {
  title: "Cybersecurity Training Las Vegas | Phishing Defense Plan",
  description:
    "Protect your business with Orion IT Service's cybersecurity awareness training. Reduce breach risk by 74% — phishing simulations, employee training, and vulnerability assessments in Las Vegas.",
  keywords:
    "cybersecurity awareness training, phishing prevention, employee security training, cybersecurity consulting Las Vegas, vulnerability assessment, security awareness program, data breach prevention, IT security training Nevada",
  alternates: {
    canonical: "https://www.orionitservice.com/services/cybersecurity",
  },
  openGraph: {
    title: "Cybersecurity Training Las Vegas | Phishing Defense Plan",
    description:
      "Transform your team into a human firewall. Proven cybersecurity awareness training that reduces breach risk by 74% — phishing simulations, assessments, and ongoing coaching.",
    url: "https://www.orionitservice.com/services/cybersecurity",
    images: [
      {
        url: "/images/cyber.webp",
        width: 1200,
        height: 630,
        alt: "Cybersecurity Awareness Training – Orion IT Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybersecurity Training Las Vegas | Phishing Defense Plan",
    description:
      "Transform your employees into your strongest security layer. Phishing simulations, security training, and vulnerability assessments.",
    images: ["/images/cyber.webp"],
  },
  robots: { index: true, follow: true },
};

export default function CybersecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.orionitservice.com/services/cybersecurity#service",
    name: "Cybersecurity Awareness Training",
    description:
      "Comprehensive cybersecurity awareness training programs that transform employees into an effective human firewall — including phishing simulations, vulnerability assessments, and ongoing security coaching.",
    url: "https://www.orionitservice.com/services/cybersecurity",
    provider: {
      "@type": "Organization",
      "@id": "https://www.orionitservice.com/#organization",
      name: "Orion IT Service",
    },
    areaServed: [
      { "@type": "City", name: "Las Vegas" },
      { "@type": "State", name: "Nevada" },
      { "@type": "Country", name: "United States" },
    ],
    serviceType: "Cybersecurity Training",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: "https://www.orionitservice.com/contact",
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
        name: "Services",
        item: "https://www.orionitservice.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Cybersecurity Awareness Training",
        item: "https://www.orionitservice.com/services/cybersecurity",
      },
    ],
  };

  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
