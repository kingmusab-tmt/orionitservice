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
  Lan as LanIcon,
  Wifi as WifiIcon,
  Security as SecurityIcon,
  Settings as SettingsIcon,
  Speed as SpeedIcon,
  Troubleshoot as TroubleshootIcon,
  Upgrade as UpgradeIcon,
  SupportAgent as SupportIcon,
  Checklist as ChecklistIcon,
  ArrowForward as ArrowIcon,
  ExpandMore as ExpandMoreIcon,
  Check as CheckIcon,
} from "@mui/icons-material";
import HeroBanner from "@/app/components/HeroBanner";

const NetworkingSolutions = () => {
  const services = [
    {
      icon: <TroubleshootIcon color="primary" sx={{ fontSize: 50 }} />,
      title: "Network Troubleshooting",
      description: "Quick diagnosis and resolution of connectivity issues",
      features: [
        "Internet connectivity problems",
        "Slow network performance analysis",
        "Device connectivity issues",
        "DNS and DHCP problems",
        "Router/switch troubleshooting",
      ],
      cta: "Get Immediate Help",
    },
    {
      icon: <SettingsIcon color="secondary" sx={{ fontSize: 50 }} />,
      title: "Routine Maintenance",
      description: "Proactive care to keep your network running smoothly",
      features: [
        "Firmware and software updates",
        "Configuration backups",
        "Network health checks",
        "Performance optimization",
        "Cable management",
      ],
      cta: "Schedule Maintenance",
    },
    {
      icon: <UpgradeIcon color="success" sx={{ fontSize: 50 }} />,
      title: "Equipment Upgrades",
      description: "Right-sized network improvements",
      features: [
        "Router and switch upgrades",
        "Wireless access point installation",
        "Basic network expansion",
        "Cabling infrastructure improvements",
        "PoE device deployment",
      ],
      cta: "Plan Your Upgrade",
    },
  ];

  const additionalServices = [
    {
      icon: <WifiIcon />,
      title: "Wireless Network Setup",
      description: "Secure and optimized WiFi for your office",
    },
    {
      icon: <SecurityIcon />,
      title: "Network Security",
      description: "Firewall configuration and security best practices",
    },
    {
      icon: <LanIcon />,
      title: "Structured Cabling",
      description: "Professional cable installation and organization",
    },
    {
      icon: <SpeedIcon />,
      title: "Bandwidth Management",
      description: "Optimize network traffic for critical applications",
    },
  ];

  const faqs = [
    {
      question: "How quickly can you respond to network outages?",
      answer:
        "We offer same-day emergency response for critical network failures, with most issues resolved within 4 hours.",
    },
    {
      question: "Do you work with existing network equipment?",
      answer:
        "Yes, we're certified to maintain and troubleshoot most major brands including Cisco, HP, and Ubiquiti.",
    },
    {
      question: "What's included in a routine network maintenance check?",
      answer:
        "Our 15-point checklist includes device health monitoring, configuration verification, security patch review, and performance testing.",
    },
    {
      question: "How often should network equipment be replaced?",
      answer:
        "Most business-grade equipment should be evaluated every 3-5 years. We'll advise when upgrades make financial sense.",
    },
    {
      question: "Why is my business WiFi slow even with fast internet?",
      answer:
        "Slow business WiFi is often caused by poor access point placement, channel congestion, outdated hardware, or too many devices competing for airtime. We perform wireless analysis and optimize coverage, channels, and configuration for better performance.",
    },
    {
      question: "Do you provide secure guest WiFi setup for offices?",
      answer:
        "Yes. We configure isolated guest networks so visitors can access the internet without exposing your internal business systems, files, or devices.",
    },
    {
      question: "Can you help with network security and firewall setup?",
      answer:
        "Yes. We design and manage firewall rules, segmentation, and secure remote access policies to reduce unauthorized access and improve overall network security posture.",
    },
    {
      question: "How do I know if my network needs an upgrade?",
      answer:
        "Common signs include frequent outages, dropped connections, poor video call quality, slow file transfers, and growing device counts. We assess your current environment and recommend right-sized upgrades.",
    },
    {
      question: "Do you support multi-site or hybrid office networks?",
      answer:
        "Yes. We support single-office, multi-location, and hybrid environments by designing reliable connectivity and secure access for both in-office and remote teams.",
    },
    {
      question: "What is included in network monitoring services?",
      answer:
        "Network monitoring includes device availability checks, performance metrics, traffic visibility, alerting on unusual behavior, and proactive intervention to reduce downtime.",
    },
    {
      question: "Can you improve VoIP and video call quality on our network?",
      answer:
        "Yes. We optimize network traffic with QoS policies, bandwidth prioritization, and configuration tuning so voice and video applications remain stable and clear.",
    },
    {
      question: "How often should network maintenance be performed?",
      answer:
        "Most businesses should schedule monthly or quarterly maintenance depending on complexity. Regular reviews, firmware updates, and configuration checks help prevent unexpected failures.",
    },
    {
      question: "Do you provide documentation after network changes?",
      answer:
        "Yes. We provide clear documentation for network topology, device configuration, IP plans, and change history so your team has better visibility and continuity.",
    },
  ];

  const approachSteps = [
    {
      title: "Network Discovery",
      description:
        "We review your current infrastructure, device health, WiFi coverage, bottlenecks, and business requirements.",
    },
    {
      title: "Stability and Security Plan",
      description:
        "We prioritize fixes and improvements that increase reliability, harden security, and reduce recurring disruptions.",
    },
    {
      title: "Implementation and Optimization",
      description:
        "We deploy the recommended changes, optimize configuration, and validate performance under real-world usage.",
    },
    {
      title: "Ongoing Monitoring and Support",
      description:
        "We provide maintenance, documentation, and responsive support to keep your network stable as your business grows.",
    },
  ];

  const networkChallenges = [
    "Frequent internet outages and unstable connectivity",
    "Slow WiFi performance and dead zones in key work areas",
    "Dropped video calls and poor VoIP call quality",
    "Security gaps caused by misconfigured firewalls or outdated firmware",
    "Limited visibility into network traffic and device health",
    "Difficulty scaling infrastructure as teams and devices grow",
  ];

  return (
    <>
      <HeroBanner
        title="Reliable Business Networking Solutions"
        subtitle="Keep your team connected with expert network support, maintenance, and upgrades"
        ctaText="Request Network Consulation"
        ctaLink="/contact"
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Intro Section */}
        <Box mb={10}>
          <Chip
            label="BUSINESS NETWORKING SERVICES"
            color="primary"
            sx={{ mb: 2, fontWeight: 700, letterSpacing: 0.8 }}
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
            Comprehensive Networking Solutions For Modern Operations
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 980,
              color: "text.secondary",
              lineHeight: 1.9,
              mb: 2,
            }}
          >
            A reliable network is the foundation of business productivity,
            communication, and security. Orion IT Service delivers end-to-end
            networking services that help businesses reduce downtime, improve
            speed, and keep teams connected across office, remote, and hybrid
            work environments. From troubleshooting and maintenance to
            infrastructure upgrades and security hardening, we build practical
            networking solutions aligned with how your business actually works.
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: 980, color: "text.secondary", lineHeight: 1.9 }}
          >
            Our approach combines network performance optimization, secure
            wireless design, firewall management, and proactive support so your
            technology can scale with confidence. Whether you need urgent issue
            resolution or long-term network planning, we help you create a
            stable infrastructure that supports growth and daily operations.
          </Typography>
        </Box>

        {/* Core Services */}
        <Box mb={10} textAlign="center">
          {/* <Chip
            label="CISCO CERTIFIED SUPPORT"
            color="primary"
            sx={{
              mb: 3,
              fontWeight: 600,
              fontSize: "1rem",
              py: 1.5,
              px: 2,
            }}
          /> */}
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 800,
              mb: 3,
              fontSize: { xs: "2rem", md: "2.8rem" },
            }}
          >
            Network Services You Can Trust
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
            Our certified technicians deliver practical networking solutions
            tailored to small and medium businesses.
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            {services.map((service, index) => (
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
                    <Button
                      variant="contained"
                      endIcon={<ArrowIcon />}
                      href="/contact"
                      sx={{ px: 4 }}
                    >
                      {service.cta}
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Service Approach */}
        <Box mb={10}>
          <Typography
            variant="h4"
            component="h3"
            sx={{ fontWeight: 800, mb: 2, textAlign: "center" }}
          >
            Our Networking Service Approach
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 860,
              mx: "auto",
              mb: 5,
              color: "text.secondary",
              lineHeight: 1.85,
              textAlign: "center",
            }}
          >
            We use a structured process to deliver measurable improvements in
            reliability, performance, and security. This helps your business
            avoid reactive fixes and move toward a more stable, scalable network
            environment.
          </Typography>
          <Grid container spacing={3}>
            {approachSteps.map((step, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={step.title}>
                <Paper elevation={2} sx={{ p: 3, height: "100%" }}>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "primary.main", fontWeight: 700, mb: 1 }}
                  >
                    STEP {index + 1}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {step.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Common Challenges */}
        <Box mb={10}>
          <Typography
            variant="h4"
            component="h3"
            sx={{ fontWeight: 800, mb: 3, textAlign: "center" }}
          >
            Common Network Problems We Solve
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 900,
              mx: "auto",
              mb: 4,
              color: "text.secondary",
              lineHeight: 1.85,
              textAlign: "center",
            }}
          >
            Many organizations struggle with recurring performance issues,
            inconsistent wireless coverage, and limited visibility into network
            health. We help resolve core challenges such as:
          </Typography>
          <Paper elevation={1} sx={{ p: 3 }}>
            <Typography variant="body1" sx={{ lineHeight: 1.9 }}>
              {networkChallenges.join(". ")}.
            </Typography>
          </Paper>
          <Typography
            variant="body1"
            sx={{
              mt: 3,
              color: "text.secondary",
              lineHeight: 1.9,
            }}
          >
            Scenario: A growing office has fast internet service, but employees
            still report slow cloud apps, dropped video meetings, and unstable
            WiFi in conference rooms. The root problem is usually not raw
            bandwidth alone. In many cases, the network has aging switches,
            overlapping wireless channels, poor access point placement, and no
            traffic prioritization for critical tools.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              color: "text.secondary",
              lineHeight: 1.9,
            }}
          >
            Solution: We start with a full network assessment to map current
            topology, identify bottlenecks, and measure real-world performance.
            Then we optimize wireless design, update network hardware where
            needed, apply QoS policies for voice and video traffic, and improve
            segmentation and security controls. This gives your team a more
            reliable, secure, and scalable network environment that supports
            daily operations without recurring disruptions.
          </Typography>
          <Divider sx={{ mt: 4 }} />
        </Box>

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
            More Networking Solutions
          </Typography>
          <Grid container spacing={3}>
            {additionalServices.map((service, index) => (
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

        {/* Why Choose Us */}
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
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                }}
              >
                Why Partner With Our Network Team
              </Typography>
              <List>
                {[
                  "Cisco Certified Support Technicians",
                  "CCNA-trained network specialists",
                  "Vendor-agnostic recommendations",
                  "Plain-English explanations",
                  "Preventative maintenance focus",
                  "Friendly pricing ",
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
              <Paper
                elevation={3}
                sx={{ p: 3, backgroundColor: "background.paper" }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    color: "text.primary",
                  }}
                >
                  Free Network Consultation
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    color: "text.secondary",
                  }}
                >
                  Our 30-minute free Consultation can help you identifies
                  vulnerabilities and optimization opportunities in your current
                  setup.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  href="/network-assessment"
                  sx={{ py: 1.5 }}
                >
                  Schedule Your Free Consulation
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Paper>

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
            Common Networking Questions
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
          <SupportIcon
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
            Ready to Optimize Your Network?
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
            Our certified network technicians are ready to resolve your
            connectivity issues and future-proof your infrastructure.
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
            Get Network Support
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
            View Pricing
          </Button> */}
        </Box>
      </Container>
    </>
  );
};

export default NetworkingSolutions;
