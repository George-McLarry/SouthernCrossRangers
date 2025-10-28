/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#2d5016',
        'primary-green-light': '#3a6b1f',
        'primary-green-dark': '#1e3310',
        'gold': '#d4af37',
        'gold-light': '#ffd700',
        'gold-dark': '#b8860b',
        'parchment': '#f4e4c1',
        'parchment-dark': '#e8d5b7',
        'parchment-border': '#c4a57b',
        'text-dark': '#3e2723',
        'text-medium': '#5d4037',
        'text-light': '#795548',
        'text-lighter': '#8d6e63',
        'off-white': '#faf8f3',
        'off-white-light': '#f5f1e8',
      },
      fontFamily: {
        'rye': ['Rye', 'Smokum', 'Vast Shadow', 'cursive'],
        'georgia': ['Georgia', 'Times New Roman', 'serif'],
        'body': ['Georgia', 'Palatino Linotype', 'Book Antiqua', 'serif'],
      },
      fontSize: {
        'responsive-title': 'clamp(2rem, 5vw, 4rem)',
      },
    },
  },
  plugins: [],
}
