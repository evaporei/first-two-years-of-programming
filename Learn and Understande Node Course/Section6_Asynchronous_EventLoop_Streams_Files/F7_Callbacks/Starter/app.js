"use strict"
 function greet(callback) {
     console.log("Hello")
     let data = {
         name: "John Doe"
     }
     callback(data)
 }

 greet((data) => {
     console.log("A callback was invoked!")
     console.log(data)
 })

 greet((data) => {
     console.log("A different callback was invoked!")
     console.log(data.name)
 })
