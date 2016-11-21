const webpack = require('webpack')

module.exports = {
  entry: ['babel-polyfill', './src'],
  output: {
    path: './public/dist',
    filename: 'bundle.js',
  },
  resolve: ['', '.js', '.jsx', '.json'],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      { test: /\.css$/, loader: 'style!css?modules' },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
}
