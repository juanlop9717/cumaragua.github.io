const gulp = require('gulp');
const image = require('gulp-image');
 
gulp.task('image', function () {
  gulp.src('./assets/img/*')
    .pipe(image())
    .pipe(gulp.dest('./dist/img'));
});
 
gulp.task('default', ['image']);