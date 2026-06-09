import type { Metadata } from "next";
import HomePageContent from "./components/HomePageContent";

export const metadata: Metadata = {
  title: "IT Support Services Las Vegas | Orion IT Cybersecurity",
  description:
    "Orion IT Service delivers IT services in Las Vegas with proactive support, cybersecurity solutions, networking services, and website development for growing businesses.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "IT Support Services Las Vegas | Orion IT Cybersecurity",
    description:
      "Proactive IT support, cybersecurity, networking, and website development services for businesses in Las Vegas and beyond.",
    url: "https://www.orionitservice.com",
  },
};

export default function Home() {
  return <HomePageContent />;
}
