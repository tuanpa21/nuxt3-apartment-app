/* eslint-disable */

// Move to writable folder
const path = require('path')
const fs = require('fs')

const filePath = path.join('/tmp', 'db.json')

fs.readFile('db.json', (_, data) => {
  fs.writeFileSync(filePath, data)
})

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(filePath)
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
  })
)
server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})

// Export the Server API
module.exports = server
