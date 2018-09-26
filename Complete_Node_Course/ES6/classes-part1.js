class Person {
    constructor (name) {
        this.name = typeof name === "string" ? Person.capitalizeWord(name) : "Anonymous"
    }
    printGreeting () {
        console.log(`Hi, I am ${this.name}!`)
    }
    static capitalizeWord (word) {
        return word[0].toUpperCase() + word.slice(1)
    }
}

String.capitalizeWord = Person.capitalizeWord

let person1 = new Person("otávio")
person1.printGreeting()

let person2 = new Person()
person2.printGreeting()

// static methods don't require a instance to be called
console.log(String.capitalizeWord("mike"))
console.log(Person.capitalizeWord("mike"))
// console.log(person2.capitalizeWord("mike"))// does not work