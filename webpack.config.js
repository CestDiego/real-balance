module.exports = {
  entry: {
    javascript: "./script.js"
  },

  output: {
    path: __dirname + "/dist",
    filename: "script.js"
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  },
  resolve: {
    modulesDirectories: [
      'node_modules',
    ],
    extensions: ['.js', '']
  }
}
