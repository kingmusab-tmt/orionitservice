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
  title: "Web Accessibility and WCAG Compliance | Inclusive Design",
  description:
    "Build inclusive websites meeting WCAG standards, improving accessibility for users with disabilities and expanding audience reach.",
  alternates: {
    canonical: "/blog/web-accessibility-wcag-compliance",
  },
};

export default function AccessibilityArticle() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Web Accessibility and WCAG Compliance: Inclusive Design",
    description:
      "Build inclusive websites meeting WCAG standards, improving accessibility for users with disabilities and expanding audience reach.",
    author: {
      "@type": "Organization",
      name: "Orion IT Service",
    },
    publisher: {
      "@type": "Organization",
      name: "Orion IT Service",
    },
    datePublished: "2026-06-04",
    dateModified: "2026-06-04",
    mainEntityOfPage:
      "https://www.orionitservice.com/blog/web-accessibility-wcag-compliance",
    image: ["https://www.orionitservice.com/images/design.webp"],
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
        name: "Web Accessibility and WCAG Compliance",
        item: "https://www.orionitservice.com/blog/web-accessibility-wcag-compliance",
      },
    ],
  };

  const currentSlug = "web-accessibility-wcag-compliance";
  const relatedArticles = getRelatedArticlesBySlug(currentSlug);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <HeroBanner
        title="Blog"
        subtitle="Create inclusive websites accessible to all users, including those with disabilities, following WCAG standards and best practices."
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
                <Typography variant="body2">June 4, 2026</Typography>
              </Box>
            </Box>
            <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
              Web Accessibility and WCAG Compliance: Inclusive Design
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Approximately 1 billion people worldwide have disabilities. Many
              use the web despite challenges like vision impairments, hearing
              loss, mobility issues, or cognitive disabilities. Websites that
              don't accommodate these users exclude them from information,
              services, and opportunities. Web accessibility ensures websites
              work for everyone regardless of ability. Accessible websites
              improve user experience for all users. They're also legally
              required in many jurisdictions under laws like the ADA (Americans
              with Disabilities Act).
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              WCAG (Web Content Accessibility Guidelines) provides standards for
              accessible web design.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              WCAG Standards
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              WCAG 2.1 is the current standard with three conformance levels: A
              (basic), AA (enhanced), and AAA (specialized). Most organizations
              target WCAG 2.1 AA. Guidelines are organized into four principles:
              Perceivable (content is visible and audible), Operable (users can
              navigate and control), Understandable (content and interface are
              clear), Robust (works with assistive technologies).
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Key Accessibility Features
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Alt text describes images so screen readers can explain them to
              blind users. Color contrast must be sufficient so colorblind and
              low-vision users can read text. Keyboard navigation allows users
              who can't use mice to navigate websites using Tab, Enter, and
              arrow keys. Focus indicators show which element is currently
              selected. Captions and transcripts make video and audio content
              accessible to deaf and hard-of-hearing users.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Semantic HTML
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Use semantic HTML elements like headings (h1-h6), lists (ul, ol),
              and landmark elements (nav, main, aside) to structure content
              meaningfully. Assistive technologies use semantic structure to
              help users navigate. Avoid using styles or scripts to create
              structure that should be HTML.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Form Accessibility
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Associate labels with form fields using label elements. Provide
              error messages that clearly explain what's wrong and how to fix
              it. Make form fields keyboard navigable and indicate required
              fields. Test forms with screen readers to ensure they work
              correctly.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Testing and Validation
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Test with screen readers like NVDA (free) or JAWS (commercial).
              Test keyboard navigation without a mouse. Check color contrast
              with tools like WebAIM Contrast Checker. Use automated tools like
              Axe or Lighthouse to identify accessibility issues. User testing
              with people with disabilities is most valuable. Ongoing
              accessibility testing throughout development prevents problems.
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
              Accessible websites welcome all users and comply with legal
              requirements. Implementing WCAG standards ensures websites are
              perceivable, operable, understandable, and robust for everyone.
            </Typography>

            <Button
              variant="contained"
              endIcon={<ArrowIcon />}
              href="/contact"
              sx={{ mt: 1 }}
            >
              Improve Your Website Accessibility
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
