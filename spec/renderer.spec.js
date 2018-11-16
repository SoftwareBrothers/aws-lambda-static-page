const Renderer = require('../src/renderer')

describe('Renderer', function () {
  beforeEach(function () {
    this.customParams = { param1: 'param' }
    this.renderer = new Renderer(this.customParams)
  })

  describe('#render', function () {
    beforeEach(async function () {
      this.result = await this.renderer.render()
    })

    it('returns html', function () {
      expect(this.result).to.have.string('<html>')
    })
  })

  describe('#styles', function () {
    beforeEach(async function () {
      this.result = await this.renderer.styles()
    })

    it('returns css', function () {
      expect(this.result).to.have.string('{')
    })
  })
})
