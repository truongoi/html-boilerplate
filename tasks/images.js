const gulp = require('gulp')
const { paths } = require('./config')

function images() {
  return gulp.src(paths.images.src)
    .pipe(gulp.dest(paths.images.dest))
}

module.exports = images