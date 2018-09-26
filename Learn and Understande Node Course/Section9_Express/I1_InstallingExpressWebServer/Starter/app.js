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

app.get("/api", (request, response) => {

    response.json({ firstName: "John", secondName: "Doe" })

})

app.listen(port)