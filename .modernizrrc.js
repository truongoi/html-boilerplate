
// See options and feature detects here:
// https://github.com/Modernizr/Modernizr/blob/master/lib/config-all.json

'use strict'

module.exports = {
  'minify': true,
  'options': [
    'setClasses'
  ],
  'feature-detects': [
    'test/css/flexbox',
    'test/es6/promises',
    'test/touchevents',
    'test/serviceworker',
    'test/svg'
  ]
}
