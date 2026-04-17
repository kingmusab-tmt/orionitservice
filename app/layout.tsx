import type { Metadata } from "next";
import Script from "next/script";
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
    default: "Managed IT Services Las Vegas | Orion IT Cybersecurity",
    template: "%s",
  },
  description:
    "Managed IT Services in Las Vegas from Orion IT Service — proactive monitoring, network solutions, cybersecurity, help desk support, and website development. Serving businesses across the US and UK globally.",
  keywords:
    "managed IT services Las Vegas, IT support Las Vegas, managed IT services, network solutions, cybersecurity solutions, IT consulting, business IT support, network infrastructure, help desk support, managed IT support, cybersecurity awareness training, phishing prevention, IT compliance, website development, Las Vegas IT company, IT service provider",
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
  verification: {
    google: "jFI2roBIfDLl9eVlrQFA3ZNa2iO7yYnIvzlu3fUOGBY",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.orionitservice.com",
    siteName: "Orion IT Service",
    title: "Managed IT Services Las Vegas | Orion IT Cybersecurity",
    description:
      "Proactive Managed IT Services in Las Vegas — network infrastructure, cybersecurity solutions, help desk support, and website development for businesses. Serving US, UK, and global clients.",
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
    title: "Managed IT Services Las Vegas | Orion IT Cybersecurity",
    description:
      "Managed IT Services in Las Vegas — proactive monitoring, cybersecurity protection, network solutions, and website development for your business.",
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
      "Managed IT Services in Las Vegas providing proactive network monitoring, cybersecurity solutions, help desk support, and website development. Serving the US, UK, and global businesses.",
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
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SZJHFCHGDE"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SZJHFCHGDE');
            `,
          }}
        />
      </head>
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
