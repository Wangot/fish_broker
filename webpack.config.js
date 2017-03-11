var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		'script-loader!jquery/dist/jquery.min.js',
		'script-loader!foundation-sites/dist/js/foundation.min.js',
		'./react_app/main.jsx',
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	output: {
		path: __dirname,
		filename: './public/js/bundle.js'
	},
	resolve: {
		alias: {
			//Greeter: path.resolve(__dirname, './assets/js/app/components/Greeter.jsx')
		},
		extensions: ['.js', '.jsx']
	},
	module: {
		loaders: [
		{
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015', 'latest']
			},
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/
		}
		]
	}
}