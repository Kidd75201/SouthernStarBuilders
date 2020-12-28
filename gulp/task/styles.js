const gulp = require('gulp'),
      postcss = require('gulp-postcss'),
      autoprefixer = require('autoprefixer'),
      cssvars = require('postcss-simple-vars'),
      nested = require('postcss-nested'),
      cssImport = require('postcss-import'),
      mixins = require('postcss-mixins');

// must include return becasue gulp.src is an asyncrohnous function
gulp.task('styles', function(done) {
    return gulp.src('./app/assets/styles/styles.css')

    // captures error and allows gulp to continue running 
      .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
      .on('error', function(errorInfo){
        console.log(errorInfo.toString());  
        this.emit('end');
      })
      .pipe(gulp.dest('./app/temp/styles'));
    done();
});
