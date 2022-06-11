var mysql = require("mysql");


var con = mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"",
    database:"customer_details"
    
});

module.exports = con;