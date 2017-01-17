const path = require('path');
const merge = require('webpack-merge');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');

const PATHS = {
	build: path.join(__dirname, 'build'),
	app: path.join(__dirname, 'app')
}

const COMMON = {
	entry: {
		app: PATHS.app
	},
	output: {
		path: PATHS.build
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader'
			}
		]
	},
	plugins: [
			new HtmlWebpackPlugin({
				title: 'TimesheetR',
				template: HtmlWebpackTemplate,
				inject: false,
				appMountId: 'root',
			})
		]
}

module.exports = function(env) {
	console.log(`Building in environment: ${env}`);

	switch(env) {
		case 'prod':
		return merge(COMMON, {
			output: {
				filename: '[name].[chunkhash:8].js'
			}
		});
		case 'dev':
		return merge(COMMON, {
			output: {
				filename: '[name].js'
			},
			devServer: {
				stats: 'minimal',
				hot: true,
				inline: true
			},
			plugins: [
				new webpack.HotModuleReplacementPlugin({})
			]
		});
	}
};