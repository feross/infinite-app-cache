var fs = require('fs')
var http = require('http')
var path = require('path')

var server = http.createServer(function (req, res) {
  console.log('Received request: ' + req.url)

  if (req.url === '/manifest.appcache') {
    res.setHeader('Expires', 'Thu, 31 Dec 2037 23:55:55 GMT')
    res.setHeader('Content-Type', 'text/cache-manifest')
    fs.createReadStream(path.join(__dirname, 'manifest.appcache')).pipe(res)
  } else if (req.url === '/index.html' || req.url === '/') {
    fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res)
  } else if (req.url === '/castle.jpg') {
    fs.createReadStream(path.join(__dirname, 'castle.jpg')).pipe(res)
  } else {
    res.statusCode = 404
    res.end('404 Not Found')
  }
})

server.listen(8000)