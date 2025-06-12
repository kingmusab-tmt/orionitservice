import type { Metadata } from "next";
import Header from "./components/header";
import Footer from "./components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orion IT Service | Cybersecurity & Networking Solutions",
  description:
    "Professional IT services including cybersecurity awareness training and business networking solutions. Protect and optimize your digital infrastructure.",
  keywords:
    "IT services, cybersecurity training, network solutions, phishing prevention, business networking",
  authors: [{ name: "Orion IT Service" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.orionitservices.com",
    siteName: "",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Orion IT Service",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {" "}
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
