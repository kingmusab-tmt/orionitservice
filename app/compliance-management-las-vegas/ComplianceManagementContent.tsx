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
  VerifiedUser as VerifiedIcon,
  Description as DocIcon,
  Gavel as AuditIcon,
  Person as ConsultantIcon,
  TrendingUp as ComplianceIcon,
  School as TrainingIcon,
  Assessment as AssessmentIcon,
  Timeline as TimelineIcon,
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

export default function ComplianceManagementContent() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | false>(false);

  const handleFAQChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedFAQ(isExpanded ? panel : false);
    };

  const features = [
    {
      icon: <AssessmentIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Compliance Assessment",
      description:
        "Identify which regulations apply to your business and current compliance gaps",
    },
    {
      icon: <DocIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Documentation",
      description:
        "Create policies, procedures, and documentation required by auditors",
    },
    {
      icon: <AuditIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Audits & Remediation",
      description:
        "Conduct audits, identify issues, and implement corrective actions",
    },
    {
      icon: <TrainingIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Staff Training",
      description:
        "Train employees on compliance requirements specific to your industry",
    },
    {
      icon: <VerifiedIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Certification Support",
      description:
        "Prepare for SOC 2, ISO certifications, and third-party audits",
    },
    {
      icon: <TimelineIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Ongoing Monitoring",
      description:
        "Continuous monitoring ensures you stay compliant year-round",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Initial Assessment",
      description:
        "We assess your business, industry, and applicable regulations",
    },
    {
      step: "2",
      title: "Gap Analysis",
      description:
        "Identify what you're doing right and where compliance gaps exist",
    },
    {
      step: "3",
      title: "Remediation Plan",
      description: "Create a roadmap to close gaps and achieve full compliance",
    },
    {
      step: "4",
      title: "Implementation",
      description:
        "We help implement policies, controls, training, and documentation",
    },
    {
      step: "5",
      title: "Ongoing Compliance",
      description:
        "Monitor, audit, and maintain compliance year-round with updates to regulations",
    },
  ];

  const faqs = [
    {
      question: "What compliance regulations apply to my business?",
      answer:
        "It depends on your industry and data you handle. Healthcare providers need HIPAA. Payment processors need PCI DSS. Many companies need SOC 2. Others may require NIST, GDPR, or industry-specific regulations. We assess your specific situation and advise on applicable requirements.",
    },
    {
      question: "How often do you perform compliance audits?",
      answer:
        "We start with an initial comprehensive assessment to identify gaps. Then we perform ongoing quarterly or annual audits depending on your regulatory requirements and audit schedules. Frequency depends on your compliance framework.",
    },
    {
      question: "Can you help us pass an audit?",
      answer:
        "Absolutely. We help prepare documentation, implement controls, train staff, remediate issues, and coordinate with auditors. Our clients typically pass audits on their first attempt. We also work with you during audit questions and findings.",
    },
    {
      question: "What does compliance actually cost?",
      answer:
        "Costs vary by industry, complexity, and current compliance level. Initial assessments start at $2,000-5,000. Ongoing management is typically $2,000-8,000/month. We provide a detailed quote after understanding your specific requirements.",
    },
    {
      question: "Do you handle HIPAA compliance?",
      answer:
        "Yes. We specialize in HIPAA compliance for healthcare providers, dental offices, and businesses handling protected health information. We manage business associate agreements, risk assessments, breach notifications, and HIPAA audits.",
    },
    {
      question: "What about PCI DSS for payment processing?",
      answer:
        "Yes. We help businesses accepting credit cards achieve and maintain PCI DSS compliance. We conduct self-assessments, network scans, vulnerability assessments, and prepare for PCI audits.",
    },
    {
      question: "Can you help with SOC 2 certification?",
      answer:
        "Yes. We guide you through SOC 2 Type I and Type II audits, help implement controls around security, availability, processing integrity, confidentiality, and privacy, and work with auditors.",
    },
    {
      question: "How do you handle regulatory changes?",
      answer:
        "Regulations constantly evolve. We monitor regulatory changes, brief you on impacts to your business, update policies and procedures, and conduct training on new requirements.",
    },
    {
      question: "Can you help with compliance documentation?",
      answer:
        "Yes. We create policies, procedures, risk assessments, audit logs, incident response plans, vendor risk assessments, and all documentation required by auditors and regulators.",
    },
    {
      question: "What if we fail an audit?",
      answer:
        "We help with remediation and corrective action plans. We identify root causes, implement fixes, verify effectiveness, and document all actions taken to address findings.",
    },
    {
      question: "Do you work with third-party auditors?",
      answer:
        "Yes. We coordinate with external auditors, prepare documentation, respond to audit inquiries, and work to address any findings or observations from third-party audits.",
    },
    {
      question: "Is compliance a one-time thing?",
      answer:
        "No. Compliance is ongoing. Regulations change, your business evolves, and threats emerge. We provide continuous monitoring, annual audits, training, and support to maintain compliance year-round.",
    },
  ];

  const stats = [
    { value: "150+", label: "Businesses Compliant" },
    { value: "99%", label: "First-Time Audit Pass Rate" },
    { value: "6", label: "Major Compliance Frameworks" },
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
                Compliance Made Simple
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
                Navigate HIPAA, PCI, SOC 2, and other regulations with expert
                guidance. Avoid fines. Pass audits. Protect your business.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <CTAButton
                  variant="contained"
                  href="/free-consultation"
                  size="large"
                >
                  Get Free Compliance Assessment
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
            Comprehensive Compliance Services
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
            Our Compliance Process
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
            Stay Compliant. Avoid Fines.
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
            Compliance fines can cost hundreds of thousands of dollars. Get
            expert guidance today and ensure your business meets all regulatory
            requirements.
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
            Compliance Doesn't Have to Be Complicated
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Get expert guidance with a free compliance assessment. Let us help
            you navigate the regulations.
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
