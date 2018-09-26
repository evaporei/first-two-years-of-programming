"use strict"
let fs = require("fs")

//SYNCHRONOUS
let greet = fs.readFileSync(__dirname + "/greet.txt", "utf8")//default encoding = utf8
console.log(greet)

//name of the file needs the extension if it exists(.txt, .js)

//ASYNCHRONOUS
//second param is optional, the encoding type, it could be : readFile(folder/file, callback)
let greet2 = fs.readFile(__dirname + "/greet.txt", "utf8", (error, data) => {
    if (error)
        console.log(error)
    //this callback function will only run after V8 is done and the file was read
    console.log(data)//Hello world! -> without encoding it would be hexadecimal anotation(binary essencialy)
})

console.log("Done!")


/*
final stuff:
Hello world!
Done!
Hello world!


//this happens because the second file is read in a asynchrounous way
*/
