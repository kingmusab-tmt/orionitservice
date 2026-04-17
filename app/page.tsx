import type { Metadata } from "next";
import HomePageContent from "./components/HomePageContent";

export const metadata: Metadata = {
  title: "Managed IT Services Las Vegas | Orion IT Cybersecurity",
  description:
    "Orion IT Service delivers managed IT services in Las Vegas with proactive support, cybersecurity solutions, networking services, and website development for growing businesses.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Managed IT Services Las Vegas | Orion IT Cybersecurity",
    description:
      "Proactive managed IT, cybersecurity, networking, and website development services for businesses in Las Vegas and beyond.",
    url: "https://www.orionitservice.com",
  },
};

export default function Home() {
  return <HomePageContent />;
}
