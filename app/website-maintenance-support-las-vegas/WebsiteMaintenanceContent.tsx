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
  Security as SecurityIcon,
  Speed as PerformanceIcon,
  Backup as BackupIcon,
  Shield as ProtectionIcon,
  Visibility as MonitoringIcon,
  SupportAgent as SupportIcon,
  Update as UpdateIcon,
  Smartphone as ResponsiveIcon,
  Lock as EncryptionIcon,
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

export default function WebsiteMaintenanceContent() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | false>(false);

  const handleFAQChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedFAQ(isExpanded ? panel : false);
    };

  const features = [
    {
      icon: <UpdateIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Regular Updates",
      description:
        "Automatic WordPress, plugin, and theme updates. Always running latest, most secure versions.",
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Security Monitoring",
      description:
        "24/7 security scanning. Malware detection. Firewall protection. Threat prevention.",
    },
    {
      icon: <BackupIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Automatic Backups",
      description:
        "Daily backups with multiple locations. One-click restore. Never lose data.",
    },
    {
      icon: <PerformanceIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Performance Optimization",
      description:
        "Speed optimization, caching, CDN integration, image optimization. Lightning fast.",
    },
    {
      icon: <MonitoringIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "24/7 Monitoring",
      description:
        "Continuous uptime monitoring. Instant alerts. Quick response when issues occur.",
    },
    {
      icon: <SupportIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Expert Support",
      description:
        "24/7 support for technical issues, updates, changes, and questions.",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Assessment",
      description:
        "We review your website, hosting, plugins, and current maintenance needs",
    },
    {
      step: "2",
      title: "Setup & Configuration",
      description:
        "We set up monitoring, backups, security, and performance optimization",
    },
    {
      step: "3",
      title: "Ongoing Maintenance",
      description:
        "Regular updates, backups, security scans, and performance monitoring",
    },
    {
      step: "4",
      title: "Issue Resolution",
      description:
        "Quick diagnosis and fix for any issues, bugs, or security concerns",
    },
    {
      step: "5",
      title: "Support & Reporting",
      description:
        "Monthly reports, quarterly reviews, and always available for support",
    },
  ];

  const faqs = [
    {
      question: "How much does website maintenance cost?",
      answer:
        "Website maintenance plans typically cost $299-999/month depending on website complexity, support level, and hosting. Plans include updates, backups, security monitoring, performance optimization, and support.",
    },
    {
      question: "How often should a website be updated?",
      answer:
        "Websites should have regular security updates, plugin updates, and theme updates. We recommend at least monthly maintenance. Critical security updates are applied immediately. Content updates depend on your needs.",
    },
    {
      question: "What if my website goes down?",
      answer:
        "Our plans include 24/7 monitoring and support. We detect downtime immediately and work to restore service. Response time depends on your support tier—typically 15-30 minutes for critical issues.",
    },
    {
      question: "Do you include backups?",
      answer:
        "Yes. All plans include automatic daily backups stored in multiple locations. You can restore from any backup point. We test backups regularly to ensure they work.",
    },
    {
      question: "Can you migrate my website?",
      answer:
        "Yes. We handle WordPress migrations, platform migrations, and server migrations. We ensure zero downtime and all data transfers properly.",
    },
    {
      question: "Do you handle security issues?",
      answer:
        "Yes. We monitor for malware, apply security patches immediately, implement firewalls, and handle security incidents. We remove malware if it occurs.",
    },
    {
      question: "Can you optimize my website speed?",
      answer:
        "Yes. We implement caching, compress images, optimize code, implement CDN, and clean up unused plugins. Most sites see 40-60% speed improvement.",
    },
    {
      question: "What if I find a bug or issue?",
      answer:
        "You can report issues anytime. We diagnose and fix bugs quickly. Priority issues get fixed within hours. Non-urgent issues within a few days.",
    },
    {
      question: "Can you add new features or pages?",
      answer:
        "Yes. We can add new pages, features, plugins, and functionality. Some may have additional costs beyond maintenance plans.",
    },
    {
      question: "Do you handle SSL certificates?",
      answer:
        "Yes. We install, renew, and manage SSL certificates. Most plans include free SSL certificates and automatic renewal.",
    },
    {
      question: "What about email hosting?",
      answer:
        "We can manage email hosting as part of your website. Email storage, spam filtering, and email security included.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Most plans are month-to-month with no long-term contracts. You can cancel anytime. We ensure all data is backed up and accessible.",
    },
  ];

  const stats = [
    { value: "850+", label: "Websites Maintained" },
    { value: "99.95%", label: "Uptime Record" },
    { value: "200+", label: "Issues Resolved Monthly" },
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
                Website That Never Stops
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
                Managed website maintenance & support. Secure. Fast. Always up.
                Let us handle updates, backups, security, and support so you
                focus on your business.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <CTAButton
                  variant="contained"
                  href="/free-consultation"
                  size="large"
                >
                  Schedule Maintenance Plan
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
            Complete Website Maintenance
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
            Our Maintenance Process
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
            Stop Worrying About Your Website
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
            Website maintenance is complicated and time-consuming. Let our
            experts handle it. Updates, backups, security, support. Everything
            you need. One simple plan.
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
              Get Maintenance Support
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
            Your Website Deserves Professional Care
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Let's make sure your website is secure, fast, and always up.
            Professional maintenance. Affordable pricing. Expert support. Start
            today.
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
            Start Maintenance Plan Today
          </CTAButton>
        </Container>
      </Box>
    </>
  );
}
