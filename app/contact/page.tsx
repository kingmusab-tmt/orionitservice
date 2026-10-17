import ContactForm from "../components/ContactForm";
import HeroBanner from "../components/HeroBanner";
import { Box, Typography, Grid, Button, Stack } from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";
import JsonLd from "../components/JsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Orion IT Service | Las Vegas IT Support Team",
  description:
    "Contact Orion IT Service for expert IT support in Las Vegas — cybersecurity, network engineering, or website development. Call, email, or message us today.",
  alternates: {
    canonical: "https://www.orionitservice.com/contact",
  },
  openGraph: {
    title: "Contact Orion IT Service | Las Vegas IT Support Team",
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
    title: "Contact Orion IT Service | Las Vegas IT Support Team",
    description:
      "Get expert IT support in Las Vegas — cybersecurity, network engineering, or website development. Reach us by phone, email, or form.",
    images: ["/images/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
});

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
    telephone: "+1-888-210-4378",
    email: "info@orionitservice.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3305 Sky County ln 201",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89117",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
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
          pt: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: 2,
            p: { xs: 3, md: 3.5 },
            borderRadius: 3,
            bgcolor: "primary.main",
            color: "primary.contrastText",
            boxShadow: 2,
          }}
        >
          <Stack spacing={0.5} sx={{ maxWidth: 760 }}>
            <Typography
              variant="overline"
              sx={{ letterSpacing: 1.6, opacity: 0.9 }}
            >
              Need support fast?
            </Typography>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 700 }}>
              Create a Ticket
            </Typography>
            <Typography sx={{ opacity: 0.95 }}>
              Open a support request, receive a ticket code, and track updates
              without logging in.
            </Typography>
            <Typography sx={{ opacity: 0.95 }}>
              <Typography sx={{ opacity: 0.95 }}>
                Ticketing for both New and Existing Customers
              </Typography>
            </Typography>
          </Stack>

          <Button
            component="a"
            href="/tickets"
            variant="contained"
            color="secondary"
            size="large"
            sx={{ whiteSpace: "nowrap", px: 3, fontWeight: 700 }}
          >
            Create a Ticket
          </Button>
        </Box>
      </Box>

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
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Our Office
              </Typography>
              <Box component="address" sx={{ fontStyle: "normal" }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <LocationOn color="primary" sx={{ mr: 1.5 }} />
                  <Typography>
                    3305 Sky County ln 201
                    <br />
                    Las Vegas, NV 89117
                    <br />
                    United States
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Phone color="primary" sx={{ mr: 1.5 }} />
                  <Typography
                    component="a"
                    href="tel:+1 888 210 4378"
                    sx={{ textDecoration: "none", color: "inherit" }}
                  >
                    +1 888 210 4378
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
              <Typography
                variant="h6"
                component="h3"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Business Hours
              </Typography>
              <Typography paragraph>
                Monday - Friday: 9:00 AM - 5:00 PM
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
                component="h2"
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
