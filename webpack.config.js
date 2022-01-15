const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
  devServer: {
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ['**/*.html'],
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
