import React from "react";
import { Box, Container, Typography, Grid, Avatar } from "@mui/material";
import { Star } from "@mui/icons-material";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "Orion IT Services transformed our cybersecurity posture. Their training program was engaging and effective, reducing our phishing susceptibility by 80%.",
    rating: 5,
    avatar: "/images/avatar1.png",
  },
  {
    name: "Michael Chen",
    role: "IT Director, Global Corp",
    content:
      "The network infrastructure they implemented has been rock-solid. We've had zero downtime since deployment, and their support team is exceptional.",
    rating: 5,
    avatar: "/images/avatar2.png",
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Manager, Retail Solutions",
    content:
      "Their team understood our unique needs and delivered customized solutions that have significantly improved our operational efficiency.",
    rating: 4,
    avatar: "/images/avatar3.webp",
  },
];

const Testimonials = () => {
  return (
    <Box sx={{ py: 8, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 6 }}
        >
          What Our Clients Say
        </Typography>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Box
                sx={{
                  height: "100%",
                  p: 3,
                  borderRadius: 2,
                  bgcolor: "background.default",
                  boxShadow: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ display: "flex", mb: 2 }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} color="primary" />
                  ))}
                </Box>

                <Typography
                  variant="body1"
                  paragraph
                  sx={{ flexGrow: 1, fontStyle: "italic" }}
                >
                  "{testimonial.content}"
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                  <Avatar
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    sx={{ width: 56, height: 56, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
