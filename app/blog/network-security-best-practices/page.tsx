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
  title: "Network Security Best Practices for Businesses",
  description:
    "Learn network security best practices including firewalls, intrusion detection, network segmentation, and monitoring to protect business infrastructure.",
  alternates: {
    canonical: "/blog/network-security-best-practices",
  },
}, {
  type: "article",
  publishedTime: "2026-05-10",
  modifiedTime: "2026-05-10",
  image: "https://www.orionitservice.com/images/og-image.webp",
});

export default function NetworkSecurityArticle() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Network Security Best Practices: Enterprise Security Architecture",
    description:
      "Learn network security best practices including firewalls, intrusion detection, network segmentation, and monitoring to protect business infrastructure.",
    author: {
      "@type": "Organization",
      name: "Orion IT Service",
    },
    publisher: {
      "@type": "Organization",
      name: "Orion IT Service",
    },
    datePublished: "2026-05-10",
    dateModified: "2026-05-10",
    mainEntityOfPage:
      "https://www.orionitservice.com/blog/network-security-best-practices",
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
        name: "Network Security Best Practices",
        item: "https://www.orionitservice.com/blog/network-security-best-practices",
      },
    ],
  };

  const currentSlug = "network-security-best-practices";
  const relatedArticles = getRelatedArticlesBySlug(currentSlug);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <HeroBanner
        title="Blog"
        subtitle="Protect network infrastructure with firewalls, intrusion detection, segmentation, monitoring, and access controls to prevent unauthorized access and data theft."
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
                <Typography variant="body2">May 10, 2026</Typography>
              </Box>
            </Box>
            <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
              Network Security Best Practices: Enterprise Security Architecture
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Network infrastructure is the foundation of business operations.
              Every application, every user, every device depends on network
              availability and security. Network attacks can disrupt operations,
              steal data, or provide entry points for attackers. Network
              security requires multiple layers of protection—firewalls,
              intrusion detection, segmentation, monitoring, and access controls
              work together to protect infrastructure.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Effective network security combines technology, architecture, and
              monitoring to prevent, detect, and respond to threats.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Firewalls and Perimeter Security
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Firewalls control traffic entering and leaving your network based
              on configured rules. They block unauthorized access and allow
              legitimate traffic. Modern firewalls go beyond simple packet
              filtering to inspect application layer traffic, detect intrusions,
              and block malware. Firewalls should be configured with
              default-deny rules that allow only necessary traffic.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Use next-generation firewalls (NGFW) that provide application
              awareness, intrusion prevention, and threat detection. Redundant
              firewalls with failover provide high availability. Firewalls
              should be regularly updated with threat signatures and patches.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Network Segmentation
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Network segmentation divides your network into smaller zones with
              firewalls controlling traffic between zones. Segment by
              function—separate servers from user workstations, separate
              sensitive systems from general systems. Segment by
              sensitivity—isolate systems handling sensitive data. Segment by
              compliance—separate HIPAA systems from others, separate PCI
              systems from others.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Segmentation limits lateral movement. If an attacker compromises a
              system in one segment, firewalls prevent them from moving freely
              to other segments. This dramatically reduces breach impact.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Intrusion Detection and Prevention
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Intrusion detection systems (IDS) monitor network traffic for
              suspicious patterns and alert security teams. Intrusion prevention
              systems (IPS) go further and block suspicious traffic
              automatically. IDS/IPS use signature detection that recognizes
              known attacks and behavior analysis that detects unusual patterns.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Network-based IDS/IPS monitors traffic on the network. Host-based
              IPS monitors traffic on individual systems. Deploy both for
              comprehensive coverage.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Network Monitoring and Logging
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Network monitoring provides visibility into what's happening on
              your network. Collect logs from firewalls, routers, switches, and
              servers. Use SIEM (Security Information and Event Management)
              systems to aggregate logs, detect patterns, and alert on
              suspicious activity. Monitor for unusual traffic patterns,
              connections to suspicious destinations, data exfiltration, and
              protocol violations.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Maintain centralized logging with long-term retention for
              forensics and compliance audits.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Access Control and Least Privilege
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Users and applications should have minimal network access needed
              to perform their functions. If a user doesn't need access to a
              particular server, block it. If an application only needs to
              communicate with specific systems, restrict it to those systems.
              Use network access control (NAC) systems to verify device
              compliance before allowing network access.
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
              Network security requires layered defenses including firewalls,
              intrusion detection, segmentation, monitoring, and access controls
              working together to prevent, detect, and respond to threats.
            </Typography>

            <Button
              variant="contained"
              endIcon={<ArrowIcon />}
              href="/contact"
              sx={{ mt: 1 }}
            >
              Strengthen Your Network Security
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
