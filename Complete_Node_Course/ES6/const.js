const PORT = 3000

console.log(PORT)

//bad
//PORT = 4

const obj = {
    canBeChanged: "I am a string!!!"
}
console.log(obj)//{ canBeChanged: "I am a string!!!" }

obj.canBeChanged = "another one"

console.log(obj)//{ canBeChanged: "another one" }