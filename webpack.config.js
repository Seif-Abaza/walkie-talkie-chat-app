const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');

const PATHS = {
	build: path.join(__dirname, 'build'),
	app: path.join(__dirname, 'app')
}

module.exports = {
	entry: {
		app: PATHS.app
	},
	output: {
		path: PATHS.build,
		filename: '[name].[chunkhash:8].js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'TimesheetR',
			template: HtmlWebpackTemplate,
			inject: false
		})
	]
};