/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#1C1E22',
          light: '#23262B',
        },
        paper: {
          DEFAULT: '#F3F1EC',
          dim: '#EAE6DC',
        },
        amber: {
          DEFAULT: '#E8A33D',
          dark: '#B97A1F',
        },
        teal: {
          DEFAULT: '#3E8E8C',
          dark: '#2B6B69',
        },
        ink: {
          light: '#1C1E22',
          dark: '#EDEAE2',
        },
      },
      fontFamily: {
        display: ['"IBM Plex Sans KR"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}

