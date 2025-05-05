export const theme = {
  colors: {
    primary: {
      DEFAULT: "#1a1a1a",
      light: "#333333",
      dark: "#000000",
    },
    secondary: {
      DEFAULT: "#d4af37",
      light: "#e6c35c",
      dark: "#b38f2c",
    },
    accent: {
      DEFAULT: "#ffffff",
      light: "#f5f5f5",
      dark: "#e6e6e6",
    },
    background: {
      DEFAULT: "#ffffff",
      dark: "#1a1a1a",
    },
  },
  fonts: {
    heading: "var(--font-heading)",
    body: "var(--font-body)",
  },
  spacing: {
    container: "1200px",
    section: "6rem",
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
} as const;

export type Theme = typeof theme;
