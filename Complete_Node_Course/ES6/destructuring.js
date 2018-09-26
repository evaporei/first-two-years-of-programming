// DESTRUCTURING IS CLOSE TO WHAT PATTERN MATCHING IS IN ELIXIR

// let array = ["first", "second", "third"]
// let [a, , c] = array

// console.log(a, c)// "first third"



let todo = {
    description: "Watch new ES6 section",
    completed: false
}
// let { description } = todo
// console.log(description)// Watch new ES6 section

// this means that for the "description" variable in the "todo" object, we will pass it's value to the "message" variable
// let { description: message } = todo
// console.log(message)// Watch new ES6 section
// console.log(completed)// false


// function getTodoStatus (todo) {
//     if (typeof todo.completed === "boolean")
//         console.log(`Todo is ${todo.completed ? "" : "not"} completed.`)
//     else
//         console.log("Todo error. Not valid.")
// }
// getTodoStatus(todo)

// function getTodoStatus ({ completed }) {
//     if (typeof completed === "boolean")
//         console.log(`Todo is ${completed ? "" : "not"} completed.`)
//     else
//         console.log("Todo error. Not valid.")
// }
// getTodoStatus(todo)

function getTodoStatus (todo) {
    if (typeof todo.completed === "boolean")
        return [`Todo is ${todo.completed ? "" : "not"} completed.`]
    else
        return [undefined, { error: "INVALID_TODO_ITEM" }]
}
let [res, err] = getTodoStatus(todo)
if (err)
    console.log(err.error)
else
    console.log(res)