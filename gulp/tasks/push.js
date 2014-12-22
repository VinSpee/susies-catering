var gulp         = require('gulp');

gulp.task('push', function(){
  var paths        = require('../config/paths');
  var plumber      = require('gulp-plumber');
  var handleErrors = require('../util/handleErrors');
  var rsync = require('gulp-rsync');

  return gulp.src('./build/**')
    .pipe(plumber(handleErrors))
    .pipe(rsync({
      root: 'build',
      hostname: 'vinspee_susiescatering@ssh.phx.nearlyfreespeech.net',
      destination: '/home/public/'
    }));
});
