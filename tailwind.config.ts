import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B4332",
        "primary-light": "#2D6A4F",
        accent: "#F77F00",
        "accent-hover": "#E07000",
        bg: "#FFFFFF",
        "bg-alt": "#F8F9FA",
        "bg-dark": "#1B4332",
        text: "#1A1A2E",
        "text-light": "#6B7280",
        "text-on-dark": "#FFFFFF",
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
        border: "#E5E7EB"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"]
      },
      fontSize: {
        "h1-mobile": ["2rem", { lineHeight: "1.1", fontWeight: "800" }],
        "h1-desktop": ["3rem", { lineHeight: "1.05", fontWeight: "800" }],
        "h2-mobile": ["1.75rem", { lineHeight: "1.15", fontWeight: "700" }],
        "h2-desktop": ["2.25rem", { lineHeight: "1.1", fontWeight: "700" }],
        "h3-mobile": ["1.25rem", { lineHeight: "1.2", fontWeight: "600" }],
        "h3-desktop": ["1.5rem", { lineHeight: "1.2", fontWeight: "600" }],
        body: ["1.125rem", { lineHeight: "1.7", fontWeight: "400" }],
        "body-mobile": ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        small: ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
        cta: ["1rem", { lineHeight: "1.2", fontWeight: "600" }],
        code: ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }]
      },
      spacing: {
        18: "4.5rem",
        "section-mobile": "4rem",
        section: "6rem",
        container: "1200px",
        card: "2rem"
      },
      borderRadius: {
        button: "8px",
        card: "12px"
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.05)",
        md: "0 4px 6px rgba(0,0,0,0.07)",
        lg: "0 10px 25px rgba(0,0,0,0.1)",
        xl: "0 20px 50px rgba(0,0,0,0.15)"
      },
      maxWidth: {
        container: "1200px"
      }
    }
  },
  plugins: []
};

export default config;
