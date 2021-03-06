const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    quiet: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.(scss|css)$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              prependData: `
                @import "styles/breakpoints.scss";
                @import "styles/colors.scss";
                @import "styles/font-sizes.scss";
              `
            }
          }
        ]
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              outputPath: "img"
            }
          },
          {
            loader: "image-webpack-loader",
            options: {
              webp: {
                quality: 75
              }
            }
          }
        ]
      },
      {
        test: /\.ttf/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "fonts/"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
      components: path.resolve(__dirname, "src/components/"),
      styles: path.resolve(__dirname, "src/styles"),
      mixins: path.resolve(__dirname, "src/mixins"),
      images: path.resolve(__dirname, "src/img")
    },
    extensions: ["*", ".js", ".vue", ".json"]
  },
  plugins: [new VueLoaderPlugin(), new FriendlyErrorsWebpackPlugin()]
};
