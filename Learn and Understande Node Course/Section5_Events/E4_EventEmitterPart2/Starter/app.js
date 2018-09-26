"use strict"
let Emitter = require("events")
let eventConfig = require("./config").events

let emitter = new Emitter()

emitter.on(eventConfig.GREET, () => console.log("Somewhere, someone said hello."))
emitter.on(eventConfig.GREET, () => console.log("A greeting ocurred!"))

console.log("Hello")
emitter.emit(eventConfig.GREET)
