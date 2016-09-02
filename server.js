var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// var sitemap = require('sitemap.xml');

// Express Config
var app = express();
var PORT = process.env.PORT || 5000;

// BodyParser makes it easy for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
// app.use(sitemap(__dirname + 'public/sitemap.xml'));

// Load static files
app.use(express.static('./app/public'));

// require('./app/routes/api-routes.js')(app);
require('./app/routes/html-routes.js')(app);

//Listener 
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});