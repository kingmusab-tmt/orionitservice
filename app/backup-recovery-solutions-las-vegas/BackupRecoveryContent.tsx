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
  CloudUpload as BackupIcon,
  Restore as RestoreIcon,
  Security as RansomwareIcon,
  Speed as FastIcon,
  Shield as ProtectionIcon,
  Public as CloudIcon,
  Storage as StorageIcon,
  Lock as EncryptionIcon,
  Warning as DisasterIcon,
  Check as VerificationIcon,
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

export default function BackupRecoveryContent() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | false>(false);

  const handleFAQChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedFAQ(isExpanded ? panel : false);
    };

  const features = [
    {
      icon: <BackupIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Automated Daily Backups",
      description:
        "Set it and forget it. Your data is backed up automatically every day",
    },
    {
      icon: <RestoreIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Fast Data Recovery",
      description:
        "Recover lost or deleted files in minutes, not hours or days",
    },
    {
      icon: <RansomwareIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Ransomware Protection",
      description: "Immutable backups that ransomware cannot encrypt or delete",
    },
    {
      icon: <CloudIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Cloud & Local Backup",
      description:
        "Backup to cloud, local storage, or both for maximum protection",
    },
    {
      icon: <EncryptionIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Military-Grade Encryption",
      description: "Your data is encrypted at rest and in transit with AES-256",
    },
    {
      icon: <VerificationIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Verified Recovery",
      description:
        "We test backups regularly to guarantee they work when you need them",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Setup & Configuration",
      description:
        "We assess your data and configure backup solutions for your needs",
    },
    {
      step: "2",
      title: "Automated Backups",
      description:
        "Your data is backed up automatically on your schedule (daily, hourly, continuous)",
    },
    {
      step: "3",
      title: "Redundant Storage",
      description:
        "Backups are stored locally and in the cloud for protection against site disasters",
    },
    {
      step: "4",
      title: "Regular Testing",
      description:
        "We test backups regularly to ensure they work and can be recovered quickly",
    },
    {
      step: "5",
      title: "Fast Recovery",
      description:
        "If disaster strikes, we recover your data fast. Files or entire systems.",
    },
  ];

  const faqs = [
    {
      question: "How often should I backup my data?",
      answer:
        "It depends on your business needs. Critical data should be backed up daily or even continuously (every hour). Standard data can be backed up daily. We recommend a tiered approach: hourly for critical systems, daily for standard data, weekly for archives. The frequency depends on how much data loss your business can tolerate (RPO - Recovery Point Objective).",
    },
    {
      question: "What if I lose all my data?",
      answer:
        "With our backup and recovery solutions, you can restore all your data. We provide point-in-time recovery so you can restore to the exact moment before data loss occurred. Complete recovery is guaranteed.",
    },
    {
      question: "Does backup protect against ransomware?",
      answer:
        "Yes. Our backup solutions include ransomware protection with immutable backups that attackers cannot encrypt, modify, or delete. If you get hit with ransomware, recovery is fast and guaranteed. We can restore all files without paying ransom.",
    },
    {
      question: "Where is my backup data stored?",
      answer:
        "We offer flexible storage options: local backup (fast recovery), cloud backup (geographic redundancy), or hybrid (both). You choose based on your recovery requirements. Cloud backups are stored with enterprise-grade providers with 99.99% uptime.",
    },
    {
      question: "How fast can I recover my data?",
      answer:
        "Recovery time depends on data size and location. Local backups restore in minutes. Cloud backups typically restore within 30 minutes to a few hours depending on data volume. We prioritize critical systems for fastest recovery.",
    },
    {
      question: "Is my backup data secure?",
      answer:
        "Absolutely. Backups are encrypted with AES-256 at rest and in transit. Access is restricted to authorized personnel only. We comply with HIPAA, SOC 2, and other compliance standards.",
    },
    {
      question: "Can I restore specific files?",
      answer:
        "Yes. You don't have to restore entire systems. You can recover individual files, folders, emails, databases, or specific data ranges. Granular recovery saves time and prevents accidental overwrites.",
    },
    {
      question: "What about databases and applications?",
      answer:
        "We back up databases, applications, email servers, and all critical systems. We support SQL Server, MySQL, Oracle, Exchange, and other enterprise applications with application-aware backups.",
    },
    {
      question: "Do you test backups?",
      answer:
        "Yes. We test backups regularly (weekly/monthly depending on your plan) to ensure they work and can be recovered. We verify backup integrity and document results.",
    },
    {
      question: "What about disaster recovery?",
      answer:
        "Backup is part of disaster recovery. We also provide failover systems, redundant infrastructure, and recovery planning so you can recover entire systems quickly after major disasters.",
    },
    {
      question: "How much does backup cost?",
      answer:
        "Backup costs depend on data volume and backup frequency. Typical costs range from $200-2,000/month depending on system size. Volume discounts available for larger organizations.",
    },
    {
      question: "Can I recover accidentally deleted data?",
      answer:
        "Yes. As long as the data was backed up before deletion, we can recover it. We keep multiple backup versions so you can restore to any point in time.",
    },
  ];

  const stats = [
    { value: "1200+", label: "Businesses Protected" },
    { value: "99.99%", label: "Backup Success Rate" },
    { value: "15 min", label: "Avg Recovery Time" },
    { value: "100%", label: "Data Recovery Rate" },
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
                Never Lose Data Again
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
                Enterprise backup and disaster recovery solutions. Automated
                daily backups. Ransomware protection. Fast recovery. Sleep
                soundly knowing your data is protected.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <CTAButton
                  variant="contained"
                  href="/free-consultation"
                  size="large"
                >
                  Get Free Data Assessment
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
            Enterprise Backup & Recovery Protection
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
            How Backup & Recovery Works
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
            Sleep Well Knowing Your Data Is Protected
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
            No more worrying about data loss, ransomware, or disasters.
            Automated backups, guaranteed recovery, and 24/7 monitoring. Let's
            protect your critical data today.
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
            Your Data Deserves Protection
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Don't wait for a disaster to realize you need backups. Get protected
            today. Free data assessment and backup plan. No obligation.
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
            Get Protected Now
          </CTAButton>
        </Container>
      </Box>
    </>
  );
}
