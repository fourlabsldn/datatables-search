/* eslint-env node */
// List all available tasks

const src = './src/';
const dest = './dist';
const path = require('path');

const organiser = require('gulp-organiser');
organiser.registerAll('./gulp-tasks', {
  'copy-static': {
    src: path.join(src, '*.js'),
    dest: dest
  },
  'transpile-es5': {
    datatablesSearch: {
      src: path.join(src, 'datatables-search.js'),
      dest: dest,
      config: {
        moduleName: 'datatables-search',
      },
    },
  },
  'transpile-es3': {
    datatablesSearch: {
      src: path.join(src, 'datatables-search.js'),
      dest: dest,
      config: {
        moduleName: 'datatables-search',
      },
    },
  },
});
