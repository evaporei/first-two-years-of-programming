"use strict"
let http = require('http')
let fs = require('fs')

http.createServer(function(request, response) {

    response.writeHead(200, { 'Content-Type': 'text/html' })
    fs.createReadStream(__dirname + '/index.htm').pipe(response)

}).listen(1337, '127.0.0.1')
