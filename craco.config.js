module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')]
    }
  },

  babel: {
    loderOptions: {
      ignore: ['./node_modules/mapbox-gl/dist/mapbox-gl.js']
    }
  }
};

