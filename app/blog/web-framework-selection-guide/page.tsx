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
  title: "Web Framework Selection Guide | React Vue Angular",
  description:
    "Compare popular web frameworks like React, Vue, and Angular to choose the right technology for your web development project.",
  alternates: {
    canonical: "/blog/web-framework-selection-guide",
  },
}, {
  type: "article",
  publishedTime: "2026-06-09",
  modifiedTime: "2026-06-09",
  image: "https://www.orionitservice.com/images/og-image.webp",
});

export default function FrameworkSelectionArticle() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Web Framework Selection Guide: React, Vue, Angular",
    description:
      "Compare popular web frameworks like React, Vue, and Angular to choose the right technology for your web development project.",
    author: {
      "@type": "Organization",
      name: "Orion IT Service",
    },
    publisher: {
      "@type": "Organization",
      name: "Orion IT Service",
    },
    datePublished: "2026-06-09",
    dateModified: "2026-06-09",
    mainEntityOfPage:
      "https://www.orionitservice.com/blog/web-framework-selection-guide",
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
        name: "Web Framework Selection Guide",
        item: "https://www.orionitservice.com/blog/web-framework-selection-guide",
      },
    ],
  };

  const currentSlug = "web-framework-selection-guide";
  const relatedArticles = getRelatedArticlesBySlug(currentSlug);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <HeroBanner
        title="Blog"
        subtitle="Choose the right web framework for your project by comparing React, Vue, Angular, and other modern options."
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
                <Typography variant="body2">June 9, 2026</Typography>
              </Box>
            </Box>
            <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
              Web Framework Selection Guide: React, Vue, Angular
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Modern web development relies on JavaScript frameworks that
              simplify building complex, interactive web applications. React,
              Vue, and Angular are the most popular. Each has different
              philosophies, learning curves, and best use cases. React leads in
              popularity, ecosystem, and job market. Vue offers simplicity and
              faster learning curve. Angular provides comprehensive framework
              for large enterprise applications. Choosing the right framework
              affects development speed, maintainability, team productivity, and
              long-term project costs.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Framework selection depends on project requirements, team skills,
              and company strategy.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              React
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              React is a library for building UI components. It's the most
              popular framework with largest ecosystem and community. React uses
              JSX syntax combining HTML and JavaScript. Component-based
              architecture promotes code reuse. Virtual DOM efficiently updates
              UI. One-way data flow makes state management straightforward for
              simple apps but requires additional libraries like Redux for
              complex state. Steep learning curve for beginners due to JSX and
              hooks. Excellent for dynamic, interactive applications.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Vue
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Vue offers simplicity and approachable learning curve. Templates
              use standard HTML with Vue directives. Progressive framework—start
              simple and add complexity as needed. Two-way data binding
              simplifies form handling. Reactive system automatically tracks
              dependencies. Smaller ecosystem than React but growing. Good for
              projects where developer productivity matters. Excellent
              documentation and community support. Faster to prototype and
              develop than React for many projects.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Angular
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Angular is a complete framework from Google with everything built
              in. Opinionated architecture enforces consistency and best
              practices. TypeScript native with strong typing. Dependency
              injection and modularity for large applications. Steep learning
              curve and configuration overhead. Larger file sizes and more
              complex build process. Best for large enterprise applications with
              large teams where consistency and structure are priorities.
              Overkill for small projects.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Comparison Factors
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Learning curve: Vue is easiest, React intermediate, Angular
              hardest. Ecosystem: React has largest ecosystem, Vue growing,
              Angular mature. Job market: React dominates, Vue growing, Angular
              stable. Performance: All three are performant for most
              applications. Development speed: Vue typically fastest, React
              intermediate, Angular slowest. Scalability: All scale to large
              applications. Community: React and Vue have vibrant communities,
              Angular has solid support.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Making the Choice
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Choose React if you want largest ecosystem, widest job market, and
              tools for complex applications. Choose Vue if you value
              simplicity, documentation, and fast development. Choose Angular if
              you need enterprise structure, have large team, and willing to
              accept complexity. Consider team skills and experience. Using
              framework team knows is faster than learning new one. Evaluate
              long-term maintenance and hiring implications. Consider project
              complexity—don't use Angular for simple sites.
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
              React, Vue, and Angular each have strengths for different
              situations. Evaluate project complexity, team skills, learning
              curve, and ecosystem to choose the right framework for your
              application.
            </Typography>

            <Button
              variant="contained"
              endIcon={<ArrowIcon />}
              href="/contact"
              sx={{ mt: 1 }}
            >
              Plan Your Web Development
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
