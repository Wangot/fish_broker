var path = require('path');

module.exports = {
	entry: './assets/js/app/main.jsx',
	output: {
		path: __dirname,
		filename: './assets/js/bundle.js'
	},
	resolve: {
		alias: {
			Greeter: path.resolve(__dirname, './assets/js/app/components/Greeter.jsx'),
			GreeterMessage: path.resolve(__dirname, './assets/js/app/components/GreeterMessage.jsx'),
			GreeterForm: path.resolve(__dirname, './assets/js/app/components/GreeterForm.jsx')
		},
		extensions: ['.js', '.jsx']
	},
	module: {
		loaders: [
		{
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015']
			},
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/
		}
		]
	}
}