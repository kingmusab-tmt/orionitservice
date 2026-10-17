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
  title: "IT Asset Management & Equipment Lifecycle Guide",
  description:
    "Learn IT asset management practices to track hardware and software, optimize spending, and ensure compliance with licensing requirements.",
  alternates: {
    canonical: "/blog/it-asset-management-inventory",
  },
}, {
  type: "article",
  publishedTime: "2026-03-28",
  modifiedTime: "2026-03-28",
  image: "https://www.orionitservice.com/images/og-image.webp",
});

export default function AssetManagementArticle() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "IT Asset Management and Inventory: Equipment Lifecycle Management",
    description:
      "Learn IT asset management practices to track hardware and software, optimize spending, and ensure compliance with licensing requirements.",
    author: {
      "@type": "Organization",
      name: "Orion IT Service",
    },
    publisher: {
      "@type": "Organization",
      name: "Orion IT Service",
    },
    datePublished: "2026-03-28",
    dateModified: "2026-03-28",
    mainEntityOfPage:
      "https://www.orionitservice.com/blog/it-asset-management-inventory",
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
        name: "IT Asset Management",
        item: "https://www.orionitservice.com/blog/it-asset-management-inventory",
      },
    ],
  };

  const currentSlug = "it-asset-management-inventory";
  const relatedArticles = getRelatedArticlesBySlug(currentSlug);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <HeroBanner
        title="Blog"
        subtitle="Know what technology you own and where. Asset management tracks hardware and software lifecycle, prevents waste, and ensures license compliance."
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
                <Typography variant="body2">March 28, 2026</Typography>
              </Box>
            </Box>
            <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
              IT Asset Management and Inventory: Equipment Lifecycle Management
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Many organizations don't know what technology they own. Someone
              needs a laptop and buys one, but nobody updates the inventory.
              Software is installed but not tracked, leading to license
              violations. Equipment is retired but continues being counted in
              budgets. Without asset management, organizations overspend on
              technology, violate licensing agreements, and lack visibility into
              infrastructure costs and risks.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              IT asset management provides visibility into what you own, where
              it is, what condition it's in, and what it costs to maintain. This
              visibility drives better planning, cost optimization, and
              compliance.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Hardware Asset Management
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Know what devices you have—desktops, laptops, servers, printers,
              network equipment. For each device, track model, serial number,
              location, purchase date, cost, warranty information, and current
              condition. This information is critical for planning replacements,
              managing warranty claims, and troubleshooting.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Hardware lifecycle management tracks equipment through its entire
              life—from purchase through use to retirement. Different equipment
              types have different lifecycles. A laptop might be productive for
              3-4 years before performance degrades. A server might last 5-7
              years. Knowing lifecycle helps with capacity planning and
              replacement budgeting.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Software Asset Management
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Track what software is installed on devices and how many licenses
              you have. Without this information, organizations either
              over-purchase licenses or under-purchase and violate licensing
              agreements. License audits from vendors can result in significant
              penalties if software usage exceeds licensed seats.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Software asset management tools scan devices to identify installed
              applications, check against license inventory, and flag
              discrepancies. This helps identify unlicensed software, unused
              licenses that could be reallocated, and software that needs
              updates.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Maintenance and Support Contracts
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Track support contracts and warranty information. Which servers
              have support contracts that expire? Which devices are still under
              warranty? Without this information, you might not claim warranty
              coverage you're entitled to or might continue paying for expired
              support.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Support contracts should be reviewed annually. Sometimes you're
              paying for support on equipment that no longer matters. Sometimes
              support contracts can be negotiated for better pricing.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Decommissioning and Disposal
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              When equipment reaches end of life, it needs to be properly
              disposed of. For devices containing data, data must be securely
              destroyed. Many devices contain valuable materials that can be
              recycled. Some equipment can be refurbished and reused. A
              documented decommissioning process ensures data security and
              environmental responsibility.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              When an employee leaves, equipment must be collected and inventory
              updated. Without this process, equipment goes missing or remains
              assigned to former employees.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Asset Tracking Tools
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Automated asset management tools discover devices on the network,
              identify installed software, track hardware configurations, and
              generate reports. These tools reduce manual work and provide
              accurate, current information. Some tools integrate with inventory
              databases to provide a single source of truth about IT assets.
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
              IT asset management provides visibility into hardware and
              software, enables better planning and cost optimization, ensures
              compliance with licensing, and reduces waste through proper
              lifecycle management.
            </Typography>

            <Button
              variant="contained"
              endIcon={<ArrowIcon />}
              href="/contact"
              sx={{ mt: 1 }}
            >
              Establish Asset Management System
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
