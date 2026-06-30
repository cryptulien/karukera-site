import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Seijaku — esthétique washi / encre. Calme dans la tempête.
        sei: {
          washi: "#FBFAF7", // fond crème (papier washi)
          rice: "#F4F0E8", // panneau / surface secondaire
          mist: "#E6E1D6", // filets, bordures
          stone: "#8A857D", // texte atténué
          sumi: "#57534E", // texte secondaire (encre diluée)
          ink: "#1A1A1A", // encre, texte principal
          vermilion: "#E0483D", // vermillon, accent
          gold: "#B08D57", // or sobre, accent secondaire
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', '"Shippori Mincho"', "Georgia", "serif"],
        sans: ['var(--font-sans)', '"Space Grotesk"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "4px",
        sm: "2px",
        md: "4px",
        lg: "6px",
      },
      maxWidth: {
        prose: "42rem",
      },
    },
  },
  plugins: [],
};

export default config;
