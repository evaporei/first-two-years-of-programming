"use strict"
let Twit = require("twit")

let config = require("./config")

let T = new Twit(config)

let tweet = { status: "Hello World" }

//the callback here is just for getting the error, it isn't actually needed
function tweeted(error, data, response) {
    if (error) {
        console.log("Something went wrong, here is the error: " + error)
    } else {
        console.log(data)//this will log the tweet data
    }
}

T.post("statuses/update", tweet, tweeted)
