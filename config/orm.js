var connection = require("./connection.js");

var orm = {
    all: function(tableInput, cb) {
        connection.query('SELECT * FROM ' + tableInput + ';', function(err, result){
            if(err) throw err;
            cb(result); //does this have to  be result? instead of res?
        })
    },

    update: function(tableInput, condition, cb){
        connection.query('UPDATE ' + tableInput + 'SET devoured=true WHERE id=' + condition + ';', function(err, reults){
            if(err) throw err;
            cb(result);
        })
    }


}

// create: function()

//need to use selectAll(), insertOne(), and updateOne()/////
//reference cat activity

module.exports = orm; 