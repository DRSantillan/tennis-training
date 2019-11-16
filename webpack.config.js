const path = require("path");
module.exports = {
  context: __dirname,
  entry: ["@babel/polyfill", "./src/js/app.js"],
  output: {
    path: path.resolve(__dirname, "dist/js/"),
    filename: "app.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  }
};
