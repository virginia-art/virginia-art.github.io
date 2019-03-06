const { src, dest, parallel } = require('gulp');
const gulpClean = require('gulp-clean');
const imageResize = require('gulp-image-resize');
const replace = require('gulp-replace');
const fs = require('fs');

function downscale(cb) {
  const all = fs.readdirSync('images/raw');
  const downscaled = fs.readdirSync('images/downscaled');
  const diff = all.filter(filename => filename != '.DS_Store' && downscaled.indexOf(filename) < 0);

  if (!diff.length)
    return Promise.resolve('There is nothing to be done');

  return src(diff, { cwd: 'images/raw' })
         .pipe(imageResize({ percentage: 30 }))
         .pipe(dest('images/downscaled/'));
}

function count(cb) {
  const imgCount = fs.readdirSync('images/raw').filter(file => file != '.DS_Store').length;
  return src('script.js')
         .pipe(replace(/^const numImgs = \d+;/, `const numImgs = ${imgCount};`))
         .pipe(dest('.'));
}

function clean() {
  return src('images/downscaled/*.png')
         .pipe(gulpClean());
}

exports.downscale = downscale;
exports.count = count;
exports.clean = clean;
exports.default = parallel(downscale, count);