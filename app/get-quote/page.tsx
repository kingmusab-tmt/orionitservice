"use client";
import { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Alert,
  Paper,
  Divider,
  CircularProgress,
  Modal,
} from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SendIcon from "@mui/icons-material/Send";
import SecurityIcon from "@mui/icons-material/Security";
import LanIcon from "@mui/icons-material/Lan";
import StorageIcon from "@mui/icons-material/Storage";

export default function GetQuote() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    employees: "",
    services: {
      cybersecurity: false,
      networking: false,
      cloud: false,
      backup: false,
      other: false,
    },
    otherService: "",
    timeline: "",
    budget: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      services: {
        ...prev.services,
        [name]: checked,
      },
    }));
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.company) {
      setError("Please fill in all required fields");
      setLoading(false);
      return;
    }

    if (!Object.values(formData.services).some((v) => v)) {
      setError("Please select at least one service");
      setLoading(false);
      return;
    }

    if (formData.services.other && !formData.otherService) {
      setError("Please specify the 'Other' service");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/send-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.message || "Failed to submit form");
      }

      // Show success modal
      setModalMessage(
        "Thank you for your request! Our team will review your information and get back to you within 1-2 business days."
      );
      setOpenModal(true);

      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        employees: "",
        services: {
          cybersecurity: false,
          networking: false,
          cloud: false,
          backup: false,
          other: false,
        },
        otherService: "",
        timeline: "",
        budget: "",
        message: "",
      });
    } catch (err) {
      console.error("Submission error:", err);
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred while submitting your request. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <HeroBanner
        title="Get a Quote"
        subtitle="Tailored IT solutions for your business needs"
      />

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600, mb: 3 }}
              >
                Request a Quote
              </Typography>

              {error && (
                <Alert severity="error" sx={{ mb: 3 }}>
                  {error}
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit}>
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
                    <TextField
                      fullWidth
                      label="Number of Employees"
                      name="employees"
                      value={formData.employees}
                      onChange={handleChange}
                      variant="outlined"
                      select
                      SelectProps={{ native: true }}
                    >
                      <option value=""></option>
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-200">51-200</option>
                      <option value="201-500">201-500</option>
                      <option value="500+">500+</option>
                    </TextField>
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      Services Needed
                    </Typography>
                    <Grid container spacing={1}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={formData.services.cybersecurity}
                              onChange={handleServiceChange}
                              name="cybersecurity"
                              color="primary"
                            />
                          }
                          label={
                            <Box display="flex" alignItems="center">
                              <SecurityIcon color="primary" sx={{ mr: 1 }} />
                              Cybersecurity Training
                            </Box>
                          }
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={formData.services.networking}
                              onChange={handleServiceChange}
                              name="networking"
                              color="primary"
                            />
                          }
                          label={
                            <Box display="flex" alignItems="center">
                              <LanIcon color="primary" sx={{ mr: 1 }} />
                              Network Solutions
                            </Box>
                          }
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={formData.services.cloud}
                              onChange={handleServiceChange}
                              name="cloud"
                              color="primary"
                            />
                          }
                          label={
                            <Box display="flex" alignItems="center">
                              <StorageIcon color="primary" sx={{ mr: 1 }} />
                              Cloud Services
                            </Box>
                          }
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={formData.services.backup}
                              onChange={handleServiceChange}
                              name="backup"
                              color="primary"
                            />
                          }
                          label={
                            <Box display="flex" alignItems="center">
                              <StorageIcon color="primary" sx={{ mr: 1 }} />
                              Data Backup & Recovery
                            </Box>
                          }
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={formData.services.other}
                              onChange={handleServiceChange}
                              name="other"
                              color="primary"
                            />
                          }
                          label="Other Services"
                        />
                        {formData.services.other && (
                          <TextField
                            fullWidth
                            label="Please specify"
                            name="otherService"
                            value={formData.otherService}
                            onChange={handleChange}
                            variant="outlined"
                            sx={{ mt: 1 }}
                          />
                        )}
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Implementation Timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      variant="outlined"
                      select
                      SelectProps={{ native: true }}
                    >
                      <option value=""></option>
                      <option value="ASAP">ASAP</option>
                      <option value="1-2 weeks">1-2 weeks</option>
                      <option value="1 month">1 month</option>
                      <option value="2-3 months">2-3 months</option>
                      <option value="Not sure">Not sure</option>
                    </TextField>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Estimated Budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      variant="outlined"
                      select
                      SelectProps={{ native: true }}
                    >
                      <option value=""></option>
                      <option value="Under $1,000">Under $1,000</option>
                      <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="Over $10,000">Over $10,000</option>
                      <option value="Not sure">Not sure</option>
                    </TextField>
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Additional Information"
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
                      endIcon={
                        loading ? (
                          <CircularProgress size={24} color="inherit" />
                        ) : (
                          <SendIcon />
                        )
                      }
                      fullWidth
                      sx={{ py: 1.5 }}
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Submit Quote Request"}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Why Get a Quote?
              </Typography>
              <Typography variant="body1" paragraph>
                Our customized quotes help you:
              </Typography>
              <ul>
                <li>
                  <Typography variant="body1">
                    Get accurate pricing for your specific needs
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    Understand the scope of services required
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    Plan your IT budget effectively
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    Compare options before making decisions
                  </Typography>
                </li>
              </ul>
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Our IT Services
              </Typography>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <SecurityIcon color="primary" sx={{ mr: 2 }} />
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        Cybersecurity
                      </Typography>
                      <Typography variant="body2">
                        Training, assessments, and protection
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <LanIcon color="primary" sx={{ mr: 2 }} />
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        Networking
                      </Typography>
                      <Typography variant="body2">
                        Infrastructure design & implementation
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <StorageIcon color="primary" sx={{ mr: 2 }} />
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        Cloud Solutions
                      </Typography>
                      <Typography variant="body2">
                        Migration, management & optimization
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <StorageIcon color="primary" sx={{ mr: 2 }} />
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        Data Protection
                      </Typography>
                      <Typography variant="body2">
                        Backup, recovery & business continuity
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box>
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                What to Expect
              </Typography>
              <Typography variant="body1" paragraph>
                After submitting your quote request:
              </Typography>
              <ol>
                <li>
                  <Typography variant="body1">
                    We'll review your requirements within 24 hours
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    A specialist may contact you for clarification
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    You'll receive a detailed proposal
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    Opportunity to discuss and refine the solution
                  </Typography>
                </li>
              </ol>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Success Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="success-modal-title"
        aria-describedby="success-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 1,
          }}
        >
          <Typography
            id="success-modal-title"
            variant="h6"
            component="h2"
            sx={{ mb: 2 }}
          >
            Request Submitted Successfully
          </Typography>
          <Typography id="success-modal-description" sx={{ mb: 3 }}>
            {modalMessage}
          </Typography>
          <Button
            onClick={handleCloseModal}
            variant="contained"
            color="primary"
            fullWidth
          >
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
}
