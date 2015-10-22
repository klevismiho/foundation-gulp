var gulp = require('gulp'),
	sass = require('gulp-sass'),
	rimraf   = require('rimraf'),
	sequence = require('run-sequence');


// Cleans the build directory
gulp.task('clean', function(cb) {
	rimraf('./build', cb);
});

gulp.task('copy-motion-ui', function() {
  return gulp.src('bower_components/motion-ui/*')
    .pipe(gulp.dest('build/motion-ui'))
  ;
});

gulp.task('build-css', function() {
	gulp.src('scss/app.scss')
	.pipe(sass({ includePaths : ['bower_components/foundation/scss'], outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(gulp.dest('css'));
});

gulp.task('build', function(cb) {
  sequence('clean', ['copy-motion-ui'], cb);
});

gulp.task('default', function() {
	gulp.start('build');
	gulp.watch('scss/*.scss', ['build-css']);
})