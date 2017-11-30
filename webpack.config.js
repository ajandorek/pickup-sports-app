module.exports = {
  entry: "./app/app.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          plugins: ["transform-decorators-legacy"],
          presets: ["latest", "react", "stage-0"]
        },
      }, {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.(?:png|jpg|svg)$/,
        loader: 'url-loader',
        query: {
            // Inline images smaller than 10kb as data URIs
            limit: 400000
        }
    }
    ]
  },
  devtool: "eval-source-map"
};
