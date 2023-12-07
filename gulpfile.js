const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// Task to concatenate and minify CSS files
gulp.task('concat-css', function () {
    return gulp.src('assets/css/**/*.css')
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('assets/'));
});

// Task to concatenate and minify JavaScript files
gulp.task('concat-js', function () {
    return gulp.src('assets/js/**/*.js')
        .pipe(uglify()) // Minify JavaScript files
        .pipe(concat('bundle.js')) // Concatenate files into bundle.js
        .pipe(gulp.dest('assets/')); // Output the minified and concatenated file
});

// Watch for changes in both CSS and JavaScript files and trigger the respective tasks
gulp.task('watch', function () {
    gulp.watch('assets/css/**/*.css', gulp.series('concat-css'));
    gulp.watch('assets/js/**/*.js', gulp.series('concat-js'));
});

// Default task to run both concat-css, concat-js, and watch
gulp.task('default', gulp.series('concat-css', 'concat-js', 'watch'));
