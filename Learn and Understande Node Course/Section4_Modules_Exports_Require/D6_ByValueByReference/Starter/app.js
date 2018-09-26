"use strict"
//Pass by value
function changePrimitive(primitiveVariable) {
    primitiveVariable = 2
}

let number = 1

changePrimitive(number)
console.log(number)//1
//the primitive variable does not change because the function passes it by value
//that means, it makes a copy inside of the function, just like c++


//Pass by reference
function changeObject(objectVariable) {
    objectVariable.prop1 = function () {}
    objectVariable.prop2 = {}
}

let object = {}
object.prop1 = {}
changeObject(object)
console.log(object)//{prop1: function, prop2: {}}


//Still pass by value
//Testing -> if the object is changed to a primitive type, it does not return as it changed
function changeTest(object) {
    object = 2
    //conversion to primitive
}
let obj = {}
changeTest(obj)
console.log(obj)//{}


//same thing as above, by value
function changeTest2(number) {
    object = {}
    //conversion to primitive
}
let n = 2
changeTest2(n)
console.log(n)//2
