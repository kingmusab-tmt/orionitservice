import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Image from "next/image";

interface HeroBannerProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  image = "/images/avatar5.jpg", // Default image
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        minHeight: 500,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
          },
        }}
      >
        <Image
          src={image}
          style={{ objectFit: "cover" }}
          alt="Oriton IT Service Hero Banner"
          fill={true}
          quality={100}
          priority
        />
      </Box>

      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 900,
            fontSize: { xs: "2.5rem", sm: "3rem", md: "5rem" },
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h5"
          component="p"
          gutterBottom
          sx={{
            mb: 4,
            textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
          }}
        >
          {subtitle}
        </Typography>
        {ctaText && ctaLink && (
          <Button
            variant="contained"
            color="secondary"
            size="large"
            href={ctaLink}
            sx={{
              px: 4,
              py: 2,
              fontSize: "1.1rem",
              fontWeight: "bold",
            }}
          >
            {ctaText}
          </Button>
        )}
      </Container>
    </Box>
  );
};

export default HeroBanner;
