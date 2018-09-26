// Your Javascript Code Goes Here
"use strict"
function greet() {
    console.log('hi')
}
greet()

function logGreeting(fn){
    fn()
}
logGreeting(greet)

let greetMe = function (){
    console.log("Hi Tony")
}
greetMe()

logGreeting(greetMe)

logGreeting(() => console.log("Hello Tony!"))
