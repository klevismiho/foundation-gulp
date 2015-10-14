var gulp = require('gulp'),
	sass = require('gulp-sass');


gulp.task('build-css', function() {
	gulp.src('scss/app.scss')
	.pipe(sass({ includePaths : ['bower_components/foundation/scss'], outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(gulp.dest('css'));
});


gulp.task('watch', function() {
	gulp.watch('scss/*.scss', ['build-css']);
})