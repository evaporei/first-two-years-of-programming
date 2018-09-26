"use strict"
//greet1
let greet = require("./greet1")
greet()

//greet2
let greet2 = require("./greet2")
greet2.greet()
//or
let greet22 = require("./greet2").greet
greet22()

//greet3
let greet3 = require("./greet3")
greet3.greet()
greet3.greeting = "Changed hello world!!!"

let greet33 = require("./greet3")
greet3.greet()//will have the changed property, since modules are by default shared in memory

//greet4 -> no shared memory, just copies
let Greet4 = require("./greet4")
let greet4 = new Greet4()
greet4.greet()


let greet5 = require("./greet5")
greet5.greet()
