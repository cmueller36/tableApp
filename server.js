//Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Set up Express App
var app = express();
var PORT = 8080;




//Start the server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  