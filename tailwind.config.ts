import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        isle: {
          salt: "#E6EBE6",
          foam: "#D2DDD8",
          mist: "#B8C6C0",
          stone: "#4E5F59",
          tide: "#2F3F3B",
          ink: "#142228",
          lagoon: "#184A58",
          canopy: "#1E2E24",
          flame: "#C43A14",
          sand: "#E4D4B4",
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', "Georgia", "serif"],
        sans: ['var(--font-sans)', "system-ui", "sans-serif"],
        text: ['var(--font-text)', "Georgia", "serif"],
      },
      borderRadius: {
        DEFAULT: "4px",
        sm: "2px",
        md: "6px",
        lg: "12px",
      },
      maxWidth: {
        prose: "42rem",
      },
    },
  },
  plugins: [],
};

export default config;
