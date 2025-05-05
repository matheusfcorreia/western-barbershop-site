/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      spacing: {
        section: "6rem",
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
