const ASSET_ROOT = 'src'
const DEST_ROOT = 'public'
const TEMPLATES_ROOT = `${ASSET_ROOT}/templates`

module.exports = {
  paths: {
    styles: {
      src: `${ASSET_ROOT}/css/**/*.scss`,
      dest: `${DEST_ROOT}/css`
    },
    templates: {
      root: TEMPLATES_ROOT,
      src: `${TEMPLATES_ROOT}/pages/**/*.edge`,
      watch: [
        `${TEMPLATES_ROOT}/**/*.edge`,
        `${TEMPLATES_ROOT}/data.json`,
        `${TEMPLATES_ROOT}/helpers.js`
      ],
      data: `${TEMPLATES_ROOT}/data.json`,
      helpers: `${TEMPLATES_ROOT}/helpers.js`,
      dest: DEST_ROOT
    },
    scripts: {
      src: `${ASSET_ROOT}/js/app.js`,
      dest: `${DEST_ROOT}/js`,
      watch: `${ASSET_ROOT}/js/**/*.js`
    },
    images: {
      src: `${ASSET_ROOT}/images/**/*.*`,
      dest: `${DEST_ROOT}/images`,
      watch: `${ASSET_ROOT}/images/**/*.*`
    }
  }
}