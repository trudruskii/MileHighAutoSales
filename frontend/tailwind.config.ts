import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('../../../public/images/carslineup1.jpg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        text: 'text 2s ease infinite',
        pulseText: 'pulseText 4s ease-in-out infinite', // New animation
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        pulseText: { // New keyframes for pulsing text
          '0%, 100%': { color: 'rgb(220 38 38)' }, // Red
          '50%': { color: 'rgb(255 255 255)' },   // White
          '30%': { color: 'rgb(220 38 38)' }, // Red
          '100%': { color: 'rgb(56,55,55)'},
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
} satisfies Config;
