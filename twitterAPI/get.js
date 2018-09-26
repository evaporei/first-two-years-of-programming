"use strict"
let Twit = require("twit")

let config = require("./config")

let T = new Twit(config)

let params = {
    q: "#rainbow",
    count: 2
}

function gotData(erro, data, response) {
    //console.log(data)//array of statuses
    let tweets = data.statuses
    for (let i = 0; i < tweets.length; i++) {
        console.log(tweets[i].text)
    }
}

T.get("search/tweets", params, gotData)
