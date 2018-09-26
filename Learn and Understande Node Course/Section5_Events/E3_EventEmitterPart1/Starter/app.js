"use strict"
let Emitter = require("./Emitter")
let emitter = new Emitter()

emitter.on("greet", () => console.log("Somewhere, someone said hello."))
emitter.on("greet", () => console.log("A greeting occurred!"))

console.log("Hello")
emitter.emit("greet")
