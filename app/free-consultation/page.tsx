"use client";

import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  List,
  ListItem,
  ListItemIcon,
  Divider,
  Chip,
  useTheme,
  useMediaQuery,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  Schedule as ScheduleIcon,
  ContactSupport as ContactIcon,
  CheckCircle as CheckIcon,
  Business as BusinessIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  ArrowForward as ArrowIcon,
} from "@mui/icons-material";
import { useState } from "react";

const ConsultationPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    employees: "",
    message: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | { target: { name: string; value: string } }
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSnackbar({
          open: true,
          message:
            data.message || "Thank you! Your request has been submitted.",
          severity: "success",
        });
        // Reset form
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          service: "",
          employees: "",
          message: "",
        });
      } else {
        throw new Error(data.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSnackbar({
        open: true,
        message:
          error instanceof Error
            ? error.message
            : "There was an error submitting your request.",
        severity: "error",
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const services = [
    "Cybersecurity Assessment",
    "Network Infrastructure Review",
    "Managed IT Services",
    "Cloud Migration",
    "Compliance Consultation",
    "Technology Strategy",
    "Other",
  ];

  const companySizes = [
    "1-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201-500 employees",
    "500+ employees",
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={6}>
        {/* Form Column */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Paper elevation={3} sx={{ p: isMobile ? 3 : 6 }}>
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: isMobile ? "2rem" : "2.5rem",
              }}
            >
              Schedule Your Free IT Consultation
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Complete this form and one of our technology experts will contact
              you within 24 hours to schedule your 30-minute consultation.
            </Typography>

            <Divider sx={{ my: 4 }} />

            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    fullWidth
                    label="Company Name"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <FormControl fullWidth>
                    <InputLabel>Primary Service Interest</InputLabel>
                    <Select
                      required
                      name="service"
                      value={formData.service}
                      onChange={(e) =>
                        handleChange({
                          target: {
                            name: "service",
                            value: e.target.value as string,
                          },
                        })
                      }
                      label="Primary Service Interest"
                    >
                      {services.map((service) => (
                        <MenuItem key={service} value={service}>
                          {service}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <FormControl fullWidth>
                    <InputLabel>Company Size</InputLabel>
                    <Select
                      required
                      name="employees"
                      value={formData.employees}
                      onChange={(e) =>
                        handleChange({
                          target: {
                            name: "employees",
                            value: e.target.value as string,
                          },
                        })
                      }
                      label="Company Size"
                    >
                      {companySizes.map((size) => (
                        <MenuItem key={size} value={size}>
                          {size}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="How can we help you? (Optional)"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    endIcon={<ArrowIcon />}
                    sx={{ py: 1.5, fontSize: "1.1rem" }}
                  >
                    Request Free Consultation
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>

        {/* Benefits Column */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Box sx={{ position: "sticky", top: 20 }}>
            <Paper
              elevation={3}
              sx={{
                p: isMobile ? 3 : 4,
                mb: 4,
                backgroundColor: theme.palette.primary.light,
                color: "primary.contrastText",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <ScheduleIcon sx={{ fontSize: 40, mr: 2 }} />
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ fontWeight: 700 }}
                >
                  What to Expect
                </Typography>
              </Box>
              <List dense>
                {[
                  "30-minute no-obligation consultation",
                  "Technology assessment tailored to your business",
                  "Actionable recommendations",
                  "Clear next steps if you choose to proceed",
                  "No sales pressure - just expert advice",
                ].map((item, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon
                      sx={{ minWidth: 36, color: "primary.contrastText" }}
                    >
                      <CheckIcon />
                    </ListItemIcon>
                    <Typography variant="body1">{item}</Typography>
                  </ListItem>
                ))}
              </List>
            </Paper>

            <Paper elevation={3} sx={{ p: isMobile ? 3 : 4 }}>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ContactIcon color="primary" sx={{ mr: 1 }} /> Other Ways to
                Connect
              </Typography>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <PhoneIcon color="primary" />
                  </ListItemIcon>
                  <Typography variant="body1">
                    <strong>Call us:</strong> (555) 123-4567
                  </Typography>
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <EmailIcon color="primary" />
                  </ListItemIcon>
                  <Typography variant="body1">
                    <strong>Email us:</strong> consultations@orionit.com
                  </Typography>
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <BusinessIcon color="primary" />
                  </ListItemIcon>
                  <Typography variant="body1">
                    <strong>Office hours:</strong> Mon-Fri, 8am-6pm EST
                  </Typography>
                </ListItem>
              </List>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                fullWidth
                href="/contact"
                sx={{ mt: 2, py: 1.5 }}
              >
                Visit Contact Page
              </Button>
            </Paper>
          </Box>
        </Grid>
      </Grid>

      {/* Trust Indicators */}
      <Box sx={{ mt: 10, textAlign: "center" }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 800, mb: 3 }}>
          Trusted By Businesses Across Industries
        </Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
          {[
            "Healthcare Providers",
            "Financial Services",
            "Legal Firms",
            "Manufacturing",
            "Education",
            "Nonprofits",
          ].map((industry) => (
            <Grid size={{ xs: 12, sm: 4, md: 2 }} key={industry}>
              <Chip
                label={industry}
                variant="outlined"
                sx={{
                  px: 2,
                  py: 1.5,
                  fontSize: "0.9rem",
                  borderWidth: 2,
                  borderColor: "primary.main",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Snackbar Notification */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ConsultationPage;
