module.exports = {
  plugins: [require('autoprefixer')({
    'overrideBrowserslist': [
      '> 0.25%',
      'last 2 versions'
    ] 
  })]
};