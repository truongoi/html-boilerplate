const gulp = require('gulp')

const { paths } = require('./tasks/config')
const { reload, serve } = require('./tasks/server')
const clean = require('./tasks/clean')
const scripts = require('./tasks/scripts')
const styles = require('./tasks/styles')
const templates = require('./tasks/templates')
const images = require('./tasks/images')

function watch () {
  gulp.watch(paths.styles.src, gulp.series(styles, reload))
  gulp.watch(paths.scripts.watch, gulp.series(scripts, reload))
  gulp.watch(paths.templates.watch, gulp.series(templates, reload))
  gulp.watch(paths.images.watch, gulp.series(images, reload))
}

gulp.task('dev', gulp.series(
  clean, gulp.parallel(styles, scripts, images, templates), serve, watch
))

gulp.task('build', gulp.series(
  clean, gulp.parallel(styles, scripts, images, templates)
))