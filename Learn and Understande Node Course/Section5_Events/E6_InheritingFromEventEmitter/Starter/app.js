"use strict"
let EventEmitter = require("events")
let util = require("util")

function Greetr () {
    this.greeting = "Hello World"
}

util.inherits(Greetr, EventEmitter)

Greetr.prototype.greet = function (data){
    console.log(this.greeting + ": " + data)
    this.emit("greet", data)
}

let greet1 = new Greetr()

greet1.on("greet", function (data) {
    console.log("Someone greeted!: " + data)
})

greet1.greet("Otávio")
