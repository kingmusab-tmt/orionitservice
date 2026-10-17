import type { Metadata } from "next";
import HomePageContent from "./components/HomePageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "IT Support Services Las Vegas | Orion IT Cybersecurity",
  description:
    "Orion IT Service provides proactive IT support, cybersecurity, networking, and website development for growing businesses in Las Vegas and beyond.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "IT Support Services Las Vegas | Orion IT Cybersecurity",
    description:
      "Proactive IT support, cybersecurity, networking, and website development services for businesses in Las Vegas and beyond.",
    url: "https://www.orionitservice.com",
  },
});

export default function Home() {
  return <HomePageContent />;
}
