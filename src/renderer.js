const pug = require('pug')
const sass = require('node-sass')
const { promisify } = require('util')
const moment = require('moment')

class Renderer {
  constructor(params) {
    this.pugPath = 'src/views/index.pug'
    this.stylesPath = 'src/styles/index.css.sass'
    this.params = params || {}
  }

  static helpers() {
    return { moment }
  }

  async styles() {
    const style = await promisify(sass.render)({
      file: this.stylesPath,
      includePaths: ['assets/styles'],
    })
    return style.css.toString('utf-8')
  }

  async render() {
    const params = {
      ...this.params,
      helpers: Renderer.helpers(),
      styles: await this.styles(),
    }
    const template = pug.compileFile(this.pugPath)
    return template(params)
  }
}

module.exports = Renderer
