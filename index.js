const Renderer = require('./src/renderer')

/**
 * @param {Object} event event object received from AWS Lambda executor.
 *                       Take a look at examples: https://docs.aws.amazon.com/lambda/latest/dg/eventsources.html
 * @param {Object} event.params
 * @param {Object} event.params.querystring
 * @param {Object} event.params.querystring.yourExampleParam
 * @return {String} HTML generated view
 */
exports.run = async (event) => {
  const renderer = new Renderer()
  const params = event && event.params && event.params.querystring
  const htmlResponse = renderer.render(params)
  return htmlResponse
}
