const ExtractTextPlugin = require("extract-text-webpack-plugin");

var path = require('path');

module.exports = {
  entry: './src/index.js',//Can I have a comment here?
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },   
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
};