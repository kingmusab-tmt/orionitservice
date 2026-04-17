import React from "react";
import { Box, Container, Grid, Link, Typography, Divider } from "@mui/material";
import NextLink from "next/link";
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
              Providing comprehensive IT services such as cybersecurity, managed
              IT, website development, and networking solutions to businesses of
              all sizes.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <Link
                href="https://web.facebook.com/profile.php?id=61577112279023"
                color="inherit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Orion IT Service on Facebook"
              >
                <Facebook />
              </Link>
              <Link
                href="https://x.com/orionitservice"
                color="inherit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Orion IT Service on X (formerly Twitter)"
              >
                <Twitter />
              </Link>
              <Link
                href="#"
                color="inherit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Orion IT Service on LinkedIn"
              >
                <LinkedIn />
              </Link>
            </Box>
          </Grid>

          <Grid
            size={{ xs: 12, md: 4 }}
            component="nav"
            aria-label="Footer Navigation"
          >
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <NextLink
                href="/"
                style={{ color: "inherit", marginBottom: 8, display: "block" }}
              >
                Home
              </NextLink>
              <NextLink
                href="/about"
                style={{ color: "inherit", marginBottom: 8, display: "block" }}
              >
                About Us
              </NextLink>
              <NextLink
                href="/services"
                style={{ color: "inherit", marginBottom: 8, display: "block" }}
              >
                Services
              </NextLink>
              <NextLink
                href="/blog"
                style={{ color: "inherit", marginBottom: 8, display: "block" }}
              >
                Blog
              </NextLink>
              <NextLink
                href="/contact"
                style={{ color: "inherit", marginBottom: 8, display: "block" }}
              >
                Contact
              </NextLink>
              <NextLink
                href="/privacy-policy"
                style={{ color: "inherit", display: "block" }}
              >
                Privacy Policy
              </NextLink>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Box
              component="address"
              sx={{
                display: "flex",
                alignItems: "flex-start",
                mb: 2,
                fontStyle: "normal",
              }}
            >
              <LocationOn sx={{ mr: 1, mt: 0.5 }} aria-hidden="true" />
              <Typography variant="body2">
                304 S. Jones Blvd #4809
                <br />
                Las Vegas, NV 89107
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Phone sx={{ mr: 1 }} aria-hidden="true" />
              <Link href="tel:+18888412885" color="inherit" underline="hover">
                <Typography variant="body2">+1 888 841 2885</Typography>
              </Link>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Email sx={{ mr: 1 }} aria-hidden="true" />
              <Link
                href="mailto:info@orionitservice.com"
                color="inherit"
                underline="hover"
              >
                <Typography variant="body2">info@orionitservice.com</Typography>
              </Link>
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
