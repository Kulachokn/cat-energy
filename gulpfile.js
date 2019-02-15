'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

sass.compiler = require('node-sass');

gulp.task('sass', style);

gulp.task('sass:watch', function () {
    gulp.watch('./scss/**/*.scss', style);
});

function style() {
    return gulp.src('./scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'));
}