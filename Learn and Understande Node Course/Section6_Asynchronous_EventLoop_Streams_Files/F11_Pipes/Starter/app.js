"use strict"
let fs = require("fs")
let zlib = require("zlib")

let readable = fs.createReadStream(__dirname + "/greet.txt")

let writable = fs.createWriteStream(__dirname + "/greetcopy.txt")

let compressed = fs.createWriteStream(__dirname + "/greet.txt.gz")

//everytime this recieves a chunk, it will compress it
let gzip = zlib.createGzip()

readable.pipe(writable)

//readable.pipe(gzip) -> this itself returns the text compressed
readable.pipe(gzip).pipe(compressed)
