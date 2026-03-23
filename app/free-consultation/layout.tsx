import type { Metadata } from "next";
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = {
  title: "Free IT Consultation | Talk to a Las Vegas IT Expert Today",
  description:
    "Schedule your free no-obligation IT consultation with Orion IT Service. Get expert advice on cybersecurity, managed IT, networking, or website development for your business.",
  keywords:
    "free IT consultation Las Vegas, IT consultation Nevada, IT consulting appointment, free cybersecurity consultation, IT advice small business, technology consultation Las Vegas",
  alternates: {
    canonical: "https://www.orionitservice.com/free-consultation",
  },
  openGraph: {
    title: "Free IT Consultation | Orion IT Service Las Vegas",
    description:
      "Talk to a Las Vegas IT expert for free — no obligation. Get tailored advice for your cybersecurity, managed IT, networking, or web development needs.",
    url: "https://www.orionitservice.com/free-consultation",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Free IT Consultation – Orion IT Service Las Vegas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free IT Consultation | Orion IT Service Las Vegas",
    description:
      "Schedule your free consultation with an IT expert. No obligation — just honest, practical IT advice for your business.",
    images: ["/images/og-image.webp"],
  },
  robots: { index: true, follow: true },
};

export default function FreeConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.orionitservice.com/free-consultation#service",
    name: "Free IT Consultation",
    description:
      "Complimentary IT consultation session with Orion IT Service experts — covering cybersecurity, managed IT, network engineering, and website development.",
    url: "https://www.orionitservice.com/free-consultation",
    provider: {
      "@type": "Organization",
      "@id": "https://www.orionitservice.com/#organization",
      name: "Orion IT Service",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      name: "Free IT Consultation",
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
        name: "Free Consultation",
        item: "https://www.orionitservice.com/free-consultation",
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
