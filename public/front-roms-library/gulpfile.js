/*jshint -W097, node:true*/
'use strict';

const gulp = require( 'gulp' );
const sass = require( 'gulp-sass' );
const autoprefixer = require( 'gulp-autoprefixer' );


function styles() {
	return gulp
		.src( '.sass/**/*.scss' )
		.pipe( sass().on( 'error', sass.logError ) )
		.pipe( autoprefixer() )
		.pipe(gulp.dest( '.css'))
}

function watch() {
	gulp.watch( `./sass/**/*.scss`, gulp.series( styles ) );
}

exports.styles = styles;
exports.watch = watch;

exports.default = gulp.series( styles, watch );
