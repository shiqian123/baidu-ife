var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('connect', function() {
  console.log(__dirname)
  connect.server({
    root: __dirname,
    livereload: true
  });
});

gulp.task('html', function () {
  console.log('js/*.js')
  gulp.src('*.html')
    .pipe(connect.reload());
});
gulp.task('js', function () {
  console.log('js')
  gulp.src('js/*.js')
    .pipe(connect.reload());
});
gulp.task('watch', function () {
  console.log(2323)
  gulp.watch(['*.html'], ['html']);
  gulp.watch(['js/*.js'], ['js']);
});
gulp.task('default', ['connect', 'watch','js']);