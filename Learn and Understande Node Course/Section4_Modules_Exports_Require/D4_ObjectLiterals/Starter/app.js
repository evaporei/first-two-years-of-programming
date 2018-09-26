// Your Javascript Code Goes Here
"use strict"
let person = {
    firstName: "John",
    lastName: "Doe",
    greet: function() {
        console.log("Hi, " + this.firstName)
    }
}

person.greet()

console.log(person.lastName)

console.log(person["firstName"])//John
