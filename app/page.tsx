// "use client";
// import HeroBanner from "./components/HeroBanner";
// import ServiceCard from "./components/ServiceCard";
// import Testimonials from "./components/Testimonials";
// import { Button } from "@mui/material";

// export default function Home() {
//   return (
//     <>
//       <HeroBanner
//         title="Secure & Optimize Your Digital Infrastructure"
//         subtitle="Professional IT solutions for businesses of all sizes"
//         ctaText="Get Started"
//         ctaLink="/contact"
//       />

//       <section>
//         <h2>Our Services</h2>
//         <div className="services-grid">
//           <ServiceCard
//             title="Cybersecurity Training"
//             description="Empower your team against modern threats"
//             icon="security"
//             link="/services/cybersecurity"
//           />
//           <ServiceCard
//             title="Network Solutions"
//             description="Reliable, secure business networking"
//             icon="network"
//             link="/services/networking"
//           />
//         </div>
//       </section>

//       <Testimonials />

//       <section className="cta-section">
//         <h3>Ready to strengthen your IT infrastructure?</h3>
//         <Button href="/contact" variant="contained" color="primary">
//           Contact Us Today
//         </Button>
//       </section>
//     </>
//   );
// }
"use client";
import HeroBanner from "./components/HeroBanner";
import ServiceCard from "./components/ServiceCard";
import Testimonials from "./components/Testimonials";
import { Button, Container, Grid, Typography, Box } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import LanIcon from "@mui/icons-material/Lan";
import CloudIcon from "@mui/icons-material/Cloud";
import { styled } from "@mui/system";

const StyledSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default,
}));

const StyledCTASection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  textAlign: "center",
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  color: theme.palette.primary.contrastText,
}));

export default function Home() {
  return (
    <>
      <HeroBanner
        title="Secure & Optimize Your Digital Infrastructure"
        subtitle="Professional IT solutions for businesses of all sizes"
        ctaText="Get a Quote"
        ctaLink="/get-quote"
      />

      <StyledSection as="section">
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 6,
              "&::after": {
                content: '""',
                display: "block",
                width: 80,
                height: 4,
                backgroundColor: "primary.main",
                margin: "20px auto 0",
              },
            }}
          >
            Our Services
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <ServiceCard
                title="Cybersecurity Training"
                description="Empower your team against modern threats with our comprehensive security awareness programs and simulated phishing exercises."
                icon="security"
                link="/services/cybersecurity"
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <ServiceCard
                title="Network Solutions"
                description="Reliable, secure business networking infrastructure tailored to your organization's needs."
                icon="network"
                link="/services/networking"
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <ServiceCard
                title="Managed IT Services"
                description="Proactive IT management so you can focus on your business."
                icon="computer"
                link="/services/managed-it"
              />
            </Grid>
          </Grid>
        </Container>
      </StyledSection>

      <Testimonials />

      <StyledCTASection as="section">
        <Container maxWidth="md">
          <Typography
            variant="h4"
            component="h3"
            gutterBottom
            sx={{ fontWeight: 600, mb: 3 }}
          >
            Ready to strengthen your IT infrastructure?
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ mb: 4, maxWidth: 600, margin: "0 auto" }}
          >
            Our team of experts is ready to assess your current setup and
            provide customized solutions to protect and optimize your business.
          </Typography>
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
            Contact Us Today
          </Button>
        </Container>
      </StyledCTASection>
    </>
  );
}
