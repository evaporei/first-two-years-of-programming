"use strict"
let express = require("express")
let app = express()

const port = process.env.PORT || 3000

app.use("/assets", express.static(__dirname + "/public"))

app.set("view engine", "ejs")

app.listen(port)