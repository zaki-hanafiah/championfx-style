var gulp          = require('gulp');
var deploy        = require('gulp-gh-pages');
var sass          = require('gulp-sass');
var cleanCSS      = require('gulp-clean-css');
var gulpStylelint = require('gulp-stylelint');

/**
 * Push build to gh-pages
 */
// gulp.task('deploy', function () {
//   return gulp.src("./dist/**/*")
//     .pipe(deploy())
// });

/**
 * Compile sass to css
 */
gulp.task('sass', function () {
  return gulp.src('./_sass/all.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

/**
 * Lint css
 */
gulp.task('lint-css', function () {
  return gulp.src('./_sass/*.scss')
    .pipe(gulpStylelint({
      reporters: [
        { 
          formatter: 'string', 
          console: true
        }
      ]
    }));
})
