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
  PhoneInTalk as SupportIcon,
  DirectionsRun as FastIcon,
  Shield as SecurityIcon,
  Troubleshoot as DiagnosticsIcon,
  Build as RepairIcon,
  BarChart as MonitoringIcon,
  Error as AlertIcon,
  CheckCircleOutline as ResolvedIcon,
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

export default function NetworkTroubleshootingContent() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | false>(false);

  const handleFAQChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedFAQ(isExpanded ? panel : false);
    };

  const features = [
    {
      icon: <SupportIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "24/7/365 Support",
      description:
        "Always available. Nights, weekends, holidays—we're here when you need us",
    },
    {
      icon: <FastIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Fast Response Times",
      description:
        "Critical issues handled within 30 minutes. Most issues resolved within 2-4 hours",
    },
    {
      icon: <DiagnosticsIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Expert Diagnostics",
      description:
        "Quickly identify root causes and implement lasting solutions",
    },
    {
      icon: <RepairIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Hardware & Software",
      description:
        "Fix equipment failures, configuration issues, software problems, and connectivity issues",
    },
    {
      icon: <MonitoringIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Proactive Monitoring",
      description:
        "We catch problems before they become outages through 24/7 network monitoring",
    },
    {
      icon: <ResolvedIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Same-Day Resolution",
      description:
        "95% of issues resolved same-day. Minimize downtime and get back to business",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Alert Received",
      description: "We detect issues through monitoring or receive your alert",
    },
    {
      step: "2",
      title: "Quick Response",
      description:
        "Support team engages immediately for critical issues (30 min), others within 2 hours",
    },
    {
      step: "3",
      title: "Remote Diagnostics",
      description:
        "We diagnose the issue remotely and implement quick fixes when possible",
    },
    {
      step: "4",
      title: "On-Site if Needed",
      description:
        "For hardware issues, we dispatch technicians same-day for urgent problems",
    },
    {
      step: "5",
      title: "Resolution & Follow-Up",
      description:
        "We confirm resolution, document the issue, and prevent future occurrences",
    },
  ];

  const faqs = [
    {
      question: "How fast can you resolve network issues?",
      answer:
        "Response times depend on severity. Critical outages get a support engineer within 30 minutes. Most issues are resolved within 2-4 hours. We achieve same-day resolution for 95% of issues. For hardware failures requiring replacement, we dispatch technicians same-day.",
    },
    {
      question: "Do you offer 24/7 support?",
      answer:
        "Yes. We provide 24/7/365 network support including nights, weekends, and holidays. You can reach us by phone, email, or remote support portal anytime.",
    },
    {
      question: "What types of network issues do you handle?",
      answer:
        "We handle all network issues including connectivity failures, slow speeds, Wi-Fi problems, equipment failures, configuration issues, VPN problems, phone system issues, internet outages, routing problems, and security incidents.",
    },
    {
      question: "Do you monitor networks proactively?",
      answer:
        "Yes. We monitor networks 24/7 for issues and can catch problems before they cause outages. Proactive monitoring reduces downtime and prevents emergency calls.",
    },
    {
      question: "Can you help with specific applications not working?",
      answer:
        "Yes. We troubleshoot application connectivity issues including database connectivity, server access, cloud application issues, VPN connectivity, and other network-related application problems.",
    },
    {
      question: "What about support during our busy seasons?",
      answer:
        "We scale our team to handle peak demand. Critical issues always get priority response regardless of season or time of day.",
    },
    {
      question: "How do I contact support?",
      answer:
        "Contact support by phone (888) 412-2885, email, or through your support portal. Critical issues can be escalated immediately. We have dedicated support numbers for different urgency levels.",
    },
    {
      question: "Do you charge for after-hours support?",
      answer:
        "Support is included in your service plan. After-hours emergency response for critical issues is covered. Additional fees only apply for non-standard services.",
    },
    {
      question: "Can you help if we have a security incident?",
      answer:
        "Yes. We provide incident response for security events including suspicious network activity, potential breaches, and malware infections. We take immediate action to isolate systems and contain threats.",
    },
    {
      question: "What if I need to replace failed equipment?",
      answer:
        "We can recommend equipment, source it quickly, and install it same-day for critical issues. We minimize downtime and handle all configuration.",
    },
    {
      question: "How do you prevent issues from recurring?",
      answer:
        "We document all issues, identify root causes, implement fixes, and recommend preventive measures. We monitor for similar issues to catch them early.",
    },
    {
      question: "Can I speak to a technical expert?",
      answer:
        "Absolutely. We escalate to senior engineers for complex issues. You're not stuck with level-1 support—we get the right expert on your issue immediately.",
    },
  ];

  const stats = [
    { value: "30 min", label: "Avg Critical Response" },
    { value: "95%", label: "Same-Day Resolution" },
    { value: "2.5 hrs", label: "Avg Issue Resolution" },
    { value: "1000+", label: "Businesses Supported" },
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
                Network Problem? We're On It.
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
                Fast, expert network troubleshooting and 24/7 support. Get
                issues resolved quickly and get back to business. 30-minute
                critical response. 95% same-day resolution.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <CTAButton
                  variant="contained"
                  href="/free-consultation"
                  size="large"
                >
                  Get Support Now
                </CTAButton>
                <SecondaryCtaButton
                  variant="outlined"
                  href="tel:+1888412885"
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
            Expert Network Support You Can Trust
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
            How We Support Your Network
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
            Network Down? We'll Get You Back Up.
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
            Don't wait for IT support. Get expert help fast. Critical response
            in 30 minutes. Most issues resolved same-day. Call now for immediate
            assistance.
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
              Get Support Now
            </CTAButton>
            <SecondaryCtaButton
              variant="outlined"
              href="tel:+1888412885"
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
              (888) 412-2885
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
            Network Problems Don't Solve Themselves
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Get expert support fast. 24/7 availability. 30-minute critical
            response. Call now or request support through our portal.
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
            Get Help Now
          </CTAButton>
        </Container>
      </Box>
    </>
  );
}
