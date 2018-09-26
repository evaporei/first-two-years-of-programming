"use strict"
let obj = {
    name: "John Doe",
    greet: function () {
        console.log(`Hello ${this.name}`)
    }
}

obj.greet()
obj.greet.call({ name: "Jane Doe" })//overwrites "this" keyword with a object
obj.apply.apply({ name: "Jane Doe" })
//func.call({obj}, arg1, arg2)
//func.apply({obj}, [arg1, arg2])
