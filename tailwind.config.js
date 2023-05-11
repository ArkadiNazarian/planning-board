module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  prefix:"tw-",
  theme: {
    extend: {
      transformOrigin: {
        'custom-origin': '0% 100%',
      }
    },
  },
  plugins: [],
}

