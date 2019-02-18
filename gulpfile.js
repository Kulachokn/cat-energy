'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var gulpResolveUrl = require('gulp-resolve-url');

sass.compiler = require('node-sass');

gulp.task('sass', style);

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', style);
});

function style() {
    return gulp.src('./sass/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpResolveUrl())
        .pipe(concat('style.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'));
}