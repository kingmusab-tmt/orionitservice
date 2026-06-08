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
  Shield as FirewallIcon,
  Lock as AccessIcon,
  VpnLock as EncryptionIcon,
  Security as PatchIcon,
  Visibility as MonitoringIcon,
  Warning as ThreatIcon,
  Settings as ConfigIcon,
  Verified as ComplianceIcon,
  BarChart as ReportingIcon,
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

export default function NetworkSecurityHardeningContent() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | false>(false);

  const handleFAQChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedFAQ(isExpanded ? panel : false);
    };

  const features = [
    {
      icon: <FirewallIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Firewall Configuration",
      description:
        "Implement and optimize firewalls. Define security policies. Block threats. Allow legitimate traffic.",
    },
    {
      icon: <AccessIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Access Control Implementation",
      description:
        "Principle of least privilege. User segmentation. Role-based access. Multi-factor authentication.",
    },
    {
      icon: <EncryptionIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Data Encryption",
      description:
        "Encrypt data in transit and at rest. SSL/TLS implementation. Encryption key management.",
    },
    {
      icon: <PatchIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Vulnerability Patching",
      description:
        "Identify and patch vulnerabilities. Security update deployment. Testing and validation.",
    },
    {
      icon: <MonitoringIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Security Monitoring",
      description:
        "24/7 threat detection. Intrusion prevention. Anomaly detection. Real-time alerts.",
    },
    {
      icon: <ComplianceIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Security Compliance",
      description:
        "Meet industry standards. NIST framework. CIS controls. Compliance documentation.",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Security Assessment",
      description:
        "Comprehensive audit of your network. Identify vulnerabilities, misconfigurations, and security gaps",
    },
    {
      step: "2",
      title: "Hardening Plan",
      description:
        "Develop detailed hardening plan. Prioritize vulnerabilities. Plan implementation approach",
    },
    {
      step: "3",
      title: "Implementation",
      description:
        "Deploy security controls. Configure firewalls. Implement access controls. Enable encryption",
    },
    {
      step: "4",
      title: "Testing & Validation",
      description:
        "Test hardening measures. Verify security controls. Validate performance. Compliance check",
    },
    {
      step: "5",
      title: "Monitoring & Maintenance",
      description:
        "24/7 threat monitoring. Regular updates. Continuous optimization. Annual reassessment",
    },
  ];

  const faqs = [
    {
      question: "What is network security hardening?",
      answer:
        "Network security hardening is the process of reducing vulnerabilities and implementing security controls to strengthen your network against attacks. It includes firewall configuration, access controls, encryption, patching, and security policy implementation.",
    },
    {
      question: "How long does network hardening take?",
      answer:
        "Network hardening typically takes 2-8 weeks depending on network size and complexity. We start with assessment (1-2 weeks), develop plan (1 week), implement controls (2-4 weeks), then test and validate (1-2 weeks).",
    },
    {
      question: "Will hardening impact network performance?",
      answer:
        "Properly implemented hardening has minimal to no performance impact. We optimize security controls to balance protection with performance. We perform testing to ensure no negative impact on speed or throughput.",
    },
    {
      question: "What vulnerabilities do you address?",
      answer:
        "We address all network vulnerabilities including weak passwords, unpatched systems, misconfigured firewalls, open ports, weak encryption, unprotected databases, lateral movement paths, and compliance gaps.",
    },
    {
      question: "Do you harden existing networks?",
      answer:
        "Yes. We can harden existing networks without major disruption. We implement controls carefully, test thoroughly, and schedule changes during maintenance windows to minimize impact.",
    },
    {
      question: "What about cloud and remote access?",
      answer:
        "We secure cloud infrastructure and remote access. VPN hardening, cloud security groups, multi-factor authentication, secure remote desktop protocols, and zero-trust security implementation.",
    },
    {
      question: "How do you handle wireless networks?",
      answer:
        "Wireless network hardening includes WPA3 encryption, strong authentication, hidden SSIDs, rogue AP detection, wireless IDS/IPS, and guest network segmentation.",
    },
    {
      question: "What about employee devices?",
      answer:
        "We implement device hardening through Mobile Device Management (MDM), endpoint protection, device encryption, secure boot, and configuration compliance checks.",
    },
    {
      question: "How do you ensure compliance?",
      answer:
        "We align hardening with industry standards: NIST Cybersecurity Framework, CIS Critical Controls, PCI DSS, HIPAA, SOC 2. We provide compliance documentation and regular audits.",
    },
    {
      question: "What ongoing support is included?",
      answer:
        "We provide 24/7 monitoring, threat detection, security updates, annual reassessment, and continuous optimization. We track new threats and adjust controls accordingly.",
    },
    {
      question: "Can you integrate with existing security tools?",
      answer:
        "Yes. We integrate with your existing firewalls, IDS/IPS, SIEM, endpoint protection, and vulnerability management tools. We optimize configurations and centralize monitoring.",
    },
    {
      question: "How much does network hardening cost?",
      answer:
        "Network hardening typically costs $10,000-50,000+ depending on network size and complexity. Assessment is usually $2,000-5,000. Implementation costs depend on scope and technology choices.",
    },
  ];

  const stats = [
    { value: "420+", label: "Networks Hardened" },
    { value: "95%", label: "Vulnerability Reduction" },
    { value: "1800+", label: "Vulnerabilities Eliminated" },
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
                Network Fortress
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
                Build fortress-level network security. Close vulnerabilities.
                Eliminate threats. Protect your business with hardened network
                defenses and 24/7 monitoring.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <CTAButton
                  variant="contained"
                  href="/free-consultation"
                  size="large"
                >
                  Start Network Security Assessment
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
            Comprehensive Network Hardening
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
            Our Hardening Process
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
            Your Network Has Vulnerabilities
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
            Most networks have vulnerabilities. Unpatched systems. Weak access
            controls. Misconfigured firewalls. We find them. We fix them. We
            harden your network.
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
              Get Security Assessment
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
            Fortress Your Network Today
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Let's identify vulnerabilities and build a fortress network.
            Professional assessment. Expert hardening. Fortress-level security.
            Schedule your security assessment today.
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
            Start Security Assessment Today
          </CTAButton>
        </Container>
      </Box>
    </>
  );
}
