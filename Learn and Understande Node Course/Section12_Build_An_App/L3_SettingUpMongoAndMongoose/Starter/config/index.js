"use strict"
let configValues = require("./config")

module.exports = {
    getDbConnectionString: () => { 
        return "mongodb://" + configValues.username + ":" + configValues.password + "@ds111788.mlab.com:11788/nodetodosample" 
    }
}