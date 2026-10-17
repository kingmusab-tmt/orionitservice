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
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Business Continuity & Disaster Recovery Planning",
  description:
    "Learn business continuity and disaster recovery planning to protect operations from disruptions and recover quickly from unexpected events.",
  alternates: {
    canonical: "/blog/business-continuity-disaster-recovery-planning",
  },
}, {
  type: "article",
  publishedTime: "2026-05-18",
  modifiedTime: "2026-05-18",
  image: "https://www.orionitservice.com/images/og-image.webp",
});

export default function BCDRArticle() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Business Continuity and Disaster Recovery: Operational Resilience",
    description:
      "Learn business continuity and disaster recovery planning to protect operations from disruptions and recover quickly from unexpected events.",
    author: {
      "@type": "Organization",
      name: "Orion IT Service",
    },
    publisher: {
      "@type": "Organization",
      name: "Orion IT Service",
    },
    datePublished: "2026-05-18",
    dateModified: "2026-05-18",
    mainEntityOfPage:
      "https://www.orionitservice.com/blog/business-continuity-disaster-recovery-planning",
    image: ["https://www.orionitservice.com/images/og-image.webp"],
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
        name: "Business Continuity and Disaster Recovery",
        item: "https://www.orionitservice.com/blog/business-continuity-disaster-recovery-planning",
      },
    ],
  };

  const currentSlug = "business-continuity-disaster-recovery-planning";
  const relatedArticles = getRelatedArticlesBySlug(currentSlug);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <HeroBanner
        title="Blog"
        subtitle="Protect business operations with comprehensive business continuity and disaster recovery planning ensuring rapid recovery from disruptions."
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
                <Typography variant="body2">May 18, 2026</Typography>
              </Box>
            </Box>
            <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
              Business Continuity and Disaster Recovery: Operational Resilience
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Disruptions happen—hardware failures, power outages, data center
              disasters, ransomware attacks, security breaches, cyber warfare.
              Unprepared organizations lose revenue, customers, and reputation.
              Prepared organizations recover quickly, maintain customer trust,
              and navigate crises. Business continuity planning identifies
              critical operations and ensures they can continue during
              disruptions. Disaster recovery planning focuses on recovering
              systems and data after catastrophic failures. Together, they build
              operational resilience.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Effective business continuity and disaster recovery require
              planning, testing, and organizational commitment.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Business Impact Analysis
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Start by identifying which business functions are critical. Sales
              systems are critical—they generate revenue. Accounting systems are
              important but can tolerate some downtime. Corporate website may be
              less critical than internal systems. Define Recovery Time
              Objective (RTO)—acceptable downtime before the system must be
              restored. Define Recovery Point Objective (RPO)—acceptable data
              loss measured in time. A trading system might have RTO of 1 hour
              and RPO of 15 minutes. A blog might tolerate RTO of 12 hours and
              RPO of 1 day.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Risk Assessment
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Identify potential disruptions and their likelihood. Single
              hardware failure (likely)? Data center outage (less likely but
              significant)? Ransomware attack (increasingly common)? Pandemics
              (as COVID-19 demonstrated)? Cyber warfare (geopolitical reality)?
              Estimate impact on business operations. Prioritize risks based on
              probability and impact.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Continuity Strategy
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Define strategies to maintain or quickly restore critical
              functions. Hardware redundancy—two servers instead of one so one
              can fail without service loss. Backup systems geographically
              separated from primary systems so local disasters don't destroy
              both. Hot standby systems ready to take over immediately. Cold
              standby systems that take time to bring online but are ready if
              needed. Load balancing distributes traffic across multiple systems
              so no single point of failure stops service.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Disaster Recovery Plan
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Develop detailed recovery procedures for different disaster
              scenarios. How do you recover from a ransomware attack? Restore
              from backups. But which backups are safe? How long does
              restoration take? How do you verify no more ransomware exists?
              Document step-by-step procedures. Include contact information for
              key people. Include vendor support contacts. Include escalation
              procedures. Maintain recovery procedures and keep them current as
              systems change.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Testing and Validation
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Plans that haven't been tested don't work. Test recovery
              procedures regularly—ideally quarterly. Test full recovery from
              backup. Test failover to alternate systems. Test recovery from
              different disaster scenarios. Document results. Fix problems
              discovered during testing. Testing proves your plan works and
              trains staff on recovery procedures. Untested plans often fail in
              crisis.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Communication and Training
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              During disasters, clear communication is critical. Define
              communication procedures. Who authorizes declaring a disaster? Who
              communicates to customers? Who manages internal coordination?
              Train staff on their roles. Conduct disaster response drills.
              After disruptions, conduct after-action reviews—what went well,
              what didn't, what can we improve?
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
              Business continuity and disaster recovery planning build
              operational resilience. Combined with regular testing and staff
              training, BC/DR enables organizations to maintain operations
              during disruptions and recover quickly from failures.
            </Typography>

            <Button
              variant="contained"
              endIcon={<ArrowIcon />}
              href="/contact"
              sx={{ mt: 1 }}
            >
              Build Your BC/DR Program
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
