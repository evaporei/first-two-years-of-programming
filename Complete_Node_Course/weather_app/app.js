/*
var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&units=imperial';

After you add the API Key, it should look like like the following. Notice the appid query parameter was added. Will talk more about that soon!
REDACTED
http://api.openweathermap.org/data/2.5/weather?appid=REDACTED&q=London,uk
var url = 'http://api.openweathermap.org/data/2.5/weather?appid=PASTE_API_KEY_HERE&q=' + encodedLocation + '&units=imperial';
*/
"use strict"
let weather = require("./weather")
let location = require("./location")
let argv = require("yargs")
    .option("location", {
        alias: "l",
        demand: false,
        describe: "Location to fetch weather for",
        type: "string"
    })
    .help("help")
    .argv

try {
    if (typeof argv.l === "string" && argv.l.length > 0) {
        console.log("has location")
        weather(argv.l, (currentWeather) => console.log(currentWeather))
    } else {
        console.log("no location given")
        location((location) => {
            if (location)
                weather(location.city, (currentWeather) => console.log(currentWeather))
            else
                console.log("Unable to guess location")
        })
    }
} catch (error) {
    console.log(error.message)
}