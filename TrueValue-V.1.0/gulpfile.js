/*This file includes all the gulp tasks that are required for the web site.*/
var gulp = require('gulp'),
	bundle = require('gulp-bundle-assets'),
    sass = require('gulp-sass');

/*gulp task to bundle all the necessary css files*/
gulp.task('bundle-css', function() {
  return gulp.src('./bundle.css.config.js')
    .pipe(bundle())
    .pipe(bundle.results('./'))
    .pipe(gulp.dest('./www/css/bundle/'));
});

/*gulp task to bundle all the necessary js files*/
gulp.task('bundle-js', function() {
  return gulp.src('./bundle.js.config.js')
    .pipe(bundle())
    .pipe(bundle.results('./'))
    .pipe(gulp.dest('./www/js/bundle/'));
});

/*gulp task to compile all your scss files to css*/
gulp.task('generate-css', function () {
  return gulp.src('./www/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./www/css/'));
});
 
/*gulp task to render css files every time a modification is performed in scss files*/ 
gulp.task('generate-css:watch', function () {
  gulp.watch('./www/scss/**/*.scss', ['generate-css', 'bundle-css']);
});

/*default gulp task*/
gulp.task('default', ['generate-css', 'bundle-css', 'bundle-js']);