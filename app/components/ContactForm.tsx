// "use client";
// import React, { useState } from "react";
// import {
//   Box,
//   TextField,
//   Button,
//   Typography,
//   Grid,
//   Alert,
//   CircularProgress,
//   Modal,
// } from "@mui/material";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [openModal, setOpenModal] = useState(false);
//   const [modalMessage, setModalMessage] = useState("");

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     // Basic validation
//     if (!formData.name || !formData.email || !formData.message) {
//       setError("Please fill in all required fields");
//       setLoading(false);
//       return;
//     }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       setError("Please enter a valid email address");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch("/api/contactus", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error || data.message || "Failed to submit form");
//       }

//       // Show success modal
//       setModalMessage(
//         "Thank you for your message! We'll get back to you soon."
//       );
//       setOpenModal(true);

//       // Reset form
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         message: "",
//       });
//     } catch (err) {
//       console.error("Submission error:", err);
//       setError(
//         err instanceof Error
//           ? err.message
//           : "An error occurred while submitting the form. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
//         {error && (
//           <Alert severity="error" sx={{ mb: 3 }}>
//             {error}
//           </Alert>
//         )}

//         <Grid container spacing={2}>
//           <Grid size={{ xs: 12, sm: 6 }}>
//             <TextField
//               required
//               fullWidth
//               id="name"
//               name="name"
//               label="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               variant="outlined"
//             />
//           </Grid>
//           <Grid size={{ xs: 12, sm: 6 }}>
//             <TextField
//               required
//               fullWidth
//               id="email"
//               name="email"
//               label="Email Address"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               variant="outlined"
//             />
//           </Grid>
//           <Grid size={{ xs: 12 }}>
//             <TextField
//               fullWidth
//               id="phone"
//               name="phone"
//               label="Phone Number (Optional)"
//               type="tel"
//               value={formData.phone}
//               onChange={handleChange}
//               variant="outlined"
//             />
//           </Grid>
//           <Grid size={{ xs: 12 }}>
//             <TextField
//               required
//               fullWidth
//               id="message"
//               name="message"
//               label="Your Message"
//               multiline
//               rows={4}
//               value={formData.message}
//               onChange={handleChange}
//               variant="outlined"
//             />
//           </Grid>
//         </Grid>

//         <Box sx={{ mt: 3 }}>
//           <Typography variant="body2" color="text.secondary" paragraph>
//             We'll never share your information with anyone else.
//           </Typography>
//         </Box>

//         <Button
//           type="submit"
//           fullWidth
//           variant="contained"
//           color="primary"
//           size="large"
//           sx={{ mt: 2, py: 1.5 }}
//           disabled={loading}
//           endIcon={
//             loading ? <CircularProgress size={24} color="inherit" /> : null
//           }
//         >
//           {loading ? "Sending..." : "Send Message"}
//         </Button>
//       </Box>

//       {/* Success Modal */}
//       <Modal
//         open={openModal}
//         onClose={handleCloseModal}
//         aria-labelledby="success-modal-title"
//         aria-describedby="success-modal-description"
//       >
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: 400,
//             bgcolor: "background.paper",
//             boxShadow: 24,
//             p: 4,
//             borderRadius: 1,
//           }}
//         >
//           <Typography
//             id="success-modal-title"
//             variant="h6"
//             component="h2"
//             sx={{ mb: 2 }}
//           >
//             Message Sent Successfully
//           </Typography>
//           <Typography id="success-modal-description" sx={{ mb: 3 }}>
//             {modalMessage}
//           </Typography>
//           <Button
//             onClick={handleCloseModal}
//             variant="contained"
//             color="primary"
//             fullWidth
//           >
//             Close
//           </Button>
//         </Box>
//       </Modal>
//     </>
//   );
// };

// export default ContactForm;
"use client";
import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Alert,
  CircularProgress,
  Modal,
  useTheme,
} from "@mui/material";

const ContactForm = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields");
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contactus", {
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
        "Thank you for your message! We'll get back to you soon."
      );
      setOpenModal(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.error("Submission error:", err);
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred while submitting the form. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
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
              label="Your Name"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              required
              fullWidth
              id="email"
              name="email"
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              id="phone"
              name="phone"
              label="Phone Number (Optional)"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              required
              fullWidth
              id="message"
              name="message"
              label="Your Message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 3 }}>
          <Typography variant="body2" color="text.secondary" paragraph>
            We'll never share your information with anyone else.
          </Typography>
        </Box>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 2, py: 1.5 }}
          disabled={loading}
          endIcon={
            loading ? <CircularProgress size={24} color="inherit" /> : null
          }
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </Box>

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
            border: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Typography
            id="success-modal-title"
            variant="h6"
            component="h2"
            sx={{ mb: 2 }}
          >
            Message Sent Successfully
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
};

export default ContactForm;
