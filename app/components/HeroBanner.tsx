import React from "react";
import { Box, Typography, Button, Container, Stack } from "@mui/material";
import Image from "next/image";

interface CTA {
  text: string;
  link: string;
  variant?: "contained" | "outlined";
}

interface HeroBannerProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  ctas?: CTA[];
  image?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  ctas,
  image = "/images/avatar5.webp", // Default image
}) => {
  // Use new ctas array if provided, otherwise fall back to single CTA for backward compatibility
  const ctaButtons =
    ctas ||
    (ctaText && ctaLink
      ? [{ text: ctaText, link: ctaLink, variant: "contained" as const }]
      : []);
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
          sizes="100vw"
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
            fontSize: { xs: "3rem", sm: "3rem", md: "5rem" },
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
            mb: 5,
            textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
          }}
        >
          {subtitle}
        </Typography>
        {ctaButtons.length > 0 && (
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {ctaButtons.map((cta, index) => (
              <Button
                key={index}
                variant={cta.variant || "contained"}
                color={cta.variant === "outlined" ? "inherit" : "secondary"}
                size="large"
                href={cta.link}
                sx={{
                  px: 4,
                  py: 2,
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                }}
              >
                {cta.text}
              </Button>
            ))}
          </Stack>
        )}
      </Container>
    </Box>
  );
};

export default HeroBanner;
