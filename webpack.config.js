module.exports = {
  entry: './src/app.js',
  output: {
    path: './dist',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {test: /\.json$/, loader: 'json'}
    ]
  }
}