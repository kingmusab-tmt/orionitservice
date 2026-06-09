import HeroBanner from "../components/HeroBanner";
import ServiceCard from "../components/ServiceCard";
import JsonLd from "../components/JsonLd";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
import {
  ExpandMore,
  Security as SecurityIcon,
  Lan as NetworkIcon,
  Computer as ComputerIcon,
  Language as WebIcon,
} from "@mui/icons-material";

export const metadata = {
  title: "IT Services Las Vegas | IT, Cybersecurity, Web",
  description:
    "Comprehensive IT services for Las Vegas businesses — cybersecurity awareness training, IT support, network engineering, and website development. Tailored solutions for every business size.",
  keywords:
    "IT services Las Vegas, IT services provider near me, IT services Henderson, IT services North Las Vegas, IT services Summerlin, IT services Boulder City, IT services Pahrump, IT services Los Angeles, IT services Phoenix, IT services Salt Lake City, IT services Reno, IT services Dallas, IT services Austin, IT services Houston, IT services Denver, IT services Seattle, IT services Chicago, IT services Atlanta, IT services Miami, IT services New York, cybersecurity solutions Nevada, IT services Las Vegas, network engineering Nevada, website development Las Vegas, IT support small business, business technology solutions Nevada",
  alternates: {
    canonical: "https://www.orionitservice.com/services",
  },
  openGraph: {
    title: "IT Services Las Vegas | IT, Cybersecurity, Web",
    description:
      "Expert IT services to protect and optimize your business — cybersecurity, IT support, network engineering, and website development in Las Vegas.",
    url: "https://www.orionitservice.com/services",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Orion IT Service – IT Solutions Las Vegas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Services Las Vegas | IT, Cybersecurity, Web",
    description:
      "Expert IT services for Las Vegas businesses — cybersecurity, IT support, networking, and website development.",
    images: ["/images/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Services() {
  const services = [
    {
      title: "Cybersecurity Solutions",
      description:
        "Comprehensive protection against digital threats with advanced security measures",
      icon: <SecurityIcon sx={{ fontSize: 60 }} />,
      link: "/services/cybersecurity",
      features: [
        "Employee awareness training",
        "Phishing simulations",
        "Vulnerability assessments",
        "Incident response planning",
        "Compliance consulting",
      ],
    },
    {
      title: "Network Infrastructure",
      description:
        "Reliable and secure network design, implementation, and management",
      icon: <NetworkIcon sx={{ fontSize: 60 }} />,
      link: "/services/networking",
      features: [
        "Wired & wireless network design",
        "Enterprise Wi-Fi solutions",
        "Network security hardening",
        "Performance optimization",
        "24/7 monitoring",
      ],
    },

    {
      title: "IT Support",
      description: "Proactive IT management so you can focus on your business",
      icon: <ComputerIcon sx={{ fontSize: 60 }} />,
      link: "/services/it-support",
      features: [
        "Help desk support",
        "Patch management",
        "Asset management",
        "Proactive monitoring",
        "Strategic IT planning",
      ],
    },
    {
      title: "Website Development",
      description:
        "Professional websites that showcase your business and drive customer engagement",
      icon: <WebIcon sx={{ fontSize: 60 }} />,
      link: "/services/website-development",
      features: [
        "Custom web application development",
        "Responsive & mobile-friendly",
        "E-commerce solutions",
        "SEO optimization",
        "Ongoing maintenance & support",
      ],
    },
  ];

  const faqs = [
    {
      question: "How do you determine which services we need?",
      answer:
        "We start with a comprehensive assessment of your current IT infrastructure, security posture, and business objectives. Our team then provides a tailored recommendation based on industry best practices and your specific requirements.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "While we serve clients across all sectors, we have particular expertise in healthcare, financial services, legal, and education industries where compliance and security are paramount.",
    },
    {
      question: "Do you provide 24/7 support?",
      answer:
        "Yes, our premium support plans include 24/7 monitoring and emergency response. We also offer business-hours-only plans for clients with more predictable needs.",
    },
    {
      question: "How quickly can you respond to service requests?",
      answer:
        "Response times vary by service level agreement, but our average response time for critical issues is under 30 minutes, with most issues resolved within 4 hours.",
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": "https://www.orionitservice.com/services#webpage",
            name: "IT Services – Orion IT Service",
            description:
              "Comprehensive IT services for Las Vegas businesses including cybersecurity, IT support, network engineering, and website development.",
            url: "https://www.orionitservice.com/services",
            provider: {
              "@id": "https://www.orionitservice.com/#organization",
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.orionitservice.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Services",
                  item: "https://www.orionitservice.com/services",
                },
              ],
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          },
        ]}
      />
      <HeroBanner
        title="Our IT Services"
        subtitle="Comprehensive solutions tailored to your business needs"
        image="/images/networkeng.webp"
      />

      <Container maxWidth="xl" sx={{ py: 8 }}>
        {/* Services Grid */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 700, mb: 6, textAlign: "center" }}
          >
            Our Service Offerings
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={service.link}
                >
                  <Box
                    component="ul"
                    sx={{
                      pl: 2,
                      mt: 2,
                      "& li": {
                        display: "flex",
                        alignItems: "center",
                        mb: 1,
                        "&::before": {
                          content: '"✓"',
                          color: "primary.main",
                          mr: 1,
                          fontWeight: "bold",
                        },
                      },
                    }}
                  >
                    {service.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </Box>
                </ServiceCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 8 }} />

        {/* Service Process */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 700, mb: 6, textAlign: "center" }}
          >
            Our Service Process
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: "Assessment",
                description:
                  "We begin with a thorough evaluation of your current IT environment and business needs",
              },
              {
                title: "Planning",
                description:
                  "Our experts develop a customized roadmap aligned with your objectives",
              },
              {
                title: "Implementation",
                description:
                  "Seamless deployment with minimal disruption to your operations",
              },
              {
                title: "Training",
                description: "Comprehensive knowledge transfer to your team",
              },
              {
                title: "Optimization",
                description:
                  "Continuous monitoring and improvement of your systems",
              },
              {
                title: "Support",
                description:
                  "Ongoing maintenance and responsive technical assistance",
              },
            ].map((step, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Box
                  sx={{
                    height: "100%",
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    borderRadius: 2,
                    backgroundColor: "background.paper",
                    boxShadow: 1,
                    borderLeft: "4px solid",
                    borderColor: "primary.main",
                  }}
                >
                  <Typography
                    variant="h4"
                    component="p"
                    color="primary"
                    sx={{ mb: 2 }}
                  >
                    0{index + 1}
                  </Typography>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {step.title}
                  </Typography>
                  <Typography variant="body1">{step.description}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 8 }} />

        {/* FAQ Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 700, mb: 6, textAlign: "center" }}
          >
            Frequently Asked Questions
          </Typography>
          <Box>
            {faqs.map((faq, index) => (
              <Accordion key={index} sx={{ mb: 2, boxShadow: 1 }}>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: 600 }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "primary.contrastText",
            p: 6,
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 700, mb: 3 }}
          >
            Ready to Transform Your IT Infrastructure?
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ mb: 4, maxWidth: 800, mx: "auto" }}
          >
            Our team of experts is standing by to assess your needs and
            recommend the perfect solution for your business.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            href="/contact"
            sx={{
              px: 6,
              py: 1.5,
              fontSize: "1.1rem",
              fontWeight: "bold",
            }}
          >
            Contact Us Now
          </Button>
        </Box>
      </Container>
    </>
  );
}
