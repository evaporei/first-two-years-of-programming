"use strict"
let http = require("http")
let fs = require("fs")

http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "application/json"})
    //if this is sent -> "[Object object]"
    let obj = {
        firstName: "John",
        lastName: "Doe"
    }

    response.end(JSON.stringify(obj))
}).listen(1337)
