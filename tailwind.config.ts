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
        paper: "var(--paper-color)",
        headline: "var(--headline-color)",
        body: "var(--text-color)",
        accent: "var(--accent-color)",
        border: "var(--border-color)",
        muted: "var(--muted-color)",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
      fontFamily: {
        headline: ["var(--font-primary)", "serif"],
        body: ["var(--font-primary)", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            'h1, h2, h3, h4': {
              fontFamily: 'var(--font-primary)',
            },
          },
        },
      },
      boxShadow: {
        'newspaper': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
} satisfies Config;
