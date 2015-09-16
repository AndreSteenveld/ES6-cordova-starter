
var c = configuration = module.exports = {

	babel: {
		options: {
			sourceMap: 'inline',
			modules: 'system',
			moduleIds: false,
			//compact: true,
			optional: [
				"es7.decorators",
				"es7.classProperties"
			]
		}
	},

	paths: {
		// HTML sources.
		'html': './src/*.html',
		// JS sources.
		'js': './src/js/**/*.js',
		// SASS sources.
		'sass': './src/scss/**/*.scss',
		// Image sources.
		'img': './src/img/*',
		// Sources folder.
		'src': './src',
		// Compiled CSS folder.
		'css': './application/www',
		// Distribution folder.
		'dist': './application/www',

		'test': './test'
	}

};

configuration.files = {
	html: "/**/*.html",
	js: "/**/*.js",
	sass: "/**/*.scss"
}
