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
  title: "IT Service Level Agreements | SLA Best Practices for IT Support",
  description:
    "Learn how to define, implement, and monitor IT service level agreements to set clear expectations and improve service delivery performance.",
  alternates: {
    canonical: "/blog/it-service-level-agreements-sla",
  },
};

export default function SLAArticle() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "IT Service Level Agreements: SLA Best Practices for IT Support",
    description:
      "Learn how to define, implement, and monitor IT service level agreements to set clear expectations and improve service delivery performance.",
    author: {
      "@type": "Organization",
      name: "Orion IT Service",
    },
    publisher: {
      "@type": "Organization",
      name: "Orion IT Service",
    },
    datePublished: "2026-03-20",
    dateModified: "2026-03-20",
    mainEntityOfPage:
      "https://www.orionitservice.com/blog/it-service-level-agreements-sla",
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
        name: "IT Service Level Agreements",
        item: "https://www.orionitservice.com/blog/it-service-level-agreements-sla",
      },
    ],
  };

  const currentSlug = "it-service-level-agreements-sla";
  const relatedArticles = getRelatedArticlesBySlug(currentSlug);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <HeroBanner
        title="Blog"
        subtitle="Service level agreements define expectations for IT support. Learn how to create meaningful SLAs that drive accountability and performance."
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
                <Typography variant="body2">March 20, 2026</Typography>
              </Box>
            </Box>
            <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
              IT Service Level Agreements: SLA Best Practices for IT Support
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              When IT support is informal—users ask for help, someone gets to it
              when they have time—expectations are unclear. When IT support has
              defined service level agreements, expectations are explicit. An
              SLA defines how quickly IT will respond to requests, how long to
              resolve issues, and what services are covered. Clear expectations
              help both IT and users understand what to expect, reduce
              frustration, and drive accountability.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Good SLAs are ambitious enough to motivate performance improvement
              but realistic enough that IT can actually meet them. SLAs that are
              consistently missed are worse than having no SLA because they
              damage credibility.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Key SLA Metrics
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Response time is how quickly IT acknowledges a request and begins
              work. A critical issue might have a 1-hour response time while a
              routine request might have a 24-hour response time. Response time
              matters for customer satisfaction—users at least know someone is
              working on their issue.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Resolution time is how long until the issue is actually fixed.
              This is more important than response time because users care about
              when they can get back to work. Resolution times vary based on
              issue type and severity. Complex issues might take longer than
              simple issues.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Availability metrics define when services are available. An SLA
              might commit to 99.9% uptime for critical services, meaning about
              44 minutes of downtime per month. Different services might have
              different availability targets.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Coverage defines what services are supported, what hours support
              is available, and what is not covered. An SLA might commit to
              email support during business hours but not outside business
              hours. It might cover standard applications but not custom-built
              tools.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Defining SLA Tiers
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Not all issues are equally urgent. Multi-tier SLAs define
              different service levels for different issue severities. Critical
              issues that stop production get immediate response. Urgent issues
              get quick response. Routine issues have longer response times.
              This focuses resources on the highest-impact issues.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Severity definitions should be clear. A critical issue might be
              defined as "affecting multiple users or critical business
              process." An urgent issue might be "affecting a single user but
              preventing work." A routine issue might be "convenience or
              non-urgent functionality."
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Monitoring and Reporting
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              SLAs are only useful if they're monitored and reported. Track
              response times, resolution times, and achievement rates. Regular
              reporting shows whether IT is meeting commitments or if SLAs need
              adjustment. Trends might show that a particular issue type takes
              longer than allocated, indicating need for training or process
              improvement.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Public reporting of SLA metrics creates accountability and shows
              users that IT is committed to service delivery. When IT
              consistently meets SLAs, user satisfaction improves and trust
              builds.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Escalation Procedures
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              If IT isn't meeting an SLA, escalation procedures ensure the issue
              gets attention. If a critical issue isn't resolved by its target
              time, it escalates to a manager. If it's still not resolved after
              escalation, it might escalate further. Clear escalation procedures
              ensure critical issues get the attention they deserve.
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
              Service level agreements set clear expectations for IT support,
              prioritize high-impact issues, and create accountability.
              Well-defined SLAs improve both IT performance and user
              satisfaction.
            </Typography>

            <Button
              variant="contained"
              endIcon={<ArrowIcon />}
              href="/contact"
              sx={{ mt: 1 }}
            >
              Define Your SLAs
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
