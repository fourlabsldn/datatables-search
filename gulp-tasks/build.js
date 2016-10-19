/* eslint-disable global-require */
const gulp = require('gulp');
const organiser = require('gulp-organiser');
const tasks = [
  require('./transpile-es5'),
  require('./transpile-es3'),
  require('./copy-static'),
].map(t => t.name);

module.exports = organiser.register((task) => {
  gulp.task(task.name, tasks);
});
