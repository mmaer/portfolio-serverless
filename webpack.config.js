const path = require('path');

module.exports = {
  // where webpack will start looking for the code
  entry: './js/main.js',
  // where webpack will output when it's done
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // tell webpack HOW to package js, depedencies etc.
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      // which loader(plugin) to use to know how to build the code
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['react']
        }
      }
    }]
  }
}