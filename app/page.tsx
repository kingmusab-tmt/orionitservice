"use client";

import HeroBanner from "./components/HeroBanner";
import ServiceCard from "./components/ServiceCard";
import Testimonials from "./components/Testimonials";
import {
  Button,
  Container,
  Grid,
  Typography,
  Box,
  Chip,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  Security as SecurityIcon,
  Lan as NetworkIcon,
  Computer as ComputerIcon,
  CheckCircle as CheckIcon,
  SupportAgent as SupportIcon,
  Speed as SpeedIcon,
  Lock as LockIcon,
  ArrowForward as ArrowIcon,
} from "@mui/icons-material";

const StyledSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.default,
}));

const StyledCTASection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  textAlign: "center",
  background: "white", // Use a solid color for the CTA section
  color: theme.palette.primary.contrastText,
}));

const FeatureCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: "100%",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    // boxShadow: theme.shadows && theme.shadows[8],
  },
}));

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const services = [
    {
      title: "Cybersecurity Solutions",
      description:
        "Comprehensive protection including employee training, threat detection, and compliance management",
      icon: <SecurityIcon fontSize="large" color="primary" />,
      link: "/services/cybersecurity",
      features: [
        "Security awareness training",
        "Phishing simulations",
        "Endpoint protection",
        "Compliance management",
        "Vulnerability assessments",
      ],
    },
    {
      title: "Network Infrastructure",
      description:
        "Reliable and secure business networking solutions tailored to your needs",
      icon: <NetworkIcon fontSize="large" color="primary" />,
      link: "/services/networking",
      features: [
        "Network design & implementation",
        "Wireless solutions",
        "Performance optimization",
        "24/7 monitoring",
        "Troubleshooting & support",
      ],
    },
    {
      title: "Managed IT Services",
      description: "Proactive IT management so you can focus on your business",
      icon: <ComputerIcon fontSize="large" color="primary" />,
      link: "/services/managed-it",
      features: [
        "Help desk support",
        "Cloud management",
        "Backup solutions",
        "Patch management",
        "Strategic IT planning",
      ],
    },
  ];

  const stats = [
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "24/7", label: "Expert Support" },
    { value: "100+", label: "Businesses Protected" },
    { value: "30min", label: "Average Response Time" },
  ];

  return (
    <>
      <HeroBanner
        title="Transform Your Business Technology"
        subtitle="Expert IT solutions that drive efficiency, security, and growth"
        ctaText="Get Your Free IT Consultation"
        ctaLink="/free-consultation"
        image="/images/avatar2.png"
      />
      {/* Stats Bar */}
      <Paper
        elevation={0}
        sx={{
          py: 4,
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.primary.contrastText,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="center">
            {stats.map((stat, index) => (
              <Grid
                size={{ xs: 6, sm: 3 }}
                key={index}
                sx={{ textAlign: "center" }}
              >
                <Typography variant="h3" sx={{ fontWeight: 800, mb: 1 }}>
                  {stat.value}
                </Typography>
                <Typography variant="subtitle1">{stat.label}</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Paper>
      {/* Services Section */}
      <StyledSection as="section" id="services">
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <Chip
              label="IT SOLUTIONS"
              color="primary"
              sx={{
                mb: 3,
                fontWeight: 600,
                fontSize: "1rem",
                py: 1.5,
                px: 2,
              }}
            />
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 800,
                mb: 3,
                fontSize: isMobile ? "2rem" : "2.8rem",
              }}
            >
              Comprehensive IT Services for Modern Businesses
            </Typography>
            <Typography
              variant="h6"
              component="p"
              sx={{
                maxWidth: 700,
                mx: "auto",
                color: "text.secondary",
              }}
            >
              We deliver tailored technology solutions that align with your
              business goals and drive operational excellence.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid size={{ xs: 6, md: 4 }} key={index}>
                <FeatureCard elevation={3}>
                  <Box sx={{ textAlign: "center", mb: 3 }}>{service.icon}</Box>
                  <Typography
                    variant="h4"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      textAlign: "center",
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ mb: 3, textAlign: "center" }}
                  >
                    {service.description}
                  </Typography>
                  <List dense>
                    {service.features.map((feature, i) => (
                      <ListItem key={i} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckIcon color="primary" />
                        </ListItemIcon>
                        <Typography variant="body2">{feature}</Typography>
                      </ListItem>
                    ))}
                  </List>
                  <Box sx={{ textAlign: "center", mt: 3 }}>
                    <Button
                      variant="outlined"
                      endIcon={<ArrowIcon />}
                      href={service.link}
                      sx={{ px: 4 }}
                    >
                      Learn More
                    </Button>
                  </Box>
                </FeatureCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </StyledSection>
      {/* Value Proposition */}
      <StyledSection
        as="section"
        sx={{ backgroundColor: theme.palette.grey[50] }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 6, md: 6 }}>
              <Chip
                label="WHY CHOOSE US"
                color="primary"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  fontSize: "1rem",
                  py: 1.5,
                  px: 2,
                }}
              />
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  fontSize: isMobile ? "2rem" : "2.5rem",
                }}
              >
                Technology Partners You Can Trust
              </Typography>
              <List>
                {[
                  "Certified IT professionals with 10+ years experience",
                  "Business-first approach to technology",
                  "Proactive monitoring and maintenance",
                  "Transparent pricing with no hidden fees",
                  "Custom solutions tailored to your needs",
                  "Local support with rapid response times",
                ].map((item, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <CheckIcon color="primary" />
                    </ListItemIcon>
                    <Typography variant="body1">{item}</Typography>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid size={{ xs: 6, md: 6 }}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <SupportIcon color="primary" sx={{ mr: 1 }} /> Free IT
                  Consultation
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Schedule a 30-minute call with our technology experts to:
                </Typography>
                <List dense>
                  {[
                    "Identify vulnerabilities in your current setup",
                    "Get recommendations for improvement",
                    "Learn how to reduce IT costs",
                    "Discuss compliance requirements",
                    "Receive a customized roadmap",
                  ].map((item, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <CheckIcon color="primary" />
                      </ListItemIcon>
                      <Typography variant="body2">{item}</Typography>
                    </ListItem>
                  ))}
                </List>
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  href="/free-consultation"
                  sx={{ mt: 3, py: 1.5 }}
                >
                  Schedule Your Free Session
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </StyledSection>
      <StyledSection>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            sx={{ fontWeight: 800, mb: 6 }}
          >
            Our Proven Process
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                step: "1",
                title: "Assessment",
                desc: "Comprehensive evaluation of your current IT environment",
              },
              {
                step: "2",
                title: "Planning",
                desc: "Custom roadmap aligned with business objectives",
              },
              {
                step: "3",
                title: "Implementation",
                desc: "Seamless deployment with minimal disruption",
              },
              {
                step: "4",
                title: "Ongoing Support",
                desc: "24/7 monitoring and proactive maintenance",
              },
            ].map((step) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={step.step}>
                <Box sx={{ textAlign: "center", p: 3 }}>
                  <Box
                    sx={{
                      bgcolor: "primary.main",
                      color: "white",
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      mx: "auto",
                      mb: 2,
                    }}
                  >
                    {step.step}
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {step.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </StyledSection>
      <StyledSection sx={{ backgroundColor: theme.palette.grey[50] }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Chip
              label="OUR EXPERTISE"
              color="primary"
              sx={{
                mb: 3,
                fontWeight: 600,
                fontSize: "1rem",
                py: 1.5,
                px: 2,
              }}
            />
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                mb: 3,
                fontSize: isMobile ? "2rem" : "2.5rem",
              }}
            >
              What Sets Our Network Team Apart
            </Typography>
            <Typography
              variant="h6"
              sx={{
                maxWidth: 700,
                mx: "auto",
                color: "text.secondary",
              }}
            >
              Deep technical expertise meets business-focused solutions
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper elevation={3} sx={{ p: 4, height: "100%" }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: "primary.main",
                  }}
                >
                  Technical Excellence
                </Typography>
                <List>
                  {[
                    "Deep understanding of network architectures (traditional & cloud)",
                    "Proven ability to troubleshoot and resolve issues quickly",
                    "Strong skills in routing, switching, and wireless technologies",
                    "Cybersecurity expertise including access control and intrusion prevention",
                    "Commitment to documentation and industry best practices",
                  ].map((item, index) => (
                    <ListItem
                      key={index}
                      sx={{ px: 0, alignItems: "flex-start" }}
                    >
                      <ListItemIcon sx={{ minWidth: 36, mt: "2px" }}>
                        <CheckIcon color="primary" />
                      </ListItemIcon>
                      <Typography variant="body1">{item}</Typography>
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Paper elevation={3} sx={{ p: 4, height: "100%" }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: "primary.main",
                  }}
                >
                  Business Benefits
                </Typography>
                <List>
                  {[
                    "Your business stays connected, protected, and ahead of the curve",
                    "Skilled engineers who quickly diagnose and fix issues",
                    "Rapid call response and issue resolution",
                    "Proactive approach prevents problems before they occur",
                    "Flexible pricing - pay only for what you need",
                    "Friendly, professional support that goes the extra mile",
                  ].map((item, index) => (
                    <ListItem
                      key={index}
                      sx={{ px: 0, alignItems: "flex-start" }}
                    >
                      <ListItemIcon sx={{ minWidth: 36, mt: "2px" }}>
                        <CheckIcon color="primary" />
                      </ListItemIcon>
                      <Typography variant="body1">{item}</Typography>
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </StyledSection>
      <StyledSection>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 3 }}>
                Common Problems We Solve
              </Typography>
              <List>
                {[
                  "Frequent network downtime slowing operations",
                  "Security vulnerabilities keeping you up at night",
                  "Outdated infrastructure holding back growth",
                  "Lack of IT documentation causing headaches",
                  "Slow response from current providers",
                ].map((problem, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <LockIcon color="primary" />
                    </ListItemIcon>
                    <Typography variant="body1">{problem}</Typography>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                  Our Solution Approach
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  We combine deep technical expertise with a business-first
                  mindset to:
                </Typography>
                <List dense>
                  {[
                    "Implement reliable, high-performance networks",
                    "Proactively monitor and prevent issues",
                    "Align technology with your business goals",
                    "Provide clear documentation and reporting",
                    "Deliver rapid response when you need it",
                  ].map((item, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <CheckIcon color="success" />
                      </ListItemIcon>
                      <Typography variant="body2">{item}</Typography>
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </StyledSection>
      <Testimonials />
      {/* Final CTA */}
      <StyledCTASection
        as="section"
        sx={{
          backgroundColor: "white", // Use a solid color for the CTA section
          color: "primary.main", // Explicit text color
          py: 6, // Optional padding for visual spacing
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h3"
            gutterBottom
            sx={{
              fontWeight: 800,
              mb: 3,
              fontSize: isMobile ? "2rem" : "2.5rem",
              color: "blue", // Explicit text color
            }}
          >
            Ready to Transform Your IT Experience?
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              mb: 4,
              maxWidth: 700,
              margin: "0 auto",
              opacity: 0.9,
              color: "blue", // Explicit text color
            }}
          >
            Whether you need comprehensive managed services or targeted
            solutions, our team is ready to help.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button
              href="/contact"
              variant="contained"
              color="secondary"
              size="large"
              sx={{
                px: 6,
                py: 1.5,
                fontSize: "1.1rem",
                fontWeight: 600,
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: 4,
                },
                transition: "all 0.3s ease",
              }}
            >
              Get Started Today
            </Button>
          </Box>
        </Container>
      </StyledCTASection>
    </>
  );
}
