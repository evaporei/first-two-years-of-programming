"use strict"
//Revealing Module Pattern
//pattern of exposing only the properties and functions you want via an returned object
//protected variable, much like private attributes of a class
let greeting = "Hello World!!!!!"

function greet() {
    console.log(greeting)
}

//only the function is exposed
module.exports = {
    greet: greet
}
