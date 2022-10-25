const express = require('express')
const app = express()
const path = require('path')
const router = require('./router')
const OpenApiValidator = require('express-openapi-validator')
const host = process.env.HOST
const port = process.env.PORT
const openAPIDir = path.join(__dirname, 'openapi')
const swaggerUI = path.join(openAPIDir, 'index.html')
const openAPISchema = path.join(openAPIDir, 'openapi.yaml')

app.use(express.json({limit: '50mb'}))

app.use('/', express.static(openAPIDir))

app.get('/', (req, res) => {
  res.sendFile(swaggerUI)
})

app.use(
  OpenApiValidator.middleware({
    apiSpec: openAPISchema,
    $refParser: {
      mode: 'dereference'
    }
  }),
)

app.use(router)

app.use((err, req, res, next) => {
  console.log(err)
  res.status(err.status || 500).json({
    message: err.message,
    status: err.status,
  })
})

app.listen(port, () => {
  console.log(`http://${host}:${port}`)
})

module.exports = app;
