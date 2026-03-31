import type { Metadata } from "next";
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = {
  title: "Website Development Las Vegas | Custom Web Design & Next.js",
  description:
    "Custom website design and development for Las Vegas businesses. Orion IT Service builds fast, mobile-responsive, SEO-optimized websites using Next.js and React — from small business sites to enterprise platforms.",
  keywords:
    "website development Las Vegas, custom web application Nevada, Next.js development, React website development, small business website Las Vegas, e-commerce development Nevada, SEO website design, mobile responsive website Las Vegas",
  alternates: {
    canonical: "https://www.orionitservice.com/services/website-development",
  },
  openGraph: {
    title: "Website Development Las Vegas | Custom Web App | Orion IT Service",
    description:
      "Professional custom websites built with Next.js and React — fast, mobile-first, SEO-optimized. Serving Las Vegas businesses and beyond.",
    url: "https://www.orionitservice.com/services/website-development",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Website Development Services – Orion IT Service Las Vegas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Las Vegas | Custom Web App",
    description:
      "Custom Next.js websites — fast, SEO-optimized, and mobile-first. Built for Las Vegas businesses.",
    images: ["/images/og-image.webp"],
  },
  robots: { index: true, follow: true },
};

export default function WebsiteDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id":
      "https://www.orionitservice.com/services/website-development#service",
    name: "Website Development",
    description:
      "Custom web application development using Next.js and React — mobile-responsive, SEO-optimized, and built for performance. Serving small businesses to enterprise clients in Las Vegas and nationwide.",
    url: "https://www.orionitservice.com/services/website-development",
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
    serviceType: "Website Development",
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
        name: "Website Development",
        item: "https://www.orionitservice.com/services/website-development",
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
