const Renderer = require('../src/renderer')
const { handler } = require('../index')

describe('index.js', function () {
  beforeEach(function () {
    this.html = '<html>text</html>'
    this.runStub = this.sinon.stub(Renderer.prototype, 'render').returns(this.html)
  })

  describe('#handler', function () {
    beforeEach(async function () {
      this.result = await handler()
    })
    it('calls the Renderer render function', function () {
      expect(this.runStub.called).to.equal(true)
    })

    it('returns HTML generated by renderer', function () {
      expect(this.result).to.equal(this.html)
    })
  })
})
