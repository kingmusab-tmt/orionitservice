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
  Speed as SpeedIcon,
  TrendingUp as PerformanceIcon,
  Assessment as DiagnosticsIcon,
  Tune as OptimizationIcon,
  Equalizer as MonitoringIcon,
  ElectricBolt as EfficiencyIcon,
  BarChart as AnalyticsIcon,
  Settings as ConfigIcon,
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

export default function NetworkPerformanceContent() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | false>(false);

  const handleFAQChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedFAQ(isExpanded ? panel : false);
    };

  const features = [
    {
      icon: <DiagnosticsIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Complete Diagnostics",
      description:
        "Identify bottlenecks, bandwidth hogs, and performance issues across your entire network",
    },
    {
      icon: <OptimizationIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Smart Optimization",
      description:
        "Tune configurations, optimize routing, and allocate bandwidth efficiently",
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Speed Improvements",
      description:
        "Typical 30-70% speed increase through configuration and infrastructure optimization",
    },
    {
      icon: <EfficiencyIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Latency Reduction",
      description:
        "Reduce lag and delays for real-time applications, VoIP, video conferencing",
    },
    {
      icon: <MonitoringIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Continuous Monitoring",
      description:
        "Real-time performance monitoring and automatic optimization recommendations",
    },
    {
      icon: <AnalyticsIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Performance Reports",
      description:
        "Detailed analytics showing improvements, costs saved, and ROI of optimization",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Performance Baseline",
      description: "We measure current network speed, latency, and throughput",
    },
    {
      step: "2",
      title: "Issue Identification",
      description:
        "We identify bottlenecks, bandwidth hogs, and root causes of slowdowns",
    },
    {
      step: "3",
      title: "Optimization Plan",
      description:
        "We create a plan to improve performance through config tuning and upgrades if needed",
    },
    {
      step: "4",
      title: "Implementation",
      description:
        "We implement optimizations with minimal disruption and verify improvements",
    },
    {
      step: "5",
      title: "Ongoing Monitoring",
      description:
        "Continuous monitoring and optimization keeps performance high",
    },
  ];

  const faqs = [
    {
      question: "How much faster will my network be after optimization?",
      answer:
        "Typical improvements range from 30-70% speed increase depending on current bottlenecks and root causes. We measure baseline performance before starting and guarantee specific improvements. Some customers see even greater improvements with upgrades.",
    },
    {
      question: "What causes network slowdowns?",
      answer:
        "Common causes include outdated network equipment, poor network design, misconfiguration, too many devices on limited bandwidth, applications hogging bandwidth, wireless interference, ISP issues, and congestion during peak hours. We identify and fix root causes.",
    },
    {
      question: "Do you need to replace equipment to improve performance?",
      answer:
        "Not always. We optimize existing equipment first through configuration tuning and software optimization. Equipment upgrades are only recommended when necessary for significant improvements. This saves money while still delivering results.",
    },
    {
      question: "How long does optimization take?",
      answer:
        "Initial diagnostics and baseline testing take 1-2 days. Optimization implementation varies from a few hours to a few days depending on scope. Most improvements are immediate after implementation.",
    },
    {
      question: "Will optimization cause network downtime?",
      answer:
        "We minimize downtime through careful planning and implementation. Many optimizations require zero downtime. Where brief downtime is needed, we schedule during off-hours and notify users in advance.",
    },
    {
      question: "What about cloud and remote applications?",
      answer:
        "We optimize networks for cloud applications, SaaS, video conferencing, VoIP, and remote work. We identify ISP issues, routing inefficiencies, and DNS problems that slow cloud performance and fix them.",
    },
    {
      question: "Can you optimize wireless performance?",
      answer:
        "Yes. We optimize Wi-Fi through channel assignment, interference mitigation, access point placement, and configuration tuning. We also identify and separate bandwidth-heavy devices.",
    },
    {
      question: "What about video conferencing quality?",
      answer:
        "Poor video quality is often a network issue. We optimize for video conferencing by reducing latency, prioritizing video traffic, ensuring adequate bandwidth, and fixing connectivity issues.",
    },
    {
      question: "How much does network optimization cost?",
      answer:
        "Optimization typically ranges from $2,000-10,000 depending on network size and complexity. Many customers see ROI through increased productivity and reduced bandwidth costs within weeks.",
    },
    {
      question: "Can you improve VoIP quality?",
      answer:
        "Absolutely. VoIP quality depends on low latency and consistent bandwidth. We optimize networks specifically for VoIP, reducing jitter and ensuring quality calls.",
    },
    {
      question: "What about employee productivity?",
      answer:
        "Slow networks kill productivity. Faster networks mean faster file access, quicker uploads/downloads, better video conferencing, and less time waiting. Optimization often results in measurable productivity gains.",
    },
    {
      question: "Is optimization guaranteed?",
      answer:
        "We guarantee improvements. If we can't achieve targeted improvements through optimization, we recommend specific upgrades that will. You'll see results or we'll identify what's needed to get them.",
    },
  ];

  const stats = [
    { value: "850+", label: "Networks Optimized" },
    { value: "50%", label: "Avg Speed Increase" },
    { value: "$2.5M+", label: "Client Productivity Gains" },
    { value: "24/7", label: "Performance Monitoring" },
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
                Network Running Slow?
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
                We'll find what's slowing you down and fix it. Speed up your
                network by 30-70% through expert optimization. Improve
                productivity and save on bandwidth costs.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <CTAButton
                  variant="contained"
                  href="/free-consultation"
                  size="large"
                >
                  Get Free Performance Audit
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
            Professional Network Optimization
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
            Our Optimization Process
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
            Stop Wasting Time Waiting
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
            Slow networks kill productivity and frustrate employees. We'll find
            the problem, fix it, and get you back to fast, reliable performance.
            Free performance audit.
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
              Schedule Free Audit
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
            Every Second Counts
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Slow networks cost your business money in lost productivity. Let's
            make your network faster. Free performance audit—no obligation.
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
            Get Free Audit Now
          </CTAButton>
        </Container>
      </Box>
    </>
  );
}
