"use client";

import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Button,
  List,
  ListItem,
  ListItemIcon,
  Chip,
  Divider,
  Paper,
} from "@mui/material";
import {
  Monitor as MonitorIcon,
  Security as SecurityIcon,
  Cloud as CloudIcon,
  Storage as StorageIcon,
  SupportAgent as SupportIcon,
  Checklist as ChecklistIcon,
  SyncAlt as SyncIcon,
  Business as BusinessIcon,
  ArrowForward as ArrowIcon,
  CheckCircle as CheckIcon,
  Devices as DevicesIcon,
  Error as ErrorIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import HeroBanner from "@/app/components/HeroBanner";

const ManagedItServices = () => {
  const coreServices = [
    {
      icon: <MonitorIcon color="primary" sx={{ fontSize: 50 }} />,
      title: "Proactive Monitoring",
      description: "24/7 system oversight to prevent issues before they occur",
      features: [
        "Network performance tracking",
        "Device health monitoring",
        "Automated alert system",
        "Monthly health reports",
        "Capacity planning",
      ],
      //   cta: "See Monitoring Demo",
    },
    {
      icon: <SecurityIcon color="secondary" sx={{ fontSize: 50 }} />,
      title: "Security Management",
      description: "Comprehensive protection for your digital assets",
      features: [
        "Antivirus & malware protection",
        "Patch management",
        "Firewall monitoring",
        "Security policy enforcement",
        "Vulnerability scans",
      ],
      //   cta: "Get Security Audit",
    },
    {
      icon: <SupportIcon color="success" sx={{ fontSize: 50 }} />,
      title: "Help Desk Support",
      description: "Your team's dedicated IT support partner",
      features: [
        "Unlimited remote support",
        "Priority ticket handling",
        "Onsite assistance (if needed)",
        "Employee training",
        "Quick response times",
      ],
      //   cta: "View Support Plans",
    },
  ];

  const additionalBenefits = [
    {
      icon: <CloudIcon />,
      title: "Cloud Management",
      description: "Optimized cloud services and migrations",
    },
    {
      icon: <StorageIcon />,
      title: "Backup Solutions",
      description: "Automated data protection and recovery",
    },
    {
      icon: <SyncIcon />,
      title: "Software Management",
      description: "License tracking and application updates",
    },
    {
      icon: <DevicesIcon />,
      title: "Device Management",
      description: "Workstation and mobile device support",
    },
  ];

  const faqs = [
    {
      question: "How is managed IT different from break-fix services?",
      answer:
        "We prevent problems before they happen through continuous monitoring and maintenance, rather than just reacting to emergencies.",
    },
    {
      question: "What response time can we expect for support issues?",
      answer:
        "Most critical issues are addressed within 1 hour, with standard requests handled within 4 hours during business days.",
    },
    {
      question: "Do you offer customized service plans?",
      answer:
        "Yes, we tailor every package to your specific business needs, technology stack, and budget requirements.",
    },
    {
      question: "Can you help with our compliance requirements?",
      answer:
        "We maintain compliance frameworks for HIPAA, PCI DSS, and other standards relevant to your industry.",
    },
  ];

  return (
    <>
      <HeroBanner
        title="Stress-Free IT Management"
        subtitle="Proactive technology support so you can focus on growing your business"
        ctaText="Get Your Free IT Assessment"
        ctaLink="/contact"
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Value Proposition */}
        <Box mb={10} textAlign="center">
          <Chip
            label="PROACTIVE IT SUPPORT"
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
              fontSize: { xs: "2rem", md: "2.8rem" },
            }}
          >
            Your Complete IT Department Replacement
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              maxWidth: 700,
              mx: "auto",
              mb: 5,
              color: "text.secondary",
            }}
          >
            We become your technology partner, handling everything from daily
            maintenance to strategic planning.
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            {coreServices.map((service, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Card
                  elevation={4}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderTop: `4px solid ${service.icon.props.color}`,
                  }}
                >
                  <CardContent
                    sx={{
                      p: 4,
                      flexGrow: 1,
                      textAlign: "center",
                    }}
                  >
                    <Box sx={{ mb: 3 }}>{service.icon}</Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      {service.description}
                    </Typography>
                    <List dense sx={{ textAlign: "left", mb: 3 }}>
                      {service.features.map((feature, i) => (
                        <ListItem key={i} sx={{ px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <ChecklistIcon color="primary" />
                          </ListItemIcon>
                          <Typography variant="body2">{feature}</Typography>
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                  <Box sx={{ p: 2, textAlign: "center" }}>
                    {/* <Button
                      variant="contained"
                      endIcon={<ArrowIcon />}
                      href={
                        index === 0
                          ? "/demo"
                          : index === 1
                          ? "/security"
                          : "/support"
                      }
                      sx={{ px: 4 }}
                    >
                      {service.cta}
                    </Button> */}
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Business Benefits */}
        <Paper
          elevation={0}
          sx={{
            backgroundColor: "primary.light",
            color: "primary.contrastText",
            p: 6,
            mb: 10,
            borderRadius: 2,
          }}
        >
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                }}
              >
                What Our Managed IT Services Include
              </Typography>
              <List>
                {[
                  "Dedicated account manager",
                  "Regular technology reviews",
                  "Strategic IT budgeting",
                  "Vendor coordination",
                  "Employee onboarding/offboarding",
                  "Disaster recovery planning",
                ].map((item, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon
                      sx={{ minWidth: 40, color: "primary.contrastText" }}
                    >
                      <CheckIcon />
                    </ListItemIcon>
                    <Typography variant="body1">{item}</Typography>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                }}
              >
                Business Benefits You'll Gain
              </Typography>
              <List>
                {[
                  "Reduced downtime (average 85% improvement)",
                  "Predictable monthly costs",
                  "Enterprise-grade security",
                  "Access to latest technologies",
                  "Scalable solutions for growth",
                  "More time to focus on your business",
                ].map((item, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon
                      sx={{ minWidth: 40, color: "primary.contrastText" }}
                    >
                      <CheckIcon />
                    </ListItemIcon>
                    <Typography variant="body1">{item}</Typography>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Paper>

        {/* Additional Services */}
        <Box mb={10}>
          <Typography
            variant="h4"
            component="h3"
            sx={{
              fontWeight: 800,
              mb: 5,
              textAlign: "center",
            }}
          >
            Comprehensive IT Management
          </Typography>
          <Grid container spacing={3}>
            {additionalBenefits.map((service, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Card elevation={2} sx={{ height: "100%" }}>
                  <CardContent
                    sx={{
                      p: 3,
                      textAlign: "center",
                    }}
                  >
                    <Box
                      sx={{
                        color: "primary.main",
                        mb: 2,
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      component="h4"
                      sx={{
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Comparison */}
        <Box
          mb={10}
          sx={{
            backgroundColor: "grey.50",
            p: 6,
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h4"
            component="h3"
            sx={{
              fontWeight: 800,
              mb: 5,
              textAlign: "center",
            }}
          >
            Managed IT vs. Traditional Support
          </Typography>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ height: "100%" }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h5"
                    component="h4"
                    sx={{
                      fontWeight: 700,
                      mb: 3,
                      color: "primary.main",
                    }}
                  >
                    Break-Fix Model
                  </Typography>
                  <List>
                    {[
                      "Reactive - you call when something breaks",
                      "Unpredictable costs",
                      "No system monitoring",
                      "No preventative maintenance",
                      "Downtime while waiting for repairs",
                      "No strategic planning",
                    ].map((item, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <ErrorIcon color="error" />
                        </ListItemIcon>
                        <Typography variant="body1">{item}</Typography>
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  height: "100%",
                  border: "2px solid",
                  borderColor: "primary.main",
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h5"
                    component="h4"
                    sx={{
                      fontWeight: 700,
                      mb: 3,
                      color: "primary.main",
                    }}
                  >
                    Our Managed IT Approach
                  </Typography>
                  <List>
                    {[
                      "Proactive - we prevent issues before they happen",
                      "Fixed monthly pricing",
                      "24/7 system monitoring",
                      "Regular preventative maintenance",
                      "Minimal downtime",
                      "Strategic technology roadmap",
                    ].map((item, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckIcon color="success" />
                        </ListItemIcon>
                        <Typography variant="body1">{item}</Typography>
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* FAQ */}
        <Box mb={10}>
          <Typography
            variant="h4"
            component="h3"
            sx={{
              fontWeight: 800,
              mb: 5,
              textAlign: "center",
            }}
          >
            Managed IT Services Questions
          </Typography>
          <Box>
            {faqs.map((faq, index) => (
              <Accordion key={index} elevation={2} sx={{ mb: 2 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1">{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>

        {/* Final CTA */}
        <Box textAlign="center">
          <BusinessIcon
            sx={{
              fontSize: 60,
              color: "primary.main",
              mb: 3,
            }}
          />
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 800,
              mb: 3,
            }}
          >
            Ready to Transform Your IT Experience?
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              maxWidth: 700,
              mx: "auto",
              mb: 4,
              color: "text.secondary",
            }}
          >
            Stop worrying about technology and get back to focusing on your
            business.
          </Typography>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowIcon />}
            href="/contact"
            sx={{
              py: 2,
              px: 6,
              fontSize: "1.1rem",
              mr: 2,
              mb: { xs: 2, sm: 0 },
            }}
          >
            Contact Us Now
          </Button>
          {/* <Button
            variant="outlined"
            size="large"
            href="/pricing"
            sx={{
              py: 2,
              px: 6,
              fontSize: "1.1rem",
            }}
          >
            Compare Plans
          </Button> */}
        </Box>
      </Container>
    </>
  );
};

export default ManagedItServices;
