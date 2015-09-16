var gulp = require('gulp');
var karma = require('karma').server;

var KARMA_CONF_FILE = __dirname + "/../karma.conf.js";

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
	karma.start({
		configFile: KARMA_CONF_FILE,
		singleRun: true
	}, function(e) {
			done();
	});
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
	karma.start({
		configFile: KARMA_CONF_FILE
	}, function(e) {
		done();
	});
});

/**
 * Run test once with code coverage and exit
 */
gulp.task('cover', function (done) {
	throw new Error( "Nope!" );
	karma.start({
		configFile: KARMA_CONF_FILE,
		singleRun: true,
		reporters: ['coverage'],
		preprocessors: {
			'test/**/*.js': ['babel'],
			'src/**/*.js': ['babel', 'coverage']
		},
		coverageReporter: {
			type: 'html',
			dir: 'build/reports/coverage'
		}
	}, function (e) {
		done();
	});
});
