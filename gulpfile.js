var gulp          = require('gulp');
var gulpStylelint = require('gulp-stylelint');

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
