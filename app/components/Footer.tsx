import React from "react";
import { Box, Container, Grid, Link, Typography, Divider } from "@mui/material";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        py: 6,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom>
              Orion IT Service
            </Typography>
            <Typography variant="body2" paragraph>
              Providing comprehensive cybersecurity and networking solutions to
              businesses of all sizes.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <Link href="#" color="inherit">
                <Facebook />
              </Link>
              <Link href="#" color="inherit">
                <Twitter />
              </Link>
              <Link href="#" color="inherit">
                <LinkedIn />
              </Link>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" display="block" mb={1}>
              Home
            </Link>
            <Link href="/about" color="inherit" display="block" mb={1}>
              About Us
            </Link>
            <Link href="/services" color="inherit" display="block" mb={1}>
              Services
            </Link>
            <Link href="/contact" color="inherit" display="block" mb={1}>
              Contact
            </Link>
            <Link href="/privacy-policy" color="inherit" display="block">
              Privacy Policy
            </Link>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <LocationOn sx={{ mr: 1 }} />
              <Typography variant="body2">
                304 S. Jones Blvd #4809
                <br />
                Las Vegas, NV 89107
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Phone sx={{ mr: 1 }} />
              <Typography variant="body2">(555) 123-4567</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Email sx={{ mr: 1 }} />
              <Typography variant="body2">info@orionitservice.com</Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: "rgba(255,255,255,0.1)" }} />

        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Orion IT Service. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
