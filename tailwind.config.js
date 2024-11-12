/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        sixtyfour: ['Sixtyfour Convergence', 'sans-serif'],
        titillium: ['Titillium Web', 'sans-serif'],
        IBMPlex: ['IBM Plex', 'Seri'],
      },
      // Add custom class for webContainer
      spacing: {
        '1300': '1300px',  // Adds custom spacing to be used for max-width
      },
      // Custom utilities to handle `.webContainer`
      // You can use this in your HTML for custom width and behavior
      maxWidth: {
        'webContainer': '1300px', // Custom max-width for the class
      },
      colors: {
        'custome-blue-dark': '#002060',  
        'custome-blue-light': '#4567AD',  
        'custome-blue-light-bg': '#EEF3F9',  
        'custome-yellow': '#FFC632',  
        'custome-gray': '#707070',  
        'custome-dark-pink': '#E96D8B',  
        'custome-light-pink': '#FFC8D4',  
        'custome-dark-green': '#41B79D',  
        'custome-light-green': '#D7FFF6', 
        'custome-light-blue': '#6ABBD7',  
        'custome-light-purple': '#D7D7FF',  
      },
    },
  },
  plugins: [],
}
