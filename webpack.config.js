const path = require('path');
const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	plugins: [
		//调用之前先清除dist
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			title: 'Resume',
			template: './src/index.html',
			inject: true,
			hase: true
		})
	],
	module: {
		rules: [{
				//css预处理scss
				test: /\.scss$/,
				use: [{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								require('autoprefixer')({
									overrideBrowserslist: ['>1%', 'last 10 versions']
								})
							]
						}
					},
					{
						loader: 'sass-loader'
					}
				]
			},
			{
				//jquery引用
				test: require.resolve('jquery'),
				use: [{
						loader: 'expose-loader',
						options: 'jquery'
					},
					{
						loader: 'expose-loader',
						options: '$'
					}
				]
			},
			{
				//ES6babel
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				//图片加载loader（1）
				test: /\.(png|jpg|gif)$/i,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 1,
						//图片文件输出的文件夹
						name: 'images/[name].[ext]'
					}
				}]
			},
			{
				//标签加载loader（2）
				test: /\.html$/,
				use: ['html-withimg-loader']
			}
		]
	},
	devServer: {
		contentBase: './src',
		host: 'localhost',
		port: 9090,
		watchContentBase: true
	}
};