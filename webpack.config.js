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
		})/*,
		new webpack.DefinePlugin({
	      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
	    }),
	    new webpack.optimize.DedupePlugin(),
	    // new webpack.optimize.OccurenceOrderPlugin(),
	    new webpack.optimize.UglifyJsPlugin({
	      compress: { warnings: false },
	      mangle: true,
	      sourcemap: false,
	      beautify: false,
	      dead_code: true
	    })*/
	],
	output: {
		path: __dirname,
		filename: './public/js/bundle.js'
	},
	resolve: {
		alias: {
			ModalHelper: path.resolve(__dirname, './react_app/components/common/ModalHelper.jsx')
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
		},
		{
            // loader: "sass-loader",
            loaders: [ 'style-loader', 'css-loader', 'sass-loader' ],
            // test: /\.scss$/,
            test: /\.scss$/,
            include: path.resolve(__dirname, '/node_modules/foundation-sites/scss')
               
        }

		]
	}
}