"use strict"
let express = require("express")
let app = express()
let mongoose = require("mongoose")
let config = require("./config")

const port = process.env.PORT || 3000

let setupController = require("./controllers/setupController")

app.use("/assets", express.static(__dirname + "/public"))

app.set("view engine", "ejs")

mongoose.connect(config.getDbConnectionString())

setupController(app)

app.listen(port)