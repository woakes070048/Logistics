/// <reference path="./typings/tsd.d.ts" />

import express = require('express');
var app = express();

import bodyParser = require('body-parser');
import methodOverride = require('method-override');

import routes = require('./app/routes');
import auth = require('./app/auth');
import db = require('./app/db');

var port = process.env.PORT || 3000;

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json({ limit: '50mb' })); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
var _auth = new auth.Auth;
var Routes = new routes.Routes();
var _db = new db();
app.post('/api/v1/Token', Routes.Token);
app.get('/api/v1/GetEmployees', function(req, res){
    req.send(db.getAllEmployees());
});

// start app ===============================================

app.listen(port);										// startup our app at http://localhost:8080
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 