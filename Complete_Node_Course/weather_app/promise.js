"use strict"
const request = require("request")

function getWeather (location) {

    return new Promise((resolve, reject) => {
        if (!location)
            reject("No location provided")

        let encodedLocation = encodeURIComponent(location)
        let url = "http://api.openweathermap.org/data/2.5/weather?appid=REDACTED&q=" + encodedLocation + "&units=imperial"

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

getWeather("")
    .then((currentWeather) => console.log(currentWeather),
          (error) => console.log(error))