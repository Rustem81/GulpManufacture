var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var minifyCSS = require('gulp-minify-css');
var rename = require("gulp-rename");
var notify = require("gulp-notify");

gulp.task('default', function () {
    return gulp.src('css/*.css')
        .pipe(concatCss("bundle.css"))
        .pipe(minifyCSS())
        .pipe(rename("bundle.min.css"))
        .pipe(gulp.dest('app/css'))
        .pipe(notify("BinGO-GO-GO"));
});
gulp.task('watch', function () {
    gulp.watch('css/*.css', ['default'])

})