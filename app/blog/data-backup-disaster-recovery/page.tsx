import type { Metadata } from "next";
import HeroBanner from "@/app/components/HeroBanner";
import JsonLd from "@/app/components/JsonLd";
import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import {
  CalendarToday as CalendarIcon,
  Person as PersonIcon,
  ArrowForward as ArrowIcon,
} from "@mui/icons-material";
import { getRelatedArticlesBySlug } from "../blogArticles";

export const metadata: Metadata = {
  title: "Data Backup and Disaster Recovery | Business Continuity Planning",
  description:
    "Learn backup strategies, recovery procedures, and disaster recovery planning to protect business data and minimize recovery time after failures.",
  alternates: {
    canonical: "/blog/data-backup-disaster-recovery",
  },
};

export default function BackupRecoveryArticle() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Data Backup and Disaster Recovery: Business Continuity Planning",
    description:
      "Learn backup strategies, recovery procedures, and disaster recovery planning to protect business data and minimize recovery time after failures.",
    author: {
      "@type": "Organization",
      name: "Orion IT Service",
    },
    publisher: {
      "@type": "Organization",
      name: "Orion IT Service",
    },
    datePublished: "2026-02-01",
    dateModified: "2026-02-01",
    mainEntityOfPage:
      "https://www.orionitservice.com/blog/data-backup-disaster-recovery",
    image: ["https://www.orionitservice.com/images/it-support.webp"],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.orionitservice.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.orionitservice.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Data Backup and Disaster Recovery",
        item: "https://www.orionitservice.com/blog/data-backup-disaster-recovery",
      },
    ],
  };

  const currentSlug = "data-backup-disaster-recovery";
  const relatedArticles = getRelatedArticlesBySlug(currentSlug);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <HeroBanner
        title="Blog"
        subtitle="Backups protect against data loss from failures, ransomware, and disasters. Learn 3-2-1 backup strategy, recovery procedures, and business continuity."
        ctaText="Contact Our Team"
        ctaLink="/contact"
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "minmax(0, 2.2fr) minmax(280px, 1fr)",
            },
            gap: { xs: 3, lg: 4 },
            alignItems: "start",
          }}
        >
          <Paper elevation={2} sx={{ p: { xs: 3, md: 5 } }}>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                flexWrap: "wrap",
                mb: 3,
                color: "text.secondary",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <PersonIcon fontSize="small" />
                <Typography variant="body2">Orion IT Service Team</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CalendarIcon fontSize="small" />
                <Typography variant="body2">February 1, 2026</Typography>
              </Box>
            </Box>
            <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
              Data Backup and Disaster Recovery: Business Continuity Planning
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Ransomware locks your files and demands payment. A hardware
              failure corrupts critical data. A disaster destroys your office.
              Without backups, these events mean losing data permanently. With
              backups, you can recover. The key difference is between a
              catastrophic loss and an inconvenience. Backup and disaster
              recovery planning ensures that even in worst-case scenarios, your
              business can continue.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Business continuity is about maintaining operations and recovering
              quickly after failures. This requires backup strategy, recovery
              procedures, alternative locations if your building is unavailable,
              and regular testing to ensure recovery actually works when needed.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              The 3-2-1 Backup Strategy
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              The 3-2-1 rule is a proven backup strategy: maintain 3 copies of
              your data, store them on 2 different media types, and keep 1 copy
              offline. For example, maintain your production data, a backup on
              external drives, and a backup in cloud storage. One copy should be
              offsite or offline so ransomware or widespread failure can't
              destroy all copies.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              This strategy protects against multiple failure scenarios. If a
              server fails, restore from backup. If ransomware encrypts files,
              restore from offline backup. If a disaster destroys your building,
              restore from cloud backup.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Backup Frequency and Retention
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              How often should you backup? That depends on how much data loss
              you can tolerate. Daily backups mean at most 24 hours of data loss
              if something goes wrong. Hourly backups mean at most an hour. Some
              critical systems require continuous synchronization.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              How long should you keep backups? This depends on compliance
              requirements, business needs, and storage costs. Some backups
              might be kept for years for legal compliance. Daily backups might
              be kept for a month. Weekly backups might be kept for a year.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Recovery Procedures
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Having backups is useless if you can't recover from them. Recovery
              procedures should be documented, tested regularly, and practiced
              before disaster strikes. Can you restore a single file that was
              deleted? Can you restore an entire server? How long does recovery
              take?
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Regular recovery testing ensures backups actually work. Many
              organizations discover during an actual disaster that their
              backups were corrupted or incomplete. Testing catches these
              problems while they're not critical.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Disaster Recovery Planning
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Disaster recovery goes beyond backup. What if your entire office
              is unavailable? Do you have alternative work locations? Can
              employees work from home? What about critical systems—can they be
              moved to backup locations?
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Recovery time objective (RTO) is how long you can afford to be
              down. Recovery point objective (RPO) is how much data loss you can
              afford. These objectives determine backup strategy, redundancy
              requirements, and costs. A business that can't afford any downtime
              needs different infrastructure than one that can tolerate a few
              hours.
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography
              variant="h6"
              component="p"
              sx={{ fontWeight: 800, mb: 2 }}
            >
              Key Takeaway
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Backups and disaster recovery planning protect your business from
              data loss and extended downtime. The 3-2-1 strategy, regular
              testing, and documented procedures ensure recovery actually works
              when needed.
            </Typography>

            <Button
              variant="contained"
              endIcon={<ArrowIcon />}
              href="/contact"
              sx={{ mt: 1 }}
            >
              Establish Backup and Recovery Strategy
            </Button>
          </Paper>

          <Paper
            elevation={1}
            sx={{
              p: { xs: 3, md: 4 },
              position: { md: "sticky" },
              top: { md: 96 },
            }}
          >
            <Typography
              variant="h4"
              component="h4"
              sx={{ fontWeight: 800, mb: 2 }}
            >
              You may also want to read
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              {relatedArticles.map((article) => (
                <Button
                  key={article.slug}
                  variant="text"
                  href={`/blog/${article.slug}`}
                  sx={{
                    justifyContent: "flex-start",
                    textAlign: "left",
                    textTransform: "none",
                    px: 0,
                  }}
                >
                  {article.title}
                </Button>
              ))}
            </Box>
          </Paper>
        </Box>
      </Container>
    </>
  );
}
