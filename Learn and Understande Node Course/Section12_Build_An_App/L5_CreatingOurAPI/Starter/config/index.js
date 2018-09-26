var configValues = require('./config');

module.exports = {
    
    getDbConnectionString: function() {
        return "mongodb://" + configValues.username + ":" + configValues.password + "@ds111788.mlab.com:11788/nodetodosample" 
    }
    
}