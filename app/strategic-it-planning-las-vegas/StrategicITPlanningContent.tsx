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
import { styled } from "@mui/system";
import LandingPageContactForm from "@/app/components/LandingPageContactForm";
import {
  CheckCircle as CheckIcon,
  ExpandMore as ExpandMoreIcon,
  Map as RoadmapIcon,
  Lightbulb as StrategyIcon,
  TrendingUp as GrowthIcon,
  Adjust as AlignmentIcon,
  BarChart as AnalyticsIcon,
  AttachMoney as CostIcon,
  Handshake as PartnershipIcon,
  Visibility as VisionIcon,
  Rocket as TransformIcon,
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
  borderColor: theme.palette.divider,
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

export default function StrategicITPlanningContent() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | false>(false);

  const handleFAQChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedFAQ(isExpanded ? panel : false);
    };

  const features = [
    {
      icon: <RoadmapIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "IT Roadmap Development",
      description:
        "3-year technology roadmap aligned with business goals and budget constraints",
    },
    {
      icon: <AlignmentIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Business Alignment",
      description:
        "Technology strategy tied directly to business objectives and growth plans",
    },
    {
      icon: <GrowthIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Digital Transformation",
      description:
        "Plan for modernizing systems, cloud migration, automation, and digital capabilities",
    },
    {
      icon: <CostIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Cost Optimization",
      description:
        "Identify cost savings through consolidation, cloud, and efficient technology choices",
    },
    {
      icon: <AnalyticsIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Performance Metrics",
      description:
        "Establish KPIs to measure technology ROI and business impact",
    },
    {
      icon: <StrategyIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Expert Guidance",
      description:
        "Industry experts guide technology decisions based on best practices and trends",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Assessment",
      description:
        "We assess your current IT environment, business goals, and technology maturity",
    },
    {
      step: "2",
      title: "Strategy Development",
      description:
        "We develop technology strategy aligned with business objectives and budget",
    },
    {
      step: "3",
      title: "Roadmap Creation",
      description:
        "We create detailed 3-year IT roadmap with priorities, timeline, and investments",
    },
    {
      step: "4",
      title: "Implementation Planning",
      description:
        "We plan implementation approach, timelines, and resource requirements",
    },
    {
      step: "5",
      title: "Execution & Review",
      description:
        "We guide implementation and review progress quarterly. Annual strategy updates.",
    },
  ];

  const faqs = [
    {
      question: "What does an IT roadmap include?",
      answer:
        "An IT roadmap outlines technology investments over 1-3 years, aligned with business goals. It typically includes infrastructure upgrades, software implementations, security improvements, cloud migration, digital transformation initiatives, staffing needs, budget allocations, and timelines.",
    },
    {
      question: "How often should I review my IT strategy?",
      answer:
        "We recommend annual IT strategy reviews to reflect technology changes, business shifts, and new opportunities. Major changes warrant mid-year reviews. Technology moves fast, so flexibility and adaptation are important.",
    },
    {
      question: "How does IT planning improve business results?",
      answer:
        "Strategic IT planning aligns technology with business goals, improves efficiency, reduces costs, enables growth, prevents wasteful technology spending, reduces security risk, and ensures you're investing in the right technology at the right time.",
    },
    {
      question: "Should we migrate to the cloud?",
      answer:
        "Cloud migration decisions depend on your workloads, data, and business needs. We analyze your current environment and recommend a hybrid, public, or private cloud strategy that maximizes benefits while minimizing risk.",
    },
    {
      question: "How do we prioritize technology investments?",
      answer:
        "We prioritize based on business impact, urgency, dependencies, ROI, and risk. Critical security improvements get priority. Then growth initiatives, efficiency improvements, and modernization in order of impact.",
    },
    {
      question: "What about budget constraints?",
      answer:
        "We work within your budget constraints and help you get maximum value from technology investments. We identify cost savings, phase investments over time, and prioritize highest-impact initiatives.",
    },
    {
      question: "How do you measure IT ROI?",
      answer:
        "We establish metrics for each initiative: productivity gains, cost savings, security improvements, uptime, employee satisfaction. We track these metrics to prove technology investments deliver business value.",
    },
    {
      question: "What if requirements change mid-year?",
      answer:
        "IT roadmaps are flexible and evolve with business needs. We build in flexibility and have quarterly reviews to adjust priorities based on business changes or new opportunities.",
    },
    {
      question: "How long does the planning process take?",
      answer:
        "Strategic planning typically takes 6-8 weeks from start to finished roadmap. This includes assessment, strategy development, roadmap creation, and stakeholder review cycles.",
    },
    {
      question: "Should we do digital transformation?",
      answer:
        "Digital transformation is right for most businesses. It improves efficiency, customer experience, employee productivity, and competitiveness. We help determine which initiatives matter most for your business.",
    },
    {
      question: "How much does strategic IT planning cost?",
      answer:
        "Strategic IT planning typically costs $15,000-50,000 depending on company size and complexity. ROI is typically achieved in the first year through cost savings and efficiency improvements.",
    },
    {
      question: "Will you help with implementation?",
      answer:
        "Yes. We guide implementation, manage vendors, oversee projects, and monitor progress. We can take a hands-on role or advisory role depending on your needs and internal resources.",
    },
  ];

  const stats = [
    { value: "250+", label: "IT Strategies Developed" },
    { value: "35%", label: "Avg Cost Savings" },
    { value: "3 years", label: "Typical Roadmap" },
    { value: "4.8/5", label: "Client Satisfaction" },
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
                Technology That Powers Growth
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
                Strategic IT planning aligned with your business goals. Clear
                roadmap. Optimized spending. Technology that delivers results.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <CTAButton
                  variant="contained"
                  href="/free-consultation"
                  size="large"
                >
                  Start Your IT Strategy
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
          background: "#f5f5f5",
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
      <StyledSection sx={{ backgroundColor: "#fafafa" }}>
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
            Strategic IT Planning Services
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
            Our Planning Process
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
            Is Your IT Helping or Holding You Back?
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
            Too many businesses spend money on technology without a clear
            strategy. Strategic IT planning ensures every technology investment
            supports your business goals.
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
              Schedule Planning Session
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
      <StyledSection sx={{ backgroundColor: "#fafafa" }}>
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
            Get Strategic. Get Results.
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Let's create a technology strategy that powers your business growth.
            Clear roadmap, optimized spending, measurable results. Schedule a
            planning session today.
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
            Start Your Strategy Today
          </CTAButton>
        </Container>
      </Box>
    </>
  );
}
