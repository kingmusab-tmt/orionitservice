"use client";
import { Container, Typography, Box, Link } from "@mui/material";
import HeroBanner from "../components/HeroBanner";

export default function PrivacyPolicy() {
  return (
    <>
      <HeroBanner
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information"
        image="/images/avatar5.jpg"
      />

      <Container maxWidth="md" sx={{ py: 6 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Last Updated: {new Date().toLocaleDateString()}
          </Typography>
          <Typography variant="body1" paragraph>
            Your privacy is important to us. This Privacy Policy explains how
            [Your Company Name] ("we," "us," or "our") collects, uses,
            discloses, and safeguards your information when you visit our
            website [yourwebsite.com] and use our services.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            1. Information We Collect
          </Typography>
          <Typography variant="body1" paragraph>
            We may collect the following types of information:
          </Typography>
          <ul>
            <li>
              <Typography variant="body1" component="span">
                <strong>Personal Information:</strong> Name, email address,
                phone number, company name when you fill out our contact form or
                request services.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" component="span">
                <strong>Technical Data:</strong> IP address, browser type,
                operating system, referring URLs, device information, and pages
                visited.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" component="span">
                <strong>Cookies:</strong> We use cookies to enhance your
                experience and analyze site usage.
              </Typography>
            </li>
          </ul>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            2. How We Use Your Information
          </Typography>
          <Typography variant="body1" paragraph>
            We use the information we collect to:
          </Typography>
          <ul>
            <li>Provide, operate, and maintain our services</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Improve our website and services</li>
            <li>Send administrative information and service updates</li>
            <li>Analyze usage trends and preferences</li>
            <li>Prevent fraud and enhance security</li>
          </ul>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            3. Information Sharing and Disclosure
          </Typography>
          <Typography variant="body1" paragraph>
            We do not sell or rent your personal information. We may disclose
            information to:
          </Typography>
          <ul>
            <li>Service providers who assist in our business operations</li>
            <li>Legal authorities when required by law</li>
            <li>Third parties in connection with a business transfer</li>
          </ul>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            4. Data Security
          </Typography>
          <Typography variant="body1" paragraph>
            We implement appropriate technical and organizational measures to
            protect your personal information. However, no internet transmission
            is completely secure, and we cannot guarantee absolute security.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            5. Your Rights
          </Typography>
          <Typography variant="body1" paragraph>
            Depending on your location, you may have rights to:
          </Typography>
          <ul>
            <li>Access, correct, or delete your personal information</li>
            <li>Object to or restrict processing of your data</li>
            <li>Request a copy of your data in a portable format</li>
            <li>Withdraw consent where processing is based on consent</li>
          </ul>
          <Typography variant="body1" paragraph>
            To exercise these rights, please contact us at{" "}
            <Link href="mailto:privacy@orionitservices.com.">
              privacy@orionitservices.com.
            </Link>
            .
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            6. Third-Party Links
          </Typography>
          <Typography variant="body1" paragraph>
            Our website may contain links to third-party sites. We are not
            responsible for the privacy practices of these sites and encourage
            you to review their privacy policies.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            7. Changes to This Policy
          </Typography>
          <Typography variant="body1" paragraph>
            We may update this Privacy Policy periodically. We will notify you
            of significant changes by posting the new policy on our website with
            an updated effective date.
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            8. Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            If you have questions about this Privacy Policy, please contact us
            at:
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>[Your Company Name]</strong>
            <br />
            Email:{" "}
            <Link href="mailto:privacy@orionitservices.com.">
              privacy@orionitservices.com.
            </Link>
            <br />
            Phone: [Your Contact Number]
            <br />
            Address: [Your Company Address]
          </Typography>
        </Box>
      </Container>
    </>
  );
}
