
var gulp = require('gulp'),
    del = require('del');

// Woo-hoo
gulp.task('default', function() {
  console.log("Default task");
  console.log(DEPLOY_DIR);
});

// Folder where the extension is deployed (in debug mode)
// The path is for Mac OS X only
var EXTENSION_NAME = 'CEPSample';
var DEPLOY_DIR = process.env.HOME
    + '/Library/Application Support/Adobe/CEP/extensions/'
    + EXTENSION_NAME;

// Deploy the extension to where we can debug it
gulp.task('deploy', function() {
  return gulp.src('app/**/*')
    .pipe(gulp.dest(DEPLOY_DIR));
});

// Watch and automatically deploy changes
gulp.task('watch', ['deploy'], function() {
  gulp.watch('app/**/*', ['deploy']);
});

// Uninstall the extension
gulp.task('undeploy', function(cb) {
  del([DEPLOY_DIR], { force: true }, cb);
});
