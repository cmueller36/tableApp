//Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Set up Express App
var app = express();
var PORT = 8080;

var tables = [
  {
    name: 'pikachu',
    phone: '555-555-5555', 
    email: 'pikapi@pokenet.com',
    id: 0
  }
];

var waitlist = [
  {
    name: 'MagicKarp',
    phone: '111-111-1111',
    email: 'magicKarpeDiem@pokenet.com',
    id: 0
  }
]

app.get("/api/tables", function (req, res) {
  return res.json(tables);
});

app.get("/api/waitlist", function (req, res){
  return res.json(waitlist);
});


//Start the server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  