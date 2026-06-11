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
  Schedule as ClockIcon,
  Security as ShieldIcon,
  ElectricBolt as ZapIcon,
  TrendingUp as TrendingUpIcon,
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

const BenefitCard = styled(Card)(({ theme }) => ({
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
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 10px 25px rgba(255, 107, 53, 0.3)",
  },
}));

export default function RemoteITContent() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | false>(false);

  const handleFAQChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedFAQ(isExpanded ? panel : false);
    };

  const howItWorks = [
    {
      step: "1",
      title: "You Report an Issue",
      description: "Contact us by phone, email, or through your support portal",
    },
    {
      step: "2",
      title: "We Connect Remotely",
      description:
        "Our experts securely access your systems and assess the problem",
    },
    {
      step: "3",
      title: "Fast Resolution",
      description: "We troubleshoot and fix issues while you stay productive",
    },
    {
      step: "4",
      title: "Documentation & Prevention",
      description: "We document solutions and implement preventive measures",
    },
  ];

  const faqs = [
    {
      question: "How does remote IT support work?",
      answer:
        "Our technicians securely connect to your systems using encrypted remote access tools. This allows us to diagnose and resolve issues without needing to be physically on-site. We maintain full security protocols and never access data without your permission.",
    },
    {
      question: "Is remote support secure?",
      answer:
        "Absolutely. We use industry-leading encryption and security protocols. All connections are password-protected, logged, and monitored. We comply with HIPAA, PCI, and other compliance requirements as needed for your industry.",
    },
    {
      question: "What's the typical response time?",
      answer:
        "Critical issues receive immediate response, typically within 15-30 minutes. Standard support requests are handled within 1-2 hours. Response times are guaranteed in your service agreement.",
    },
    {
      question: "Can you handle all types of issues remotely?",
      answer:
        "We handle approximately 95% of issues remotely, including software problems, network issues, performance optimization, and security concerns. For hardware failures requiring physical replacement, we can coordinate on-site support.",
    },
    {
      question: "Do I need special software installed?",
      answer:
        "We can work with your existing remote access tools or provide our own secure platform. Setup is quick—usually just a one-time installation that takes 5-10 minutes.",
    },
    {
      question: "How is pricing structured?",
      answer:
        "We offer flexible models: pay-as-you-go hourly support, monthly retainer plans with unlimited support, or a hybrid approach. Choose what works best for your business needs.",
    },
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
                Remote IT Support When You Need It Most
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
                Expert technicians available 24/7 for instant troubleshooting.
                No downtime. No on-site visits required.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <CTAButton
                  variant="contained"
                  href="/free-consultation"
                  size="large"
                  color="inherit"
                >
                  Book Free IT Consultation
                </CTAButton>
                <Button
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
                </Button>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
              <LandingPageContactForm />
            </Grid>
          </Grid>
        </Container>
      </HeroSection>

      {/* Trust Indicators */}
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
            <Grid size={{ xs: 6, sm: 4, md: 3 }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 800, color: "primary.main" }}
              >
                99.9%
              </Typography>
              <Typography variant="body2">Uptime Guarantee</Typography>
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3 }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 800, color: "primary.main" }}
              >
                24/7
              </Typography>
              <Typography variant="body2">Expert Support</Typography>
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3 }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 800, color: "primary.main" }}
              >
                15min
              </Typography>
              <Typography variant="body2">Avg Response</Typography>
            </Grid>
            <Grid size={{ xs: 6, sm: 4, md: 3 }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 800, color: "primary.main" }}
              >
                500+
              </Typography>
              <Typography variant="body2">Happy Clients</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Benefits Section */}
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
            Why Choose Orion IT for Remote Support?
          </Typography>

          <Grid container spacing={3}>
            {[
              {
                icon: <ZapIcon sx={{ fontSize: 40, color: "primary.main" }} />,
                title: "24/7 Remote Support",
                description:
                  "Round-the-clock monitoring and instant troubleshooting whenever you need it",
              },
              {
                icon: (
                  <ShieldIcon sx={{ fontSize: 40, color: "primary.main" }} />
                ),
                title: "Maximum Uptime",
                description:
                  "Proactive monitoring prevents issues before they impact your business",
              },
              {
                icon: (
                  <ClockIcon sx={{ fontSize: 40, color: "primary.main" }} />
                ),
                title: "Instant Resolution",
                description:
                  "No travel time—our experts connect to your systems immediately",
              },
              {
                icon: (
                  <TrendingUpIcon
                    sx={{ fontSize: 40, color: "primary.main" }}
                  />
                ),
                title: "Cost Effective",
                description:
                  "Pay only for support you need without expensive on-site visits",
              },
            ].map((benefit, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }} key={index}>
                <BenefitCard>
                  <CardContent sx={{ textAlign: "center" }}>
                    <Box sx={{ mb: 2 }}>{benefit.icon}</Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                      {benefit.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {benefit.description}
                    </Typography>
                  </CardContent>
                </BenefitCard>
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
            How Remote IT Support Works
          </Typography>

          <Grid container spacing={3}>
            {howItWorks.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Box sx={{ textAlign: "center" }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      background: "linear-gradient(135deg, #1a237e, #0d47a1)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      mx: "auto",
                      mb: 2,
                    }}
                  >
                    {item.step}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </StyledSection>

      {/* Services Covered */}
      <StyledSection sx={{ backgroundColor: "#f5f5f5" }}>
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
            Services We Handle Remotely
          </Typography>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper sx={{ p: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: "primary.main",
                  }}
                >
                  Technical Support
                </Typography>
                <List>
                  {[
                    "Software troubleshooting & updates",
                    "Hardware diagnostics & monitoring",
                    "Network connectivity issues",
                    "Email & collaboration tool setup",
                    "Printer & device configuration",
                    "User account management",
                  ].map((service, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <CheckIcon color="primary" />
                      </ListItemIcon>
                      <Typography variant="body2">{service}</Typography>
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Paper sx={{ p: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: "primary.main",
                  }}
                >
                  Proactive Maintenance
                </Typography>
                <List>
                  {[
                    "System performance optimization",
                    "Security patch management",
                    "Backup & recovery testing",
                    "Software license management",
                    "Antivirus & malware protection",
                    "Compliance monitoring",
                  ].map((service, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <CheckIcon color="primary" />
                      </ListItemIcon>
                      <Typography variant="body2">{service}</Typography>
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </StyledSection>

      {/* FAQ Section */}
      <StyledSection>
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

          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expandedFAQ === `panel${index}`}
              onChange={handleFAQChange(`panel${index}`)}
              sx={{ mb: 1 }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ fontWeight: 600 }}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </StyledSection>

      {/* Final CTA */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)",
          color: "white",
          py: 8,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 3,
              fontSize: { xs: "1.8rem", md: "2.5rem" },
            }}
          >
            Ready to Get Professional Remote IT Support?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              fontWeight: 300,
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            Join 500+ Las Vegas businesses trusting Orion IT for 24/7 remote
            support
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
              color="inherit"
            >
              Schedule Your Free Consultation
            </CTAButton>
            <Button
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
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
