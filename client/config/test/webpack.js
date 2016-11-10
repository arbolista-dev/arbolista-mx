/*global require module __dirname*/

var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  module: {
    preLoaders: [
      {
        test: /\.test\.js$/,
        include: /(client|shared)/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ],
    loaders: [
      {
        test: /^((?!test\.js$).)*\.js$/,
        include: /(client|shared|server)/,
        exclude: /node_modules/,
        loader: 'babel'
      }, {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.DefinePlugin({
      'window.NODE_ENV': `"${process.env.NODE_ENV}"`,
      CAPTCHA_SITE_KEY: `"${process.env.CAPTCHA_SITE_KEY}"`,
      CAPTCHA_SECRET_KEY: `"${process.env.CAPTCHA_SECRET_KEY}"`,
      SENDGRID_TOKEN: `"${process.env.SENDGRID_TOKEN}"`,
      SENDGRID_TEMPLATE_ID: `"${process.env.SENDGRID_TEMPLATE_ID}"`,
    })
  ],
  resolve: {
    alias: {
      api: __dirname + `/../../api/fixture`,
      assets: __dirname + '/../../../server/assets',
      client: __dirname + '/../..',
      shared: __dirname + '/../../../shared'
    }
  }
};
