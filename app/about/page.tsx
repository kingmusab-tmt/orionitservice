"use client";
import HeroBanner from "../components/HeroBanner";
import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  useTheme,
} from "@mui/material";
import { Groups, Security, EmojiObjects, Handshake } from "@mui/icons-material";
import Image from "next/image";

export default function About() {
  const theme = useTheme();
  const serviceAreas = [
    {
      title: "United States (All States)",
      description:
        "We support businesses across the U.S. with remote IT support, cybersecurity, and network services.",
    },
    {
      title: "United Kingdom",
      description:
        "We provide remote-first support for UK teams, including cloud, endpoint, and operational IT assistance.",
    },
    {
      title: "Remote Global Support",
      description:
        "For distributed teams and international operations, we deliver secure remote IT support and consulting globally.",
    },
    {
      title: "Las Vegas (Local Focus)",
      description:
        "We offer dedicated local service in Las Vegas, including on-site visits, infrastructure support, and hands-on troubleshooting.",
    },
  ];

  const values = [
    {
      icon: <Security fontSize="large" />,
      title: "Security First",
      description: "We prioritize your digital safety above all else",
    },
    {
      icon: <EmojiObjects fontSize="large" />,
      title: "Innovation",
      description: "Continually evolving to counter emerging threats",
    },
    {
      icon: <Handshake fontSize="large" />,
      title: "Integrity",
      description: "Honest advice you can trust",
    },
    {
      icon: <Groups fontSize="large" />,
      title: "Collaboration",
      description: "We work with you, not just for you",
    },
  ];

  return (
    <>
      <HeroBanner
        title="About Orion IT Service"
        subtitle="Your trusted technology partner"
        image="/images/avatar1.webp"
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Our Story Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 700, mb: 4, color: "text.primary" }}
          >
            About Us
          </Typography>
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  color: "text.primary",
                }}
              >
                ORION IT SERVICE provides top-notch network support services
                offering reliable solutions to optimize your business
                connectivity. We design, deploy, manage, and secure networks
                that power your operations ensuring speed, stability, and
                scalability.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  color: "text.primary",
                }}
              >
                Our Team is the backbone of digital connectivity, specializing
                in the design, implementation, security, and optimization of
                both small and medium-scale network infrastructures.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                  minHeight: 300,
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 3,
                  border: `1px solid ${theme.palette.divider}`,
                }}
              >
                <Image
                  src="/images/networkatwork.webp"
                  alt="Orion IT Service team working"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 8, borderColor: theme.palette.divider }} />

        <Box sx={{ mb: 8 }}>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 2,
                  border: `1px solid ${theme.palette.divider}`,
                  backgroundColor: "background.paper",
                  height: "100%",
                }}
              >
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{ fontWeight: 700, mb: 2, color: "text.primary" }}
                >
                  Our Mission
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1.05rem",
                    lineHeight: 1.8,
                    color: "text.secondary",
                  }}
                >
                  Our mission is to keep businesses connected, secure, and
                  productive through reliable IT and network services. We focus
                  on practical solutions that reduce downtime, improve
                  performance, and help teams work confidently every day.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 2,
                  border: `1px solid ${theme.palette.divider}`,
                  backgroundColor: "background.paper",
                  height: "100%",
                }}
              >
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{ fontWeight: 700, mb: 2, color: "text.primary" }}
                >
                  Our Vision
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1.05rem",
                    lineHeight: 1.8,
                    color: "text.secondary",
                  }}
                >
                  Our vision is to be the most trusted long-term IT partner for
                  growing organizations, known for clear guidance, proactive
                  protection, and technology strategies that scale with each
                  client&apos;s goals.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 8, borderColor: theme.palette.divider }} />

        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 700, mb: 4, color: "text.primary" }}
          >
            Service Area
          </Typography>
          <Grid container spacing={3}>
            {serviceAreas.map((area) => (
              <Grid size={{ xs: 12, md: 6 }} key={area.title}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    border: `1px solid ${theme.palette.divider}`,
                    backgroundColor: "background.paper",
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: 700, mb: 1, color: "text.primary" }}
                  >
                    {area.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "text.secondary" }}>
                    {area.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Our Values Section */}
        <Box>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 700, mb: 6, color: "text.primary" }}
          >
            Our Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
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
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: 3,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "primary.main",
                      color: "primary.contrastText",
                      borderRadius: "50%",
                      mb: 3,
                    }}
                  >
                    {value.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{ color: "text.primary" }}
                  >
                    {value.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "text.secondary" }}>
                    {value.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Achievements Section
        <Box
          sx={{
            mt: 10,
            backgroundColor: "primary.main",
            p: 6,
            borderRadius: 2,
            color: "primary.contrastText",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700, mb: 4 }}
          >
            Our Achievements
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid size={{ xs: 6, sm: 3 }}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h3"
                  component="div"
                  sx={{ fontWeight: 700 }}
                >
                  500+
                </Typography>
                <Typography variant="h6" component="p">
                  Satisfied Clients
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 6, sm: 3 }}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h3"
                  component="div"
                  sx={{ fontWeight: 700 }}
                >
                  98%
                </Typography>
                <Typography variant="h6" component="p">
                  Client Retention
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 6, sm: 3 }}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h3"
                  component="div"
                  sx={{ fontWeight: 700 }}
                >
                  24/7
                </Typography>
                <Typography variant="h6" component="p">
                  Support Availability
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 6, sm: 3 }}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h3"
                  component="div"
                  sx={{ fontWeight: 700 }}
                >
                  50+
                </Typography>
                <Typography variant="h6" component="p">
                  Industry Certifications
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box> */}
      </Container>
    </>
  );
}
