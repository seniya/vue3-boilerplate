const jsonServer = require('json-server')
const apiList = require('./dummy/spec.api.js')

const server = jsonServer.create()
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.get('/apiList', (req, res) => {
  res.send(apiList)
})

const apis = {
  ...require('./dummy/res.member.json'),
  ...require('./dummy/res.user.json')
}

apiList.forEach((x) => {
  if (apis[x.name]) {
    server[x.method](x.url, (req, res) => {
      res.send(JSON.stringify(apis[x.name]))
    })
  }
})

server.listen(3000, () => {
  console.log('JSON Server is running "http://localhost:3000"')
})
