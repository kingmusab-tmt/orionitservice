"use client";

import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Alert,
  CircularProgress,
  Modal,
  Typography,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// The form card is always white, so keep its inputs and text on a light
// palette even when the site is in dark mode.
const lightTheme = createTheme({ palette: { mode: "light" } });

const SubmitButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)",
  fontSize: "1rem",
  fontWeight: 700,
  padding: theme.spacing(1.5, 3),
  borderRadius: "50px",
  textTransform: "none",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  },
}));

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  description: string;
}

const LandingPageContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    description: "",
    company: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      description: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Validation
    if (!formData.name || !formData.email) {
      setError("Please fill in your name and email");
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/send-consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message:
            formData.description || "Remote IT Support Landing Page Inquiry",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.message || "Failed to submit form");
      }

      setOpenModal(true);
    } catch (err) {
      console.error("Submission error:", err);
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          color: "text.primary",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          padding: 4,
          borderRadius: "12px",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: 3,
            color: "#1a237e",
            textAlign: "center",
          }}
        >
          Get Your Free Remote IT Support
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              required
              fullWidth
              id="name"
              name="name"
              label="Name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                },
              }}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              required
              fullWidth
              id="email"
              name="email"
              label="Email"
              type="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                },
              }}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              id="phone"
              name="phone"
              label="Phone Number"
              type="tel"
              placeholder="(702) 123-4567"
              value={formData.phone}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                },
              }}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              id="company"
              name="company"
              label="Company Name"
              placeholder="Your Company"
              value={formData.company}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                },
              }}
            />
          </Grid>
        </Grid>

        <TextField
          fullWidth
          id="description"
          name="description"
          label="Description of Support Needed"
          placeholder="Tell us about your IT support needs..."
          value={formData.description}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            },
          }}
        />

        <SubmitButton
          type="submit"
          fullWidth
          variant="contained"
          disabled={loading}
          sx={{ mt: 3, mb: 2 }}
        >
          {loading ? (
            <>
              <CircularProgress size={20} sx={{ mr: 1, color: "white" }} />
              Submitting...
            </>
          ) : (
            "Submit Your Request"
          )}
        </SubmitButton>

        <Typography
          variant="caption"
          display="block"
          sx={{
            textAlign: "center",
            color: "#666",
            mt: 2,
          }}
        >
          We'll review your IT descriptions and reach out immediately.
        </Typography>
      </Box>

      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "text.primary",
            backgroundColor: "white",
            padding: 4,
            borderRadius: "12px",
            boxShadow: 24,
            maxWidth: 500,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Submission Received!
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: "text.secondary" }}>
            Thank you for your interest in our remote IT support services. Our
            team will contact you within as soon as possible.
          </Typography>
          <Button
            onClick={handleCloseModal}
            variant="contained"
            sx={{
              background: "linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)",
            }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default LandingPageContactForm;
