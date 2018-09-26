"use strict"

let request = require("request")


module.exports = () => {

    return new Promise((resolve, reject) => {
        let encodedLocation = encodeURIComponent(location)
        let url = "http://api.openweathermap.org/data/2.5/weather?appid=REDACTED&q=" + encodedLocation+ "&units=imperial"

        if (!location)
            return reject("No location provided")

        request({
            url: url,
            json: true
        }, (error, response, body) => {
            if (error)
                reject(error)
            resolve("It is: " + body.main.temp + "° in " + body.name)
        })
    })
    
}