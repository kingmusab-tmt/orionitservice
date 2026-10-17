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
  title: "Website Security and SSL/TLS | HTTPS Implementation",
  description:
    "Protect website visitors with SSL/TLS encryption, HTTPS configuration, security certificates, and best practices for website security.",
  alternates: {
    canonical: "/blog/website-security-ssl-https",
  },
}, {
  type: "article",
  publishedTime: "2026-06-02",
  modifiedTime: "2026-06-02",
  image: "https://www.orionitservice.com/images/og-image.webp",
});

export default function WebsiteSecurityArticle() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Website Security and SSL/TLS: HTTPS Implementation",
    description:
      "Protect website visitors with SSL/TLS encryption, HTTPS configuration, security certificates, and best practices for website security.",
    author: {
      "@type": "Organization",
      name: "Orion IT Service",
    },
    publisher: {
      "@type": "Organization",
      name: "Orion IT Service",
    },
    datePublished: "2026-06-02",
    dateModified: "2026-06-02",
    mainEntityOfPage:
      "https://www.orionitservice.com/blog/website-security-ssl-https",
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
        name: "Website Security and SSL/TLS",
        item: "https://www.orionitservice.com/blog/website-security-ssl-https",
      },
    ],
  };

  const currentSlug = "website-security-ssl-https";
  const relatedArticles = getRelatedArticlesBySlug(currentSlug);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <HeroBanner
        title="Blog"
        subtitle="Secure websites with SSL/TLS encryption, HTTPS configuration, and security best practices to protect visitor data and build trust."
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
                <Typography variant="body2">June 2, 2026</Typography>
              </Box>
            </Box>
            <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
              Website Security and SSL/TLS: HTTPS Implementation
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Website security isn't optional—it's essential. Every website that
              collects data, processes payments, or authenticates users must
              protect that data during transmission. SSL/TLS encryption encrypts
              communication between browsers and servers so attackers can't
              intercept sensitive information like passwords, credit cards, or
              personal data. HTTPS (HTTP Secure) implements SSL/TLS on websites.
              Search engines like Google rank HTTPS sites higher than HTTP
              sites. Browsers display trust indicators (lock icons) for HTTPS
              sites and warnings for HTTP sites. Visitors increasingly expect
              HTTPS on all websites.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Implementing website security requires understanding certificates,
              encryption, and best practices.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              SSL/TLS Certificates
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              SSL/TLS certificates prove website identity. Domain-validated (DV)
              certificates verify domain ownership. Organization-validated (OV)
              certificates verify organization identity. Extended validation
              (EV) certificates require extensive verification and display green
              address bars in browsers. Wildcard certificates secure domain and
              all subdomains. Multi-domain certificates secure multiple domains.
              Most websites use DV certificates from trusted certificate
              authorities.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Certificate Procurement and Renewal
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Purchase certificates from trusted certificate authorities like
              Let's Encrypt, DigiCert, or Comodo. Let's Encrypt offers free
              certificates with automated renewal. Commercial certificates vary
              in cost but offer technical support and higher warranty.
              Certificates expire—typically yearly for Let's Encrypt, 1-3 years
              for commercial certificates. Set calendar reminders to renew
              before expiration. Expired certificates break HTTPS and worry
              visitors.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              HTTPS Configuration
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Install certificates on web servers and configure HTTPS. Redirect
              all HTTP traffic to HTTPS so visitors connect securely even if
              they forget the HTTPS prefix. Implement HSTS (HTTP Strict
              Transport Security) to tell browsers to always use HTTPS for your
              domain. Configure security headers like X-Frame-Options,
              X-Content-Type-Options, and Content-Security-Policy to protect
              against attacks.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Mixed Content Issues
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Mixed content occurs when HTTPS pages load HTTP resources.
              Browsers block active mixed content (scripts, stylesheets, forms)
              because it compromises security. Passive mixed content (images,
              iframes) loads but shows warnings. Audit websites after enabling
              HTTPS to find and fix mixed content. Update resource URLs to use
              HTTPS or remove them.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Monitoring and Maintenance
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Monitor certificate expiration dates. Use monitoring tools to
              alert before expiration. Keep web servers patched with latest
              security updates. Monitor SSL labs scores and address any security
              issues. Test HTTPS configuration regularly using online tools like
              SSL Labs. Maintain HTTPS across website updates and migrations.
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
              HTTPS with SSL/TLS encryption protects website visitors and builds
              trust. Proper certificate management, configuration, and
              monitoring ensure websites remain secure and maintain visitor
              confidence.
            </Typography>

            <Button
              variant="contained"
              endIcon={<ArrowIcon />}
              href="/contact"
              sx={{ mt: 1 }}
            >
              Secure Your Website
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
