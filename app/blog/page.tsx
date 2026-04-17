import type { Metadata } from "next";
import HeroBanner from "../components/HeroBanner";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import {
  ArrowForward as ArrowIcon,
  CalendarToday as CalendarIcon,
  Person as PersonIcon,
} from "@mui/icons-material";

export const metadata: Metadata = {
  title: "Orion IT Insights",
  description:
    "Read practical managed IT, cybersecurity, networking, and website development insights for Las Vegas businesses and distributed teams across the US and UK.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const featuredPost = {
    title:
      "How Managed IT Services Reduce Downtime for Small and Mid-Sized Businesses",
    excerpt:
      "Downtime impacts productivity, customer experience, and revenue. Learn how proactive monitoring, patch management, and strategic IT planning help Las Vegas businesses maintain reliable daily operations.",
    category: "Managed IT",
    author: "Orion IT Service Team",
    date: "April 17, 2026",
  };

  const posts = [
    {
      title: "Cybersecurity Basics Every Business Should Implement in 2026",
      excerpt:
        "A practical guide to multi-factor authentication, endpoint protection, phishing awareness, and backup strategy for stronger business resilience and compliance readiness.",
      category: "Cybersecurity",
      author: "Orion IT Service Team",
      date: "April 14, 2026",
      href: "/blog/cybersecurity-basics-every-business-should-implement-in-2026",
    },
    {
      title: "Why Your Office WiFi Is Slow and How to Fix It",
      excerpt:
        "Discover the common causes of poor wireless performance and the infrastructure improvements that deliver better speed, coverage, and reliability.",
      category: "Networking",
      author: "Orion IT Service Team",
      date: "April 12, 2026",
      href: "/blog/why-your-office-wifi-is-slow-and-how-to-fix-it",
    },
    {
      title:
        "Website Speed Optimization Checklist for Better SEO and Conversions",
      excerpt:
        "Page speed affects rankings and user behavior. Use this checklist to improve Core Web Vitals, reduce bounce rate, and increase lead generation.",
      category: "Website Development",
      author: "Orion IT Service Team",
      date: "April 9, 2026",
      href: "/blog/website-speed-optimization-checklist-for-better-seo-and-conversions",
    },
    {
      title: "How to Build a Practical IT Roadmap for Business Growth",
      excerpt:
        "Technology planning should support business goals. Learn how to prioritize upgrades, budget effectively, and avoid costly reactive decisions.",
      category: "IT Strategy",
      author: "Orion IT Service Team",
      date: "April 6, 2026",
      href: "/blog/how-to-build-a-practical-it-roadmap-for-business-growth",
    },
    {
      title: "Cloud Security Best Practices for Microsoft 365 Environments",
      excerpt:
        "Protect cloud collaboration tools with stronger access controls, policy configuration, user lifecycle management, and ongoing monitoring.",
      category: "Cloud Security",
      author: "Orion IT Service Team",
      date: "April 3, 2026",
      href: "/blog/cloud-security-best-practices-for-microsoft-365-environments",
    },
    {
      title: "Break-Fix vs Managed IT: Which Model Saves More Over Time?",
      excerpt:
        "Compare reactive support and proactive service models to understand total cost, risk exposure, and long-term operational impact.",
      category: "Managed IT",
      author: "Orion IT Service Team",
      date: "March 30, 2026",
      href: "/blog/break-fix-vs-managed-it-which-model-saves-more-over-time",
    },
  ];

  const categories = [
    "Cybersecurity",
    "Managed IT Services",
    "Cloud Migration",
    "Data Backup & Recovery",
    "Network Infrastructure",
    "IT Consulting",
    "Help Desk Support",
    "Business Continuity",
    "VoIP Solutions",
    "IT Strategy",
    "Website Development",
  ];

  return (
    <>
      <HeroBanner
        title="Orion IT Insights"
        subtitle="Practical technology guidance for security, performance, and business growth"
        ctaText="Contact Our Team"
        ctaLink="/contact"
        image="/images/serveroom2.webp"
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box mb={8}>
          <Chip
            label="FEATURED ARTICLE"
            color="primary"
            sx={{ mb: 2, fontWeight: 700, letterSpacing: 0.8 }}
          />
          <Paper elevation={2} sx={{ p: { xs: 3, md: 5 } }}>
            <Chip
              label={featuredPost.category}
              color="secondary"
              sx={{ mb: 2 }}
            />
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: "1.8rem", md: "2.4rem" },
              }}
            >
              {featuredPost.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                flexWrap: "wrap",
                mb: 2,
                color: "text.secondary",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <PersonIcon fontSize="small" />
                <Typography variant="body2">{featuredPost.author}</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CalendarIcon fontSize="small" />
                <Typography variant="body2">{featuredPost.date}</Typography>
              </Box>
            </Box>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.85, mb: 3 }}
            >
              {featuredPost.excerpt}
            </Typography>
            <Button
              variant="contained"
              endIcon={<ArrowIcon />}
              href="/blog/how-managed-it-services-reduce-downtime-for-small-and-mid-sized-businesses"
            >
              Read Article
            </Button>
          </Paper>
        </Box>

        <Box mb={8}>
          <Typography
            variant="h4"
            component="h3"
            sx={{ fontWeight: 800, mb: 3 }}
          >
            Browse by Topic
          </Typography>
          <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                variant="outlined"
                color="primary"
              />
            ))}
          </Box>
        </Box>

        <Box mb={8}>
          <Typography
            variant="h4"
            component="h3"
            sx={{ fontWeight: 800, mb: 4 }}
          >
            Latest Articles
          </Typography>
          <Grid container spacing={3}>
            {posts.map((post) => (
              <Grid size={{ xs: 12, md: 6 }} key={post.title}>
                <Card sx={{ height: "100%" }}>
                  <CardContent sx={{ p: 3 }}>
                    <Chip
                      label={post.category}
                      size="small"
                      color="primary"
                      sx={{ mb: 2 }}
                    />
                    <Typography
                      variant="h6"
                      component="h4"
                      sx={{ fontWeight: 700, mb: 1.5 }}
                    >
                      {post.title}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 2,
                        flexWrap: "wrap",
                        mb: 2,
                        color: "text.secondary",
                      }}
                    >
                      <Typography variant="caption">{post.author}</Typography>
                      <Typography variant="caption">{post.date}</Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2.5 }}
                    >
                      {post.excerpt}
                    </Typography>
                    <Button
                      size="small"
                      endIcon={<ArrowIcon />}
                      href={post.href ?? "/contact"}
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Paper
          elevation={0}
          sx={{
            backgroundColor: "primary.light",
            color: "primary.contrastText",
            p: { xs: 4, md: 6 },
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            component="h3"
            sx={{ fontWeight: 800, mb: 2 }}
          >
            Need Help With Your IT Strategy?
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 760, mx: "auto", mb: 3 }}>
            Our team helps businesses turn technical challenges into clear
            action plans. Talk to us about cybersecurity, networking, managed
            IT, or website development.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            href="/contact"
          >
            Book a Consultation
          </Button>
        </Paper>
      </Container>
    </>
  );
}
