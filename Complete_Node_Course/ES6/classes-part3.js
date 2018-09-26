class Person {
    constructor (name) {
        // here is no longer needed to call capitalizeWord, because the setter will be called
        // this.name = typeof name === "string" ? Person.capitalizeWord(name) : "Anonymous"
        this.name = typeof name === "string" ? name : "Anonymous"
    }
    get name () {
        return this._name
    }
    set name (name) {
        this._name = Person.capitalizeWord(name)
    }
    printGreeting () {
        console.log(`Hi, I am ${this.name}!`)
    }
    static capitalizeWord (word) {
        return word[0].toUpperCase() + word.slice(1)
    }
}

class Employee extends Person {
    constructor (name, job = "Unemployed") {
        super(name)
        this.job = job
    }

    // override  
    printGreeting() {
        console.log(`Hi, I am ${this.name} and I am a ${this.job}!`)
    }

    callSuperMethod () {
        super.printGreeting()
    }
}

String.capitalizeWord = Person.capitalizeWord

let person1 = new Employee("otávio", "Developer")
person1.name = "jen"// uses setter, which capitalizes it
person1.printGreeting()
person1.callSuperMethod()

let person2 = new Person()
person2.printGreeting()

// static methods don't require a instance to be called
console.log(String.capitalizeWord("mike"))
console.log(Person.capitalizeWord("mike"))
// console.log(person2.capitalizeWord("mike"))// does not work


// getter and setter example in obj literal
const obj = {
    get age () {
        return this._age
    },
    set age (value) {
        this._age = value + 10
    }
}

obj.age = 66
console.log(obj.age)// 76