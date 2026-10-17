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
  title: "Mobile-Responsive Web Design | Mobile-First Development",
  description:
    "Build websites that work perfectly on all devices with mobile-responsive design, flexible layouts, and mobile-first approach.",
  alternates: {
    canonical: "/blog/mobile-responsive-web-design",
  },
}, {
  type: "article",
  publishedTime: "2026-06-06",
  modifiedTime: "2026-06-06",
  image: "https://www.orionitservice.com/images/og-image.webp",
});

export default function MobileResponsiveArticle() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Mobile-Responsive Web Design: Mobile-First Development",
    description:
      "Build websites that work perfectly on all devices with mobile-responsive design, flexible layouts, and mobile-first approach.",
    author: {
      "@type": "Organization",
      name: "Orion IT Service",
    },
    publisher: {
      "@type": "Organization",
      name: "Orion IT Service",
    },
    datePublished: "2026-06-06",
    dateModified: "2026-06-06",
    mainEntityOfPage:
      "https://www.orionitservice.com/blog/mobile-responsive-web-design",
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
        name: "Mobile-Responsive Web Design",
        item: "https://www.orionitservice.com/blog/mobile-responsive-web-design",
      },
    ],
  };

  const currentSlug = "mobile-responsive-web-design";
  const relatedArticles = getRelatedArticlesBySlug(currentSlug);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <HeroBanner
        title="Blog"
        subtitle="Create responsive websites that work seamlessly on phones, tablets, and desktops with mobile-first design principles."
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
                <Typography variant="body2">June 6, 2026</Typography>
              </Box>
            </Box>
            <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
              Mobile-Responsive Web Design: Mobile-First Development
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Over 60% of web traffic comes from mobile devices. Websites that
              don't work on phones frustrate visitors and lose business.
              Mobile-responsive design makes websites adapt to different screen
              sizes and devices. A single website works on phones, tablets, and
              desktops without separate mobile and desktop versions. Responsive
              design improves user experience across all devices, reduces
              development and maintenance costs, and improves search engine
              rankings since Google prioritizes mobile-friendly websites.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Building responsive websites requires understanding flexible
              layouts, flexible images, and media queries.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Mobile-First Approach
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Mobile-first design starts with mobile experience and
              progressively enhances for larger screens. Design for the smallest
              screen first with essential content and functionality. Add
              additional features for tablets and desktops. This approach
              ensures mobile experience is optimal rather than degraded. Desktop
              visitors get all features plus additional enhancements.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Flexible Layouts
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Use CSS flexbox and CSS Grid for flexible layouts that adapt to
              screen width. Flexbox arranges elements in rows or columns and
              wraps when needed. CSS Grid creates responsive grids that adjust
              column count based on screen size. Avoid fixed widths—use
              percentages and relative units. Set max-widths to prevent content
              from becoming uncomfortably wide on large screens.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Media Queries
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Media queries apply different CSS based on screen characteristics.
              Define breakpoints at 480px (mobile), 768px (tablet), and 1024px
              (desktop). Adjust layouts, font sizes, padding, and other
              properties at breakpoints. Test at actual device sizes, not just
              breakpoints. Common devices have varying screen sizes and aspect
              ratios.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Responsive Images
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Images must scale with screen size. Set max-width 100% on images
              so they shrink on smaller screens. Serve different image sizes for
              different devices using srcset to reduce file sizes on mobile. Use
              WebP format for modern browsers with JPEG fallback. Optimize
              images heavily—large images are a major cause of slow mobile
              loading.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Touch-Friendly Interfaces
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Make buttons and links large enough to tap easily. Minimum 44x44
              pixels for touch targets. Provide adequate spacing between
              interactive elements so users don't accidentally tap the wrong
              button. Use touch-appropriate interactions like swipes and taps
              rather than hover states that don't work on touch devices.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Testing Responsive Design
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Test on actual mobile devices, not just browser emulators. Use
              browser developer tools to test responsive behavior. Use services
              like BrowserStack to test on many real devices. Test on various
              browsers, OS versions, and connection speeds. Performance on slow
              mobile networks is critical to user experience.
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
              Mobile-responsive design is essential for modern websites.
              Mobile-first approach, flexible layouts, and thorough testing
              ensure websites work perfectly on all devices and screen sizes.
            </Typography>

            <Button
              variant="contained"
              endIcon={<ArrowIcon />}
              href="/contact"
              sx={{ mt: 1 }}
            >
              Make Your Website Mobile-Responsive
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
