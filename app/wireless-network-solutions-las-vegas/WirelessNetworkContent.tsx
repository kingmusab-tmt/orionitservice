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
  Wifi as WifiIcon,
  SignalCellularAlt as SignalIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
  Devices as DevicesIcon,
  Equalizer as ManagementIcon,
  LocationOn as CoverageIcon,
  ElectricBolt as PerformanceIcon,
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

export default function WirelessNetworkContent() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | false>(false);

  const handleFAQChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedFAQ(isExpanded ? panel : false);
    };

  const features = [
    {
      icon: <CoverageIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Complete Coverage",
      description:
        "100% wireless coverage throughout your facility with no dead zones or weak spots",
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Enterprise Security",
      description:
        "WPA3 encryption, certificate authentication, separate networks, and security monitoring",
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "High Performance",
      description:
        "WiFi 6/6E technology with speeds up to 10+ Gbps and low latency for demanding applications",
    },
    {
      icon: <DevicesIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Seamless Roaming",
      description:
        "Users stay connected while moving between access points without interruption",
    },
    {
      icon: <ManagementIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Centralized Management",
      description:
        "Single dashboard to manage all access points, users, and network performance",
    },
    {
      icon: <PerformanceIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Capacity & Reliability",
      description:
        "Handles hundreds of simultaneous users and heavy data loads without degradation",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Site Survey",
      description:
        "We survey your building to identify coverage needs and interference sources",
    },
    {
      step: "2",
      title: "Custom Design",
      description:
        "We design optimal access point placement and configuration for your building",
    },
    {
      step: "3",
      title: "Installation",
      description:
        "Professional installation, configuration, security setup, and testing",
    },
    {
      step: "4",
      title: "Optimization",
      description:
        "We optimize channels, power levels, and settings to maximize performance and coverage",
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
      question: "What's the difference between consumer and enterprise Wi-Fi?",
      answer:
        "Consumer Wi-Fi (standard routers) is meant for light use and provides poor coverage. Enterprise Wi-Fi uses multiple centrally configured access points for complete coverage, seamless roaming between APs, enterprise security features (WPA3, certificates), and can reliably handle hundreds of simultaneous users.",
    },
    {
      question: "How much does enterprise wireless cost?",
      answer:
        "Enterprise wireless networks typically range from $8,000-40,000+ depending on facility size, coverage area, and features needed. A small office might be $8,000-15,000. Larger buildings might be $25,000-60,000+. We provide detailed quotes after a site survey.",
    },
    {
      question: "Is enterprise Wi-Fi secure?",
      answer:
        "Yes. Enterprise Wi-Fi includes WPA3 encryption, certificate-based authentication, separate guest networks, VLAN segmentation, and advanced security monitoring. It's significantly more secure than standard consumer routers which are vulnerable to common attacks.",
    },
    {
      question: "How fast is enterprise Wi-Fi?",
      answer:
        "WiFi 6 (802.11ax) provides speeds up to 5-10 Gbps on modern devices. WiFi 6E adds 6 GHz spectrum for even better performance. Real-world speeds depend on device capabilities and environmental conditions, but enterprise Wi-Fi is significantly faster than consumer networks.",
    },
    {
      question: "Does enterprise Wi-Fi work with all devices?",
      answer:
        "Yes. Enterprise Wi-Fi networks work with all modern devices—laptops, phones, tablets, IoT devices, etc. We can separate networks for different device types (employees vs guests, IoT devices, BYOD) for better security and performance.",
    },
    {
      question: "Can you help with poor Wi-Fi coverage?",
      answer:
        "Absolutely. We identify the root causes of dead zones—interference, walls, distance from AP—and deploy additional access points as needed. We also optimize channel assignments and power levels for maximum coverage without interference.",
    },
    {
      question: "What about interference from neighboring Wi-Fi networks?",
      answer:
        "We perform RF surveys to identify interference sources. We choose optimal channels and frequencies to avoid conflicts. Enterprise Wi-Fi has sophisticated interference detection and management to minimize impact.",
    },
    {
      question: "How many users can enterprise Wi-Fi support?",
      answer:
        "A single enterprise access point can handle 50-100+ simultaneous users reliably. For larger numbers, we deploy mesh networks with multiple APs working together. We design for your peak usage needs.",
    },
    {
      question: "Can you upgrade my existing Wi-Fi?",
      answer:
        "Yes. We can upgrade from consumer to enterprise Wi-Fi, upgrade from WiFi 5 to WiFi 6/6E, or expand coverage with additional access points. We'll remove old equipment and configure everything professionally.",
    },
    {
      question: "What about support and maintenance?",
      answer:
        "We provide ongoing management and support including firmware updates, security patches, performance optimization, monitoring, and troubleshooting. Plans start at $300-800/month depending on network size.",
    },
    {
      question: "How long does Wi-Fi installation take?",
      answer:
        "Installation timeline depends on building size and complexity. Small offices typically take 1-2 days. Larger buildings might take 3-5 days. We coordinate with you to minimize disruption during business hours.",
    },
    {
      question: "Can you integrate with our existing network infrastructure?",
      answer:
        "Yes. Enterprise Wi-Fi integrates seamlessly with your existing wired network, security systems, and access controls. We ensure smooth integration and test everything before going live.",
    },
  ];

  const stats = [
    { value: "520+", label: "Wi-Fi Deployments" },
    { value: "99.5%", label: "Network Availability" },
    { value: "100%", label: "Coverage Guarantee" },
    { value: "2000+", label: "APs Supported" },
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
                Enterprise-Grade Wireless Networks
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
                Complete Wi-Fi coverage, enterprise security, and reliable
                performance. Stop dealing with slow, spotty Wi-Fi. Get
                professional wireless that works.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <CTAButton
                  variant="contained"
                  href="/free-consultation"
                  size="large"
                >
                  Get Free Wi-Fi Assessment
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
            Professional Wireless Solutions
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
            Our Wireless Implementation Process
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
            Stop Dealing with Slow, Spotty Wi-Fi
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
            Enterprise Wi-Fi works everywhere, every time. Get complete
            coverage, security, and performance. Free Wi-Fi assessment—let's see
            what we can do for you.
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
            Good Wi-Fi Changes Everything
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            From productivity to security, everything depends on reliable
            wireless. Let's build you a network that actually works. Free
            assessment—no obligation.
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
