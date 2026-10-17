import type { Metadata } from "next";
import HeroBanner from "@/app/components/HeroBanner";
import JsonLd from "@/app/components/JsonLd";
import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import {
  CalendarToday as CalendarIcon,
  Person as PersonIcon,
  ArrowForward as ArrowIcon,
} from "@mui/icons-material";
import { getRelatedArticlesBySlug } from "../blogArticles";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Mobile Device Management (MDM) & BYOD Security",
  description:
    "Learn mobile device management strategies to secure employee phones and tablets while supporting BYOD policies and improving productivity.",
  alternates: {
    canonical: "/blog/mobile-device-management-mdm",
  },
}, {
  type: "article",
  publishedTime: "2026-02-25",
  modifiedTime: "2026-02-25",
  image: "https://www.orionitservice.com/images/og-image.webp",
});

export default function MDMArticle() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Mobile Device Management for Business: BYOD and Device Security",
    description:
      "Learn mobile device management strategies to secure employee phones and tablets while supporting BYOD policies and improving productivity.",
    author: {
      "@type": "Organization",
      name: "Orion IT Service",
    },
    publisher: {
      "@type": "Organization",
      name: "Orion IT Service",
    },
    datePublished: "2026-02-25",
    dateModified: "2026-02-25",
    mainEntityOfPage:
      "https://www.orionitservice.com/blog/mobile-device-management-mdm",
    image: ["https://www.orionitservice.com/images/og-image.webp"],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
        name: "Blog",
        item: "https://www.orionitservice.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Mobile Device Management",
        item: "https://www.orionitservice.com/blog/mobile-device-management-mdm",
      },
    ],
  };

  const currentSlug = "mobile-device-management-mdm";
  const relatedArticles = getRelatedArticlesBySlug(currentSlug);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <HeroBanner
        title="Blog"
        subtitle="Mobile devices access business data and systems. MDM solutions secure devices while supporting flexible work and BYOD policies."
        ctaText="Contact Our Team"
        ctaLink="/contact"
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "minmax(0, 2.2fr) minmax(280px, 1fr)",
            },
            gap: { xs: 3, lg: 4 },
            alignItems: "start",
          }}
        >
          <Paper elevation={2} sx={{ p: { xs: 3, md: 5 } }}>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                flexWrap: "wrap",
                mb: 3,
                color: "text.secondary",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <PersonIcon fontSize="small" />
                <Typography variant="body2">Orion IT Service Team</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CalendarIcon fontSize="small" />
                <Typography variant="body2">February 25, 2026</Typography>
              </Box>
            </Box>
            <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
              Mobile Device Management for Business: BYOD and Device Security
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Employees want to use their personal phones and tablets for work.
              It's more convenient and gives them flexibility. However,
              corporate data on personal devices creates risk. If a device is
              lost or stolen, sensitive data could be accessed. If malware
              infects a device, it could spread to corporate networks. BYOD
              policies and mobile device management solutions allow flexibility
              while maintaining security.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              MDM solutions let IT administrators manage mobile devices—apply
              security settings, ensure devices are patched, remove devices from
              access if they're lost or an employee leaves, and monitor for
              compliance. A good MDM solution supports multiple device types,
              enforces policy consistently, and doesn't be so intrusive that
              employees circumvent it.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              BYOD Policies
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              A clear BYOD policy explains what devices are allowed, what
              software can access corporate data, what security requirements
              devices must meet, and what happens to data if an employee leaves
              or a device is lost. Without clear policy, IT doesn't know what
              they're responsible for supporting.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Some organizations choose not to support BYOD for all data. For
              example, sensitive financial data or customer information might
              only be accessible from company-provided devices, while email and
              calendar might be accessible from personal devices.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              MDM Capabilities
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Device enrollment is the process of registering a device and
              installing MDM software. Once enrolled, administrators can manage
              the device remotely. Policy enforcement ensures devices meet
              security standards—password requirements, encryption, version of
              the operating system, what applications are allowed.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Remote monitoring allows administrators to see device inventory,
              identify devices not in compliance, and track where devices are
              (geolocation). Remote actions allow administrators to force a
              password update, install or remove applications, or wipe a device
              if it's lost or stolen.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Application management controls which applications can access
              corporate data. For example, the corporate email application might
              be allowed to access email, but a third-party email app might not
              be trusted with that access.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Container Approach
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Some MDM solutions use a container approach that separates
              corporate data from personal data on a device. Corporate
              applications, documents, and communications are encrypted and
              isolated. If an employee leaves, IT can wipe the corporate
              container without affecting personal data. This provides security
              while respecting employee privacy—IT isn't monitoring personal
              applications and data.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              This approach is often more palatable to employees because it's
              less intrusive than full device management.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Balancing Security and Privacy
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              The challenge with MDM is balancing corporate security needs with
              employee privacy expectations. Employees don't want IT monitoring
              their personal device. Companies don't want corporate data
              exposed.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Clear policies, transparent about what IT can see, and respecting
              employee privacy help. Many employees accept reasonable security
              measures in exchange for flexibility to use their personal
              devices.
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography
              variant="h6"
              component="p"
              sx={{ fontWeight: 800, mb: 2 }}
            >
              Key Takeaway
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Mobile device management solutions enable BYOD while maintaining
              security through policy enforcement, remote management, and
              containerization. Clear policies balance corporate security with
              employee privacy expectations.
            </Typography>

            <Button
              variant="contained"
              endIcon={<ArrowIcon />}
              href="/contact"
              sx={{ mt: 1 }}
            >
              Implement Mobile Device Management
            </Button>
          </Paper>

          <Paper
            elevation={1}
            sx={{
              p: { xs: 3, md: 4 },
              position: { md: "sticky" },
              top: { md: 96 },
            }}
          >
            <Typography
              variant="h4"
              component="h4"
              sx={{ fontWeight: 800, mb: 2 }}
            >
              You may also want to read
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              {relatedArticles.map((article) => (
                <Button
                  key={article.slug}
                  variant="text"
                  href={`/blog/${article.slug}`}
                  sx={{
                    justifyContent: "flex-start",
                    textAlign: "left",
                    textTransform: "none",
                    px: 0,
                  }}
                >
                  {article.title}
                </Button>
              ))}
            </Box>
          </Paper>
        </Box>
      </Container>
    </>
  );
}
