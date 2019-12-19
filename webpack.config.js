const path = require("path");

module.exports = {
  mode: "development", // TODO need to make it dynamic
  entry: path.resolve(__dirname, "src", "app"), // directly search for the index.jsx file
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"] // supported file to transpile by webpack
  },
  devServer: {
    historyApiFallback: true, // For react router
    port: 3000
  },
  module: {
    // Defines how our app to be compiled
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
