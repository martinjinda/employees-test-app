var webpack = require('webpack');
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var NpmInstallPlugin = require('npm-install-webpack-plugin');
var autoprefixer = require('autoprefixer');

const TARGET = process.env.npm_lifecycle_event;

var common = {
	cache: true,
	debug: true,
	entry: './src/scripts/index.jsx',
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	output: {
		filename: 'index.js',
		sourceMapFilename: '[file].map'
	},
	module: {
		loaders: [{
			test: /\.js[x]?$/,
			loaders: ['babel-loader?presets[]=es2015&presets[]=react'],
			exclude: /(node_modules|bower_components)/
		}, {
			test: /\.css$/,
			loaders: ['style', 'css']
		}, {
			test: /\.scss$/,
			loaders: ['style', 'css', 'postcss', 'sass']
		}, {
			test: /\.less$/,
			loaders: ['style', 'css', 'less']
		}, {
			test: /\.woff$/,
			loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"
		}, {
			test: /\.woff2$/,
			loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]"
		}, {
			test: /\.(eot|ttf|svg|gif|png)$/,
			loader: "file-loader"
		}]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		})
	],
	postcss: function () {
		return [autoprefixer({
			browsers: ['last 3 versions']
		})];
	}
};

if (TARGET === 'dev' || !TARGET) {
	module.exports = merge(common, {
		devtool: 'eval-source-map',
		devServer: {
			historyApiFallback: true
		},
		output: {
			publicPath: 'http://localhost:8090/assets'
		},
		plugins: [
			new NpmInstallPlugin({
				save: true // --save
			})
		]
	});
}

if (TARGET === 'build') {
	module.exports = merge(common, {
		devtool: 'source-map',
		output: {
			path: './dist'
		},
		plugins: [
			new HtmlWebpackPlugin({
				title: 'Cisco UI Test',
				template: 'index-template.ejs'
			})
		]
	});
}
