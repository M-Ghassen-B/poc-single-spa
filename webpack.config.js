const path = require('path');

module.exports = {
  mode: 'development',
  entry: "./parent/root-config.js",
  output: {
  filename: 'root-config.js',

    path: path.resolve(__dirname, './dist')
  },
  devServer: {
    static: { directory: path.join(__dirname, 'dist')}, // Directory to serve files from
    compress: false,
    port: 3000, // Port number
    open: true, // Automatically open the browser
  }
};