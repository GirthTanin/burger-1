var mysql = require('mysql');
require('dotenv').config();
var connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });
};
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("Successfully connected to mysql db");
  });

  module.exports = connection;