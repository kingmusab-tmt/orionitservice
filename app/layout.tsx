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
    default: "IT Support Services Las Vegas | Orion IT Cybersecurity",
    template: "%s",
  },
  description:
    "IT Support Services in Las Vegas from Orion IT Service — network solutions, cybersecurity, help desk support, and website development. Serving businesses across the US and UK globally.",
  keywords:
    "IT support Las Vegas, IT support Henderson, IT support North Las Vegas, IT support Summerlin, IT support Boulder City, IT support Pahrump, IT support Los Angeles, IT support Phoenix, IT support Salt Lake City, IT support Reno, IT support Dallas, IT support Austin, IT support Houston, IT support Denver, IT support Seattle, IT support Chicago, IT support Atlanta, IT support Miami, IT support New York, network solutions, cybersecurity solutions, IT consulting, business IT support, network infrastructure, help desk support, IT support, cybersecurity awareness training, phishing prevention, IT compliance, website development, Las Vegas IT company, IT service provider, remote IT networking support for small business owners, cheap remote network support for startups USA, outsourced IT networking for small companies nationwide, remote network setup for new business USA,small business network security remote support, remote WiFi and LAN setup for offices nationwide, remote IT helpdesk for networking issues small business, on demand remote network engineer for small office, remote VPN setup service for small business USA,network optimization services remote for small companies, remote network monitoring and maintenance for small business USA, remote network documentation and reporting service for small companies nationwide, remote network upgrade and migration services for small business USA, remote network performance optimization service for small companies nationwide, remote network security services for small business USA, remote network troubleshooting service for small companies nationwide, urgent remote network repair service USA, fix slow office network remote IT support,remote internet connectivity troubleshooting business, emergency remote network support nationwide, remote DNS and routing issue troubleshooting, fix VPN connection issues remote IT expert, remote network outage support service USA, quick remote network diagnostics service, remote IT help for network downtime business,remote packet loss troubleshooting service",
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
    title: "IT Support Services Las Vegas | Orion IT Cybersecurity",
    description:
      "Proactive IT Support Services in Las Vegas — network infrastructure, cybersecurity solutions, help desk support, and website development for businesses. Serving US, UK, and global clients.",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Orion IT Service – Cybersecurity, IT Support & Networking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@orionitservice",
    creator: "@orionitservice",
    title: "IT Support Services Las Vegas | Orion IT Cybersecurity",
    description:
      "IT Support Services in Las Vegas — proactive monitoring, cybersecurity protection, network solutions, and website development for your business.",
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
      "IT Support Services in Las Vegas providing proactive network and cybersecurity solutions, help desk support, and website development. Serving the US, UK, and global businesses.",
    telephone: "+1-888-210-4378",
    email: "info@orionitservice.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3305 Sky County ln 201",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89117",
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
        closes: "17:00",
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
            name: "IT Support Services",
            url: "https://www.orionitservice.com/services/it-support",
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
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "xfhmm7p3z8");
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
