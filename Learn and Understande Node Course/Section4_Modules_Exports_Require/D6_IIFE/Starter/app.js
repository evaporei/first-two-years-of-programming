// Your Javascript Code Goes Here
"use strict"
let firstName = "John"

;(function (lastName) {
    let firstName = "Jane"
    console.log(firstName)
    console.log(lastName)
})("Doe")

console.log(firstName)
