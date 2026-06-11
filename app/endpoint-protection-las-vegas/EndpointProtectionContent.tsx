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
  Security as ShieldIcon,
  Devices as DevicesIcon,
  Speed as SpeedIcon,
  Visibility as VisibilityIcon,
  Block as BlockIcon,
  AutoFixHigh as AutoResponseIcon,
  TrendingUp as TrendingIcon,
  Lock as ProtectionIcon,
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

export default function EndpointProtectionContent() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | false>(false);

  const handleFAQChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedFAQ(isExpanded ? panel : false);
    };

  const features = [
    {
      icon: <ShieldIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Advanced Threat Detection",
      description:
        "AI-powered detection of ransomware, malware, zero-day exploits, and unknown threats",
    },
    {
      icon: <VisibilityIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Complete Visibility",
      description:
        "Real-time monitoring of all devices, processes, file activity, and network connections",
    },
    {
      icon: <AutoResponseIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Automated Response",
      description:
        "Automatic isolation and quarantine of threats before they spread",
    },
    {
      icon: <BlockIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Ransomware Protection",
      description:
        "Behavioral analysis and encryption prevention to stop ransomware attacks",
    },
    {
      icon: <DevicesIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Cross-Platform",
      description:
        "Protection for Windows, Mac, Linux, and mobile devices from one console",
    },
    {
      icon: <TrendingIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "EDR & Threat Hunting",
      description:
        "Advanced threat hunting and incident investigation tools included",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Assessment",
      description:
        "We evaluate your current endpoint security posture and gaps",
    },
    {
      step: "2",
      title: "Deploy Protection",
      description:
        "Install lightweight endpoint protection agents on all devices",
    },
    {
      step: "3",
      title: "Monitor 24/7",
      description:
        "Real-time threat detection and AI-powered analysis begins immediately",
    },
    {
      step: "4",
      title: "Automatic Response",
      description:
        "Threats are automatically isolated and quarantined before damage occurs",
    },
    {
      step: "5",
      title: "Continuous Updates",
      description:
        "New threat intelligence and updates deployed automatically daily",
    },
  ];

  const faqs = [
    {
      question:
        "What's the difference between antivirus and endpoint protection?",
      answer:
        "Traditional antivirus is reactive—it blocks known viruses. Endpoint protection (EDR) is proactive with AI-powered behavior analysis, zero-day threat detection, automatic response, and threat hunting capabilities. EDR is enterprise-grade protection.",
    },
    {
      question: "Will endpoint protection slow down my computers?",
      answer:
        "Modern endpoint protection uses minimal system resources with <5% performance impact in most cases. Many users notice no difference at all. The security benefit far outweighs any minor performance consideration.",
    },
    {
      question: "Does this protect against ransomware?",
      answer:
        "Absolutely. Our endpoint protection includes advanced ransomware defense through behavioral analysis, encryption prevention, process isolation, and automatic response. We've stopped ransomware before encryption even begins.",
    },
    {
      question: "Can it work with my existing antivirus?",
      answer:
        "Yes. Endpoint protection works alongside or can replace existing security tools. We'll coordinate deployment to avoid conflicts and ensure seamless integration with your security stack.",
    },
    {
      question: "What about remote and mobile devices?",
      answer:
        "Our endpoint protection works for office, remote, and mobile devices. Whether employees are in the office or traveling, all devices get the same enterprise-grade protection.",
    },
    {
      question: "How quickly can you respond to threats?",
      answer:
        "Our systems detect and isolate threats in seconds, often before the user even knows there's a problem. For critical threats, automatic isolation happens within milliseconds.",
    },
    {
      question: "Do we need a dedicated IT person to manage this?",
      answer:
        "The system is designed to be low-maintenance with automation handling most tasks. We provide ongoing management, monitoring, and support so you don't need dedicated security staff.",
    },
    {
      question: "How much does endpoint protection cost?",
      answer:
        "Pricing is typically $3-8 per device per month depending on the level of features and threat hunting included. We provide a custom quote based on your number of devices.",
    },
    {
      question: "Is endpoint protection compliant with regulations?",
      answer:
        "Yes. Our solution is compliant with HIPAA, PCI, SOC 2, NIST, and other regulatory requirements. We provide compliance reports and audit logs for your records.",
    },
    {
      question: "Can you help if we get hit by ransomware?",
      answer:
        "Yes. Our EDR tools help with incident investigation, malware analysis, and recovery planning. We document the attack for law enforcement and insurance purposes.",
    },
    {
      question: "What about false positives?",
      answer:
        "Our AI is trained to minimize false positives while maintaining high detection accuracy. When alerts do occur, they're thoroughly investigated before any action is taken.",
    },
  ];

  const stats = [
    { value: "99.8%", label: "Threat Detection Rate" },
    { value: "<2 sec", label: "Average Detection Time" },
    { value: "1000+", label: "Daily Threat Updates" },
    { value: "24/7", label: "SOC Monitoring" },
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
                Enterprise-Grade Endpoint Protection
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
                Detect and stop ransomware, malware, and zero-day threats before
                they damage your business. Real-time monitoring. Automatic
                response. 24/7 SOC support.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <CTAButton
                  variant="contained"
                  href="/free-consultation"
                  size="large"
                >
                  Get Free Security Assessment
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
            Complete Endpoint Protection
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
            Our Implementation Process
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
            Stop Threats Before They Become Breaches
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
            Get enterprise-grade endpoint protection with 24/7 monitoring and
            automatic threat response. Free security assessment included—no
            obligation.
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
              Schedule Free Assessment
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
            Ransomware Can Happen to Any Business
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Don't be the next victim. Get protected today with a free
            assessment.
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
            Get Free Assessment Now
          </CTAButton>
        </Container>
      </Box>
    </>
  );
}
