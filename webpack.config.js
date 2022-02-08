const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "bundle.js",
	},
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			use: 'babel-loader',
			exclude: /node_modules/,
		},
		{
			test: /\.(scss|css)$/,
			use: ["style-loader", "css-loader"],
		}],
		rules: [{
			test: /\.less$/,
			use: [{
					loader: 'style-loader',
				}, {
					loader: 'css-loader', // translates CSS into CommonJS
				}, {
					loader: 'less-loader', // compiles Less to CSS
					options: {
						lessOptions: { // If you are using less-loader@5 please spread the lessOptions to options directly
							modifyVars: {
								'primary-color': '#1DA57A',
								'layout-header-background': '#1DA57A',
							},
							javascriptEnabled: true,
						},
					},
				}]
		}],	
	},
	devServer: {
		hot: "only",
		port: 3000
	},
	resolve: {
		modules: [path.join(__dirname, '/'), 'node_modules'],
		extensions: ['.js', '.jsx'],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
}