import type { Metadata } from "next";
import JsonLd from "@/app/components/JsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Get Free IT Quote | IT, Security, and Web Plans",
  description:
    "Request a free IT quote from Orion IT Service. Choose cybersecurity, IT support, networking, or website development and get a tailored proposal.",
  alternates: {
    canonical: "https://www.orionitservice.com/get-quote",
  },
  openGraph: {
    title: "Get Free IT Quote | IT, Security, and Web Plans",
    description:
      "Get a custom IT services quote — cybersecurity, IT support, networking, or website development. Fast response, no obligation.",
    url: "https://www.orionitservice.com/get-quote",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Get a Free IT Quote – Orion IT Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Free IT Quote | IT, Security, and Web Plans",
    description:
      "Request a custom IT quote — cybersecurity, IT support, networking, or website development. No obligation.",
    images: ["/images/og-image.webp"],
  },
  robots: { index: true, follow: true },
});

export default function GetQuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        name: "Get a Quote",
        item: "https://www.orionitservice.com/get-quote",
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  );
}
