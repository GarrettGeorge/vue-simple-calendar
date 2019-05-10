const path = require("path")
const merge = require("webpack-merge")
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin")
const { VueLoaderPlugin } = require('vue-loader')

const assetsPath = function (_path) {
  return path.posix.join('.', _path)
}

var commonConfig = {
	mode: "production",
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ["vue-style-loader", "css-loader", "postcss-loader"],
			},
		],
	},
	plugins: [
		new VueLoaderPlugin(),
		// extract css into its own file
    new ExtractTextPlugin({
      filename: assetsPath('css/[name].[contenthash].css'),
      // Setting the following option to `false` will not extract CSS from codesplit chunks.
      // Their CSS will instead be inserted dynamically with style-loader when the codesplit chunk has been loaded by webpack.
      // It's currently set to `true` because we are seeing that sourcemaps are included in the codesplit bundle as well when it's `false`, 
      // increasing file size: https://github.com/vuejs-templates/webpack/issues/1110
      allChunks: true,
    }),
		// copy custom static assets
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname + "/static"),
				to: path.resolve(__dirname + "/dist/static"),
				ignore: [".*"],
			},
		])
	],
}

module.exports = [
	// Config 1: For browser environment
	merge(commonConfig, {
		entry: path.resolve(__dirname + "/src/plugin.js"),
		output: {
			filename: "calendar-month.min.js",
			libraryTarget: "window",
			library: "CalendarView",
		},
	}),

	// Config 2: For Node-based development environments
	merge(commonConfig, {
		entry: path.resolve(__dirname + "/src/CalendarView.vue"),
		output: {
			filename: "vue-simple-calendar.js",
			libraryTarget: "umd",
			library: "CalendarView",
			umdNamedDefine: true,
		},
	}),

	// Config 3: Separate export of the mixin for external node use
	merge(commonConfig, {
		entry: path.resolve(__dirname + "/src/CalendarMathMixin.js"),
		output: {
			filename: "calendar-math-mixin.js",
			libraryTarget: "umd",
			library: "CalendarMathMixin",
			umdNamedDefine: true,
		},
	}),
]
