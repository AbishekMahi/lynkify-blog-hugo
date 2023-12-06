const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('concat-css', function () {
    return gulp.src('assets/css/**/*.css')
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('assets/'));
});

gulp.task('watch', function () {
    gulp.watch('css/**/*.css', gulp.series('concat-css'));
});

gulp.task('default', gulp.series('concat-css', 'watch'));