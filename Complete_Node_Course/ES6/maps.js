// let myMap = new Map()

// // Set
// myMap.set("name", "Otávio")

// // Get
// console.log(myMap.get("name"))// Otávio

// // Delete
// myMap.delete("name")

// // Has
// myMap.set("age", 19)
// console.log(myMap.has("age"))// true

// // Clear
// myMap.clear()

// // Size
// console.log(myMap.size)// 0


// let user = { name: "Andrew" }
// myMap.set(user, "São Paulo")
// console.log(myMap)// Map { { name: 'Andrew' } => 'São Paulo' }

// //---------------------------------------------------------------------

// let myMap = new Map()
// myMap.set(1, "Julie")
// myMap.set(2, "Luke")
// myMap.set(3, "Ben")

// console.log(myMap) // Map { 1 => 'Julie', 2 => 'Luke', 3 => 'Ben' }
// // can call forEach in those just like an array
// // console.log(...myMap)// MapIterator { 1, 2, 3 }
// // console.log([...myMap])// MapIterator { 'Julie', 'Luke', 'Ben' }

// console.log(myMap.keys())
// console.log(myMap.values())


// -----------------------------------------------------------------------

let location = { name: "Philadelphia" }
let secondLocation = { name: "Oslo" }
let weather = new Map()

function setWeather (location, temp) {
    weather.set(location, temp)
}

function printWeather (location) {
    if (weather.has(location))
        console.log(`It's ${weather.get(location)} in ${location.name}`)
    else
        console.log(`No weather recorded for ${location.name}`)
}

setWeather(location, 22)
printWeather(location)
printWeather(secondLocation)