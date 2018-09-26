"use strict"
// Buffer(sizeInMemory, encodingType)
// default encoding is utf8
let buf = new Buffer("Hello", "utf8")
// buf converted Hello in to bynary data
console.log(buf)//<Buffer 48 65 6c 6c 6f
//it will show in hexadecimal notation
console.log(buf.toString())//back to Hello

console.log(buf.toJSON())//{ type: 'Buffer' , data: [ 72, 101, 108, 108, 111 ]}

console.log(buf[2])//that is the 'l' -> 108

buf.write("wo")
//because the buffer is finite it will overwrite 'he' to 'wo' in the beggining

//usually the data that passes through a buffer is processed and then overwrited with the next piece
