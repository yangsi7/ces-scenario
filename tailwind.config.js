module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif']
        },
        colors: {
          primary: '#2563eb',
          secondary: '#475569',
          accent: '#38bdf8',
        }
      },
    },
    plugins: [],
  }
  