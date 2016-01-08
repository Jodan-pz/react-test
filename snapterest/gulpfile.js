var gulp = require('gulp');
var broserify = require('browserify');
var babelify = require("babelify");
var source = require('vinyl-source-stream');
var del = require('del');

gulp.task('clean', function () {
    return del(['./build/*.js']);
})

gulp.task('default', ['clean'], function () {
    return broserify('./source/app.jsx')
        .transform(babelify.configure({ presets: ["react"] }))
        .bundle()
        .pipe(source('snapterest.js'))
        .pipe(gulp.dest('./build/'));
});