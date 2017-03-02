var path = require('path');

module.exports = {
	entry: './react_app/main.jsx',
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