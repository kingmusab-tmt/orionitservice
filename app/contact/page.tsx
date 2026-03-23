import ContactForm from "../components/ContactForm";
import HeroBanner from "../components/HeroBanner";
import { Box, Typography, Grid } from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";
import JsonLd from "../components/JsonLd";

export const metadata = {
  title: "Contact Orion IT Service | IT Support & Consultation Las Vegas",
  description:
    "Contact Orion IT Service for expert IT support in Las Vegas — cybersecurity, managed IT, network engineering, or website development. Call, email, or message us today.",
  keywords:
    "contact IT support Las Vegas, IT helpdesk Nevada, cybersecurity support contact, managed IT contact, IT consultation Las Vegas",
  alternates: {
    canonical: "https://www.orionitservice.com/contact",
  },
  openGraph: {
    title: "Contact Orion IT Service | IT Experts in Las Vegas",
    description:
      "Reach out for professional IT support and technology consultation in Las Vegas. We respond fast — call, email, or submit a message.",
    url: "https://www.orionitservice.com/contact",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Contact Orion IT Service – Las Vegas IT Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Orion IT Service | IT Support Las Vegas",
    description:
      "Get expert IT support in Las Vegas — cybersecurity, managed IT, networking, or web development. Reach us by phone, email, or form.",
    images: ["/images/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://www.orionitservice.com/contact#webpage",
  name: "Contact Orion IT Service",
  description:
    "IT support and consultation contact information for Orion IT Service",
  url: "https://www.orionitservice.com/contact",
  mainEntity: {
    "@type": "LocalBusiness",
    "@id": "https://www.orionitservice.com/#organization",
    name: "Orion IT Service",
    telephone: "+1-702-800-9182",
    email: "info@orionitservice.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "304 S. Jones Blvd #4809",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89107",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "16:00",
      },
    ],
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
        name: "Contact",
        item: "https://www.orionitservice.com/contact",
      },
    ],
  },
};

export default function Contact() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <HeroBanner
        title="Contact Us"
        subtitle="Get in touch with our IT experts"
        image="/images/avatar6.webp"
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
                    304 S. Jones Blvd #4809
                    <br />
                    Las Vegas, NV 89107
                    <br />
                    United States
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Phone color="primary" sx={{ mr: 1.5 }} />
                  <Typography
                    component="a"
                    href="tel:+17028009182"
                    sx={{ textDecoration: "none", color: "inherit" }}
                  >
                    +1 702-800-9182
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Email color="primary" sx={{ mr: 1.5 }} />
                  <Typography
                    component="a"
                    href="mailto:info@orionitservice.com"
                    sx={{ textDecoration: "none", color: "inherit" }}
                  >
                    info@orionitservice.com
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
