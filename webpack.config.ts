const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


  module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.tsx' }
,
devtool: 'inline-source-map',
devServer: {
        contentBase: './build',
      },
     plugins: [
        new CleanWebpackPlugin(),
        new HtmlPlugin({
          title: "Renee's Boilerplate",
          template: './index.html'
      })
         ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'build'),
    },
  module: {
   rules: [
    {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: [
                  'file-loader',
                ],
              },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  };