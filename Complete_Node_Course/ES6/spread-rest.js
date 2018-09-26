// //spread operator-------------------------

// function add (a, b) {
//     return a + b
// }

// let numbers = [4, 22]

// console.log(add(1, 4))

// console.log(add(...numbers))

// let groupA = [33, 99]
// let groupB = [11]
// let unified = [0, ...groupA, ...groupB, 100]

// console.log(unified)//[ 0, 33, 99, 11, 100 ]

// unified.push(...[55, 33])

// console.log(unified)//[ 0, 33, 99, 11, 100, 55, 33 ]


//----rest params
// function greetUsers (...names) {
//     names.forEach((name) => console.log(`Hello ${name}`))
// }

// function greetGroup (group, ...names) {
//     names.forEach((name) => console.log(`Hello ${name}. You are part of the ${group}`))
// }

// greetUsers("andrew", "otávio", "bob")
// greetGroup("Developers", "andrew", "otávio", "bob")
// //greetUsers(["andrew", "otávio", "bob"])//would have to remove the three dots(...)
// /*  Hello andrew
//     Hello otávio
//     Hello bob   */

function adder (base, ...numbers) {
    numbers.forEach(number => console.log(number + base))
}

//3 is the base number
adder(3, 5, 7, 1)