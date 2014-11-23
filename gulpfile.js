var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
	gulp.src('./src/scss/**/*.scss')
		.pipe(sass({
			includePaths: require('node-neat').includePaths
		}))
		.pipe(gulp.dest('./public/css/'));
});

gulp.task('default', ['sass']);