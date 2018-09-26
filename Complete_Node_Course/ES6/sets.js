// let chatRooms = new Set()

// // Add
// chatRooms.add("Runners")
// chatRooms.add("Runners")// Does not add because it already exists
// chatRooms.add("Bikers")// only accepts unique items

// // Size
// console.log(chatRooms.size)// 2

// // Has
// console.log(`Does the set have Runners: ${chatRooms.has("Runners")}`)

// // // Delete
// // chatRooms.delete("Bikers")
// // chatRooms.clear()
// // console.log(chatRooms.size)// 0


// // To array
// console.log([...chatRooms])

// // but forEach can be used in Sets even though they are not arrays
// chatRooms.forEach(chatRoom => console.log(`Found chat room: ${chatRoom}`))

const movies = new Set()

function addMovie (movieTitle) {
    if (movies.has(movieTitle))
        console.log(`${movieTitle} is already on the movies set`)
    else {
        movies.add(movieTitle)
        console.log(`${movieTitle} was succesfully added to the movies set`)
    }
}

addMovie("A New Hope")
addMovie("A New Hope")
addMovie("District 9")