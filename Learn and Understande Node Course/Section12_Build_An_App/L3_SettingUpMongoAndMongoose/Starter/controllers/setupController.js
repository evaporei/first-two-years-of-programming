"use strict"
let Todos = require("../models/todoModel")

module.exports = (app) => {

    app.get("/api/setupTodos", (request, response) => {

        //seed the database
        let starterTodos = [
            {
                username: "test",
                todo: "Buy milk",
                isDone: false,
                hasAttachment: false
            },
            {
                username: "test",
                todo: "Feed dog",
                isDone: false,
                hasAttachment: false
            },
            {
                username: "test",
                todo: "Learn Node",
                isDone: false,
                hasAttachment: false
            }
        ]

        Todos.create(starterTodos, (error, results) => {
            if (error)
                throw error
            response.send(results)
        })

    })

}