"use client";

import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
  useTheme,
  Button,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  Chip,
} from "@mui/material";
import {
  Security as SecurityIcon,
  Lock as LockIcon,
  Shield as ShieldIcon,
  Email as EmailIcon,
  People as PeopleIcon,
  CheckCircle as CheckIcon,
  Warning as WarningIcon,
  ArrowForward as ArrowIcon,
} from "@mui/icons-material";
import HeroBanner from "@/app/components/HeroBanner";
import { useEffect, useState } from "react";

const CybersecurityAwareness = () => {
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < theme.breakpoints.values.sm);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [theme.breakpoints.values.sm]);

  const stats = [
    { value: "90%", label: "of breaches start with human error" },
    { value: "$4.45M", label: "average data breach cost" },
    { value: "74%", label: "reduction in breach risk with training" },
  ];

  return (
    <>
      <HeroBanner
        title="Transform Your Team Into A Human Firewall"
        subtitle="Proven Cybersecurity Awareness Training That Actually Works"
        ctaText="Get Your Security Assessment"
        ctaLink="/contact"
        image="/images/cyber.avif"
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Stats Section */}
        <Paper
          elevation={0}
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: "white",
            py: 6,
            mb: 8,
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Typography
                  variant="h2"
                  component="div"
                  sx={{ fontWeight: 800 }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.9 }}>
                  {stat.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Value Proposition */}
        <Box mb={10} textAlign="center">
          <Chip
            label="PROVEN METHODOLOGY"
            color="secondary"
            sx={{ mb: 2, fontWeight: 600, letterSpacing: 1 }}
          />
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 800,
              mb: 3,
              fontSize: isMobile ? "2rem" : "2.8rem",
            }}
          >
            Why Leading Companies Choose Our Training
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              maxWidth: 800,
              mx: "auto",
              mb: 5,
              color: theme.palette.text.secondary,
            }}
          >
            We don't just check compliance boxes - we create measurable behavior
            change that protects your organization from evolving threats.
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card
                elevation={4}
                sx={{
                  height: "100%",
                  borderTop: `4px solid ${theme.palette.error.main}`,
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <WarningIcon color="error" sx={{ fontSize: 50, mb: 2 }} />
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{ fontWeight: 700, mb: 2 }}
                  >
                    Threat Simulation
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    Real-world phishing simulations that test and train your
                    team against current attack methods.
                  </Typography>
                  {/* <Button
                    variant="outlined"
                    color="error"
                    endIcon={<ArrowIcon />}
                    href="/threat-simulation"
                  >
                    Learn More
                  </Button> */}
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card
                elevation={4}
                sx={{
                  height: "100%",
                  borderTop: `4px solid ${theme.palette.warning.main}`,
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <PeopleIcon color="warning" sx={{ fontSize: 50, mb: 2 }} />
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{ fontWeight: 700, mb: 2 }}
                  >
                    Role-Based Training
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    Customized programs for executives, IT staff, and remote
                    workers with targeted content.
                  </Typography>
                  {/* <Button
                    variant="outlined"
                    color="warning"
                    endIcon={<ArrowIcon />}
                    href="/role-training"
                  >
                    View Programs
                  </Button> */}
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card
                elevation={4}
                sx={{
                  height: "100%",
                  borderTop: `4px solid ${theme.palette.success.main}`,
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <CheckIcon color="success" sx={{ fontSize: 50, mb: 2 }} />
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{ fontWeight: 700, mb: 2 }}
                  >
                    Compliance Made Easy
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    Automated reporting for HIPAA, GDPR, PCI DSS and other
                    regulatory requirements.
                  </Typography>
                  {/* <Button
                    variant="outlined"
                    color="success"
                    endIcon={<ArrowIcon />}
                    href="/compliance"
                  >
                    See Requirements
                  </Button> */}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Results Section */}
        <Box
          mb={10}
          sx={{
            backgroundColor: theme.palette.grey[50],
            p: 6,
            borderRadius: 2,
          }}
        >
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h3"
                component="h2"
                sx={{ fontWeight: 800, mb: 3 }}
              >
                Measurable Results You Can See
              </Typography>
              <List>
                {[
                  "85% reduction in phishing susceptibility",
                  "60% faster breach reporting",
                  "100% compliance audit success rate",
                  "40% lower cybersecurity insurance premiums",
                ].map((item, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <CheckIcon color="success" />
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
                  sx={{ fontWeight: 700, mb: 2 }}
                >
                  Get Your Free Security Score
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Take our 2-minute assessment to discover your organization's
                  vulnerabilities and get personalized recommendations.
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  fullWidth
                  href="/security-assessment"
                >
                  Start Assessment
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box textAlign="center" sx={{ mb: 10 }}>
          <SecurityIcon
            sx={{ fontSize: 60, color: theme.palette.primary.main, mb: 2 }}
          />
          <Typography
            variant="h3"
            component="h2"
            sx={{ fontWeight: 800, mb: 3 }}
          >
            Ready to Build Your Human Firewall?
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              maxWidth: 700,
              mx: "auto",
              mb: 4,
              color: theme.palette.text.secondary,
            }}
          >
            Our cybersecurity experts will design a training program tailored to
            your organization's specific risks and needs.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              py: 2,
              px: 4,
              fontSize: "1.1rem",
              mr: 2,
              mb: isMobile ? 2 : 0,
            }}
            href="/contact"
          >
            Request Consultation
          </Button>
          {/* <Button
            variant="outlined"
            size="large"
            sx={{
              py: 2,
              px: 4,
              fontSize: "1.1rem",
            }}
            href="/demo"
          >
            See Demo
          </Button> */}
        </Box>
      </Container>
    </>
  );
};

export default CybersecurityAwareness;
