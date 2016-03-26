var HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    path              = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'scripts', 'entry.js'),

  output: {
    path: './dist',
    filename: 'application.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/templates/index.jade'
    }),
    new ExtractTextPlugin("stylesheets/application.css")
  ],

  module: {
    loaders: [
      {
        test: /css$/, loader: ExtractTextPlugin.extract('style', 'css')
      },
      {
        test: /(png|jpg)$/, loaders: ['file?name=/images/[name].[hash].[ext]']
      },
      {
        test: /jade$/, loaders: ['html', 'jade-html'] 
      }
    ]
  },

  devServer: {
    host: "0.0.0.0",
    port: "8000",
    contentBase: './dist',
    hot: true,
    historyApiFallback: true
  }
};
