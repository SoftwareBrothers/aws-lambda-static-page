const Renderer = require('../src/renderer')

async function run(params) {
  const renderer = new Renderer(params)
  return renderer.render()
}

run().then((report) => {
  console.log(report)
})
