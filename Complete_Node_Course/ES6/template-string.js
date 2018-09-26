function greet(name = "Andrew") {
    console.log(`Hello ${name}!`)
    console.log("Hello " + name + "!")
}
greet()
greet("Kate")

let defaultPerson = () => ({
    name: "Anonymous",
    age: 0
})

function welcomePerson(person = defaultPerson()) {
    console.log(`Hello ${person.name}, you are ${person.age}`)
}

let person = {
    name: "Otávio",
    age: 19
}

welcomePerson()
welcomePerson(person)

//also, template strings consider the ENTER key as \n etc
console.log(`This looks like an e-mail:

Hey John,
How are you doing....
.....
...

Bye,
Dan`)