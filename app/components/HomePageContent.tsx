"use client";

import Image from "next/image";
import HeroBanner from "./HeroBanner";

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
  ArrowForward as ArrowIcon,
  Language as WebIcon,
} from "@mui/icons-material";

const StyledSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(10, 0),
  },
  backgroundColor: theme.palette.background.default,
}));

const StyledCTASection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(12, 0),
  },
  textAlign: "center",
  background: "white",
  color: theme.palette.primary.contrastText,
}));

const FeatureCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(4),
  },
  height: "100%",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
  },
}));

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

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
        "Regular maintenance",
        "Troubleshooting & support",
      ],
    },
    {
      title: " IT Services",
      description: "Reliable IT support so you can focus on your business",
      icon: <ComputerIcon fontSize="large" color="primary" />,
      link: "/services/it-support",
      features: [
        "Help desk support",
        "Remote Support",
        "Backup and Recovery solutions",
        "Patch management",
        "Strategic IT planning",
      ],
    },
    {
      title: "Website Development",
      description:
        "Professional websites that showcase your business and drive customer engagement",
      icon: <WebIcon fontSize="large" color="primary" />,
      link: "/services/website-development",
      features: [
        "Custom web applications",
        "Responsive & mobile-friendly",
        "E-commerce solutions",
        "SEO optimization",
        "Ongoing maintenance & support",
      ],
    },
  ];

  const stats = [
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "24/7", label: "Expert Support" },
    { value: "30min", label: "Average Response Time" },
  ];

  return (
    <>
      <HeroBanner
        title="Transform Your Business Technology"
        subtitle="Expert IT solutions that drive efficiency, security, and growth"
        ctas={[
          {
            text: "Get Your Free IT Consultation",
            link: "/free-consultation",
            variant: "contained",
          },
          {
            text: "Call Now",
            link: "tel:+18882104378",
            variant: "contained",
          },
        ]}
        image="/images/serveroom2.webp"
      />

      {/* Stats Bar */}
      <Paper
        elevation={0}
        sx={{
          py: 3,
          [theme.breakpoints.up("md")]: {
            py: 4,
          },
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.primary.contrastText,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2} justifyContent="center">
            {stats.map((stat, index) => (
              <Grid
                size={{ xs: 6, sm: 4, md: 3 }}
                key={index}
                sx={{ textAlign: "center" }}
              >
                <Typography
                  variant="h4"
                  component="p"
                  sx={{ fontWeight: 800, mb: 1 }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="subtitle2" component="div">
                  {stat.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Paper>
      <StyledSection sx={{ backgroundColor: theme.palette.grey[50] }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Chip
              label="OUR EXPERTISE"
              color="primary"
              sx={{
                mb: 3,
                fontWeight: 600,
                fontSize: "0.875rem",
                [theme.breakpoints.up("md")]: {
                  fontSize: "1rem",
                },
                py: 1,
                px: 2,
              }}
            />
            <Typography
              variant={isMobile ? "h3" : "h2"}
              sx={{
                fontWeight: 800,
                mb: 3,
                fontSize: isMobile ? "1.8rem" : isTablet ? "2rem" : "2.5rem",
              }}
            >
              What Sets Our IT Team Apart
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                maxWidth: 700,
                mx: "auto",
                color: "text.secondary",
                px: isMobile ? 2 : 0,
              }}
            >
              Deep technical expertise meets business-focused solutions
            </Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
                <Typography
                  variant="h5"
                  component="h3"
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
                    "Network architecture design, optimization, and management across traditional and cloud environments",
                    "IT Support with proactive response, patch management, backup and disaster recovery",
                    "Cybersecurity expertise spanning endpoint protection, threat detection, vulnerability assessment, and compliance",
                    "Website development capabilities including responsive design, SEO optimization, and e-commerce functionality",
                    "Rapid troubleshooting and issue resolution across all IT and web service domains",
                    "Commitment to documentation, reporting, and adherence to industry best practices",
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
              <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
                <Typography
                  variant="h5"
                  component="h3"
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
                    "Integrated IT support keeps your networks, security, infrastructure, and digital presence aligned with business goals",
                    "Reduced operational risk through layered cybersecurity, reliable infrastructure, and strategic IT planning",
                    "Faster time-to-resolution with expert diagnostics and rapid response across all service areas",
                    "Improved uptime and system performance through continuous monitoring and proactive maintenance",
                    "Enhanced online presence with modern websites, SEO optimization, and user-focused digital experiences",
                    "Cost-effective, flexible engagement models supporting ongoing support, on-demand assistance, and project-based work",
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

      {/* Services Section */}
      <StyledSection as="section" id="services">
        <Container maxWidth="xl">
          <Box textAlign="center" mb={6}>
            <Chip
              label="IT SOLUTIONS"
              color="primary"
              sx={{
                mb: 3,
                fontWeight: 600,
                fontSize: "0.875rem",
                [theme.breakpoints.up("md")]: {
                  fontSize: "1rem",
                },
                py: 1,
                px: 2,
              }}
            />
            <Typography
              variant={isMobile ? "h3" : "h2"}
              component="h2"
              sx={{
                fontWeight: 800,
                mb: 3,
                fontSize: isMobile ? "1.8rem" : isTablet ? "2.2rem" : "2.8rem",
              }}
            >
              Comprehensive IT Services for Modern Businesses
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              sx={{
                maxWidth: 700,
                mx: "auto",
                color: "text.secondary",
                px: isMobile ? 2 : 0,
              }}
            >
              We deliver tailored technology solutions that align with your
              business goals and drive operational excellence.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {services.map((service, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
                <FeatureCard elevation={3}>
                  <Box sx={{ textAlign: "center", mb: 2 }}>{service.icon}</Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      textAlign: "center",
                      fontSize: isMobile ? "1.4rem" : "1.5rem",
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
                      size={isMobile ? "medium" : "large"}
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
          <Grid container spacing={4} alignItems="center">
            <Grid textAlign="center" size={{ xs: 12, md: 6 }} mb={6}>
              <Chip
                label="WHY CHOOSE US"
                color="primary"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  [theme.breakpoints.up("md")]: {
                    fontSize: "1rem",
                  },
                  py: 1,
                  px: 2,
                }}
              />
              <Typography
                variant={isMobile ? "h3" : "h2"}
                component="h2"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  fontSize: isMobile ? "1.8rem" : isTablet ? "2rem" : "2.5rem",
                }}
              >
                Technology Partners You Can Trust
              </Typography>
              <List>
                {[
                  "Certified IT professionals with 10+ years experience",
                  "Business-first approach to technology",
                  "Proactive troubleshooting and maintenance",
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
            <Grid size={{ xs: 12, md: 6 }}>
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
                  Schedule a 15-minute call with our technology experts to:
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
            variant={isMobile ? "h3" : "h2"}
            align="center"
            sx={{ fontWeight: 800, mb: 6 }}
          >
            Our Proven Process
          </Typography>
          <Grid container spacing={3}>
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
                desc: "24/7 Remote Support and proactive maintenance",
              },
            ].map((step) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={step.step}>
                <Box sx={{ textAlign: "center", p: 2 }}>
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
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{ fontWeight: 700, mb: 1 }}
                  >
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

      <StyledSection>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant={isMobile ? "h3" : "h2"}
                sx={{ fontWeight: 800, mb: 3 }}
                color="primary.main"
              >
                Common Problems We Solve
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 2, color: "text.secondary" }}
              >
                Businesses searching for IT Services in Las Vegas choose us to
                eliminate recurring downtime, reduce support delays, and improve
                system reliability. We provide proactive IT support, rapid
                troubleshooting, and strategic planning that keeps teams
                productive and operations stable. While Las Vegas is a key
                service hub, we support companies across the entire US and UK,
                and deliver global remote IT support for distributed teams.
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 2, color: "text.secondary" }}
              >
                Our Cybersecurity Solutions protect your business against
                ransomware, phishing, unauthorized access, and data loss through
                layered defense strategies. Services include endpoint
                protection, threat detection, vulnerability assessments, user
                security training, and compliance-focused controls that
                strengthen your security posture and business continuity.
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 2, color: "text.secondary" }}
              >
                Our Network Solutions and IT Services improve performance from
                core infrastructure to day-to-day support. We design, optimize,
                and maintain wired and wireless networks, monitor systems around
                the clock, manage patches and backups, and deliver responsive
                help desk support. The result is predictable uptime, better user
                experience, and technology aligned with your business growth.
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                Our Website Development services complete your digital strategy
                with custom, mobile-friendly websites built for speed,
                conversions, and search visibility. From SEO-ready architecture
                and e-commerce functionality to ongoing maintenance and
                performance updates, we help your business attract and convert
                the right audience. With Cybersecurity Solutions, Network
                Solutions, IT Services, and Website Development under one team,
                you get a trusted technology partner for Las Vegas, the US, the
                UK, and global operations.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "auto",
                  overflow: "hidden",
                  borderRadius: 2,
                }}
              >
                <Image
                  src="/images/common.png"
                  alt="Our Solution Approach"
                  width={600}
                  height={600}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </StyledSection>

      {/* Final CTA */}
      <StyledCTASection
        as="section"
        sx={{
          backgroundColor: "white",
          color: "primary.main",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant={isMobile ? "h3" : "h2"}
            component="h3"
            gutterBottom
            sx={{
              fontWeight: 800,
              mb: 3,
              fontSize: isMobile ? "1.8rem" : isTablet ? "2.2rem" : "2.5rem",
            }}
          >
            Ready to Transform Your IT Experience?
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            sx={{
              mb: 5,
              maxWidth: 800,
              margin: "0 auto",
              opacity: 0.9,
              px: isMobile ? 2 : 0,
            }}
          >
            Whether you need comprehensive IT services or targeted solutions,
            our team is ready to help.
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
                px: 4,
                py: 1.5,
                mt: 2,
                fontSize: "1rem",
                [theme.breakpoints.up("sm")]: {
                  fontSize: "1.1rem",
                },
                fontWeight: 600,
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: 4,
                },
                transition: "all 0.3s ease",
              }}
            >
              Contact Us Now
            </Button>
          </Box>
        </Container>
      </StyledCTASection>
    </>
  );
}
