"use strict"
let url = "http://ipinfo.io"
let request = require("request")
module.exports = function () {

    return new Promise((resolve, reject) => {
        request({
            url: url,
            json: true
        }, (error, response, body) => {
            if (error)
                reject(error)
            resolve(body)
        })
    })
    
}
