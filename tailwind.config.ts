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
        'rowdies': 'Rowdies, sans-serif',
        'kulim': 'Kulim Park, sans-serif'
      },
      colors: {

      },
      backgroundImage: {
       'main' : "url('/tavius_main.png')",
       'second' : "url('/tavius_second.png')",
       'before-after' : "url('/before-after.png')",
      },
      backgroundPosition: {
        'mobile-position': '-260px',
        'tablet-position': '160px',
        'desktop-position': '100%',
        'mobile-position-second': '-210px',
        'desktop-position-second': '-190px',
      }
    },
  },
  plugins: [],
};
export default config;
