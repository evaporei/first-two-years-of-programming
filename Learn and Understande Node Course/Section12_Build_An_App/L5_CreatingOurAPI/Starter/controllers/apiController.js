"use strict"
let Todos = require("../models/todoModel")
let bodyParser = require("body-parser")

module.exports = (app) => {

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))

    app.get("/api/todos/:username", (request, response) => {

        Todos.find({ username: request.params.username }, (error, todos) => {
            if (error)
                throw error
            response.send(todos)
        })

    })

    app.get("/api/todo/:id", (request, response) => {

        Todos.findById({ _id: request.params.id }, (error, todo) => {
            if (error)
                throw error
            response.send(todo)
        })

    })

    app.post("/api/todo", (request, response) => {

        let newTodo = Todos({
            username: "test",
            todo: request.body.todo,
            isDone: request.body.isDone,
            hasAttachment: request.body.hasAttachment
        })

        newTodo.save((error) => {
            response.send("Success on new todo")
        })

    })

    app.put("/api/todo", (request, response) => {

        Todos.findByIdAndUpdate(request.body.id, { todo: request.body.todo, isDone: request.body.isDone, hasAttachment: request.body.hasAttachment }, (error, todo) => {
            if (error)
                throw error
            response.send("Success on updating todo")
        })

    })

    app.delete("/api/todo/:id", (request, response) => {

        Todos.findByIdAndRemove(request.body.id, (error) => {
            if (error)
                throw error
            response.send("Success on deleting todo")
        })

    })

}