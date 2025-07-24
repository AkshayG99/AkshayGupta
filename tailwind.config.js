module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0a192f',
        'navy-light': '#112240',
        highlight: '#233554',
        accent: '#64ffda',
        'text-primary': '#ccd6f6',
        'text-secondary': '#8892b0',
      },
      fontFamily: {
        sans: ['Inter', 'Calibre', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        accent: '0 0 20px 0 #64ffda',
      },
      spacing: {
        80: '20rem',
      },
      fontSize: {
        'hero': 'clamp(2.5rem, 8vw, 5rem)',
        'section': 'clamp(2rem, 6vw, 3rem)',
      },
    },
  },
  plugins: [],
}; 