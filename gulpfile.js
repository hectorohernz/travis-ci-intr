var gulp = require('gulp'),
   uglify = require('gulp-uglify')
   jshint = require("gulp-jshint")
   concat = require("gulp-concat");


gulp.task('minify', async function () {
   gulp.src('./hello.js')
   .pipe(jshint())
   .pipe(jshint.reporter('default'))
   .pipe(uglify())
   .pipe(concat('app.js'))
   .pipe(gulp.dest('build'));
});


gulp.task('hello', function () {
   console.log("Hello Hector")
 });