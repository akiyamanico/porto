/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        megrim: ['Megrim', 'cursive'],
        playfair: ['Playfair Display', 'serif'],
        monaco: ['Monaco', 'monospace'],
      },
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#F9F5EE',
          200: '#F5F0EB',
          300: '#EDE5DB',
          400: '#E0D5C7',
          500: '#D4C8B8',
        },
        vermillion: {
          DEFAULT: '#C43A31',
          light: '#D94F46',
          dark: '#A82E27',
          50: '#FDECEA',
        },
        gallery: {
          dark: '#1A1A1A',
          muted: '#6B6B6B',
          border: '#D9D0C5',
          gold: '#C4A35A',
        },
      },
      fontSize: {
        'display-xl': ['clamp(4rem, 10vw, 9rem)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1', letterSpacing: '-0.01em' }],
      },
    },
  },
  plugins: [],
};