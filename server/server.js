var path = require('path')
var express = require('express')
const routes = require('./routes/routes')

var server = express()
server.use(express.static(path.join(__dirname, '../public')))

server.use('/v1/routes', routes)

module.exports = server

