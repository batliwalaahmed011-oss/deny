import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF7F3",
        charcoal: "#1E1B19",
        blush: {
          DEFAULT: "#D9A8A0",
          light: "#F2E1DD",
          dark: "#8C4A44",
        },
        gold: {
          DEFAULT: "#B8934E",
          light: "#E4CFA0",
          dark: "#8A6B34",
        },
        sage: "#8A9A82",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px -15px rgba(30, 27, 25, 0.15)",
        glow: "0 0 40px rgba(184, 147, 78, 0.25)",
        card: "0 10px 30px -10px rgba(30, 27, 25, 0.12)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(135deg, #FAF7F3 0%, #F2E1DD 45%, #E4CFA0 100%)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
