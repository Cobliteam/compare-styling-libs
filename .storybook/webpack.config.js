const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader?importLoaders=1&modules=true&localIdentName=[local]__[name]__[hash:base64:8]", "sass-loader"],
        include: path.resolve(__dirname, "../")
      }
    ]
  }
};
