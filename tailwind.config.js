module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': {
          400: '#60a5fa',
          600: '#2563eb',
          700: '#1d4ed8',
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}