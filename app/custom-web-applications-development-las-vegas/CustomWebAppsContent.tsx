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
  Code as CodeIcon,
  Cloud as CloudIcon,
  Smartphone as ResponsiveIcon,
  ElectricBolt as PerformanceIcon,
  Lock as SecurityIcon,
  BarChart as ScalabilityIcon,
  Palette as DesignIcon,
  Settings as CustomIcon,
  Speed as OptimizationIcon,
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

export default function CustomWebAppsContent() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | false>(false);

  const handleFAQChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedFAQ(isExpanded ? panel : false);
    };

  const features = [
    {
      icon: <CustomIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Built for Your Business",
      description:
        "Tailored to your specific needs. No off-the-shelf compromises. Solves your unique challenges.",
    },
    {
      icon: <CodeIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Modern Technology Stack",
      description:
        "React, Node.js, Python, Vue.js. We use the best tools for your needs. Future-proof architecture.",
    },
    {
      icon: <CloudIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Cloud-Ready",
      description:
        "Built for AWS, Azure, or Google Cloud. Deploy anywhere. Scale effortlessly.",
    },
    {
      icon: <ResponsiveIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Mobile-Responsive",
      description:
        "Works perfectly on desktop, tablet, and mobile. Responsive design included.",
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Secure by Default",
      description:
        "Security built-in from day one. Encryption, authentication, compliance.",
    },
    {
      icon: <PerformanceIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Lightning Fast",
      description:
        "Optimized for speed. Fast load times. Excellent performance across devices.",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Discovery & Planning",
      description:
        "We understand your business, challenges, and vision for the application",
    },
    {
      step: "2",
      title: "Design & Prototype",
      description:
        "We design the application, create wireframes, and build interactive prototypes",
    },
    {
      step: "3",
      title: "Development",
      description:
        "We develop the application with clean code, testing, and regular updates",
    },
    {
      step: "4",
      title: "Testing & Deployment",
      description:
        "Rigorous testing, security audit, and deployment to production",
    },
    {
      step: "5",
      title: "Support & Maintenance",
      description:
        "Ongoing support, bug fixes, updates, and feature enhancements",
    },
  ];

  const faqs = [
    {
      question: "How long does custom web app development take?",
      answer:
        "Development timeline depends on complexity and scope. Simple applications take 2-3 months. Moderate applications take 3-6 months. Complex enterprise apps take 6-12+ months. We provide detailed timelines after requirements gathering and project scoping.",
    },
    {
      question: "How much does a custom web application cost?",
      answer:
        "Custom web applications typically cost $25,000-250,000+ depending on complexity, features, team size, and timeline. We provide fixed-price quotes or time-and-materials models. We discuss budget constraints upfront and optimize scope accordingly.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We use modern technologies including React, Vue.js, Angular for frontend; Node.js, Python, Java for backend; AWS, Azure, Google Cloud for hosting. We recommend the best technology stack for your specific needs.",
    },
    {
      question: "Can you work with our existing systems?",
      answer:
        "Yes. We integrate with your existing databases, APIs, and systems. We can build on top of legacy systems, migrate data, or create new applications that work with what you have.",
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer:
        "Yes. We provide ongoing support including bug fixes, feature enhancements, performance optimization, and security updates. Support plans start at $1,000-3,000/month depending on needs.",
    },
    {
      question: "Can we start small and expand later?",
      answer:
        "Absolutely. We design applications with scalability in mind. Start with core features and add more as your business grows. Modular architecture allows easy expansion.",
    },
    {
      question: "Will the app work on mobile?",
      answer:
        "Yes. All applications are responsive and work on mobile, tablet, and desktop. We can also build native mobile apps (iOS/Android) or progressive web apps if needed.",
    },
    {
      question: "How do you handle security?",
      answer:
        "Security is built-in from day one. We use encryption, secure authentication, input validation, protection against common vulnerabilities, regular security audits, and compliance with standards like GDPR and HIPAA.",
    },
    {
      question: "What if requirements change?",
      answer:
        "Requirements evolve. We use agile development so changes are easy to incorporate. We communicate regularly and adjust scope/timeline as needed.",
    },
    {
      question: "Do you provide user training?",
      answer:
        "Yes. We provide user documentation, video training, and live training sessions for your team. We help ensure smooth adoption and proper usage.",
    },
    {
      question: "What about data migration?",
      answer:
        "If you're migrating from another system, we handle data migration including data mapping, validation, and cleanup. We ensure zero data loss during migration.",
    },
    {
      question: "Can you help with app idea development?",
      answer:
        "Yes. We can help refine your app idea, define features, estimate costs, and create a development roadmap. Our discovery process helps clarify your vision.",
    },
  ];

  const stats = [
    { value: "180+", label: "Applications Built" },
    { value: "98%", label: "Project Success Rate" },
    { value: "2500+", label: "Users Supported" },
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
                Custom Web Applications Built for You
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
                Tailored software solutions that solve your unique business
                challenges. Modern technology. Scalable architecture. Built to
                grow with your business.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <CTAButton
                  variant="contained"
                  href="/free-consultation"
                  size="large"
                >
                  Discuss Your Project
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
            Custom Web Application Development
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
            Our Development Process
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
            Your Idea. Our Expertise. Real Results.
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
            Let's build something great together. Tell us about your vision.
            We'll handle the rest. From concept to launch to success.
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
              Start Your Project
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
            Ready to Build Something Great?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Let's discuss your project. We'll help you refine your idea and
            create a roadmap to success. Free consultation. No obligation.
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
