var gulp = require('gulp'),
    rimraf = require('gulp-rimraf');

gulp.task('clean', function() {
  return gulp.src('./build', {
    read: false
  })
  .pipe(rimraf());
});
