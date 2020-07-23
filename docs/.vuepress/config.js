const { name, description } = require('../../package.json')
const {
  resolve
} = require('path')
const CodeDocPlugin = require('vuepress-plugin-code-doc')

module.exports = {
  title: 'vue-component-starter',
  base: `/${name}/`,
  description,
  plugins: [
    [
      'vuepress-plugin-typescript',
      {
        tsLoaderOptions: {
          // All options of ts-loader
        },
      },
    ],
    [CodeDocPlugin, {}],
  ],
  configureWebpack: config => {
    config.resolve.extensions = ['.ts', '.tsx', '.vue', '.mjs', '.js', '.jsx', '.json', '.wasm']
    config.resolve.modules.push(resolve(__dirname, 'examples'))
    config.resolve.alias['my-component'] = resolve(__dirname, 'packages')
  },
}
