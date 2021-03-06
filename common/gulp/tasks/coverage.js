var gulp = require('gulp');
var istanbul = require('gulp-istanbul');
var mocha = require('gulp-mocha');

gulp.task('coverage', function(cb) {
  gulp
    // We actually have to read the files here, streams aren't supported later.
    .src('src/**/*.js')
    .pipe(istanbul({includeUntested: true}))
    .on('finish', function() {
      gulp
        .src('test/**/*_spec.js', {read: false})
        .pipe(mocha({reporter: 'min'}))
        .pipe(istanbul.writeReports())
        .on('end', cb);
    });
});
