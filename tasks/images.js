const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const { paths } = require('./config')

function images() {
  return gulp.src(paths.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest))
}

module.exports = images