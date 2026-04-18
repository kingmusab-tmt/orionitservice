import type { Metadata } from "next";
import JsonLd from "@/app/components/JsonLd";

export const metadata: Metadata = {
  title: "About Orion IT Service | Las Vegas IT Experts & Mission",
  description:
    "Orion IT Service is a Las Vegas-based IT company delivering cybersecurity training, managed IT support, network engineering, and website development with a security-first approach.",
  keywords:
    "about Orion IT Service, Las Vegas IT company, Henderson IT company, North Las Vegas IT company, Summerlin IT company, Boulder City IT company, Pahrump IT company, Los Angeles IT company, Phoenix IT company, Salt Lake City IT company, Reno IT company, Dallas IT company, Austin IT company, Houston IT company, Denver IT company, Seattle IT company, Chicago IT company, Atlanta IT company, Miami IT company, New York IT company, Nevada IT services, IT company Las Vegas, cybersecurity company Las Vegas, managed IT provider Nevada",
  alternates: {
    canonical: "https://www.orionitservice.com/about",
  },
  openGraph: {
    title: "About Orion IT Service | Las Vegas IT Experts & Mission",
    description:
      "Learn about Orion IT Service — expert IT solutions with a security-first approach, serving businesses in Las Vegas and nationwide.",
    url: "https://www.orionitservice.com/about",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Orion IT Service Team – Las Vegas IT Professionals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Orion IT Service | Las Vegas IT Experts & Mission",
    description:
      "Expert IT solutions with a security-first approach — serving businesses in Las Vegas and nationwide.",
    images: ["/images/og-image.webp"],
  },
  robots: { index: true, follow: true },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://www.orionitservice.com/about#webpage",
    name: "About Orion IT Service",
    url: "https://www.orionitservice.com/about",
    description:
      "Orion IT Service is a Las Vegas-based technology company delivering cybersecurity training, managed IT, and network engineering.",
    publisher: {
      "@type": "Organization",
      "@id": "https://www.orionitservice.com/#organization",
      name: "Orion IT Service",
    },
    breadcrumb: {
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
          name: "About",
          item: "https://www.orionitservice.com/about",
        },
      ],
    },
  };

  return (
    <>
      <JsonLd data={aboutSchema} />
      {children}
    </>
  );
}
