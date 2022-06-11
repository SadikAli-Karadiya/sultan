var express = require('express');
var app = express();
var mysql =  require("mysql");

var con = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"customer_details"
});

var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended : true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+'/contect.html')
})

app.post('/',function(req,res){
  var fname = req.body.fname;
  var number = req.body.number;
  var email = req.body.email;
  // var message = req.body.message;


con.connect(function(error){
    if(error) throw error;
    
    var sql = "INSERT INTO contect(fname,number,email,message) VALUES('"+fname+"','"+number+"','"+email+"','"+message+"')";
    con.query(sql,function(error,result){
        if(error) throw error;
        res.send('Contect send '+ result.insertId);
    });

  });
});
  

app.listen(5000);