"use client";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Assessment as AssessmentIcon,
  CheckCircle as CheckIcon,
  Cloud as CloudIcon,
  Devices as DevicesIcon,
  ExpandMore as ExpandMoreIcon,
  Lan as LanIcon,
  People as PeopleIcon,
  Security as SecurityIcon,
  Shield as ShieldIcon,
} from "@mui/icons-material";
import { styled } from "@mui/system";
import HeroBanner from "@/app/components/HeroBanner";

const StyledSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(10, 0),
  },
}));

const ServiceCard = styled(Card)(() => ({
  height: "100%",
  border: "1px solid rgba(148, 163, 184, 0.22)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 12px 30px rgba(15, 23, 42, 0.12)",
  },
}));

const CybersecurityServices = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const serviceCards = [
    {
      title: "Cloud Security",
      icon: (
        <CloudIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
      ),
      intro:
        "Cloud security protects the data, apps, and services your business depends on every day. We help secure Microsoft 365, SharePoint, OneDrive, Teams, and other cloud-based tools so they stay accessible, controlled, and harder to exploit.",
      items: [
        "Secure user onboarding and offboarding with permissions",
        "Monitor suspicious logins and unusual activity across cloud accounts",
        "Encrypt data in transit and at rest to reduce exposure",
        "Prevent accidental deletion, unauthorized sharing, and data leakage",
      ],
    },
    {
      title: "Network Security",
      icon: (
        <LanIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
      ),
      intro:
        "Your network is the path attackers try to use when they want to reach critical systems. We help defend that path with firewall management, segmentation, remote access controls, and ongoing security review.",
      items: [
        "Deploy and manage firewalls to block unauthorized access",
        "Segment network traffic to reduce lateral movement",
        "Support secure remote access for authorized users",
        "Perform routine security scans to identify weak spots early",
      ],
    },
    {
      title: "Endpoint Protection",
      icon: (
        <DevicesIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
      ),
      intro:
        "Every laptop, desktop, and mobile device is a possible entry point. Endpoint protection helps defend those devices from ransomware, malware, phishing payloads, and unauthorized changes.",
      items: [
        "Install and maintain antivirus and anti-malware tools",
        "Use endpoint detection and response for faster threat visibility",
        "Apply patches and updates to close known vulnerabilities",
        "Isolate infected devices to limit business disruption",
      ],
    },
    {
      title: "Risk Management and Training",
      icon: (
        <AssessmentIcon
          sx={{ fontSize: 40, color: theme.palette.primary.main }}
        />
      ),
      intro:
        "A strong security program needs process, awareness, and accountability. We help you reduce cyber risk with practical planning, staff education, and continuous improvement.",
      items: [
        "Assess business risk and prioritize the most important controls",
        "Deliver security awareness training for employees and leadership",
        "Teach teams how to spot phishing and social engineering",
        "Review security posture regularly and adapt as threats change",
      ],
    },
  ];

  const benefits = [
    {
      title: "Sensitive Data Protection",
      description:
        "Reduce the chance that customer records, internal files, and confidential business information are exposed or stolen.",
    },
    {
      title: "Consistent Trust Building",
      description:
        "Show clients and partners that your business takes data protection, privacy, and digital responsibility seriously.",
    },
    {
      title: "Compliance First Approach",
      description:
        "Put safeguards in place that help align with regulatory, contractual, and industry expectations.",
    },
    {
      title: "Little or No Downtime",
      description:
        "Identify and contain threats earlier so your operations can continue with less interruption.",
    },
    {
      title: "Reputation Protection",
      description:
        "A stronger cybersecurity posture lowers the chance of damaging incidents that can affect trust and revenue.",
    },
    {
      title: "Absolute Security Visibility",
      description:
        "Gain clearer insight into accounts, devices, risk exposure, and the next steps that matter most.",
    },
  ];

  const faqItems = [
    {
      question: "Does my business really needs Cybersecurity?",
      answer:
        "Cybersecurity helps protect your business from data breaches, ransomware, account compromise, fraud, downtime, and reputational damage. A layered approach improves resilience and reduces the impact of attacks.",
    },
    {
      question: "Do I really need to protect my cloud and why does it matter?",
      answer:
        "Cloud security protects the online tools and data your business uses, including Microsoft 365, file storage, and web-based applications. It helps control access, reduce leaks, and defend against unauthorized account activity.",
    },
    {
      question: "What is endpoint protection?",
      answer:
        "Endpoint protection secures devices like laptops, desktops, and mobile devices through antivirus, anti-malware, detection tools, patching, and response workflows. It helps stop infections before they spread.",
    },
    {
      question: "How do firewalls and network security help?",
      answer:
        "Firewalls and network security controls regulate traffic, block unauthorized access, and make it harder for threats to move through your environment. Segmentation and monitoring add more protection and visibility.",
    },
    {
      question: "Why is employee cybersecurity training necessary?",
      answer:
        "Employees are often targeted by phishing, fake login pages, and social engineering. Training helps your team recognize suspicious behavior and respond faster when something looks wrong.",
    },
    {
      question: "What is cybersecurity risk management?",
      answer:
        "Cybersecurity risk management is the process of identifying threats, evaluating vulnerabilities, and putting controls in place to reduce the likelihood and impact of incidents.",
    },
    {
      question: "How does multi-factor authentication improve security?",
      answer:
        "Multi-factor authentication adds a second verification step beyond a password, making it much harder for attackers to access business accounts even if credentials are stolen.",
    },
    {
      question: "How often should my business run security audits?",
      answer:
        "Most businesses benefit from scheduled quarterly reviews and at least one deeper annual security assessment. Frequent audits help identify new risks, validate controls, and keep your security strategy current.",
    },
    {
      question: "Do small businesses really need advanced cybersecurity?",
      answer:
        "Yes. Small businesses are often targeted because they may have fewer security controls. Practical cybersecurity measures such as MFA, endpoint protection, backups, and staff training can significantly reduce risk.",
    },
    {
      question: "What is the role of data backup in cybersecurity?",
      answer:
        "Reliable backups help your business recover from ransomware, accidental deletion, and system failures. A tested backup and recovery plan is a critical part of cybersecurity resilience and business continuity.",
    },
    {
      question: "How quickly should a cybersecurity incident be handled?",
      answer:
        "Incidents should be addressed immediately. Fast detection, containment, and response reduce damage, shorten downtime, and improve your ability to recover operations safely.",
    },
    {
      question: "What password policy should a business use?",
      answer:
        "Businesses should enforce strong unique passwords, use a password manager, require multi-factor authentication, and remove shared credentials wherever possible to reduce account compromise risk.",
    },
    {
      question:
        "Can cybersecurity support services replace an internal IT team?",
      answer:
        "Cybersecurity support services can complement or extend internal teams by providing monitoring, specialized expertise, and incident response support. Many organizations use a hybrid model for stronger coverage.",
    },
    {
      question: "How does security awareness training reduce cyber risk?",
      answer:
        "Security awareness training teaches employees how to recognize phishing, suspicious links, and social engineering attempts. Better user behavior reduces successful attacks and strengthens overall defenses.",
    },
  ];

  return (
    <>
      <HeroBanner
        title="Comprehensive Cybersecurity Solutions"
        subtitle="Multi-layer protection for cloud, network, endpoint, and user security"
        ctaText="Get Your Security Assessment"
        ctaLink="/contact"
        image="/images/cyber.webp"
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <StyledSection sx={{ pt: 0 }}>
          <Box mb={4}>
            <Chip
              label="CYBERSECURITY SERVICES"
              color="primary"
              sx={{ mb: 2, fontWeight: 700, letterSpacing: 0.8 }}
            />
            <Typography
              variant={isMobile ? "h3" : "h2"}
              component="h2"
              sx={{
                fontWeight: 800,
                mb: 3,
                fontSize: isMobile ? "1.9rem" : isTablet ? "2.4rem" : "2.9rem",
              }}
            >
              Trusted Cybersecurity Services For Modern Businesses
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: 980,
                color: theme.palette.text.secondary,
                lineHeight: 1.9,
                fontSize: "1.08rem",
              }}
            >
              In today’s digital landscape, cybersecurity is not a single tool
              or a one-time setup. It is a full business discipline that
              protects your cloud assets, your on-premises network, your
              individual devices, and the people who use them every day. Orion
              IT Service delivers comprehensive cybersecurity solutions that
              help businesses reduce risk, improve visibility, and stay
              resilient against phishing, ransomware, unauthorized access, data
              leaks, and other evolving threats. We build practical protection
              around your actual workflow, so your security improves without
              slowing operations.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Paper elevation={2} sx={{ p: 3, height: "100%" }}>
                <SecurityIcon
                  sx={{
                    fontSize: 40,
                    color: theme.palette.primary.main,
                    mb: 2,
                  }}
                />
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ fontWeight: 700, mb: 1 }}
                >
                  Multi-Layer Protection
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.text.secondary, lineHeight: 1.8 }}
                >
                  We combine cloud security, network security, endpoint
                  protection, and user awareness into one coordinated strategy.
                </Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Paper elevation={2} sx={{ p: 3, height: "100%" }}>
                <ShieldIcon
                  sx={{
                    fontSize: 40,
                    color: theme.palette.primary.main,
                    mb: 2,
                  }}
                />
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ fontWeight: 700, mb: 1 }}
                >
                  Proactive Risk Reduction
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.text.secondary, lineHeight: 1.8 }}
                >
                  We help you spot gaps early, strengthen defenses, and create a
                  repeatable process for security review and response.
                </Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Paper elevation={2} sx={{ p: 3, height: "100%" }}>
                <PeopleIcon
                  sx={{
                    fontSize: 40,
                    color: theme.palette.primary.main,
                    mb: 2,
                  }}
                />
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ fontWeight: 700, mb: 1 }}
                >
                  Human-Focused Training
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.text.secondary, lineHeight: 1.8 }}
                >
                  Security awareness training helps teams avoid phishing,
                  credential theft, and social engineering attacks.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </StyledSection>

        <StyledSection>
          <Box mb={5} textAlign="center">
            <Typography
              variant={isMobile ? "h3" : "h2"}
              component="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: isMobile ? "1.8rem" : isTablet ? "2.2rem" : "2.8rem",
              }}
            >
              Cybersecurity Solutions Built Around Your Environment
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: 880,
                mx: "auto",
                color: theme.palette.text.secondary,
                lineHeight: 1.9,
              }}
            >
              We do not take a one-size-fits-all approach. Instead, we build a
              layered security plan that covers cloud security, network
              security, endpoint protection, and cybersecurity risk management
              so your business can operate with more confidence.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {serviceCards.map((service) => (
              <Grid size={{ xs: 12, md: 6 }} key={service.title}>
                <ServiceCard elevation={3}>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      {service.icon}
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{ fontWeight: 800, ml: 2 }}
                      >
                        {service.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.secondary,
                        lineHeight: 1.85,
                        mb: 2,
                      }}
                    >
                      {service.intro} {service.items.join(". ")}.
                    </Typography>
                  </CardContent>
                </ServiceCard>
              </Grid>
            ))}
          </Grid>
        </StyledSection>

        <StyledSection
          sx={{
            backgroundColor: theme.palette.grey[50],
            px: { xs: 2, md: 4 },
            borderRadius: 2,
          }}
        >
          <Typography
            variant={isMobile ? "h3" : "h2"}
            component="h2"
            sx={{
              fontWeight: 800,
              mb: 3,
              textAlign: "center",
              fontSize: isMobile ? "1.8rem" : isTablet ? "2.2rem" : "2.8rem",
            }}
          >
            Why Cybersecurity Matters For Your Business
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 900,
              mx: "auto",
              mb: 5,
              color: theme.palette.text.secondary,
              lineHeight: 1.9,
              textAlign: "center",
            }}
          >
            A strong cybersecurity program helps protect revenue, preserve
            customer trust, and reduce disruption when threats appear. It also
            supports compliance efforts, improves visibility across the IT
            environment, and gives your team the confidence to work without
            constant concern about security incidents.
          </Typography>

          <Grid container spacing={3}>
            {benefits.map((benefit) => (
              <Grid size={{ xs: 12, md: 6 }} key={benefit.title}>
                <Paper elevation={2} sx={{ p: 3, height: "100%" }}>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <CheckIcon
                      sx={{ color: theme.palette.success.main, mt: 0.2 }}
                    />
                    <Box>
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{ fontWeight: 700, mb: 1 }}
                      >
                        {benefit.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.secondary,
                          lineHeight: 1.8,
                        }}
                      >
                        {benefit.description}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </StyledSection>

        <StyledSection>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant={isMobile ? "h3" : "h2"}
                component="h2"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  fontSize: isMobile
                    ? "1.8rem"
                    : isTablet
                      ? "2.2rem"
                      : "2.8rem",
                }}
              >
                Cyber Threats We Help Prevent
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  lineHeight: 1.9,
                  mb: 3,
                }}
              >
                Modern attacks often begin quietly and spread quickly. Our
                security approach is built to reduce the impact of common
                threats like phishing attacks, ransomware, business email
                compromise, unauthorized account access, malware infections,
                weak passwords, shadow IT, and insider risk. By identifying
                these threats early and putting the right protections in place,
                we improve your ability to detect suspicious activity before it
                becomes a major incident.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper elevation={3} sx={{ p: 4 }}>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ fontWeight: 800, mb: 2 }}
                >
                  Security Reviews, Training, and Ongoing Monitoring
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    lineHeight: 1.85,
                    mb: 2,
                  }}
                >
                  We help businesses move beyond checkbox security by combining
                  audits, technical safeguards, employee education, and
                  continuous monitoring into one coordinated program. That means
                  less guesswork, more visibility, and better decisions when a
                  threat appears.
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.text.secondary, lineHeight: 1.8 }}
                >
                  Whether you need cloud hardening, network segmentation,
                  endpoint defense, or practical security awareness training,
                  our cybersecurity services are designed to keep your
                  environment protected while supporting how your team actually
                  works.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </StyledSection>

        <StyledSection
          sx={{
            backgroundColor: theme.palette.grey[50],
            px: { xs: 2, md: 4 },
            borderRadius: 2,
          }}
        >
          <Typography
            variant={isMobile ? "h3" : "h2"}
            component="h2"
            sx={{
              fontWeight: 800,
              mb: 5,
              textAlign: "center",
              fontSize: isMobile ? "1.8rem" : isTablet ? "2.2rem" : "2.8rem",
            }}
          >
            Why Businesses Choose Orion IT Service
          </Typography>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper elevation={2} sx={{ p: 4, height: "100%" }}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ fontWeight: 800, mb: 2 }}
                >
                  A Practical Security Strategy
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: theme.palette.text.secondary, lineHeight: 1.9 }}
                >
                  We focus on the controls that matter most: access management,
                  device protection, user awareness, logging, monitoring, and
                  response planning. That gives you a security posture that is
                  easier to understand, maintain, and improve over time.
                </Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper elevation={2} sx={{ p: 4, height: "100%" }}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ fontWeight: 800, mb: 2 }}
                >
                  Guidance You Can Act On
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: theme.palette.text.secondary, lineHeight: 1.9 }}
                >
                  We do more than identify risk. We explain what it means,
                  prioritize what should happen next, and help you take the
                  right steps to protect your business without unnecessary
                  complexity.
                </Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Paper elevation={2} sx={{ p: 4 }}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ fontWeight: 800, mb: 2 }}
                >
                  Built For Long-Term Resilience
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: theme.palette.text.secondary, lineHeight: 1.9 }}
                >
                  Partnering with Orion IT Service means building a resilient
                  defense against cyber threats. From one-time assessments to
                  ongoing protection and staff training, we help businesses
                  strengthen their defenses and stay focused on growth.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </StyledSection>

        <StyledSection>
          <Typography
            variant={isMobile ? "h3" : "h2"}
            component="h2"
            sx={{
              fontWeight: 800,
              mb: 5,
              textAlign: "center",
              fontSize: isMobile ? "1.8rem" : isTablet ? "2.2rem" : "2.8rem",
            }}
          >
            Frequently Asked Questions About Cybersecurity Services
          </Typography>

          <Box sx={{ maxWidth: 900, mx: "auto" }}>
            {faqItems.map((faq) => (
              <Accordion key={faq.question} sx={{ mb: 2 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: 700 }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.text.secondary,
                      lineHeight: 1.85,
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </StyledSection>

        <Paper
          elevation={3}
          sx={{
            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
            color: "white",
            p: { xs: 4, md: 6 },
            textAlign: "center",
            borderRadius: 2,
          }}
        >
          <Typography
            variant={isMobile ? "h3" : "h2"}
            component="h2"
            sx={{
              fontWeight: 800,
              mb: 3,
              fontSize: isMobile ? "1.8rem" : isTablet ? "2.2rem" : "2.8rem",
            }}
          >
            Ready To Strengthen Your Cybersecurity?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 760,
              mx: "auto",
              mb: 4,
              lineHeight: 1.9,
              opacity: 0.96,
            }}
          >
            Contact Orion IT Service to discuss cloud security, network
            security, endpoint protection, and cybersecurity risk management
            tailored to your business.
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
              variant="contained"
              color="secondary"
              size="large"
              href="/contact"
            >
              Request Consultation
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="/security-assessment"
              sx={{ color: "white", borderColor: "rgba(255,255,255,0.7)" }}
            >
              Start Assessment
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default CybersecurityServices;
