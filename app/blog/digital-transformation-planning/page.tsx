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
  title: "Digital Transformation Planning for Businesses",
  description:
    "Learn how to plan digital transformation initiatives to modernize business processes, improve efficiency, and drive competitive advantage.",
  alternates: {
    canonical: "/blog/digital-transformation-planning",
  },
}, {
  type: "article",
  publishedTime: "2026-04-05",
  modifiedTime: "2026-04-05",
  image: "https://www.orionitservice.com/images/og-image.webp",
});

export default function DigitalTransformationArticle() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Digital Transformation Planning: Business Technology Strategy",
    description:
      "Learn how to plan digital transformation initiatives to modernize business processes, improve efficiency, and drive competitive advantage.",
    author: {
      "@type": "Organization",
      name: "Orion IT Service",
    },
    publisher: {
      "@type": "Organization",
      name: "Orion IT Service",
    },
    datePublished: "2026-04-05",
    dateModified: "2026-04-05",
    mainEntityOfPage:
      "https://www.orionitservice.com/blog/digital-transformation-planning",
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
        name: "Digital Transformation Planning",
        item: "https://www.orionitservice.com/blog/digital-transformation-planning",
      },
    ],
  };

  const currentSlug = "digital-transformation-planning";
  const relatedArticles = getRelatedArticlesBySlug(currentSlug);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <HeroBanner
        title="Blog"
        subtitle="Plan digital transformation to modernize business processes, improve efficiency, and leverage technology for competitive advantage."
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
                <Typography variant="body2">April 5, 2026</Typography>
              </Box>
            </Box>
            <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
              Digital Transformation Planning: Business Technology Strategy
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Digital transformation means more than buying new software. It's
              rethinking business processes around technology capabilities. It's
              modernizing systems, adopting cloud services, automating manual
              processes, improving data-driven decision-making, and changing
              organizational culture. Digital transformation can drive
              competitive advantage, improve customer experience, reduce costs,
              and accelerate growth. But poorly planned transformation wastes
              money, disrupts operations, and fails to deliver value.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Successful digital transformation requires clear vision, realistic
              planning, phased implementation, and change management.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Define Transformation Vision and Goals
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Start by defining what digital transformation means for your
              organization. What business problems are you solving? What
              opportunities are you capturing? What competitive advantage are
              you pursuing? Define specific, measurable goals. Reduce manual
              processes by 50%, improve customer satisfaction, reduce time to
              market, increase operational efficiency, improve data analytics
              capabilities.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Align transformation goals with business strategy. Transformation
              that doesn't support business strategy wastes resources.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Assess Current State
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Evaluate current systems, processes, skills, and culture. What
              systems are you using? How old is the technology? What are the
              limitations? What processes are manual? What opportunities for
              automation exist? What skills do you have? What gaps exist? What's
              the organizational appetite for change?
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Understanding current state and gaps helps identify priorities and
              realistic timelines.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Prioritize Initiatives
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Digital transformation is a portfolio of initiatives. You can't do
              everything at once. Prioritize based on business impact, effort
              required, skills available, and dependencies. Start with
              high-impact, achievable initiatives that build momentum. Early
              wins build confidence and support for larger efforts.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Balance quick wins with strategic transformation. A mix keeps
              organizations engaged.
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
              Implement transformation in phases rather than one big bang.
              Phases reduce risk, allow learning between phases, and reduce
              disruption. Each phase delivers value and builds toward the
              vision. Phased implementation also allows adjusting based on
              experience and changing business needs.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Change Management
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Technology is only part of transformation. Processes and people
              must change too. Communicate transformation vision and how it
              benefits the organization. Provide training on new systems and
              processes. Engage employees in transformation. Celebrate
              successes. Address resistance openly.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Organizations that manage change effectively get better
              transformation outcomes.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Governance and Metrics
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Establish governance structure to manage transformation. Define
              clear roles, decision-making authority, and escalation paths.
              Track progress against goals with clear metrics. Measure business
              impact, not just technology implementation.
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
              Digital transformation requires clear vision, realistic planning,
              phased implementation, and change management. Success depends on
              aligning technology with business strategy and engaging the
              organization in change.
            </Typography>

            <Button
              variant="contained"
              endIcon={<ArrowIcon />}
              href="/contact"
              sx={{ mt: 1 }}
            >
              Plan Your Digital Transformation
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
