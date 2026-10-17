import type { Metadata } from "next";
import JsonLd from "@/app/components/JsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Free IT Consultation | Las Vegas IT Experts",
  description:
    "Book a free, no-obligation IT consultation with Orion IT Service for expert advice on cybersecurity, networking, or website development.",
  alternates: {
    canonical: "https://www.orionitservice.com/free-consultation",
  },
  openGraph: {
    title: "Free IT Consultation | Las Vegas IT Experts",
    description:
      "Talk to a Las Vegas IT expert for free — no obligation. Get tailored advice for your cybersecurity, networking, or web development needs.",
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
    title: "Free IT Consultation | Las Vegas IT Experts",
    description:
      "Schedule your free consultation with an IT expert. No obligation — just honest, practical IT advice for your business.",
    images: ["/images/og-image.webp"],
  },
  robots: { index: true, follow: true },
});

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
      "Complimentary IT consultation session with Orion IT Service experts — covering cybersecurity, network engineering, and website development.",
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
