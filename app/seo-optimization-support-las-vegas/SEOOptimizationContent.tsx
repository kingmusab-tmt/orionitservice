"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import LandingPageContactForm from "@/app/components/LandingPageContactForm";
import {
  CheckCircle as CheckIcon,
  ExpandMore as ExpandMoreIcon,
  Search as KeywordIcon,
  TrendingUp as RankingIcon,
  Visibility as VisibilityIcon,
  ElectricBolt as SpeedIcon,
  Link as LinkIcon,
  Place as LocalIcon,
  BarChart as AnalyticsIcon,
  Settings as TechnicalIcon,
  Lightbulb as StrategyIcon,
} from "@mui/icons-material";

const HeroSection = styled(Box)(({ theme }) => ({
  background: "linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)",
  color: "white",
  padding: theme.spacing(10, 0),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(6, 0),
  },
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-50%",
    right: "-10%",
    width: "500px",
    height: "500px",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    zIndex: 0,
  },
}));

const StyledSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(6, 0),
  },
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: "100%",
  transition: "all 0.3s ease",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 20px rgba(0,0,0,0.1)",
  },
}));

const CTAButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)",
  fontSize: "1.1rem",
  fontWeight: 700,
  padding: theme.spacing(2, 5),
  borderRadius: "50px",
  textTransform: "none",
  transition: "all 0.3s ease",
  color: "white",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 10px 25px rgba(255, 107, 53, 0.3)",
  },
}));

const SecondaryCtaButton = styled(Button)(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: 700,
  padding: theme.spacing(1.5, 4),
  borderRadius: "50px",
  textTransform: "none",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

export default function SEOOptimizationContent() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | false>(false);

  const handleFAQChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedFAQ(isExpanded ? panel : false);
    };

  const features = [
    {
      icon: <KeywordIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Keyword Research & Strategy",
      description:
        "Find high-value keywords your customers are searching for. Develop strategy targeting search intent.",
    },
    {
      icon: <TechnicalIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Technical SEO Optimization",
      description:
        "Website structure, speed, mobile-friendliness, schema markup, and crawlability optimization.",
    },
    {
      icon: <VisibilityIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "On-Page Optimization",
      description:
        "Title tags, meta descriptions, headings, content optimization. Everything Google looks for.",
    },
    {
      icon: <LinkIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Link Building & Authority",
      description:
        "Quality backlinks from relevant sites. Build domain authority and trust signals.",
    },
    {
      icon: <LocalIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Local SEO Optimization",
      description:
        "Google Business Profile optimization, local citations, map rankings, local backlinks.",
    },
    {
      icon: <AnalyticsIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Performance Tracking",
      description:
        "Track rankings, traffic, conversions. Monthly reports show progress and ROI.",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "SEO Audit",
      description:
        "Comprehensive analysis of your website, competition, keywords, and ranking opportunities",
    },
    {
      step: "2",
      title: "Strategy Development",
      description:
        "Research target keywords, define strategy, and create roadmap for rankings",
    },
    {
      step: "3",
      title: "Implementation",
      description:
        "On-page optimization, technical fixes, content improvements, and architecture changes",
    },
    {
      step: "4",
      title: "Link Building",
      description:
        "Acquire quality backlinks and build domain authority through strategic outreach",
    },
    {
      step: "5",
      title: "Monitoring & Optimization",
      description:
        "Track rankings, monitor progress, optimize continuously, and adjust strategy",
    },
  ];

  const faqs = [
    {
      question: "How long does it take to improve Google rankings?",
      answer:
        "SEO takes time. You typically see initial results in 3-6 months. Significant improvements usually happen within 6-12 months. Competitive keywords may take longer. Ongoing optimization continues to improve results over time.",
    },
    {
      question: "What is technical SEO?",
      answer:
        "Technical SEO involves optimizing website structure, page speed, mobile-friendliness, XML sitemaps, robots.txt, internal linking, schema markup, and other technical factors that affect search engine crawling and indexing.",
    },
    {
      question: "Do you guarantee first page Google ranking?",
      answer:
        "No one can guarantee rankings, especially for competitive keywords. But we use proven strategies that improve visibility. We're transparent about what we do and track results with detailed reporting.",
    },
    {
      question: "What keywords should I target?",
      answer:
        "We research keywords your customers are searching for. We focus on high-intent keywords with good search volume and reasonable competition. We balance short-tail and long-tail keywords for maximum traffic.",
    },
    {
      question: "How much does SEO cost?",
      answer:
        "SEO services typically cost $1,000-5,000/month depending on competition, keywords, and scope. Local SEO is often less expensive. National/competitive keywords cost more. We provide transparent pricing and clear ROI expectations.",
    },
    {
      question: "What about local SEO?",
      answer:
        "Local SEO optimizes for location-based searches. We optimize your Google Business Profile, build local citations, get local backlinks, and optimize location pages. Great for businesses with physical locations.",
    },
    {
      question: "How do you build backlinks ethically?",
      answer:
        "We use white-hat link building: guest posting on relevant sites, resource pages, press releases, broken link building, and strategic partnerships. We avoid paid links, private blog networks, and other black-hat techniques.",
    },
    {
      question: "Can you improve my Google Business ranking?",
      answer:
        "Yes. We optimize your Google Business Profile with accurate info, photos, posts, and reviews. We build local citations and get local backlinks. This improves your Google Business visibility significantly.",
    },
    {
      question: "What tools do you use for SEO?",
      answer:
        "We use industry-leading tools: SEMrush, Ahrefs, Moz, Google Search Console, Google Analytics. These tools provide data for keyword research, competitor analysis, ranking tracking, and performance measurement.",
    },
    {
      question: "How do you handle algorithm updates?",
      answer:
        "Google updates its algorithm frequently. We stay current on changes and adjust strategy accordingly. Our focus on quality content, technical excellence, and ethical practices keeps your site resilient to updates.",
    },
    {
      question: "Can you help with PPC alongside SEO?",
      answer:
        "Yes. We recommend combining SEO with Google Ads (PPC) for comprehensive search visibility. Organic and paid search work well together for maximum traffic and conversions.",
    },
    {
      question: "How do you measure SEO success?",
      answer:
        "We track: keyword rankings, organic traffic, conversions from organic traffic, ROI, and revenue from organic search. Monthly reports show progress toward your business goals. Success is measured by revenue, not just rankings.",
    },
  ];

  const stats = [
    { value: "300+", label: "Websites Optimized" },
    { value: "45%", label: "Avg Ranking Improvement" },
    { value: "200+", label: "Top 10 Rankings Achieved" },
    { value: "4.9/5", label: "Client Rating" },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  fontWeight: 900,
                  mb: 3,
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                }}
              >
                Get Found on Google
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  fontWeight: 300,
                  fontSize: { xs: "1rem", md: "1.25rem" },
                  lineHeight: 1.6,
                }}
              >
                Improve your Google rankings. Increase organic traffic. Grow
                your business with proven SEO strategies. Measurable results.
                Real revenue.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <CTAButton
                  variant="contained"
                  href="/free-consultation"
                  size="large"
                >
                  Get SEO Audit
                </CTAButton>
                <SecondaryCtaButton
                  variant="outlined"
                  href="tel:+18882104378"
                  size="large"
                  sx={{
                    borderColor: "white",
                    color: "white",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    padding: "12px 40px",
                    borderRadius: "50px",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.1)",
                      borderColor: "white",
                    },
                  }}
                >
                  Call Now
                </SecondaryCtaButton>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
              <LandingPageContactForm />
            </Grid>
          </Grid>
        </Container>
      </HeroSection>

      {/* Stats Section */}
      <Box
        sx={{
          bgcolor: "background.muted",
          py: 3,
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={3}
            justifyContent="center"
            textAlign="center"
          >
            {stats.map((stat, index) => (
              <Grid size={{ xs: 6, sm: 4, md: 3 }} key={index}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 800, color: "primary.main" }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="body2">{stat.label}</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <StyledSection sx={{ backgroundColor: "background.subtle" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 800,
              textAlign: "center",
              mb: 6,
              fontSize: { xs: "1.8rem", md: "2.5rem" },
            }}
          >
            Comprehensive SEO Services
          </Typography>

          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <FeatureCard>
                  <CardContent>
                    <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{ fontWeight: 700, mb: 1 }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </FeatureCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </StyledSection>

      {/* How It Works */}
      <StyledSection>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 800,
              textAlign: "center",
              mb: 6,
              fontSize: { xs: "1.8rem", md: "2.5rem" },
            }}
          >
            Our SEO Process
          </Typography>

          <Grid container spacing={3}>
            {howItWorks.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    textAlign: "center",
                    border: "1px solid",
                    borderColor: "divider",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 8px 16px rgba(0,0,0,0.08)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 2,
                      color: "white",
                      fontWeight: 800,
                      fontSize: "1.5rem",
                    }}
                  >
                    {item.step}
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: 700, mb: 1 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </StyledSection>

      {/* CTA Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)",
          color: "white",
          py: 8,
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: "1.8rem", md: "2.5rem" },
            }}
          >
            Your Website Should Be Visible
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              fontWeight: 300,
              fontSize: { xs: "1rem", md: "1.2rem" },
              lineHeight: 1.6,
            }}
          >
            Most websites get zero organic traffic because nobody can find them.
            We fix that. Our proven SEO strategies get your website found by
            customers searching for what you offer.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            <CTAButton
              variant="contained"
              href="/free-consultation"
              size="large"
            >
              Start SEO Today
            </CTAButton>
            <SecondaryCtaButton
              variant="outlined"
              href="tel:+18882104378"
              size="large"
              sx={{
                borderColor: "white",
                color: "white",
                fontSize: "1.1rem",
                fontWeight: 700,
                padding: "12px 40px",
                borderRadius: "50px",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderColor: "white",
                },
              }}
            >
              (888) 210-4378
            </SecondaryCtaButton>
          </Stack>
        </Container>
      </Box>

      {/* FAQ Section */}
      <StyledSection sx={{ backgroundColor: "background.subtle" }}>
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 800,
              textAlign: "center",
              mb: 6,
              fontSize: { xs: "1.8rem", md: "2.5rem" },
            }}
          >
            Frequently Asked Questions
          </Typography>

          <Box>
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                expanded={expandedFAQ === `panel${index}`}
                onChange={handleFAQChange(`panel${index}`)}
                sx={{ mb: 2 }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: 600, fontSize: "1.05rem" }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" color="text.secondary">
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </StyledSection>

      {/* Final CTA */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)",
          color: "white",
          py: 6,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            Ready to Rank on Google?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Let's get your website found. Free SEO audit. No obligation. See
            your ranking opportunities and growth potential.
          </Typography>
          <CTAButton
            variant="contained"
            href="/free-consultation"
            size="large"
            sx={{
              background: "white",
              color: "#1a237e",
              "&:hover": {
                background: "rgba(255, 255, 255, 0.9)",
              },
            }}
          >
            Get Free SEO Audit
          </CTAButton>
        </Container>
      </Box>
    </>
  );
}
