const webpack = require('webpack')
const plugins = []

if (process.env.UNI_OPT_TREESHAKINGNG) {
  plugins.push(require('@dcloudio/vue-cli-plugin-uni-optimize/packages/babel-plugin-uni-api/index.js'))
}

if (
  (
    process.env.UNI_PLATFORM === 'app-plus' &&
    process.env.UNI_USING_V8
  ) ||
  (
    process.env.UNI_PLATFORM === 'h5' &&
    process.env.UNI_H5_BROWSER === 'builtin'
  )
) {
  const path = require('path')

  const isWin = /^win/.test(process.platform)

  const normalizePath = path => (isWin ? path.replace(/\\/g, '/') : path)

  const input = normalizePath(process.env.UNI_INPUT_DIR)
  try {
    plugins.push([
      require('@dcloudio/vue-cli-plugin-hbuilderx/packages/babel-plugin-console'),
      {
        file (file) {
          file = normalizePath(file)
          if (file.indexOf(input) === 0) {
            return path.relative(input, file)
          }
          return false
        }
      }
    ])
  } catch (e) { }
}

process.UNI_LIBRARIES = process.UNI_LIBRARIES || ['@dcloudio/uni-ui']
process.UNI_LIBRARIES.forEach(libraryName => {
  plugins.push([
    'import',
    {
      'libraryName': libraryName,
      'customName': (name) => {
        return `${libraryName}/lib/${name}/${name}`
      }
    }
  ])
})

if (process.env.UNI_PLATFORM !== 'h5') {
  plugins.push('@babel/plugin-transform-runtime')
}

const config = {
  presets: [
    [
      '@vue/app',
      {
        modules: webpack.version[0] > 4 ? 'auto' : 'commonjs',
        useBuiltIns: process.env.UNI_PLATFORM === 'h5' ? 'usage' : 'entry'
      }
    ]
  ],
  plugins
}

const UNI_H5_TEST = '**/@dcloudio/uni-h5/dist/index.umd.min.js'
if (process.env.NODE_ENV === 'production') {
  config.overrides = [{
    test: UNI_H5_TEST,
    compact: true,
  }]
} else {
  config.ignore = [UNI_H5_TEST]
}

module.exports = config
