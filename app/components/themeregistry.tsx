// components/ThemeRegistry.tsx
"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect, useState } from "react";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Detect system color scheme preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setMode(mediaQuery.matches ? "dark" : "light");

    // Listen for system preference changes
    const handler = (e: MediaQueryListEvent) =>
      setMode(e.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            // Dark mode palette
            background: {
              default: "#121212",
              paper: "#1e1e1e",
            },
            text: {
              primary: "#ffffff",
              secondary: "rgba(255, 255, 255, 0.7)",
            },
          }
        : {
            // Light mode palette
            background: {
              default: "#f5f5f5",
              paper: "#ffffff",
            },
            text: {
              primary: "rgba(0, 0, 0, 0.87)",
              secondary: "rgba(0, 0, 0, 0.6)",
            },
          }),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
