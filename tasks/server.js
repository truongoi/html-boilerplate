const gulp = require('gulp')
const browserSync = require('browser-sync')

const server = browserSync.create()

function reload (done) {
  server.reload()
  done()
}

function serve (done) {
  server.init({
    online: true,
    reloadDelay: 100,
    ghostMode: false,
    open: 'external',
    notify: false,
    server: {
      baseDir: './public',
      directory: true
    }
  })
  done()
}

module.exports = {
  reload,
  serve
}