"use strict"
let express = require("express")
let app = express()
const port = process.env.PORT || 3000

let fs = require("fs")

//GET method : index
app.get("/", indexGET)
app.get("/index.html", indexGET)

//index response:
function indexGET (request, response) {
    
    fs.createReadStream(__dirname + "/index.html").pipe(response)
    //response.send(html)

}

app.get("/person/:id", (request, response) => {

	response.send(`<html><head></head><body><h1>Person:${request.params.id}</h1></body></html>`)

})

app.get("/personfs/:id", (request, response) => {
	let html = fs.readFileSync(__dirname + "/_template.html", "utf8")
	html = html.replace("{id}", request.params.id)
	response.send(html)
})

app.get("/api", (request, response) => {

    response.json({ firstName: "John", secondName: "Doe" })

})

app.listen(port)