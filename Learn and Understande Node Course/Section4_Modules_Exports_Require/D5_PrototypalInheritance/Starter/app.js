// Your Javascript Code Goes Here
"use strict"
function Person(firstName, lastName) {

    this.firstName = firstName
    this.lastName = lastName

}



let john = new Person("John", "Doe")
//john.greet()//not defined
Person.prototype.greet = function () {
    console.log("Hello, " + this.firstName + " " + this.lastName)
}
//console.log(john.firstName)
//it follows up to the prototype, because Person does not have greet -> it checks the prototype chain if the property does not exists
john.greet()

let jane = new Person("Jane", "Doe")

jane.greet()

//DO NOT USE __proto__
console.log(john.__proto__)
console.log(jane.__proto__)

console.log(john.__proto__ === jane.__proto__ ? "They're prototypes are equal" : "They're prototypes are NOT equal")
