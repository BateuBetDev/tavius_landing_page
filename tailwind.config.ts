import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rowdies': 'Rowdies, sans-serif'
      },
      colors: {

      },
      backgroundImage: {
       'main' : "url('/tavius_main.png')",
      },
      backgroundPosition: {
        'mobile-position': '-220px',
        'tablet-position': '160px',
        'desktop-position': '100%'
      }
    },
  },
  plugins: [],
};
export default config;
