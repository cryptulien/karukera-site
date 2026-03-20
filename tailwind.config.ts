import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        karu: {
          cream: '#FBF8F3',
          sand: '#F0EBE3',
          ocean: '#0E7C9A',
          lagoon: '#48CAE4',
          sky: '#3BB8E0',
          gold: '#C4956A',
          palm: '#4A8B3F',
          navy: '#1C2D48',
          ink: '#0F1A2E',
          slate: '#6B7B8D',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
