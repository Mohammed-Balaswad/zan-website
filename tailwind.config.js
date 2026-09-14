/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1F33',
          dark: '#061421',
          light: '#132B45',
          soft: '#1E3A5B',
        },
        gold: {
          DEFAULT: '#C6A15B',
          light: '#D8BD86',
          dark: '#B08B45',
          glow: 'rgba(198, 161, 91, 0.15)',
        },
        surface: {
          white: '#FFFFFF',
          offwhite: '#F7F6F2',
          muted: '#EBF0F5',
          dark: '#061421',
        },
        text: {
          dark: '#17212B',
          muted: '#66717C',
          light: '#9CA3AF',
        },
        border: {
          DEFAULT: '#E5E7EB',
          dark: 'rgba(255, 255, 255, 0.1)',
        },
      },
      fontFamily: {
        arabic: ['Tajawal', 'sans-serif'],
        latin: ['Manrope', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      borderRadius: {
        card: '16px',
        container: '12px',
        btn: '8px',
        sm: '6px',
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(11, 31, 51, 0.08)',
        subtle: '0 4px 20px -2px rgba(11, 31, 51, 0.05)',
        elevated: '0 20px 40px -15px rgba(6, 20, 33, 0.25)',
      },
    },
  },
  plugins: [],
};
