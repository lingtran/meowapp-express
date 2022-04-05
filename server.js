const http = require('http')
const app = require('./src/index')

http.createServer(app).listen(3000)