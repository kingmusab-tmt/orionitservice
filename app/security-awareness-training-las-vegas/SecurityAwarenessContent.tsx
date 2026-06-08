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
  School as TrainingIcon,
  TrendingUp as IncreaseIcon,
  Verified as CertificationIcon,
  Group as TeamIcon,
  BarChart as AnalyticsIcon,
  Lock as ProtectionIcon,
  Error as AlertIcon,
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

export default function SecurityAwarenessContent() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | false>(false);

  const handleFAQChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedFAQ(isExpanded ? panel : false);
    };

  const features = [
    {
      icon: <TrainingIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Interactive Training",
      description:
        "Engaging modules covering phishing, passwords, data handling, and social engineering",
    },
    {
      icon: <AlertIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Phishing Simulations",
      description:
        "Realistic simulated phishing attacks to test and train employees in real-world scenarios",
    },
    {
      icon: <CertificationIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Compliance Certified",
      description:
        "HIPAA, PCI, SOC 2, NIST, and industry-specific compliance training included",
    },
    {
      icon: <AnalyticsIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Detailed Analytics",
      description:
        "Track completion, test scores, and identify at-risk employees with comprehensive reporting",
    },
    {
      icon: <TeamIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "For All Levels",
      description:
        "Training tailored for employees, managers, executives, and IT staff",
    },
    {
      icon: <ProtectionIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Ongoing Support",
      description:
        "Monthly updates on new threats and best practices keep your team current",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Assessment",
      description:
        "We evaluate your current security posture and employee knowledge",
    },
    {
      step: "2",
      title: "Custom Program",
      description:
        "We design training tailored to your industry and risk profile",
    },
    {
      step: "3",
      title: "Launch Training",
      description:
        "Employees complete interactive modules and phishing simulations",
    },
    {
      step: "4",
      title: "Track Progress",
      description:
        "Monitor completion rates, test scores, and identify improvement areas",
    },
    {
      step: "5",
      title: "Ongoing Updates",
      description:
        "Monthly content updates and refresher training keep teams protected",
    },
  ];

  const faqs = [
    {
      question: "How long does security awareness training take?",
      answer:
        "Initial training typically takes 30-60 minutes depending on your industry and team size. We also provide monthly micro-training sessions (10-15 minutes) to keep employees engaged with new threat information.",
    },
    {
      question: "Is the training compliant with regulations?",
      answer:
        "Absolutely. Our training meets HIPAA, PCI DSS, SOC 2, NIST, and other regulatory requirements. We provide detailed compliance documentation for audits and certifications.",
    },
    {
      question: "Can you run phishing simulations?",
      answer:
        "Yes. We run realistic phishing simulations tailored to your business. Employees who click on simulated phishing emails receive targeted training to prevent future incidents.",
    },
    {
      question: "What topics are covered?",
      answer:
        "Our training covers phishing and email security, strong passwords and authentication, data protection and classification, social engineering, ransomware, incident reporting, and compliance requirements specific to your industry.",
    },
    {
      question: "Can you customize training for our industry?",
      answer:
        "Yes. We offer specialized training for healthcare (HIPAA), finance (PCI), legal firms, e-commerce, and other industries with specific compliance and threat requirements.",
    },
    {
      question: "How do we track completion and results?",
      answer:
        "You get access to a detailed dashboard showing completion rates, test scores, phishing simulation results, and at-risk employees. This helps you focus on improvement areas.",
    },
    {
      question: "What's the cost?",
      answer:
        "Pricing is based on team size and training scope. We typically charge $15-25 per employee for initial training, with ongoing monthly updates included. Get a custom quote during your consultation.",
    },
    {
      question: "Can you deliver training remotely?",
      answer:
        "Yes. All training is delivered online with interactive modules, live sessions available, and self-paced options. Works for remote and in-office teams.",
    },
    {
      question: "How often should we run phishing simulations?",
      answer:
        "We recommend monthly phishing simulations to keep employees vigilant. The frequency can be adjusted based on your risk profile and previous results.",
    },
    {
      question: "Will this actually reduce security incidents?",
      answer:
        "Yes. Companies with regular security awareness training experience 40-60% fewer successful phishing attacks and data breaches. You'll see measurable improvement in your security posture.",
    },
  ];

  const stats = [
    { value: "85%", label: "Phishing Click Reduction" },
    { value: "12,000+", label: "Employees Trained" },
    { value: "98%", label: "Compliance Pass Rate" },
    { value: "40-60%", label: "Fewer Security Incidents" },
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
                Stop Breaches Before They Start
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
                85% of breaches involve human error. Train your employees to
                recognize threats, spot phishing, and protect your business.
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
            Comprehensive Security Training
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
            Our Training Process
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
            Your Team Is Your Security
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
            Invest in training today and prevent costly breaches tomorrow. Get a
            free security assessment and custom training proposal.
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
            Don't Wait for a Breach to Train Your Team
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Start with a free security assessment. No obligation. No risks.
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
