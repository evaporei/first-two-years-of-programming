const express = require("express")
const app = express()
const static_pages = `${__dirname}`

app.use("/", express.static(static_pages))

app.listen(80)