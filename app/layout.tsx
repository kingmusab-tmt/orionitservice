import type { Metadata } from "next";
import Header from "./components/header";
import Footer from "./components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/provider";
import SmallHeader from "./components/contactheader";
import ThemeRegistry from "./components/themeregistry";

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
    "IT services, cybersecurity training, network solutions, phishing prevention, business networking, IT support, managed IT services, cloud solutions, IT consulting, technology solutions, remote support, IT infrastructure, business IT services, cybersecurity awareness, network security, IT compliance, IT infrastructure management, business technology solutions, IT risk management, cybersecurity best practices, network monitoring, IT service provider, Orion IT Service",
  authors: [{ name: "Orion IT Service" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.orionitservice.com",
    siteName: "Orion IT Service",
    images: [
      {
        url: "/images/logo.png",
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
          <ThemeRegistry>
            <SmallHeader />
            <Header />
            {children}
            <Footer />
          </ThemeRegistry>
        </Providers>
      </body>
    </html>
  );
}
