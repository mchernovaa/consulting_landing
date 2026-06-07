import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#0E2B24",
          soft: "#14352D"
        },
        card: {
          DEFAULT: "#14352D"
        },
        ink: {
          DEFAULT: "#F5F1E8",
          muted: "rgba(245, 241, 232, 0.72)"
        },
        terracotta: {
          DEFAULT: "#9E3D2F"
        },
        burgundy: {
          DEFAULT: "#9E3D2F"
        },
        forest: {
          DEFAULT: "#1A4538"
        },
        amberRetro: {
          DEFAULT: "#C6A64B"
        },
        divider: "rgba(245, 241, 232, 0.14)"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 40px rgba(0, 0, 0, 0.28)",
        editorial: "0 24px 60px rgba(0, 0, 0, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
