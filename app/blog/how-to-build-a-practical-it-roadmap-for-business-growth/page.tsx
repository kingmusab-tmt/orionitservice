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
import { blogArticles } from "../blogArticles";

export const metadata: Metadata = {
  title: "IT Roadmap for Growth | Practical Planning for Business",
  description:
    "Learn how to build a business-focused IT roadmap that supports security, planning, budgeting, and long-term growth.",
  alternates: {
    canonical: "/blog/how-to-build-a-practical-it-roadmap-for-business-growth",
  },
};

export default function ITRoadmapArticle() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "How to Build a Practical IT Roadmap for Business Growth",
    description:
      "Learn how to build a business-focused IT roadmap that supports security, planning, budgeting, and long-term growth.",
    author: {
      "@type": "Organization",
      name: "Orion IT Service",
    },
    publisher: {
      "@type": "Organization",
      name: "Orion IT Service",
    },
    datePublished: "2026-04-06",
    dateModified: "2026-04-06",
    mainEntityOfPage:
      "https://www.orionitservice.com/blog/how-to-build-a-practical-it-roadmap-for-business-growth",
    image: ["https://www.orionitservice.com/images/serveroom2.webp"],
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
        name: "How to Build a Practical IT Roadmap for Business Growth",
        item: "https://www.orionitservice.com/blog/how-to-build-a-practical-it-roadmap-for-business-growth",
      },
    ],
  };

  const currentSlug = "how-to-build-a-practical-it-roadmap-for-business-growth";
  const relatedArticles = blogArticles
    .filter((article) => article.slug !== currentSlug)
    .slice(0, 4);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <HeroBanner
        title="Blog"
        subtitle="A business-first guide to planning technology that supports growth, security, and scale"
        ctaText="Contact Our Team"
        ctaLink="/contact"
        image="/images/serveroom2.webp"
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
                <Typography variant="body2">April 6, 2026</Typography>
              </Box>
            </Box>
            <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
              How to Build a Practical IT Roadmap for Business Growth
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              A practical IT roadmap helps a business move from reactive
              technology decisions to a more intentional plan for growth.
              Instead of buying tools only when something breaks or when a team
              member asks for a new system, a roadmap gives leadership a
              structured way to prioritize investments, reduce risk, and align
              technology with business goals. For small and mid-sized businesses
              especially, this kind of planning can make the difference between
              technology that constantly lags behind and technology that
              actively supports growth.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              The starting point for any IT roadmap is understanding where the
              business is today. That means reviewing current hardware,
              software, cloud platforms, network infrastructure, backup
              processes, security controls, and user support needs. It also
              means asking practical questions about pain points. Which systems
              create recurring tickets? Which tools are outdated? Where are the
              security gaps? Which processes slow the team down? A roadmap
              becomes useful when it is built on a clear picture of the
              environment rather than assumptions.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Once the current environment is understood, priorities can be set.
              Not every technology issue deserves the same level of urgency.
              Some items are operational problems that affect daily work, while
              others are strategic investments that improve scalability,
              security, or efficiency over time. A practical roadmap should
              separate those concerns and identify what needs immediate
              attention, what can be scheduled, and what should be evaluated as
              the business grows. That helps leadership avoid spending in the
              wrong place while still addressing the most important risks.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Security should always be part of the roadmap rather than a
              separate afterthought. Businesses often focus on visible tools
              like laptops, servers, or software licenses, but security gaps can
              exist across many layers of the environment. A roadmap should
              account for patch management, endpoint protection, access
              controls, backup strategy, user training, and network security.
              When those items are planned intentionally, the business can
              reduce exposure while avoiding the confusion that comes from
              treating security as an occasional project instead of an ongoing
              requirement.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              A strong roadmap also needs to consider growth. Technology that
              works well for a ten-person team may not work the same way for a
              thirty-person team or a distributed workforce. New locations,
              remote staff, cloud adoption, and customer-facing systems all
              create different demands on infrastructure. Planning for scale
              means thinking ahead about bandwidth, device standards, backup
              capacity, software integration, support coverage, and budget. When
              businesses plan these changes in advance, upgrades are less
              disruptive and more cost-effective.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Budgeting is another area where a roadmap creates value. Without a
              plan, IT spending often becomes unpredictable because purchases
              happen in response to emergencies. A roadmap helps leadership
              spread costs across the year, prepare for lifecycle replacements,
              and justify investments with clearer business reasoning. Instead
              of reacting to surprise failures, the company can forecast
              upcoming needs and make decisions that fit both operational and
              financial goals.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              The most effective roadmaps are also realistic. They do not try to
              solve every issue at once. They create a sequence of improvements
              that can be delivered in phases. The first phase might stabilize
              security and support. The next phase might modernize
              infrastructure or improve cloud workflows. A later phase might
              focus on automation, reporting, or customer-facing upgrades. This
              phased approach is easier for teams to manage and helps the
              business see progress without overwhelming operations.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              A Practical Example
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Imagine a growing company that has been using the same mix of
              hardware, cloud apps, and support habits for years. The technology
              works well enough, but there is no documented plan for upgrades,
              backups are not tested regularly, and staff members are using
              different tools to solve the same problems. An IT roadmap begins
              by documenting the environment, identifying the biggest risks, and
              setting a sequence of improvements. Security comes first, then
              network and device standardization, then cloud optimization and
              user support improvements. Within a few planning cycles, the
              business has a clearer technology path and fewer unexpected
              surprises.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              That is the real benefit of a practical IT roadmap. It turns
              technology from a collection of disconnected decisions into a
              business asset that can be planned, measured, and improved over
              time. When leadership knows what is coming next, they can make
              better decisions, reduce operational friction, and invest in
              systems that actually support growth.
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
              A practical IT roadmap should focus on current pain points,
              security, scale, and budget. When those areas are planned
              together, businesses make smarter technology decisions and create
              a stronger foundation for growth.
            </Typography>

            <Button
              variant="contained"
              endIcon={<ArrowIcon />}
              href="/contact"
              sx={{ mt: 1 }}
            >
              Talk to Our IT Strategy Team
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
