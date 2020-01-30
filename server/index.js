const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'
const bodyParser = require('body-parser')


async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use(bodyParser.json())
  const entryModel = require('../models/v1.1/entries')
  const countryModel = require('../models/v1.1/country')

  app.get('/country/', (request, response, next) => {
    countryModel.getCountry()
    .then((result) => {
        response.send(result)
    }).catch((error) => next(error))
})
  

  // Create entry
  app.put('/entries/', (request, response, next) => {
    console.log(request.body)
    // request.body.created = moment().format('YYYY-MM-DD HH:mm:ss')
    entryModel.createEntry(request.body)
        .then((result) => {
            response.status(200).send('1 entry added with id:' + result)
        }).catch((error) => next(error))
})

app.post('/entries/', (request, response, next) => {
  entryModel.getEntries()
  .then((result) => {
      response.send(result)
  }).catch((error) => next(error))
})


  // Give nuxt middleware to express
  app.use(nuxt.render)
  
  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
