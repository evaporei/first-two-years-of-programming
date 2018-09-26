"use strict"
let http = require('http')
let fs = require("fs")

http.createServer(function(req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' })
    let html = fs.readFileSync(__dirname + "/index.htm", "utf8")
    let message = "Hello world...."
    /*
    html = html.replace("{Message}", message)
    let teste = "huehue"
    html = html.replace("{teste}", teste)
    */
    while(html.indexOf("{") != -1)
        let openBrackets = html.indexOf("{")
        let closeBrackets = html.indexOf("}")

        let processedHtml = html.splice(openBrackets, closeBrackets - openBrackets)

    res.end(html)

}).listen(1337, '127.0.0.1')
