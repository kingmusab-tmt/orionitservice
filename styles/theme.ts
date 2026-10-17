import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeBackground {
    // Alternating section backgrounds that stay readable in both modes
    subtle: string;
    muted: string;
    footer: string;
  }
}

// Colors are emitted as CSS variables and switched by the visitor's
// prefers-color-scheme setting in CSS, so the correct scheme is applied
// on first paint with no flash. Read palette values in styles via
// `(theme.vars || theme).palette` so they follow the active scheme.
const theme = createTheme({
  cssVariables: true,
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: "#f5f5f5",
          paper: "#ffffff",
          subtle: "#fafafa",
          muted: "#f5f5f5",
          footer: "#1976d2",
        },
      },
    },
    dark: {
      palette: {
        background: {
          default: "#121212",
          paper: "#1e1e1e",
          subtle: "#1e1e1e",
          muted: "#1e1e1e",
          footer: "#1e1e1e",
        },
      },
    },
  },
  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
  },
});

export default theme;
