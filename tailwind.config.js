module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  prefix:"tw-",
  theme: {
    extend: {
      transformOrigin: {
        'custom-origin': '10% 100%',
      }
    },
  },
  plugins: [],
}

