const { src, dest, parallel } = require('gulp');
const gulpClean = require('gulp-clean');
const imageResize = require('gulp-image-resize');
const replace = require('gulp-replace');
const fs = require('fs');

function downscale() {
  return src('images/raw/*.png')
         .pipe(imageResize({ percentage: 50 }))
         .pipe(dest('images/downscaled/'));
}

async function count() {
  const imgCount = fs.readdirSync('images/raw').length;
  await src('script.js')
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