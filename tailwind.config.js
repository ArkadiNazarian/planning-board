module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  prefix:"tw-",
  theme: {
    extend: {
      transformOrigin: {
        'custom-origin': '15% 73%',
      }
    },
    backgroundColor:{
      "custom_yellow":"#BD910B",
      "custom_red":"#D71E1E",
      "custom_purple":"#8833EC",
      "custom_pink":"#DD2285",
      "custom_white":"#F0F0F0"
    }
  },
  plugins: [],
}

