import type { Metadata } from "next";
import BackupRecoveryContent from "./BackupRecoveryContent";
import JsonLd from "@/app/components/JsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Backup & Recovery Solutions Las Vegas | Orion IT",
  description:
    "Professional backup and recovery solutions in Las Vegas. Protect your data with automated backups, disaster recovery, and ransomware protection.",
  openGraph: {
    title: "Backup and Recovery Solutions Las Vegas | Orion IT Service",
    description:
      "Enterprise backup and recovery solutions. Automated backups, disaster recovery, and guaranteed data protection.",
    url: "https://www.orionitservice.com/backup-recovery-solutions-las-vegas",
    type: "website",
  },
  alternates: {
    canonical:
      "https://www.orionitservice.com/backup-recovery-solutions-las-vegas",
  },
});

export default function BackupRecoveryLandingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Orion IT Service - Backup and Recovery Solutions",
          description:
            "Professional backup and recovery solutions in Las Vegas",
          url: "https://www.orionitservice.com/backup-recovery-solutions-las-vegas",
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
          name: "Backup and Recovery Solutions",
          description:
            "Enterprise backup and recovery services including automated backups, disaster recovery, ransomware protection, and business continuity",
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
              name: "How often should I backup my data?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Critical data should be backed up daily or continuously. We recommend multiple backup frequency options: hourly for critical systems, daily for standard data, weekly for archives. The right frequency depends on how much data loss your business can tolerate.",
              },
            },
            {
              "@type": "Question",
              name: "What if I lose all my data?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "With our backup and recovery solutions, you can restore all your data. We provide point-in-time recovery so you can restore to the exact moment before data loss occurred.",
              },
            },
            {
              "@type": "Question",
              name: "Does backup protect against ransomware?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Our backup solutions include ransomware protection with immutable backups that attackers cannot encrypt or delete. Recovery is fast and guaranteed.",
              },
            },
          ],
        }}
      />

      <BackupRecoveryContent />
    </>
  );
}
