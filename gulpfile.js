var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['sass', 'watch'])

var sassPath = './src/assets/sass/Main.scss';

gulp.task('sass', function() {
    return gulp.src(sassPath)
    	.pipe(sourcemaps.init())
		.pipe(concat('style.css'))
		.pipe(sass().on('error', sass.logError))
		.pipe(cssmin())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./dist/css/'));
});

gulp.task('watch', function() {
	gulp.watch('./src/assets/sass/**', ['sass'])
})
