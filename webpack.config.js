const path = require('path');
const merge = require('webpack-merge');

const webpack = require('webpack');
const cleanWebpack = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');
const nyanCat = require('nyan-progress-webpack-plugin');

const package = require('./package.json');

const PATHS = {
	build: path.join(__dirname, 'build'),
	app: path.join(__dirname, 'app'),
	style: path.join(__dirname, 'app', 'assets', 'style.css')
}

function extractBundle(options) {
  const entry = {};
  entry[options.name] = options.entries;
  return {
    entry: entry,
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        names: [options.name, 'manifest'],
      })
    ]
  };
}

const COMMON = merge({
	entry: {
		app: PATHS.app,
		style: PATHS.style
	},
	output: {
		path: PATHS.build
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader'
			},
			{
				test: /\.(js|jsx)$/,
				use: 'eslint-loader',
				enforce: 'pre'
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]

			}
		]
	},
	plugins: [
			new HtmlWebpackPlugin({
				title: 'Walking and Talking',
				template: HtmlWebpackTemplate,
				inject: false,
				appMountId: 'root',
			})
		]
},
 extractBundle({
			name: 'vendor',
			entries: Object.keys(package.dependencies)
		})
)

module.exports = function(env) {
	console.log(`Building in environment: ${env}`);

	switch(env) {
		case 'prod':
		return merge(COMMON, {
			output: {
				filename: '[name].[chunkhash:8].js'
			},
			plugins: [
			  new cleanWebpack([PATHS.build], { root: process.cwd() })
			]
		});
		case 'dev':
		return merge(COMMON, {
			output: {
				filename: '[name].js'
			},
			devtool: 'eval-source-map',
			devServer: {
				stats: 'minimal',
				hot: true,
				inline: true
			},
			plugins: [
				new webpack.HotModuleReplacementPlugin({}),
				new nyanCat()
			]
		});
	}
};