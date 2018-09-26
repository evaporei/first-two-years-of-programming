"use strict"
let Twit = require("twit")

let config = require("./config")

let T = new Twit(config)

let stream = T.stream("user")

stream.on("tweet", doStuff)

//pega os tweets da microsoft assim que saem
function doStuff(tweetEvent) {

    let text = eventMsg.text
    let userFrom = eventMsg.user.screen_name

    if (userFrom === "MSFTnews") {

        console.log("text")

	}
}
