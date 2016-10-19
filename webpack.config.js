module.exports = {
  entry: './src/app.js',
  output: {
    path: './dist',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {test: /\.json$/, loader: 'json'},
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  }
}