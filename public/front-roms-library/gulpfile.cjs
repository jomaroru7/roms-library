/*jshint -W097, node:true*/

const gulp = require( 'gulp' );
const sass = require( 'gulp-sass' )(require('sass'));


function styles() {
	return gulp
		.src( './src/**/*.scss' )
		.pipe( sass().on( 'error', sass.logError ) )
		.pipe(gulp.dest( './src'))
}

function watch() {
	gulp.watch( `./src/**/*.scss`, gulp.series( styles ) );
}

exports.styles = styles;
exports.watch = watch;

exports.default = gulp.series( styles, watch );
