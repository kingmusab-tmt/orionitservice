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
  SupportAgent as AgentIcon,
  PhoneInTalk as CallIcon,
  Email as EmailIcon,
  Laptop as RemoteIcon,
  Lock as PasswordIcon,
  Print as PrinterIcon,
  Devices as DevicesIcon,
  Book as TrainingIcon,
  ChecklistRtl as TicketIcon,
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

export default function HelpdeskSupportContent() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | false>(false);

  const handleFAQChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedFAQ(isExpanded ? panel : false);
    };

  const features = [
    {
      icon: <AgentIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Expert Support Staff",
      description:
        "Friendly, knowledgeable support agents who understand your business and solve issues fast",
    },
    {
      icon: <CallIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Multi-Channel Support",
      description:
        "Phone, email, chat, and ticket portal. Employees choose how they reach support",
    },
    {
      icon: <TicketIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Ticket Management",
      description:
        "Professional ticket tracking, prioritization, and status updates keep everything organized",
    },
    {
      icon: <RemoteIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Remote Support",
      description:
        "Remote desktop access for complex issues. Fast remote troubleshooting and resolution",
    },
    {
      icon: <TrainingIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Training & Documentation",
      description:
        "Employees learn while we support. Knowledge base articles reduce repeat issues",
    },
    {
      icon: <DevicesIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "All Devices Supported",
      description:
        "Windows, Mac, mobile devices, printers, VoIP phones—we support everything",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Employee Reaches Out",
      description:
        "User contacts support by phone, email, chat, or ticket portal",
    },
    {
      step: "2",
      title: "Quick Assessment",
      description:
        "Support agent listens, asks clarifying questions, understands the issue",
    },
    {
      step: "3",
      title: "Immediate Help",
      description:
        "Most issues solved on first call. Others escalated to specialists",
    },
    {
      step: "4",
      title: "Remote Troubleshooting",
      description:
        "For complex issues, we use remote desktop to diagnose and fix problems",
    },
    {
      step: "5",
      title: "Resolution & Follow-Up",
      description:
        "Issue resolved. We confirm satisfaction and follow up to ensure no recurrence",
    },
  ];

  const faqs = [
    {
      question: "How quickly do you respond to helpdesk tickets?",
      answer:
        "Most tickets are responded to within 15-30 minutes during business hours. Priority/urgent tickets get immediate response. After-hours requests are handled by our night support team with same-day resolution for urgent issues.",
    },
    {
      question: "Do you support remote employees?",
      answer:
        "Yes. We provide full helpdesk support for remote, hybrid, and in-office employees through phone, chat, email, and remote desktop support. Works anywhere employees are located.",
    },
    {
      question: "What types of issues do you handle?",
      answer:
        "We handle all helpdesk issues including password resets, software troubleshooting, hardware issues, email problems, printer issues, application support, VoIP phone setup, device provisioning, and general IT assistance.",
    },
    {
      question: "Can you handle after-hours support?",
      answer:
        "Yes. We offer after-hours support options including evening and weekend coverage. Urgent after-hours issues are prioritized for fast resolution.",
    },
    {
      question: "Do you provide user training?",
      answer:
        "Yes. We provide user training on software, systems, and best practices. We also create knowledge base articles to reduce repeat support calls.",
    },
    {
      question: "How do you manage support requests?",
      answer:
        "All support requests go through our ticket system with tracking, priority assignment, and status updates. Employees can check ticket status anytime through the portal.",
    },
    {
      question: "Can you help with our business applications?",
      answer:
        "Yes. We support industry-standard applications and can integrate with custom business systems. We train your team on proper usage and troubleshoot application issues.",
    },
    {
      question: "What about hardware issues?",
      answer:
        "We handle all hardware issues including computer problems, printer issues, peripheral devices, and mobile device support. We can arrange repairs or replacements when needed.",
    },
    {
      question: "Do you use a ticketing system?",
      answer:
        "Yes. We use a professional ticketing system where employees can submit requests, track status, and view history. Tickets are prioritized and assigned to the right specialist.",
    },
    {
      question: "How much does helpdesk support cost?",
      answer:
        "Helpdesk support typically starts at $25-40 per employee per month depending on support level and number of employees. Volume discounts available for larger teams.",
    },
    {
      question: "Can you help with mobile devices?",
      answer:
        "Yes. We support iPhones, Android phones, iPads, and tablets including setup, troubleshooting, configuration, and issue resolution.",
    },
    {
      question: "Do you offer SLA guarantees?",
      answer:
        "Yes. We offer service level agreements (SLAs) with response time guarantees and escalation procedures. Standard support includes 15-30 minute response times.",
    },
  ];

  const stats = [
    { value: "20 min", label: "Avg Response Time" },
    { value: "92%", label: "First-Call Resolution" },
    { value: "8000+", label: "Employees Supported" },
    { value: "4.8/5", label: "Customer Satisfaction" },
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
                Helpdesk Support Your Team Loves
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
                Fast, friendly IT support for your employees. 24/7 helpdesk that
                solves problems quickly. Multi-channel support, expert agents,
                and professional service.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <CTAButton
                  variant="contained"
                  href="/free-consultation"
                  size="large"
                >
                  Get Helpdesk Support
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
            Helpdesk Support That Works
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
            How Our Helpdesk Works
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
            Employees Deserve Great Support
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
            Give your team the support they deserve. Friendly, expert helpdesk
            that gets issues resolved fast. 92% first-call resolution rate. Call
            now to learn more.
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
              Get Helpdesk Support Today
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
            Support Your Employees Better
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Upgrade to professional helpdesk support that your team will
            actually love. Fast resolution, friendly experts, and real results.
            Let's talk.
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
            Schedule Free Consultation
          </CTAButton>
        </Container>
      </Box>
    </>
  );
}
