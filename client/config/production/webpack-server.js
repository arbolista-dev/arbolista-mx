var webpack = require("./webpack");
var nodeExternals = require('webpack-node-externals');

webpack.entry= {
	server:__dirname + '/../../../run',
}
webpack.output.path = __dirname + '/../../../build/production/server';
webpack.target ="node";
webpack.externals= [nodeExternals()];
webpack.module.loaders.push( { test: /\.ejs$/, loader: 'ejs-loader?variable=data' });
webpack.resolve.alias.server= __dirname + '/../../../server';
webpack.node= {
  __dirname: false
}
module.exports = webpack;