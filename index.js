var express = require('express');
var getArea = require ('./area.js');
var port = process.env.PORT || 8080;
var query = require('querystring');

var app = express();


app.get('./index', function(req, res){
	var lato1 = req.query.lato1;
	var lato2 = req.query.lato2;
	
	res.json({
		area: getArea([parseInt(lato1), parseInt(lato2)])
    });

}); 

app.listen(port);
console.log('Server started! At http://localhost:' + port);