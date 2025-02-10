import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    screens: {
      mobile: '390px',   // Mobile
      tablet: '744px',   // Tablet
      desktop: '1920px', // Desktop
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    fontFeatureSettings: {
      ligaOff: "'liga' off, 'clig' off", // Disables ligatures
    },
    textTransform: {
      capitalize: "capitalize",
    },
  },
  plugins: [],
} satisfies Config;
