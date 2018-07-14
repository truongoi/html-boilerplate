const gulp = require('gulp')

const del = require('del')

function clean () {
  return del(['public'])
}

module.exports = clean