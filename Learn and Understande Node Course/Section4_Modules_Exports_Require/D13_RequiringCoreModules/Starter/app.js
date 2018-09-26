"use strict"
let util = require("util")

let name = "Otavio"
let greeting = util.format("Hello, %s", name)

//it prints out the string and a time stamp
util.log(greeting)
