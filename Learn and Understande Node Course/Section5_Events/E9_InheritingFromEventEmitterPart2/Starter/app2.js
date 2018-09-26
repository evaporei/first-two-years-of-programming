"use strict"
let util = require("util")

function Person() {
    this.firstName = "John"
    this.lastName = "Doe"
}

Person.prototype.greet = function () {
    console.log("Hello", this.firstName, this.lastName)
}

function PoliceMan() {
    Person.call(this)
    this.badgeNumber = 1234
}

util.inherits(PoliceMan, Person)

let officer = new PoliceMan()
officer.greet()
