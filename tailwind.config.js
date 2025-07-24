/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        surface: 'var(--color-surface)',
        text: 'var(--color-text)',
      },
      fontFamily: {
        'syne': ['var(--font-syne)', 'sans-serif'],
        'dm-sans': ['var(--font-dm-sans)', 'sans-serif'],
        'space-grotesk': ['var(--font-space-grotesk)', 'sans-serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
        'geist-mono': ['var(--font-geist-mono)', 'monospace'],
      },
      backgroundImage: {
        'hero-gradient-light': 'linear-gradient(135deg, #e0e7ff 0%, #e0e7ef 100%)',
        'hero-gradient-dark': 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        'section-wave-light': 'url("/wave-light.svg")',
        'section-wave-dark': 'url("/wave-dark.svg")',
      },
    },
  },
  plugins: [],
}; 