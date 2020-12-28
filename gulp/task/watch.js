const gulp = require('gulp'),
      browserSync = require('browser-sync').create(),
      watch = require('gulp-watch');

// gulp-watch monitors any saved changes to files
gulp.task('watch', function() {

    browserSync.init({
       notify: false,
       server:{
          baseDir: "app"
       }
    });
 
    watch('./app/index.html', function() {
       browserSync.reload();
    });
 
    watch('./app/assets/styles/**/*.css', function() {
       gulp.start('cssInject');
    });
 
 });   // end of gulp watch


 gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
 });