const chai = require('chai')

global.expect = chai.expect
global.sinon = require('sinon')
global.factory = require('factory-girl').factory

require('require.all')({
  match: /\.spec\.js$/i,
  dir: './',
  recursive: true,
})

beforeEach(function () {
  this.sinon = sinon.createSandbox()
})

afterEach(function () {
  this.sinon.restore()
})
