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
  title: "Cloud Data Classification & Encryption Guide",
  description:
    "Learn data classification and encryption strategies to protect sensitive information stored in cloud environments and comply with privacy regulations.",
  alternates: {
    canonical: "/blog/cloud-data-classification-encryption",
  },
}, {
  type: "article",
  publishedTime: "2026-04-20",
  modifiedTime: "2026-04-20",
  image: "https://www.orionitservice.com/images/og-image.webp",
});

export default function CloudDataEncryptionArticle() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Cloud Data Classification and Encryption: Protecting Sensitive Data",
    description:
      "Learn data classification and encryption strategies to protect sensitive information stored in cloud environments and comply with privacy regulations.",
    author: {
      "@type": "Organization",
      name: "Orion IT Service",
    },
    publisher: {
      "@type": "Organization",
      name: "Orion IT Service",
    },
    datePublished: "2026-04-20",
    dateModified: "2026-04-20",
    mainEntityOfPage:
      "https://www.orionitservice.com/blog/cloud-data-classification-encryption",
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
        name: "Cloud Data Classification and Encryption",
        item: "https://www.orionitservice.com/blog/cloud-data-classification-encryption",
      },
    ],
  };

  const currentSlug = "cloud-data-classification-encryption";
  const relatedArticles = getRelatedArticlesBySlug(currentSlug);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <HeroBanner
        title="Blog"
        subtitle="Classify sensitive data and encrypt it both in transit and at rest to protect cloud information from unauthorized access and breach."
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
                <Typography variant="body2">April 20, 2026</Typography>
              </Box>
            </Box>
            <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
              Cloud Data Classification and Encryption: Protecting Sensitive
              Data
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Organizations store enormous amounts of data in cloud
              environments— customer information, financial records,
              intellectual property, trade secrets. Not all data has equal
              sensitivity or compliance requirements. A public blog post has
              different security needs than a credit card number or patient
              medical record. Without knowing what data you have and where it
              lives, you can't protect it effectively. Data classification and
              encryption are foundational to cloud security.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Data classification categorizes information by sensitivity level,
              then encryption protects it based on that classification.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Data Classification Frameworks
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Most organizations use a three or four-tier classification system.
              Public data has no sensitivity restrictions—marketing content,
              press releases, public documentation. Internal data is restricted
              to employees—internal communications, training materials, company
              policies. Confidential data is sensitive and restricted—customer
              information, financial records, contracts, strategy documents.
              Restricted data is highly sensitive— passwords, encryption keys,
              personally identifiable information (PII) in regulated industries.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Each classification level requires different controls. Public data
              needs minimal protection. Internal data needs access controls.
              Confidential data needs strong encryption and strict access
              control. Restricted data needs encryption, detailed access
              logging, and compliance monitoring.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Data Discovery and Classification
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Automated data discovery tools scan cloud environments to identify
              files, databases, and documents. Machine learning models identify
              sensitive data patterns—credit card numbers, social security
              numbers, healthcare codes. Tools can scan for specific sensitive
              data types your organization cares about, then automatically
              classify and tag discovered data.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Manual classification supplements automated discovery—your
              employees should know what data they own and how sensitive it is.
              Provide guidelines and tools that make classification easy.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Encryption in Transit and at Rest
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Encryption in transit protects data moving between users,
              applications, and cloud systems. HTTPS/TLS encryption is standard
              for web-based applications. Ensure all connections to cloud
              services use encryption. Never transmit sensitive data
              unencrypted.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Encryption at rest protects stored data. Cloud providers offer
              encryption for storage—Microsoft Azure Storage Service Encryption,
              AWS S3 encryption, Google Cloud Storage encryption. Use
              provider-managed encryption for simplicity or bring-your-own-key
              encryption for more control. The choice depends on compliance
              requirements and risk tolerance.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Key Management
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Encryption is only as strong as key management. Encryption keys
              must be protected, rotated regularly, and kept separate from
              encrypted data. Cloud providers offer key management
              services—Azure Key Vault, AWS Key Management Service, Google Cloud
              Key Management. Use these services rather than managing keys
              yourself.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              For applications requiring customer-managed keys, implement key
              rotation policies, audit key access, and have procedures for key
              recovery if lost.
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{ fontWeight: 800, mt: 5, mb: 2 }}
            >
              Compliance and Regulations
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3 }}
            >
              Many regulations require data classification and encryption. GDPR
              requires encryption for personal data. HIPAA requires encryption
              for protected health information. PCI DSS requires encryption for
              payment card data. SOC 2 requires encryption for sensitive
              systems. Implementing classification and encryption helps meet
              regulatory requirements.
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
              Data classification and encryption protect sensitive information
              in cloud environments, reduce breach risk, and help meet
              compliance requirements. Combine automated discovery with user
              responsibility to maintain accurate classification.
            </Typography>

            <Button
              variant="contained"
              endIcon={<ArrowIcon />}
              href="/contact"
              sx={{ mt: 1 }}
            >
              Implement Cloud Data Protection
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
