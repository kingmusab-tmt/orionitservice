import type { Metadata } from "next";
import CustomWebAppsContent from "./CustomWebAppsContent";
import JsonLd from "@/app/components/JsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title:
    "Custom Web Application Development Las Vegas | Orion IT",
  description:
    "Custom web application development in Las Vegas. Built for your business. Scalable, secure, and designed to solve your unique challenges.",
  openGraph: {
    title: "Custom Web Applications Development Las Vegas | Orion IT Service",
    description:
      "Custom web applications tailored to your business. Scalable, secure, and built to drive results.",
    url: "https://www.orionitservice.com/custom-web-applications-development-las-vegas",
    type: "website",
  },
  alternates: {
    canonical:
      "https://www.orionitservice.com/custom-web-applications-development-las-vegas",
  },
});

export default function CustomWebAppsDevelopmentLandingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Orion IT Service - Custom Web Applications Development",
          description:
            "Professional custom web application development services in Las Vegas",
          url: "https://www.orionitservice.com/custom-web-applications-development-las-vegas",
          telephone: "+1-888-210-4378",
          areaServed: {
            "@type": "City",
            name: "Las Vegas",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Las Vegas",
              addressRegion: "Nevada",
              addressCountry: "US",
            },
          },
          priceRange: "$$",
          image: "https://www.orionitservice.com/images/og-image.webp",
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Custom Web Applications Development",
          description:
            "Custom web application development services including full-stack development, cloud applications, mobile-web apps, and enterprise software",
          provider: {
            "@type": "LocalBusiness",
            name: "Orion IT Service",
          },
          areaServed: {
            "@type": "City",
            name: "Las Vegas",
          },
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How long does custom web app development take?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Development timeline depends on complexity and scope. Simple applications take 2-3 months. Complex enterprise apps take 6-12+ months. We provide detailed timelines after requirements gathering.",
              },
            },
            {
              "@type": "Question",
              name: "How much does a custom web application cost?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Custom web applications typically cost $25,000-250,000+ depending on complexity, features, and team size. We provide fixed-price quotes or time-and-materials models.",
              },
            },
            {
              "@type": "Question",
              name: "What technologies do you use?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We use modern technologies: React, Node.js, Python, Vue.js, AWS, Azure, and more. We recommend the best technology stack for your specific needs.",
              },
            },
          ],
        }}
      />

      <CustomWebAppsContent />
    </>
  );
}
