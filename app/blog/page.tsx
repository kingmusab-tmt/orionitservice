"use client";

import { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import {
  ArrowForward as ArrowIcon,
  CalendarToday as CalendarIcon,
  Person as PersonIcon,
} from "@mui/icons-material";

export default function BlogPage() {
  const featuredPost = {
    title:
      "How Remote IT Support Reduces Downtime for Small and Mid-Sized Businesses",
    excerpt:
      "Downtime impacts productivity, customer experience, and revenue. Learn how proactive monitoring, patch management, and strategic IT planning help Las Vegas businesses maintain reliable daily operations.",
    category: "Remote IT Support",
    author: "Orion IT Service Team",
    date: "April 17, 2026",
  };

  const posts = [
    {
      title: "Web Framework Selection Guide: React, Vue, Angular",
      excerpt:
        "Compare popular web frameworks like React, Vue, and Angular to choose the right technology for your web development project.",
      category: "Website Development",
      author: "Orion IT Service Team",
      date: "June 9, 2026",
      href: "/blog/web-framework-selection-guide",
    },
    {
      title: "CMS Platforms and Website Maintenance: Content Management",
      excerpt:
        "Manage website content effectively with the right CMS platform and maintain websites securely with regular updates and monitoring.",
      category: "Website Development",
      author: "Orion IT Service Team",
      date: "June 8, 2026",
      href: "/blog/cms-platforms-website-maintenance",
    },
    {
      title: "Mobile-Responsive Web Design: Mobile-First Development",
      excerpt:
        "Build websites that work perfectly on all devices with mobile-responsive design, flexible layouts, and mobile-first approach.",
      category: "Website Development",
      author: "Orion IT Service Team",
      date: "June 6, 2026",
      href: "/blog/mobile-responsive-web-design",
    },
    {
      title: "Web Accessibility and WCAG Compliance: Inclusive Design",
      excerpt:
        "Build inclusive websites meeting WCAG standards, improving accessibility for users with disabilities and expanding audience reach.",
      category: "Website Development",
      author: "Orion IT Service Team",
      date: "June 4, 2026",
      href: "/blog/web-accessibility-wcag-compliance",
    },
    {
      title: "Website Security and SSL/TLS: HTTPS Implementation",
      excerpt:
        "Protect website visitors with SSL/TLS encryption, HTTPS configuration, security certificates, and best practices for website security.",
      category: "Website Development",
      author: "Orion IT Service Team",
      date: "June 2, 2026",
      href: "/blog/website-security-ssl-https",
    },
    {
      title: "Cybersecurity Basics Every Business Should Implement in 2026",
      excerpt:
        "A practical guide to multi-factor authentication, endpoint protection, phishing awareness, and backup strategy for stronger business resilience and compliance readiness.",
      category: "Cybersecurity",
      author: "Orion IT Service Team",
      date: "April 14, 2026",
      href: "/blog/cybersecurity-basics-every-business-should-implement-in-2026",
    },
    {
      title: "Employee Security Awareness Training for Small Business",
      excerpt:
        "Reduce security breaches and human error with effective employee cybersecurity awareness training. Best practices for small and mid-sized businesses.",
      category: "Cybersecurity",
      author: "Orion IT Service Team",
      date: "June 9, 2026",
      href: "/blog/employee-security-awareness-training-for-small-business",
    },
    {
      title: "Phishing Attacks: How to Protect Your Business in 2026",
      excerpt:
        "Protect your business from phishing with email security, employee training, and technical controls, plus real-world examples and prevention strategies.",
      category: "Cybersecurity",
      author: "Orion IT Service Team",
      date: "June 9, 2026",
      href: "/blog/phishing-attacks-how-to-protect-your-business-in-2026",
    },
    {
      title: "Ransomware Protection Strategies for Businesses",
      excerpt:
        "Protect your business from ransomware attacks with backup strategies, endpoint protection, and incident response. Essential prevention and recovery steps.",
      category: "Cybersecurity",
      author: "Orion IT Service Team",
      date: "June 9, 2026",
      href: "/blog/ransomware-protection-strategies-for-businesses",
    },
    {
      title: "How to Reduce Human Error in Cybersecurity",
      excerpt:
        "Learn proven strategies to reduce human error in cybersecurity. From training to automation to culture change, discover what actually works.",
      category: "Cybersecurity",
      author: "Orion IT Service Team",
      date: "June 9, 2026",
      href: "/blog/how-to-reduce-human-error-in-cybersecurity",
    },
    {
      title: "Why Your Office WiFi Is Slow and How to Fix It",
      excerpt:
        "Discover the common causes of poor wireless performance and the infrastructure improvements that deliver better speed, coverage, and reliability.",
      category: "Networking",
      author: "Orion IT Service Team",
      date: "April 12, 2026",
      href: "/blog/why-your-office-wifi-is-slow-and-how-to-fix-it",
    },
    {
      title:
        "Website Speed Optimization Checklist for Better SEO and Conversions",
      excerpt:
        "Page speed affects rankings and user behavior. Use this checklist to improve Core Web Vitals, reduce bounce rate, and increase lead generation.",
      category: "Website Development",
      author: "Orion IT Service Team",
      date: "April 9, 2026",
      href: "/blog/website-speed-optimization-checklist-for-better-seo-and-conversions",
    },
    {
      title: "How to Build a Practical IT Roadmap for Business Growth",
      excerpt:
        "Technology planning should support business goals. Learn how to prioritize upgrades, budget effectively, and avoid costly reactive decisions.",
      category: "IT Strategy",
      author: "Orion IT Service Team",
      date: "April 6, 2026",
      href: "/blog/how-to-build-a-practical-it-roadmap-for-business-growth",
    },
    {
      title: "Cloud Security Best Practices for Microsoft 365 Environments",
      excerpt:
        "Protect cloud collaboration tools with stronger access controls, policy configuration, user lifecycle management, and ongoing monitoring.",
      category: "Cloud Security",
      author: "Orion IT Service Team",
      date: "April 3, 2026",
      href: "/blog/cloud-security-best-practices-for-microsoft-365-environments",
    },
    {
      title:
        "Cloud Access Security Brokers (CASB): Protecting SaaS Applications",
      excerpt:
        "Gain visibility and control over SaaS application usage with CASB solutions that enforce security policies and detect threats.",
      category: "Cloud Security",
      author: "Orion IT Service Team",
      date: "April 10, 2026",
      href: "/blog/cloud-access-security-brokers-casb",
    },
    {
      title:
        "Multi-Factor Authentication (MFA) for Cloud: Enhanced Cloud Security",
      excerpt:
        "Protect cloud accounts from compromise with MFA requiring password plus additional verification methods like authenticator apps or security keys.",
      category: "Cloud Security",
      author: "Orion IT Service Team",
      date: "April 15, 2026",
      href: "/blog/multi-factor-authentication-mfa-cloud-security",
    },
    {
      title:
        "Cloud Data Classification and Encryption: Protecting Sensitive Data",
      excerpt:
        "Classify sensitive data and encrypt it both in transit and at rest to protect cloud information from unauthorized access and breach.",
      category: "Cloud Security",
      author: "Orion IT Service Team",
      date: "April 20, 2026",
      href: "/blog/cloud-data-classification-encryption",
    },
    {
      title:
        "Cloud Compliance and Data Residency: Meeting Regulatory Requirements",
      excerpt:
        "Ensure cloud infrastructure meets compliance requirements and understand data residency regulations specific to your industry and location.",
      category: "Cloud Security",
      author: "Orion IT Service Team",
      date: "April 25, 2026",
      href: "/blog/cloud-compliance-data-residency",
    },
    {
      title: "Zero Trust Security for Cloud: Modern Cloud Architecture",
      excerpt:
        "Implement Zero Trust principles to eliminate implicit trust, verify every user and device, and secure cloud environments against advanced threats.",
      category: "Cloud Security",
      author: "Orion IT Service Team",
      date: "May 1, 2026",
      href: "/blog/zero-trust-security-cloud",
    },
    {
      title:
        "Break-Fix vs Remote IT Support: Which Model Saves More Over Time?",
      excerpt:
        "Compare reactive support and proactive service models to understand total cost, risk exposure, and long-term operational impact.",
      category: "Remote IT Support",
      author: "Orion IT Service Team",
      date: "March 30, 2026",
      href: "/blog/break-fix-vs-managed-it-which-model-saves-more-over-time",
    },
    {
      title: "IT Help Desk Support: Efficient User Issue Resolution",
      excerpt:
        "Learn how responsive help desk support with ticketing systems, support tiers, and expert technicians keeps your team productive and reduces downtime.",
      category: "Remote IT Support",
      author: "Orion IT Service Team",
      date: "January 15, 2026",
      href: "/blog/it-help-desk-support-services",
    },
    {
      title:
        "IT System Monitoring and Maintenance: Proactive Infrastructure Management",
      excerpt:
        "Proactive monitoring detects problems before they become outages. Learn best practices for infrastructure monitoring, alerting, and preventive maintenance.",
      category: "Remote IT Support",
      author: "Orion IT Service Team",
      date: "January 20, 2026",
      href: "/blog/it-system-monitoring-maintenance",
    },
    {
      title: "Data Backup and Disaster Recovery: Business Continuity Planning",
      excerpt:
        "Backups protect against data loss from failures, ransomware, and disasters. Learn 3-2-1 backup strategy, recovery procedures, and business continuity planning.",
      category: "Remote IT Support",
      author: "Orion IT Service Team",
      date: "February 1, 2026",
      href: "/blog/data-backup-disaster-recovery",
    },
    {
      title: "IT Infrastructure Upgrade and Migration: System Modernization",
      excerpt:
        "Plan IT infrastructure upgrades and migrations to reduce costs, improve performance, and stay current with technology while minimizing disruption.",
      category: "Remote IT Support",
      author: "Orion IT Service Team",
      date: "February 10, 2026",
      href: "/blog/it-infrastructure-upgrade-migration",
    },
    {
      title:
        "IT Cost Optimization: Reducing Technology Spending While Improving Services",
      excerpt:
        "Learn strategies for reducing IT costs including cloud optimization, vendor management, and efficiency improvements without sacrificing security.",
      category: "Remote IT Support",
      author: "Orion IT Service Team",
      date: "February 18, 2026",
      href: "/blog/it-cost-optimization-strategies",
    },
    {
      title: "Mobile Device Management for Business: BYOD and Device Security",
      excerpt:
        "Learn MDM strategies to secure employee phones and tablets while supporting BYOD policies and protecting corporate data from personal devices.",
      category: "Remote IT Support",
      author: "Orion IT Service Team",
      date: "February 25, 2026",
      href: "/blog/mobile-device-management-mdm",
    },
    {
      title:
        "IT Change Management: Controlled System Updates and Configuration Changes",
      excerpt:
        "Learn change management processes to implement system updates safely with approval, testing, and communication to minimize disruption.",
      category: "Remote IT Support",
      author: "Orion IT Service Team",
      date: "March 5, 2026",
      href: "/blog/it-change-management-best-practices",
    },
    {
      title: "Virtual Desktop Infrastructure for Remote Work: VDI Solutions",
      excerpt:
        "Learn how virtual desktops enable secure remote work, simplify management, and improve employee flexibility while protecting corporate data.",
      category: "Remote IT Support",
      author: "Orion IT Service Team",
      date: "March 12, 2026",
      href: "/blog/virtual-desktop-infrastructure-vdi",
    },
    {
      title: "IT Service Level Agreements: SLA Best Practices for IT Support",
      excerpt:
        "Learn how to define, implement, and monitor SLAs to set clear expectations and improve IT service delivery performance and accountability.",
      category: "Remote IT Support",
      author: "Orion IT Service Team",
      date: "March 20, 2026",
      href: "/blog/it-service-level-agreements-sla",
    },
    {
      title:
        "IT Asset Management and Inventory: Equipment Lifecycle Management",
      excerpt:
        "Learn asset management practices to track hardware and software, optimize spending, and ensure compliance with licensing requirements.",
      category: "Remote IT Support",
      author: "Orion IT Service Team",
      date: "March 28, 2026",
      href: "/blog/it-asset-management-inventory",
    },
    {
      title: "Vulnerability Assessment for Businesses: Identify Security Risks",
      excerpt:
        "Learn vulnerability assessment process, scanning tools, risk prioritization, and how findings lead to practical security improvements.",
      category: "Cybersecurity",
      author: "Orion IT Service Team",
      date: "March 15, 2026",
      href: "/blog/vulnerability-assessment-process-for-businesses",
    },
    {
      title:
        "Threat Modeling for Cybersecurity: Identify Attack Vectors Before They're Exploited",
      excerpt:
        "Understand threat modeling methodology for identifying potential attack vectors early. STRIDE, DFD, and practical implementation for business security.",
      category: "Cybersecurity",
      author: "Orion IT Service Team",
      date: "February 20, 2026",
      href: "/blog/threat-modeling-for-proactive-cybersecurity",
    },
    {
      title:
        "Penetration Testing for Business Security: Discover Real-World Attack Risks",
      excerpt:
        "Learn what penetration testing is, how it differs from vulnerability assessment, and why authorized security testing helps identify real-world risks.",
      category: "Cybersecurity",
      author: "Orion IT Service Team",
      date: "May 5, 2026",
      href: "/blog/penetration-testing-authorized-security-assessment",
    },
    {
      title: "GRC in Cybersecurity: Governance, Risk, and Compliance Strategy",
      excerpt:
        "Understand GRC frameworks for managing security risk, compliance requirements, and governance, essential for regulated industries and growing businesses.",
      category: "Cybersecurity",
      author: "Orion IT Service Team",
      date: "April 1, 2026",
      href: "/blog/grc-governance-risk-compliance-strategy",
    },
    {
      title:
        "Security Audit for Businesses: Compliance and Control Verification",
      excerpt:
        "Learn what security audits are, how they differ from assessments, and why independent verification of controls matters for compliance and risk management.",
      category: "Cybersecurity",
      author: "Orion IT Service Team",
      date: "May 28, 2026",
      href: "/blog/security-audit-compliance-verification",
    },
    {
      title: "Network Monitoring and Threat Detection: Real-Time Visibility",
      excerpt:
        "Detect threats before they damage operations with flow analysis, SIEM tools, and advanced threat detection techniques for real-time security visibility.",
      category: "Networking",
      author: "Orion IT Service Team",
      date: "May 30, 2026",
      href: "/blog/network-monitoring-threat-detection",
    },
    {
      title: "Legacy System Modernization: Application Transformation",
      excerpt:
        "Modernize legacy systems with strategic approaches—replace, migrate, or refactor—to reduce technical debt and improve competitiveness.",
      category: "IT Strategy",
      author: "Orion IT Service Team",
      date: "May 22, 2026",
      href: "/blog/legacy-system-modernization",
    },
    {
      title: "WiFi 6 and Modern Wireless Security: Enterprise WiFi",
      excerpt:
        "Leverage WiFi 6 technology for improved performance and security with WPA3 encryption, network segmentation, and advanced threat monitoring.",
      category: "Networking",
      author: "Orion IT Service Team",
      date: "May 25, 2026",
      href: "/blog/wifi-6-wireless-security",
    },
    {
      title: "Network Segmentation and VLANs: Advanced Network Architecture",
      excerpt:
        "Implement network segmentation and VLAN strategies to isolate traffic, improve security, and optimize network performance and management.",
      category: "Networking",
      author: "Orion IT Service Team",
      date: "May 20, 2026",
      href: "/blog/network-segmentation-vlans",
    },
    {
      title: "VPN and Remote Access Security: Secure Remote Connectivity",
      excerpt:
        "Secure remote access with VPN encryption, multi-factor authentication, network access control, and conditional access policies.",
      category: "Networking",
      author: "Orion IT Service Team",
      date: "May 15, 2026",
      href: "/blog/vpn-remote-access-security",
    },
    {
      title:
        "Business Continuity and Disaster Recovery: Operational Resilience",
      excerpt:
        "Protect business operations with comprehensive business continuity and disaster recovery planning ensuring rapid recovery from disruptions.",
      category: "IT Strategy",
      author: "Orion IT Service Team",
      date: "May 18, 2026",
      href: "/blog/business-continuity-disaster-recovery-planning",
    },
    {
      title:
        "Network Security Best Practices: Enterprise Security Architecture",
      excerpt:
        "Build secure networks with firewalls, intrusion detection, network segmentation, monitoring, and access control best practices.",
      category: "Networking",
      author: "Orion IT Service Team",
      date: "May 10, 2026",
      href: "/blog/network-security-best-practices",
    },
    {
      title: "IT Vendor Selection and Management: Technology Partnerships",
      excerpt:
        "Select IT vendors strategically, negotiate contracts effectively, and manage relationships to ensure best value and support.",
      category: "IT Strategy",
      author: "Orion IT Service Team",
      date: "May 12, 2026",
      href: "/blog/it-vendor-selection-management",
    },
    {
      title: "Technology Budget Planning and ROI: IT Investment Strategy",
      excerpt:
        "Plan technology budgets strategically, evaluate IT investments, and measure ROI to align technology spending with business value.",
      category: "IT Strategy",
      author: "Orion IT Service Team",
      date: "May 5, 2026",
      href: "/blog/technology-budget-planning-roi",
    },
    {
      title: "Digital Transformation Planning: Business Technology Strategy",
      excerpt:
        "Plan digital transformation to modernize business processes, improve efficiency, and leverage technology for competitive advantage.",
      category: "IT Strategy",
      author: "Orion IT Service Team",
      date: "April 5, 2026",
      href: "/blog/digital-transformation-planning",
    },
  ];

  const categories = [
    "All Topics",
    "Cybersecurity",
    "Remote IT Support",
    "Cloud Security",
    "Networking",
    "IT Strategy",
    "Website Development",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All Topics");

  const filteredPosts =
    selectedCategory === "All Topics"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <>
      <HeroBanner
        title="Orion IT Insights"
        subtitle="Practical technology guidance for security, performance, and business growth"
        ctaText="Contact Our Team"
        ctaLink="/contact"
        image="/images/serveroom2.webp"
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box mb={8}>
          <Chip
            label="FEATURED ARTICLE"
            color="primary"
            sx={{ mb: 2, fontWeight: 700, letterSpacing: 0.8 }}
          />
          <Paper elevation={2} sx={{ p: { xs: 3, md: 5 } }}>
            <Chip
              label={featuredPost.category}
              color="secondary"
              sx={{ mb: 2 }}
            />
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: "1.8rem", md: "2.4rem" },
              }}
            >
              {featuredPost.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                flexWrap: "wrap",
                mb: 2,
                color: "text.secondary",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <PersonIcon fontSize="small" />
                <Typography variant="body2">{featuredPost.author}</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CalendarIcon fontSize="small" />
                <Typography variant="body2">{featuredPost.date}</Typography>
              </Box>
            </Box>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.85, mb: 3 }}
            >
              {featuredPost.excerpt}
            </Typography>
            <Button
              variant="contained"
              endIcon={<ArrowIcon />}
              href="/blog/how-remote-it-support-reduces-downtime-for-small-and-mid-sized-businesses"
              aria-label="Read how remote IT support reduces downtime article"
            >
              Read Remote IT Support Downtime Article
            </Button>
          </Paper>
        </Box>

        <Box mb={8}>
          <Typography
            variant="h4"
            component="h3"
            sx={{ fontWeight: 800, mb: 3 }}
          >
            Browse by Topic
          </Typography>
          <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "filled" : "outlined"}
                color="primary"
                sx={{ cursor: "pointer" }}
              />
            ))}
          </Box>
        </Box>

        <Box mb={8}>
          <Typography
            variant="h4"
            component="h3"
            sx={{ fontWeight: 800, mb: 4 }}
          >
            {selectedCategory === "All Topics"
              ? "Latest Articles"
              : `${selectedCategory} Articles`}{" "}
            ({filteredPosts.length})
          </Typography>
          <Grid container spacing={3}>
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <Grid size={{ xs: 12, md: 6 }} key={post.title}>
                  <Card sx={{ height: "100%" }}>
                    <CardContent sx={{ p: 3 }}>
                      <Chip
                        label={post.category}
                        size="small"
                        color="primary"
                        sx={{ mb: 2 }}
                      />
                      <Typography
                        variant="h6"
                        component="h4"
                        sx={{ fontWeight: 700, mb: 1.5 }}
                      >
                        {post.title}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 2,
                          flexWrap: "wrap",
                          mb: 2,
                          color: "text.secondary",
                        }}
                      >
                        <Typography variant="caption">{post.author}</Typography>
                        <Typography variant="caption">{post.date}</Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          lineHeight: 1.8,
                          mb: 2.5,
                        }}
                      >
                        {post.excerpt}
                      </Typography>
                      <Button
                        size="small"
                        endIcon={<ArrowIcon />}
                        href={post.href ?? "/contact"}
                        aria-label={`Read article: ${post.title}`}
                      >
                        Read Full Article
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <Grid size={{ xs: 12 }}>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", textAlign: "center", py: 4 }}
                >
                  No articles found for this topic. Please select another topic
                  or browse all articles.
                </Typography>
              </Grid>
            )}
          </Grid>
        </Box>

        <Paper
          elevation={0}
          sx={{
            backgroundColor: "primary.light",
            color: "primary.contrastText",
            p: { xs: 4, md: 6 },
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            component="h3"
            sx={{ fontWeight: 800, mb: 2 }}
          >
            Need Help With Your IT Strategy?
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 760, mx: "auto", mb: 3 }}>
            Our team helps businesses turn technical challenges into clear
            action plans. Talk to us about cybersecurity, networking, IT
            support, or website development.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            href="/contact"
          >
            Book a Consultation
          </Button>
        </Paper>
      </Container>
    </>
  );
}
