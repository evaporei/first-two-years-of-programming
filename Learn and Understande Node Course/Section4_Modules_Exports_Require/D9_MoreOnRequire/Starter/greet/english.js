"use strict"
let greetings = require("./greetings.json")

let greet = function () {
    console.log(greetings.en)
}

module.exports = greet
