import type { Metadata } from "next";
import Header from "./components/header";
import Footer from "./components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/provider";
import SmallHeader from "./components/contactheader";
import ThemeRegistry from "./components/themeregistry";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import JsonLd from "./components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.orionitservice.com"),
  title: {
    default: "Orion IT Service | Cybersecurity, Managed IT & Networking",
    template: "%s | Orion IT Service",
  },
  description:
    "Orion IT Service provides expert cybersecurity awareness training, managed IT support, network engineering, and website development for businesses in Las Vegas and nationwide.",
  keywords:
    "IT services Las Vegas, cybersecurity training, managed IT services, network solutions, phishing prevention, business networking, IT support, IT consulting, cybersecurity awareness, network security, IT compliance, IT infrastructure management, website development, IT service provider, Orion IT Service, Las Vegas IT company, Nevada IT services",
  authors: [
    { name: "Orion IT Service", url: "https://www.orionitservice.com" },
  ],
  creator: "Orion IT Service",
  publisher: "Orion IT Service",
  alternates: {
    canonical: "https://www.orionitservice.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.orionitservice.com",
    siteName: "Orion IT Service",
    title: "Orion IT Service | Cybersecurity, Managed IT & Networking",
    description:
      "Expert IT services for businesses — cybersecurity training, managed IT, network engineering, and website development. Based in Las Vegas, serving clients nationwide.",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Orion IT Service – Cybersecurity, Managed IT & Networking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@orionitservice",
    creator: "@orionitservice",
    title: "Orion IT Service | Cybersecurity, Managed IT & Networking",
    description:
      "Expert IT services for businesses — cybersecurity training, managed IT, network engineering, and website development.",
    images: ["/images/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.orionitservice.com/#organization",
    name: "Orion IT Service",
    url: "https://www.orionitservice.com",
    logo: "https://www.orionitservice.com/images/logo.webp",
    image: "https://www.orionitservice.com/images/og-image.webp",
    description:
      "Professional IT services including cybersecurity awareness training, managed IT support, network engineering, and website development for businesses in Las Vegas and nationwide.",
    telephone: "+1-702-800-9182",
    email: "info@orionitservice.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "304 S. Jones Blvd #4809",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89107",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.1699,
      longitude: -115.1398,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://web.facebook.com/profile.php?id=61577112279023",
      "https://x.com/orionitservice",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IT Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cybersecurity Awareness Training",
            url: "https://www.orionitservice.com/services/cybersecurity",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Managed IT Services",
            url: "https://www.orionitservice.com/services/managed-it",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Network Engineering & Solutions",
            url: "https://www.orionitservice.com/services/networking",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Development",
            url: "https://www.orionitservice.com/services/website-development",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.orionitservice.com/#website",
    name: "Orion IT Service",
    url: "https://www.orionitservice.com",
    publisher: {
      "@id": "https://www.orionitservice.com/#organization",
    },
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <AppRouterCacheProvider>
          <Providers>
            <ThemeRegistry>
              <SmallHeader />
              <Header />
              {children}
              <Footer />
            </ThemeRegistry>
          </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
