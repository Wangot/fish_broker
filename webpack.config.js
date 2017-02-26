var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  context: path.join(__dirname, "/assets/javascript"),
  entry: "./app/main.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        }
      }
    ]
  },
  output: {
    path: __dirname + "/assets/javascript/",
    filename: "main.min.js",
    publicPath: 'http://localhost:8080/javascript/',
  },
  devServer: {
    inline: true,
    port: 8080
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};