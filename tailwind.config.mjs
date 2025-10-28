/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'greiff-dark': '#1a1a1a',
        'greiff-gray': '#4a4a4a',
        'greiff-light': '#f8f8f8',
        'greiff-accent': '#6b7280',
        'greiff-sepia': '#8b7355',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
