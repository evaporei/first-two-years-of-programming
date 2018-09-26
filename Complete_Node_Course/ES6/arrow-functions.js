let people = ["Andre", "Nico", "Jose", "Audra"]
//console.log(people)

// people.forEach(function (person) {
//     console.log(person)
// })

// people.forEach(person => console.log(person))


// const add = (a, b) => a + b
// const addd = (a, b) => {return a + b}

// console.log(add(3, 9))
// console.log(addd(3, 9))


let obj = {
    name: "Otávio",
    likes: ["Programming", "Animations", "Ukulele"],
    greet: function () {
        return () => console.log(this.name)
    },
    printLikes: function () {
        this.likes.forEach(like => console.log(`${this.name} likes ${like}`))
    },
    test: () => console.log(this.name)//this.name is undefined  
}

obj.greet()()
obj.printLikes()

// // test -> (for in) basically loops through all properties of a object
// for (let prop in obj)
//     console.log(prop)


////stupid project -> forEach console log
// const forEach = (array) => {
//     if (Array.isArray(arguments[0]))
//         array.forEach(item => console.log(item))
//     else
//         for (let item in arguments)
//             console.log(item)
// }


// forEach([1,2,3,4])
// forEach(1,2,3,4)
