import type { Metadata } from "next";
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = {
  title: "Free IT Consultation | Las Vegas IT Experts",
  description:
    "Schedule your free no-obligation IT consultation with Orion IT Service. Get expert advice on cybersecurity, networking, or website development for your business.",
  keywords:
    "free IT consultation Las Vegas, free IT consultation Henderson, free IT consultation North Las Vegas, free IT consultation Summerlin, free IT consultation Boulder City, free IT consultation Pahrump, free IT consultation Los Angeles, free IT consultation Phoenix, free IT consultation Salt Lake City, free IT consultation Reno, free IT consultation Dallas, free IT consultation Austin, free IT consultation Houston, free IT consultation Denver, free IT consultation Seattle, free IT consultation Chicago, free IT consultation Atlanta, free IT consultation Miami, free IT consultation New York, IT consultation Nevada, IT consulting appointment, free cybersecurity consultation, IT advice small business, technology consultation Las Vegas,how to fix small business network issues remotely, who offers remote network setup for small office USA,best remote IT networking service for startups USA,where to find affordable remote network engineer,remote help setting up business WiFi network USA,can someone fix my office network remotely,hire remote IT expert for network problems USA,remote support for slow internet in office network,help configuring VPN for small business remotely,remote IT support to secure business network,remote network security consultation for small business USA,remote network performance optimization advice,remote IT consulting for network infrastructure USA,free remote network troubleshooting consultation for small companies nationwide,remote IT support for network upgrade planning USA,remote network documentation and reporting consultation for small business nationwide",
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
