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
  title: "IT Infrastructure Upgrade and Migration | System Modernization",
  description:
    "Plan IT infrastructure upgrades and migrations to reduce costs, improve performance, and stay current with technology while minimizing disruption.",
  alternates: {
    canonical: "/blog/it-infrastructure-upgrade-migration",
  },
};

export default function InfrastructureUpgradeArticle() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "IT Infrastructure Upgrade and Migration: System Modernization",
    description:
      "Plan IT infrastructure upgrades and migrations to reduce costs, improve performance, and stay current with technology while minimizing disruption.",
    author: {
      "@type": "Organization",
      name: "Orion IT Service",
    },
    publisher: {
      "@type": "Organization",
      name: "Orion IT Service",
    },
    datePublished: "2026-02-10",
    dateModified: "2026-02-10",
    mainEntityOfPage:
      "https://www.orionitservice.com/blog/it-infrastructure-upgrade-migration",
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
        name: "IT Infrastructure Upgrade and Migration",
        item: "https://www.orionitservice.com/blog/it-infrastructure-upgrade-migration",
      },
    ],
  };

  const currentSlug = "it-infrastructure-upgrade-migration";
  const relatedArticles = getRelatedArticlesBySlug(currentSlug);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <HeroBanner
        title="Blog"
        subtitle="Outdated infrastructure becomes costly to maintain and support. Learn planning, risk mitigation, and phased migration strategies for modernization."
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
                <Typography variant="body2">February 10, 2026</Typography>
              </Box>
            </Box>
            <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
              IT Infrastructure Upgrade and Migration: System Modernization
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Infrastructure ages and becomes increasingly expensive to
              maintain. Older hardware requires more frequent repairs, consumes
              more power, and can't run modern software efficiently. Outdated
              operating systems stop receiving security updates, creating
              compliance and security risks. At some point, upgrading becomes
              more cost-effective than maintaining failing systems.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Infrastructure migrations are complex projects that require
              careful planning. Done poorly, migrations cause significant
              disruption. Done well, they improve reliability, security,
              performance, and reduce costs. A good migration strategy minimizes
              downtime, validates that systems work after migration, and
              provides rollback if problems occur.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Migration Planning
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Understand the current state. What systems exist? Which are
              critical? What dependencies exist between systems? How much data
              needs to move? What does capacity look like? This inventory drives
              the entire migration strategy.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Define the target state. What should the infrastructure look like
              after migration? What new capabilities do you want? How does this
              align with business strategy and budget?
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Identify dependencies and risks. What could go wrong? What would
              be most impactful? What do you need to mitigate these risks?
              Testing, backup plans, and fallback options reduce risk.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Migration Approaches
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Lift and shift moves systems as-is to new infrastructure. This is
              faster than redesign but may not take advantage of new
              capabilities. Big bang migration does this all at once, while
              phased migration does it gradually. Phased is lower risk but takes
              longer.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Refactor and re-architect redesigns systems for the new
              environment. This takes longer but can result in better
              performance and lower ongoing costs. For example, moving to cloud
              and redesigning for cloud-native architecture rather than just
              running the same applications.
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
              Before migration affects production, test everything. Run
              applications in the new environment and verify they work
              correctly. Perform performance testing to ensure new systems are
              actually faster. Test failure scenarios to verify recovery
              procedures work.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Pilot migration involves migrating a non-critical system or small
              user group first, finding problems at scale before affecting
              everyone.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Managing Downtime
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Some migrations can happen without user-visible downtime. Dual-run
              operations where both systems work in parallel, with a cutover at
              a specific moment, minimize downtime. Other migrations require
              scheduled downtime.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Scheduling migration for times with minimal business
              impact—weekends or after hours—reduces impact. Communication to
              users about when downtime will occur and what to expect is
              critical.
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
              Careful migration planning, phased approaches, and extensive
              testing ensure infrastructure upgrades improve systems without
              causing unplanned downtime or data loss.
            </Typography>

            <Button
              variant="contained"
              endIcon={<ArrowIcon />}
              href="/contact"
              sx={{ mt: 1 }}
            >
              Plan Your Infrastructure Upgrade
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
