import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#0f68ad',
          secondary: '#30918d',
          accent: '#687ef2',
          neutral: '#312e33',
          'base-100': '#ffffff',
          info: '#0000ff',
          success: '#00ff00',
          warning: '#ffff00',
          error: '#ff0000',
        },
      },
    ],
    logs: false,
  },
  plugins: [daisyui],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppins', 'sans-serif'],
      },
    },
  },
} satisfies Config; 