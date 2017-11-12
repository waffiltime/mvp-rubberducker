const express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('../db/index.js');

app.use(express.static(__dirname + '/../public/'));
app.use(bodyParser.json());


app.post('/rec', function (req, res) {
 console.log(req.body);
 mongoose.save(req);
});

app.get('/rec', function (req, res) {
 
});


var port = 1076;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});