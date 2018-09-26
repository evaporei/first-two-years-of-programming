let age = 19

const printHello = () => console.log("Hello")

let person = {
    name: "Otávio",
    age,
    printHello,
    ["dynamic" + (2 * 3) + "property"]: "it's value",
    printAge() {
        console.log(this.age)
    }
}

console.log(person.age)// 19
person.printHello()// Hello
console.log(person.dynamic6property)// it's value
person.printAge()// 19