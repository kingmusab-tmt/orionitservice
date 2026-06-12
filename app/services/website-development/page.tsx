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
  Code as CodeIcon,
  Smartphone as MobileIcon,
  Search as SearchIcon,
  Speed as SpeedIcon,
  Security as SecurityIcon,
  Support as SupportIcon,
  Devices as DevicesIcon,
  ShoppingCart as ShoppingIcon,
  Palette as PaletteIcon,
  CheckCircle as CheckIcon,
  ExpandMore as ExpandMoreIcon,
  ArrowForward as ArrowIcon,
} from "@mui/icons-material";
import HeroBanner from "@/app/components/HeroBanner";

const WebsiteDevelopment = () => {
  const coreServices = [
    {
      icon: <PaletteIcon color="primary" sx={{ fontSize: 50 }} />,
      title: "Custom Design",
      description: "Professional designs that reflect your brand identity",
      features: [
        "Brand-aligned aesthetics",
        "User experience optimization",
        "Modern design trends",
        "Accessibility compliance",
        "Responsive layouts",
      ],
    },
    {
      icon: <CodeIcon color="secondary" sx={{ fontSize: 50 }} />,
      title: "Web Development",
      description: "Clean, efficient code built on modern frameworks",
      features: [
        "Next.js & React expertise",
        "Scalable architecture",
        "API integration",
        "Database design",
        "Version control",
      ],
    },
    {
      icon: <MobileIcon color="success" sx={{ fontSize: 50 }} />,
      title: "Mobile Responsive",
      description: "Perfect experience on every device and screen size",
      features: [
        "Mobile-first design",
        "Touch-friendly interfaces",
        "Fast load times",
        "Adaptive layouts",
        "Cross-browser compatibility",
      ],
    },
  ];

  const additionalFeatures = [
    {
      icon: <SearchIcon />,
      title: "SEO Optimization",
      description: "Get found by your customers with proven SEO strategies",
    },
    {
      icon: <ShoppingIcon />,
      title: "E-Commerce Solutions",
      description: "Powerful shopping cart and payment integration",
    },
    {
      icon: <SpeedIcon />,
      title: "Performance Tuning",
      description: "Lightning-fast load times for better user experience",
    },
    {
      icon: <SecurityIcon />,
      title: "Security First",
      description: "SSL certificates, secure data handling, and compliance",
    },
    {
      icon: <SupportIcon />,
      title: "Ongoing Support",
      description: "Maintenance, updates, and technical assistance",
    },
    {
      icon: <DevicesIcon />,
      title: "CMS Integration",
      description: "Easy-to-use content management systems",
    },
  ];

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer:
        "Timeline varies based on complexity, but most projects take 4-12 weeks. Simple landing pages take 2-3 weeks, while complex e-commerce sites may take 12-16 weeks. We provide a detailed timeline during the planning phase.",
    },
    {
      question: "What's included in your maintenance and support?",
      answer:
        "Our support packages include regular updates, security patches, backups, performance monitoring, and technical assistance. We offer flexible plans from basic support to comprehensive ongoing service coverage.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Absolutely. Every website we build is fully responsive and optimized for mobile devices. We use mobile-first design principles to ensure excellent experiences on all screen sizes.",
    },
    {
      question: "Do you handle domain and hosting setup?",
      answer:
        "Yes, we can help with domain registration and recommend reliable hosting providers. We can manage everything for you, or coordinate with your existing providers.",
    },
    {
      question: "Can you integrate with my existing business systems?",
      answer:
        "Yes, we specialize in integrating with CRMs, payment processors, inventory systems, and other business applications to create a seamless workflow.",
    },
    {
      question: "What if I need changes after launch?",
      answer:
        "We build ongoing maintenance into our support packages. Any changes, updates, or new features can be implemented quickly and efficiently with our maintenance plans.",
    },
    {
      question:
        "Can you redesign our existing website instead of starting over?",
      answer:
        "Yes. We can redesign and modernize existing websites while preserving valuable content and SEO equity where possible. We evaluate your current platform and recommend the best migration path.",
    },
    {
      question: "Do you write website content and SEO copy?",
      answer:
        "Yes. We can help structure page content, service messaging, and SEO-friendly copy so your website is clearer for visitors and better optimized for search engines.",
    },
    {
      question: "Will I be able to edit content after launch?",
      answer:
        "Absolutely. We build with manageable content workflows and can integrate CMS solutions so your team can update key sections without relying on developers for every change.",
    },
    {
      question: "How do you improve website conversion rates?",
      answer:
        "We improve conversion rates through stronger calls to action, better content hierarchy, faster performance, mobile-first design, and streamlined user journeys aligned to business goals.",
    },
    {
      question: "Do you provide technical SEO setup during development?",
      answer:
        "Yes. We include technical SEO best practices such as metadata structure, semantic HTML, fast loading pages, mobile responsiveness, and crawl-friendly page architecture.",
    },
    {
      question: "Can you integrate contact forms, CRM, and analytics tools?",
      answer:
        "Yes. We integrate websites with forms, CRM systems, analytics platforms, marketing tools, and automation workflows so your website supports lead generation and operations.",
    },
    {
      question: "What happens if traffic grows after launch?",
      answer:
        "We build scalable architecture and can optimize hosting, caching, and asset delivery as traffic grows so your website remains stable and responsive under heavier demand.",
    },
    {
      question: "Do you offer post-launch support and maintenance?",
      answer:
        "Yes. We provide ongoing support plans for updates, performance monitoring, security improvements, bug fixes, and feature enhancements after launch.",
    },
  ];

  const approachSteps = [
    {
      title: "Discovery and Planning",
      description:
        "We define business goals, audience intent, competitor context, and functional requirements to create a clear project roadmap.",
    },
    {
      title: "UX and Content Structure",
      description:
        "We map user journeys, plan page hierarchy, and align messaging so visitors can quickly understand your value and take action.",
    },
    {
      title: "Design and Development",
      description:
        "We build responsive, performant pages using modern frameworks and clean, maintainable code with SEO and accessibility best practices.",
    },
    {
      title: "Launch and Optimization",
      description:
        "After deployment, we monitor performance, refine conversion paths, and support continuous improvements based on real usage.",
    },
  ];

  const webChallenges = [
    "Low website traffic from weak search visibility",
    "High bounce rates caused by slow load times",
    "Poor conversion rates from unclear calls to action",
    "Outdated design that reduces user trust",
    "Mobile usability issues affecting engagement",
    "Difficult content updates due to rigid site structure",
  ];

  return (
    <>
      <HeroBanner
        title="Professional Website Development That Drives Growth"
        subtitle="Custom websites designed to convert visitors into customers"
        ctaText="Get a Free Website Consultation"
        ctaLink="/contact"
        image="/images/cyber.webp"
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Intro Section */}
        <Box mb={10}>
          <Chip
            label="WEBSITE DEVELOPMENT SERVICES"
            color="primary"
            sx={{
              mb: 2,
              fontWeight: 700,
              letterSpacing: 0.8,
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
            Comprehensive Website Development For Growth-Focused Businesses
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
            Your website should do more than look good. It should communicate
            your value clearly, rank well in search, perform fast on every
            device, and convert visitors into qualified leads or customers.
            Orion IT Service delivers website development services built around
            business outcomes, combining UX strategy, modern engineering,
            technical SEO, and long-term maintainability.
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: 980, color: "text.secondary", lineHeight: 1.9 }}
          >
            Whether you need a new business website, a redesign of an existing
            platform, or conversion-focused landing pages, we create scalable
            web experiences that align with your brand, support your marketing,
            and improve measurable performance over time.
          </Typography>
        </Box>

        {/* Value Proposition */}
        <Box mb={10} textAlign="center">
          <Chip
            label="CUSTOM WEB SOLUTIONS"
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
            Your Website Is Your Best Marketing Tool
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
            We build beautiful, fast, and conversion-focused websites that
            represent your brand and drive business results.
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
                            <CheckIcon color="primary" />
                          </ListItemIcon>
                          <Typography variant="body2">{feature}</Typography>
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
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
            Our Website Development Approach
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
            We use a structured process that balances design quality, technical
            performance, and business objectives. This helps launch websites
            that are easier to manage and more effective at generating results.
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
                  <Typography
                    variant="h6"
                    component="h4"
                    sx={{ fontWeight: 700, mb: 1 }}
                  >
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
            Common Website Problems We Solve
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
            Many business websites underperform because they were built without
            a clear strategy for search visibility, user journey, and
            conversion. We help resolve core challenges such as:
          </Typography>
          <Paper elevation={1} sx={{ p: 3 }}>
            <Typography variant="body1" sx={{ lineHeight: 1.9 }}>
              {webChallenges.join(". ")}.
            </Typography>
          </Paper>
          <Typography
            variant="body1"
            sx={{ mt: 3, color: "text.secondary", lineHeight: 1.9 }}
          >
            Scenario: A business invests in ads and social media, but website
            leads remain low. Visitors arrive on the site, struggle to find key
            information, and leave without contacting the team. The site loads
            slowly on mobile, service pages are thin, and calls to action are
            buried or inconsistent.
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 2, color: "text.secondary", lineHeight: 1.9 }}
          >
            Solution: We redesign the site architecture, improve content
            hierarchy, optimize speed and mobile performance, implement
            conversion-focused layouts, and strengthen technical SEO. This
            creates a faster, clearer, and more trustworthy user experience that
            supports better rankings and higher conversion rates.
          </Typography>
          <Divider sx={{ mt: 4 }} />
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
                Why Choose Our Web Development Services
              </Typography>
              <List>
                {[
                  "Custom-built for your specific needs",
                  "Modern technology stack",
                  "SEO-optimized from the ground up",
                  "Secure and compliant",
                  "Fast performance guaranteed",
                  "Scalable for future growth",
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
                Business Benefits You'll Achieve
              </Typography>
              <List>
                {[
                  "Increased online visibility",
                  "Higher conversion rates",
                  "Improved customer engagement",
                  "Professional brand image",
                  "Competitive advantage",
                  "Better ROI on marketing spend",
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

        {/* Additional Features */}
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
            Complete Web Solutions
          </Typography>
          <Grid container spacing={3}>
            {additionalFeatures.map((feature, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
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
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      component="h4"
                      sx={{
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Development Process */}
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
            Our Development Process
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: "Discovery",
                description:
                  "We learn about your business, goals, and target audience",
              },
              {
                title: "Design",
                description: "Create wireframes and mockups for your approval",
              },
              {
                title: "Development",
                description: "Build your website using modern best practices",
              },
              {
                title: "Testing",
                description:
                  "Thorough quality assurance across all devices and browsers",
              },
              {
                title: "Optimization",
                description: "Performance tuning and SEO optimization",
              },
              {
                title: "Launch & Support",
                description: "Deploy to production and provide ongoing support",
              },
            ].map((step, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Card sx={{ height: "100%", textAlign: "center" }}>
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        backgroundColor: "primary.main",
                        color: "white",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        mb: 2,
                        mx: "auto",
                      }}
                    >
                      {index + 1}
                    </Box>
                    <Typography
                      variant="h6"
                      component="h4"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {step.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
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
            Website Development Questions
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
          <CodeIcon
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
            Ready to Build Your Winning Website?
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
            Let's create a website that represents your brand and drives real
            business results.
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
          <Button
            variant="outlined"
            size="large"
            href="/get-quote"
            sx={{
              py: 2,
              px: 6,
              fontSize: "1.1rem",
            }}
          >
            Get a Quote
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default WebsiteDevelopment;
