var connection = require("./connection.js");

var orm = {
    all: function(tableInput, cb) {
        connection.query('SELECT * FROM '+ tableInput + ';', function(err, res){
            if(err) throw err;
            cb(res); //does this have to  be result?
        })
    }


}

// create: function()

//need to use selectAll(), insertOne(), and updateOne()/////
//reference cat activity

module.exports = orm;