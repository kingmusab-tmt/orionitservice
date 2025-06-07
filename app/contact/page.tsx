"use client";
import ContactForm from "../components/ContactForm";
import HeroBanner from "../components/HeroBanner";
import { Box, Typography, Grid } from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";

export default function Contact() {
  return (
    <>
      <HeroBanner
        title="Contact Us"
        subtitle="Get in touch with our IT experts"
        image="/images/avatar6.jpg"
      />

      <Box
        component="section"
        sx={{
          maxWidth: 1200,
          mx: "auto",
          px: { xs: 2, md: 4 },
          py: 6,
        }}
      >
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h4"
                component="h3"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Our Office
              </Typography>
              <Box component="address" sx={{ fontStyle: "normal" }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <LocationOn color="primary" sx={{ mr: 1.5 }} />
                  <Typography>
                    123 Tech Street
                    <br />
                    San Francisco, CA 94107
                    <br />
                    United States
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Phone color="primary" sx={{ mr: 1.5 }} />
                  <Typography
                    component="a"
                    href="tel:+11234567890"
                    sx={{ textDecoration: "none", color: "inherit" }}
                  >
                    +1 (123) 456-7890
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Email color="primary" sx={{ mr: 1.5 }} />
                  <Typography
                    component="a"
                    href="mailto:info@company.com"
                    sx={{ textDecoration: "none", color: "inherit" }}
                  >
                    info@company.com
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Business Hours
              </Typography>
              <Typography paragraph>
                Monday - Friday: 9:00 AM - 6:00 PM
              </Typography>
              <Typography paragraph>Saturday: 10:00 AM - 4:00 PM</Typography>
              <Typography>Sunday: Closed</Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                bgcolor: "background.paper",
                p: { xs: 3, md: 4 },
                borderRadius: 2,
                boxShadow: 1,
              }}
            >
              <Typography
                variant="h4"
                component="h3"
                gutterBottom
                sx={{ fontWeight: 600, mb: 3 }}
              >
                Send Us a Message
              </Typography>
              <ContactForm />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
