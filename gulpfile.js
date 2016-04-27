'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');

var SETUP_VIRTUAL_DOM = __dirname + '/setupdom';

require('babel/register');

gulp.task('test', function() {
  return gulp.src('tests/**/*.js', {read:false})
    .pipe(mocha({
      require: [SETUP_VIRTUAL_DOM]
    }));
});
