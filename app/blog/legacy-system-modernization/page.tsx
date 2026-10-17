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
  title: "Legacy System Modernization | Application Transformation",
  description:
    "Learn strategies for modernizing legacy systems—when to replace, when to migrate, how to manage transition risk, and maintain business continuity.",
  alternates: {
    canonical: "/blog/legacy-system-modernization",
  },
}, {
  type: "article",
  publishedTime: "2026-05-22",
  modifiedTime: "2026-05-22",
  image: "https://www.orionitservice.com/images/og-image.webp",
});

export default function LegacyModernizationArticle() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Legacy System Modernization: Application Transformation",
    description:
      "Learn strategies for modernizing legacy systems—when to replace, when to migrate, how to manage transition risk, and maintain business continuity.",
    author: {
      "@type": "Organization",
      name: "Orion IT Service",
    },
    publisher: {
      "@type": "Organization",
      name: "Orion IT Service",
    },
    datePublished: "2026-05-22",
    dateModified: "2026-05-22",
    mainEntityOfPage:
      "https://www.orionitservice.com/blog/legacy-system-modernization",
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
        name: "Legacy System Modernization",
        item: "https://www.orionitservice.com/blog/legacy-system-modernization",
      },
    ],
  };

  const currentSlug = "legacy-system-modernization";
  const relatedArticles = getRelatedArticlesBySlug(currentSlug);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <HeroBanner
        title="Blog"
        subtitle="Modernize legacy systems with strategic approaches—replace, migrate, or refactor—to reduce technical debt and improve competitiveness."
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
                <Typography variant="body2">May 22, 2026</Typography>
              </Box>
            </Box>
            <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
              Legacy System Modernization: Application Transformation
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Legacy systems are the backbone of many organizations' operations.
              Built decades ago using outdated technology and architecture, they
              continue running business-critical processes. But legacy systems
              are expensive to maintain, difficult to modify, security risks,
              and obstacles to digital transformation. The longer modernization
              is delayed, the harder and more expensive it becomes.
              Organizations must balance keeping legacy systems running with the
              imperative to modernize.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Legacy modernization requires assessment, planning, and
              disciplined execution to reduce technical debt.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              The Problem with Legacy Systems
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Legacy systems have high maintenance costs because finding
              developers with skills in obsolete technologies is expensive.
              They're difficult to modify because code is complex, undocumented,
              and fragile. They're security risks because underlying platforms
              have known vulnerabilities that vendors no longer patch. They're
              inefficient, consuming resources disproportionate to their value.
              They limit agility—new business capabilities take months to
              implement in legacy systems. They lock organizations into
              expensive vendor relationships. Organizations stuck on legacy
              systems fall behind competitors who modernize.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Modernization Strategies
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Lift-and-shift moves systems to modern infrastructure (cloud, new
              servers) without major code changes. Minimizes risk but doesn't
              address technical debt. Most expensive long-term. Refactoring
              updates legacy code using modern practices and architecture while
              preserving functionality. Reduces risk and cost compared to
              replacement but requires skilled developers and is more complex
              than lift-and-shift.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Replacement builds new systems with modern architecture replacing
              legacy systems entirely. Highest initial cost and risk but
              eliminates technical debt and provides modern capabilities.
              Strangler pattern gradually replaces legacy system with new
              system, routing functionality to new system as it's built. Manages
              risk by gradually shifting traffic and allowing fallback to legacy
              system if problems occur.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Prioritization
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              You can't modernize everything at once. Prioritize based on
              criticality, age, maintenance cost, and business impact. Highly
              critical systems with low maintenance cost can wait. Highly
              critical systems with high maintenance cost need urgent
              modernization. Systems the organization plans to sunset might not
              be worth modernizing.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Phased Implementation
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Modernize in phases, not as one big project. Each phase delivers
              value and reduces risk. Build budget over multiple years rather
              than asking for all funding up front. Phases allow learning—apply
              lessons from one phase to improve subsequent phases. Manage team
              capacity—don't commit to impossible schedules that set up failure.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Maintaining Operations During Transition
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Legacy systems must keep running while modernization is happening.
              You need to maintain legacy systems while building replacements.
              This requires discipline and clear boundaries. Don't add new
              functionality to legacy systems during modernization—invest in the
              new system instead. Maintain only critical fixes to legacy
              systems. Maintain documentation to support replacement
              development.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Data Migration
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Moving data from legacy systems to new systems is often the
              hardest part of modernization. Data schemas differ. Data quality
              issues in legacy systems become apparent. Years of accumulated
              data must be validated and migrated. Plan data migration
              carefully. Validate data quality. Create rollback plans if
              migration fails. Test migration procedures thoroughly.
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
              Legacy system modernization is a strategic imperative. Assess
              carefully, choose appropriate modernization strategy, prioritize
              ruthlessly, and execute in phases to reduce technical debt and
              improve competitiveness.
            </Typography>

            <Button
              variant="contained"
              endIcon={<ArrowIcon />}
              href="/contact"
              sx={{ mt: 1 }}
            >
              Start Your Modernization Journey
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
