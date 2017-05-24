const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './assets/javascripts/application.js',
    './assets/stylesheets/application.scss'
  ],
  output: {
    filename: 'js/bundle.js',
    path: __dirname + '/public/',
    publicPath: '/public/'
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/i,
        //exclude: /(node_modules|bower_components)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }, {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  plugins: [new ExtractTextPlugin({filename: '/css/bundle.css', allChunks: true})]
};
