var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require("gulp-babel");

gulp.task('default',function() {
  gulp.watch('./dev/sass/**/*.scss',['styles']);
  gulp.watch('./dev/es6/js.js',['js']);
});

gulp.task('styles', function() {
  gulp.src('./dev/sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./dist/css/'));
});

gulp.task("js", function () {
  return gulp.src('./dev/es6/js.js')
    .pipe(babel())
    .pipe(gulp.dest('dist/js/'));
});