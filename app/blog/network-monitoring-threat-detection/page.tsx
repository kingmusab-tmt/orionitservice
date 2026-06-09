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
  title: "Network Monitoring and Threat Detection | Real-Time Visibility",
  description:
    "Learn network monitoring tools and techniques to detect threats, identify anomalies, and respond to security incidents in real-time.",
  alternates: {
    canonical: "/blog/network-monitoring-threat-detection",
  },
};

export default function NetworkMonitoringArticle() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Network Monitoring and Threat Detection: Real-Time Visibility",
    description:
      "Learn network monitoring tools and techniques to detect threats, identify anomalies, and respond to security incidents in real-time.",
    author: {
      "@type": "Organization",
      name: "Orion IT Service",
    },
    publisher: {
      "@type": "Organization",
      name: "Orion IT Service",
    },
    datePublished: "2026-05-30",
    dateModified: "2026-05-30",
    mainEntityOfPage:
      "https://www.orionitservice.com/blog/network-monitoring-threat-detection",
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
        name: "Network Monitoring and Threat Detection",
        item: "https://www.orionitservice.com/blog/network-monitoring-threat-detection",
      },
    ],
  };

  const currentSlug = "network-monitoring-threat-detection";
  const relatedArticles = getRelatedArticlesBySlug(currentSlug);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <HeroBanner
        title="Blog"
        subtitle="Gain real-time visibility into network activity with monitoring tools and threat detection to identify incidents early and respond quickly."
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
                <Typography variant="body2">May 30, 2026</Typography>
              </Box>
            </Box>
            <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
              Network Monitoring and Threat Detection: Real-Time Visibility
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              You can't protect what you can't see. Network monitoring provides
              visibility into what's happening on your network—who's connecting,
              where they're connecting from, what they're accessing, and what
              traffic patterns are normal. Network threat detection identifies
              suspicious activity that indicates compromise, attacks, or policy
              violations. Together, monitoring and detection enable rapid
              incident response and threat hunting.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Effective network monitoring combines flow analysis, packet
              inspection, and behavioral analytics to detect threats.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Network Flow Analysis
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Network flow analysis examines communication patterns—who's
              talking to whom, how much data is being transferred, and what
              protocols are being used. Flow data from routers, switches, and
              firewalls is aggregated and analyzed. Flows reveal normal network
              patterns and abnormalities that might indicate threats.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Flow analysis is lightweight compared to packet inspection and can
              process high volumes of traffic without overwhelming systems.
              NetFlow and sFlow are common flow export protocols used by network
              devices.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              SIEM and Log Aggregation
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Security Information and Event Management (SIEM) systems aggregate
              logs from firewalls, routers, switches, servers, and security
              appliances. Centralized logs provide complete visibility into
              infrastructure. SIEM systems correlate events from multiple
              sources to detect attack patterns. For example, multiple failed
              login attempts followed by successful login from unusual location
              might indicate account compromise.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              SIEM provides alerting on suspicious patterns, dashboards for
              security monitoring, and forensics capabilities for incident
              investigation.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Threat Detection Techniques
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Signature-based detection identifies known attacks by comparing
              traffic against signatures of known threats. Behavior-based
              detection identifies unusual activity that deviates from normal
              patterns. Anomaly detection uses machine learning to build
              profiles of normal behavior and detect deviations.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Effective threat detection combines multiple techniques. Signature
              detection catches known threats quickly. Behavior and anomaly
              detection catch unknown threats and insider threats.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              What to Monitor
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Monitor north-south traffic (traffic entering/leaving network) for
              external attacks and data exfiltration. Monitor east-west traffic
              (internal communication) for lateral movement and internal
              threats. Monitor encrypted traffic volume even if you can't
              inspect contents. Monitor DNS queries for malware
              command-and-control communication and data exfiltration. Monitor
              protocol anomalies—unusual protocols, unusual ports, protocol
              combinations that are suspicious.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Incident Response and Threat Hunting
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Network monitoring enables rapid incident response. When
              suspicious activity is detected, investigate using network
              data—what systems are involved, what data is at risk, what's the
              attack pattern. Threat hunting proactively searches for threats
              using network monitoring. Hunt for known attack patterns, unusual
              protocol usage, suspicious data transfers, and behavioral
              anomalies.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Maintain network data for investigation and forensics. Some
              organizations keep raw packet captures for 30-90 days, flow data
              for 1-2 years, and aggregated statistics indefinitely.
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
              Network monitoring combined with threat detection provides
              visibility into infrastructure, enables rapid incident detection
              and response, and supports threat hunting to discover threats
              before damage occurs.
            </Typography>

            <Button
              variant="contained"
              endIcon={<ArrowIcon />}
              href="/contact"
              sx={{ mt: 1 }}
            >
              Implement Network Monitoring
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
