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
  Settings as DesignIcon,
  Speed as PerformanceIcon,
  Security as SecurityIcon,
  Router as NetworkIcon,
  Wifi as WifiIcon,
  Cloud as ScalabilityIcon,
  Equalizer as MonitoringIcon,
  Handshake as SupportIcon,
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

export default function NetworkDesignContent() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | false>(false);

  const handleFAQChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedFAQ(isExpanded ? panel : false);
    };

  const features = [
    {
      icon: <DesignIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Custom Network Design",
      description:
        "Tailored designs based on your business needs, growth plans, and security requirements",
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Security Built-In",
      description:
        "Firewalls, VPNs, intrusion detection, and network segmentation from day one",
    },
    {
      icon: <PerformanceIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "High Performance",
      description:
        "Optimized for speed, redundancy, and reliability with enterprise-grade equipment",
    },
    {
      icon: <WifiIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Wired & Wireless",
      description:
        "Complete coverage with secure Wi-Fi and hardwired connections where needed",
    },
    {
      icon: <ScalabilityIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Scalable Infrastructure",
      description:
        "Grows with your business—add users, locations, or services without rebuilding",
    },
    {
      icon: <SupportIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Ongoing Support",
      description:
        "Professional management, monitoring, and support to keep your network running smoothly",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Network Assessment",
      description:
        "We evaluate your current network, growth plans, and security requirements",
    },
    {
      step: "2",
      title: "Custom Design",
      description:
        "We design a network optimized for performance, security, reliability, and growth",
    },
    {
      step: "3",
      title: "Equipment Procurement",
      description:
        "We source enterprise-grade equipment and negotiate best pricing for you",
    },
    {
      step: "4",
      title: "Implementation",
      description:
        "Professional installation, configuration, testing, and validation with minimal downtime",
    },
    {
      step: "5",
      title: "Management & Support",
      description:
        "Ongoing monitoring, updates, troubleshooting, and optimization included",
    },
  ];

  const faqs = [
    {
      question: "How much does network design and implementation cost?",
      answer:
        "Costs depend on network size, complexity, and components. Small office networks typically range $15,000-30,000. Mid-size businesses $30,000-75,000. Enterprise networks $75,000-200,000+. We provide detailed quotes after understanding your requirements.",
    },
    {
      question: "How long does network implementation take?",
      answer:
        "Timeline varies by scope. Small networks take 2-4 weeks. Medium networks 4-8 weeks. Larger enterprises 8-12 weeks. We plan phased implementations to minimize impact and often work nights/weekends to avoid business disruption.",
    },
    {
      question: "Will my network go down during implementation?",
      answer:
        "We design implementations for minimal or zero downtime using redundant systems, phased rollouts, and careful change management. We coordinate with your team and work during off-hours when possible.",
    },
    {
      question: "What about wireless networks?",
      answer:
        "We design and implement secure, enterprise-grade wireless networks with coverage planning, interference detection, and enterprise Wi-Fi security (WPA3, certificates, VLANs). We handle both office and remote locations.",
    },
    {
      question: "How secure is the network?",
      answer:
        "Security is built in from the start. We include firewalls, intrusion detection, network segmentation, VPNs, guest networks, and security monitoring. We also implement security best practices and compliance standards (PCI, HIPAA, etc.).",
    },
    {
      question: "What about remote locations or multi-site networks?",
      answer:
        "We design multi-site networks with secure connections between locations, centralized management, and redundancy. Whether you have 2 locations or 50, we build networks that work reliably across all sites.",
    },
    {
      question: "Can you integrate with our existing systems?",
      answer:
        "Yes. We work with your existing equipment when possible or replace/upgrade as needed. We ensure new networks integrate seamlessly with your servers, applications, phones, and security systems.",
    },
    {
      question: "What about disaster recovery and redundancy?",
      answer:
        "We design networks with redundancy—backup internet connections, redundant equipment, and failover capabilities. This ensures business continuity if primary connections fail.",
    },
    {
      question: "Do you provide training on the new network?",
      answer:
        "Yes. We train your IT staff on network management, troubleshooting, and maintenance. We also provide documentation and best practices guides.",
    },
    {
      question: "What about ongoing management and support?",
      answer:
        "We offer network services including  maintenance, security updates, performance optimization, and technical support. Plans start at $500-2000/month depending on network size.",
    },
    {
      question: "How do you handle growth as our business scales?",
      answer:
        "We design networks that scale. Adding users, locations, or services is straightforward without major redesigns. Upgrades are planned and implemented with minimal disruption.",
    },
    {
      question: "Can you help with network migration from our old system?",
      answer:
        "Absolutely. We manage the entire migration process—data transfer, user migration, cutover planning, and verification. We minimize downtime and ensure nothing falls through the cracks.",
    },
  ];

  const stats = [
    { value: "450+", label: "Networks Deployed" },
    { value: "99.8%", label: "Network Uptime" },
    { value: "$5M+", label: "Equipment Savings" },
    { value: "24/7", label: "Monitoring & Support" },
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
                Enterprise-Grade Networks Built for Growth
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
                Custom network design and implementation. Secure, reliable,
                high-performance networks that support your business growth
                without interruption.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <CTAButton
                  variant="contained"
                  href="/free-consultation"
                  size="large"
                >
                  Get Free Network Design Consultation
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
            Professional Network Solutions
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
            Our Network Implementation Process
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
            Your Network Is Your Business
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
            Network downtime costs thousands per hour. Build a network designed
            for reliability, security, and growth. Get a free consultation
            today.
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
              Schedule Free Consultation
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
            Don't Settle for a Second-Rate Network
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Get a professional network design built for your business. Free
            consultation. No obligation. Let's talk about your network needs.
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
            Get Free Consultation Now
          </CTAButton>
        </Container>
      </Box>
    </>
  );
}
