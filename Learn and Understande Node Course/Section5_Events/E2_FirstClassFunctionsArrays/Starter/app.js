"use strict"
let obj = {
    greet: "Hello"
}

console.log(obj.greet)
console.log(obj["greet"])
let prop = "greet"
console.log(obj[prop])

let array = []

for (let i = 0; i < 3; i++) {
    array.push(() => console.log("Hello", (i + 1)))
}

array.forEach((item) => item())
