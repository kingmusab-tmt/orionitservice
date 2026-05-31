"use client";
import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Link,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Schedule as ScheduleIcon,
} from "@mui/icons-material";

const SmallHeader = () => {
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const mediaQuery = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setIsClient(true);
    setIsMobile(mediaQuery);
  }, [mediaQuery]);

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "background.default",
        color: "text.primary",
        boxShadow: "none",
        borderBottom: `1px solid ${theme.palette.divider}`,
        py: 0.5,
        top: 0,
        zIndex: theme.zIndex.appBar,
      }}
      elevation={0}
      suppressHydrationWarning
    >
      <Toolbar
        suppressHydrationWarning
        sx={{
          minHeight: "40px !important",
          justifyContent: "space-between",
          px: isMobile ? 1 : 3,
        }}
      >
        {/* Left side - Contact Info */}
        <Box
          suppressHydrationWarning
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: isMobile ? 0.5 : 2,
          }}
        >
          {/* Phone */}
          <Box
            suppressHydrationWarning
            sx={{
              display: "flex",
              alignItems: "center",
              mr: isMobile ? 0.5 : 1,
            }}
          >
            <PhoneIcon
              fontSize="small"
              sx={{ mr: 0.5, color: "primary.main" }}
            />
            <Typography variant="caption" component="span">
              <Link
                href="tel:+1 888 841 2885"
                color="inherit"
                underline="hover"
              >
                +1 888 841 2885
              </Link>
            </Typography>
          </Box>

          {/* Email */}
          {/* <Box
            suppressHydrationWarning
            sx={{
              display: "flex",
              alignItems: "center",
              mr: isMobile ? 0.5 : 1,
            }}
          >
            <EmailIcon
              fontSize="small"
              sx={{ mr: 0.5, color: "primary.main" }}
            />
            <Typography variant="caption" component="span">
              <Link
                href="mailto:info@orionitservice.com"
                color="inherit"
                underline="hover"
              >
                info@orionitservice.com
              </Link>
            </Typography>
          </Box> */}

          {/* Support Email */}
          <Box
            suppressHydrationWarning
            sx={{
              display: "flex",
              alignItems: "center",
              mr: isMobile ? 0.5 : 1,
            }}
          >
            <EmailIcon
              fontSize="small"
              sx={{ mr: 0.5, color: "primary.main" }}
            />
            <Typography variant="caption" component="span">
              <Link
                href="mailto:support@orionitservice.com"
                color="inherit"
                underline="hover"
              >
                support@orionitservice.com
              </Link>
            </Typography>
          </Box>

          {/* Working Hours */}
          {/* {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ScheduleIcon
                fontSize="small"
                sx={{ mr: 0.5, color: "primary.main" }}
              />
              <Typography variant="caption">Mon-Fri: 9AM-5PM</Typography>
            </Box>
          )} */}
        </Box>

        {/* Right side - Social Media */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            size="small"
            color="inherit"
            href="https://web.facebook.com/profile.php?id=61577112279023"
            target="_blank"
            sx={{
              color: "text.secondary",
              "&:hover": {
                color: theme.palette.mode === "dark" ? "#1877F2" : "#1877F2",
              },
            }}
          >
            <FacebookIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            color="inherit"
            href="https://x.com/orionitservice"
            target="_blank"
            sx={{
              color: "text.secondary",
              "&:hover": {
                color: theme.palette.mode === "dark" ? "#1DA1F2" : "#1DA1F2",
              },
            }}
          >
            <TwitterIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            color="inherit"
            href="https://linkedin.com/orionitservice"
            target="_blank"
            sx={{
              color: "text.secondary",
              "&:hover": {
                color: theme.palette.mode === "dark" ? "#0A66C2" : "#0A66C2",
              },
            }}
          >
            <LinkedInIcon fontSize="small" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default SmallHeader;
