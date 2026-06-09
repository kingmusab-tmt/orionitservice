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

export const metadata: Metadata = {
  title: "Network Segmentation and VLANs | Advanced Network Architecture",
  description:
    "Learn network segmentation and VLAN implementation strategies to isolate systems, limit lateral movement, and improve security and performance.",
  alternates: {
    canonical: "/blog/network-segmentation-vlans",
  },
};

export default function NetworkSegmentationArticle() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Network Segmentation and VLANs: Advanced Network Architecture",
    description:
      "Learn network segmentation and VLAN implementation strategies to isolate systems, limit lateral movement, and improve security and performance.",
    author: {
      "@type": "Organization",
      name: "Orion IT Service",
    },
    publisher: {
      "@type": "Organization",
      name: "Orion IT Service",
    },
    datePublished: "2026-05-20",
    dateModified: "2026-05-20",
    mainEntityOfPage:
      "https://www.orionitservice.com/blog/network-segmentation-vlans",
    image: ["https://www.orionitservice.com/images/networking.webp"],
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
        name: "Network Segmentation and VLANs",
        item: "https://www.orionitservice.com/blog/network-segmentation-vlans",
      },
    ],
  };

  const currentSlug = "network-segmentation-vlans";
  const relatedArticles = getRelatedArticlesBySlug(currentSlug);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <HeroBanner
        title="Blog"
        subtitle="Isolate systems into logical network segments using VLANs to control traffic flow, limit lateral movement, and improve security and performance."
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
                <Typography variant="body2">May 20, 2026</Typography>
              </Box>
            </Box>
            <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
              Network Segmentation and VLANs: Advanced Network Architecture
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Traditional networks put all computers on the same network
              segment. This makes access simple but creates security risks. If
              an attacker compromises one system, they can move freely to other
              systems on the network. A malicious insider can access any
              computer they can reach. Network segmentation divides networks
              into isolated segments, limiting what compromised systems can
              access. Virtual LANs (VLANs) enable segmentation on physical
              switches without requiring separate hardware.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Network segmentation improves both security and performance by
              controlling traffic flow and isolating problems.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              VLAN Fundamentals
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Virtual LANs create logical networks on physical infrastructure. A
              single switch can contain multiple VLANs. Each VLAN is
              isolated—systems in VLAN 10 cannot communicate with systems in
              VLAN 20 without passing through a router or firewall. VLANs are
              identified by tags (VLAN ID 1-4094). Access ports on switches
              belong to a single VLAN. Trunk ports carry tagged traffic from
              multiple VLANs.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              VLANs enable segmentation without separate physical networks,
              reducing cost while improving security.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Segmentation Strategy
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Segment by function—separate servers from user workstations,
              separate printers and IoT devices from computers, separate
              database servers from application servers. Segment by
              sensitivity—put high-value systems in restricted segments. Segment
              by compliance—HIPAA systems separate from others, PCI systems
              separate from others.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              At minimum, create VLANs for: user workstations, servers,
              printers/IoT, management systems, and guest network. Larger
              organizations add additional segments for specific applications,
              departments, or compliance requirements.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Inter-VLAN Routing and Firewalls
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Systems need to communicate across VLANs sometimes. A user
              workstation needs to connect to a file server. An application
              needs to talk to a database. Inter-VLAN routing enables this
              communication. Route traffic through a firewall that enforces
              security policies on inter-VLAN traffic. This provides visibility
              and control.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              The firewall uses access control lists (ACLs) to permit only
              necessary traffic between VLANs. This ensures that even if a
              system is compromised, it can only communicate with systems it
              needs to communicate with.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              VLAN Best Practices
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Use appropriate VLAN IDs consistently across infrastructure.
              Document VLAN purposes and membership. Disable unused ports and
              VLANs. Use trunk encapsulation (802.1Q) for VLAN tagging. Disable
              dynamic VLAN assignment if not needed. Protect management VLANs
              and access to switch configuration. Use strong passwords and SSH
              (not telnet) for switch access.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Monitor VLAN configuration for unauthorized changes. Verify that
              firewall rules between VLANs are correct and up to date.
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
              Network segmentation using VLANs isolates systems, limits lateral
              movement, and improves security and performance. Combined with
              firewalls enforcing inter-VLAN policies, segmentation dramatically
              reduces breach impact.
            </Typography>

            <Button
              variant="contained"
              endIcon={<ArrowIcon />}
              href="/contact"
              sx={{ mt: 1 }}
            >
              Implement Network Segmentation
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
