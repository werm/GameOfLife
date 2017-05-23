/**
* Gulpfile to make my life easier.
*/

var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var connect = require('gulp-connect');
var del = require('del');

gulp.task('es6', function() {
  browserify({
      entries: 'src/index.js',
      debug: true,
      standalone: 'GameOfLife'
    })
    .transform(babelify)
    .on('error', gutil.log)
    .bundle()
    .on('error', gutil.log)
    .pipe(source('bundle.js'))
    .pipe(connect.reload())
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
  return del(['dist']);
});

gulp.task('serve',function() {
  return connect.server({
    port: 1337,
    livereload: {
      port: 35728
    }
  });
});

gulp.task('watch',function() {
  gulp.watch('src/**/*.js', ['clean', 'es6'])
});
 
gulp.task('default', ['serve', 'watch']);
