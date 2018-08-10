var express = require('express');
var getArea = require ('./area.js');

var app = express();


app.get('./area', function(req, res){
	res.write("Esame 12 gennaio");
	res.end();
}); 