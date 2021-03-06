var gulp = require('gulp');

gulp.task('views', function(){
  var paths        = require('../config/paths');
  var plumber      = require('gulp-plumber');
  var handleErrors = require('../util/handleErrors');
  var include      = require('gulp-include');

  return gulp.src(paths.source.views)
    .pipe(include())
    .pipe(plumber(handleErrors))
    .pipe(gulp.dest(paths.dest.app));
});
