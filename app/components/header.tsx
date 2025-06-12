"use client"; // Add this directive at the top

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Toolbar>
        <Link href="/" passHref>
          <div
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <Image
              src="/images/logo.png"
              alt="Orion IT Service Logo"
              width={50}
              height={50}
              priority
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ ml: 2, fontWeight: "bold" }}
            >
              Orion IT Service
            </Typography>
          </div>
        </Link>

        <div style={{ flexGrow: 1 }} />

        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} component={Link} href="/">
                Home
              </MenuItem>
              <MenuItem onClick={handleClose} component={Link} href="/about">
                About
              </MenuItem>
              <MenuItem onClick={handleClose} component={Link} href="/services">
                Services
              </MenuItem>
              <MenuItem onClick={handleClose} component={Link} href="/contact">
                Contact
              </MenuItem>
            </Menu>
          </>
        ) : (
          <div>
            <Button color="inherit" component={Link} href="/">
              Home
            </Button>
            <Button color="inherit" component={Link} href="/about">
              About
            </Button>
            <Button color="inherit" component={Link} href="/services">
              Services
            </Button>
            <Button color="inherit" component={Link} href="/contact">
              Contact
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{ ml: 2 }}
              component={Link}
              href="/contact"
            >
              Get a Quote
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
