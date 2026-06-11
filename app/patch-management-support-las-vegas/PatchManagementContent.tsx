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
  SystemUpdate as PatchIcon,
  Lock as SecurityIcon,
  Shield as VulnerabilityIcon,
  Tune as AutomationIcon,
  Speed as SpeedIcon,
  FactCheck as ComplianceIcon,
  Warning as AlertIcon,
  CheckCircleOutline as VerificationIcon,
  Schedule as ScheduleIcon,
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

export default function PatchManagementContent() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | false>(false);

  const handleFAQChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedFAQ(isExpanded ? panel : false);
    };

  const features = [
    {
      icon: <AutomationIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Fully Automated",
      description:
        "Patches deployed automatically on your schedule with minimal manual intervention",
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Security First",
      description:
        "Critical security patches deployed immediately. Vulnerabilities closed before they're exploited",
    },
    {
      icon: <VulnerabilityIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Vulnerability Management",
      description:
        "Scan for missing patches and vulnerable software. Prioritize by risk level",
    },
    {
      icon: <ComplianceIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Compliance Ready",
      description:
        "Meet regulatory requirements for patch management. Documentation and reporting included",
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Minimal Downtime",
      description:
        "Most patches require zero downtime. Reboots scheduled after hours when needed",
    },
    {
      icon: <VerificationIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Tested & Verified",
      description:
        "All patches tested before deployment. We verify successful installation and functionality",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Inventory Scan",
      description:
        "We scan all systems to identify missing patches and vulnerable software",
    },
    {
      step: "2",
      title: "Risk Assessment",
      description:
        "We prioritize patches by severity. Critical security patches get top priority",
    },
    {
      step: "3",
      title: "Testing",
      description:
        "Patches are tested in our lab to ensure they don't break applications or systems",
    },
    {
      step: "4",
      title: "Deployment",
      description:
        "We deploy patches on your schedule. Critical patches deployed immediately, others monthly",
    },
    {
      step: "5",
      title: "Verification & Reporting",
      description:
        "We verify patches installed successfully and provide compliance reports",
    },
  ];

  const faqs = [
    {
      question: "Why is patch management important?",
      answer:
        "Patches fix security vulnerabilities that attackers actively exploit. Unpatched systems are targets for ransomware, breaches, and data theft. Most attacks use known vulnerabilities that have patches available. Patch management is critical to preventing breaches, ransomware, and compliance violations.",
    },
    {
      question: "How often should patches be applied?",
      answer:
        "Critical security patches should be applied immediately or within days. Monthly patches can be scheduled monthly. We have processes to deploy urgent patches within hours if needed. The frequency depends on patch severity and your risk tolerance.",
    },
    {
      question: "Will patching cause downtime?",
      answer:
        "Most patches require no downtime. Windows, Linux, and application patches often install without interruption. When reboots are needed, we schedule them after hours to minimize business impact.",
    },
    {
      question: "What about server patches?",
      answer:
        "We patch all servers including Windows Server, Linux, and cloud servers. We use live patching when available to avoid reboots. For servers requiring reboots, we schedule during maintenance windows.",
    },
    {
      question: "Do you patch third-party applications?",
      answer:
        "Yes. We patch Adobe, Java, browsers, VPN software, and other third-party applications. We maintain an inventory of all installed software and their patch status.",
    },
    {
      question: "What about mobile device patches?",
      answer:
        "We manage iOS and Android patches through mobile device management (MDM). Patches are pushed automatically to keep mobile devices secure.",
    },
    {
      question: "How do you handle patch testing?",
      answer:
        "All patches are tested in our lab before production deployment. We verify they install correctly, don't break applications, and solve the intended vulnerability.",
    },
    {
      question: "Do you provide compliance reporting?",
      answer:
        "Yes. We provide detailed patch management reports for compliance requirements (HIPAA, PCI-DSS, SOC 2, etc). Reports show what's patched, what's missing, and remediation status.",
    },
    {
      question: "What if a patch breaks something?",
      answer:
        "We have rollback procedures to revert problematic patches. Testing reduces this risk, but if issues occur, we restore systems quickly.",
    },
    {
      question: "How much does patch management cost?",
      answer:
        "Patch management typically costs $300-1,500/month depending on system count and complexity. Fully automated patch management costs less than manual patching.",
    },
    {
      question: "Can you patch systems outside business hours?",
      answer:
        "Yes. We schedule non-critical patches to deploy after hours (evenings, weekends). Critical security patches deploy immediately regardless of time.",
    },
    {
      question: "Do you provide emergency patch deployment?",
      answer:
        "Yes. For zero-day vulnerabilities or critical exploits, we can deploy emergency patches within hours. Priority response is available 24/7.",
    },
  ];

  const stats = [
    { value: "950+", label: "Systems Patched" },
    { value: "99.2%", label: "Patch Success Rate" },
    { value: "0 days", label: "Critical Patch Response" },
    { value: "100%", label: "Compliance Coverage" },
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
                Don't Get Exploited
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
                Automated patch management keeps your systems secure. Close
                vulnerabilities before attackers find them. Stay compliant with
                patch requirements.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <CTAButton
                  variant="contained"
                  href="/free-consultation"
                  size="large"
                >
                  Get Free Patch Audit
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
            Professional Patch Management
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
            Our Patch Management Process
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
            Unpatched Systems Are Vulnerable
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
            Most attacks use known vulnerabilities that have patches available.
            Don't be a target. Automated patch management keeps you protected.
            Get audited today.
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
            Stay Secure with Automated Patching
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Let us handle patch management while you focus on your business.
            Automated security updates keep vulnerabilities closed. Free patch
            audit.
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
            Get Free Patch Audit
          </CTAButton>
        </Container>
      </Box>
    </>
  );
}
