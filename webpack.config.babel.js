import webpack from 'webpack'

export default {
  entry: './src',
  output: {
    path: './public/dist',
    filename: 'bundle.js',
  },
  resolve: ['', '.js', '.json'],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      { test: /\.css$/, loader: 'style!css?modules' }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
}
