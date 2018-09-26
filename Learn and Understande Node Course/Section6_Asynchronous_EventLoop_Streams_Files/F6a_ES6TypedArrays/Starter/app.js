"use strict"
let buffer = new ArrayBuffer(8)//8 bytes -> 8x8 = 64 bits, each byte is 01010010(8 bits)

//here can only hold 2 numbers
let view = new Int32Array(buffer)
view[0] = 5
view[1] = 15
//view[2] = 30// -> this will not be stored
console.log(view)//Int32Array { '0': 5, '1': 15 }
