import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Backup and Recovery Solutions Las Vegas | Orion IT",
  description:
    "Professional backup and recovery solutions in Las Vegas. Protect your data with automated backups and disaster recovery.",
  alternates: {
    canonical: "/backup-recovery-solutions-las-vegas",
  },
  openGraph: {
    title: "Backup and Recovery Solutions Las Vegas | Orion IT Cybersecurity",
    description:
      "Enterprise backup and recovery. Automated backups, disaster recovery, and ransomware protection.",
    url: "https://www.orionitservice.com/backup-recovery-solutions-las-vegas",
  },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
