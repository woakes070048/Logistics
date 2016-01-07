/// <reference path="./typings/tsd.d.ts" />

import express = require('express');
import mongodb = require('mongodb');

let app = express();

import bodyParser = require('body-parser');
import methodOverride = require('method-override');

import routes = require('./app/routes');
import auth = require('./app/auth');
import employeeModel = require('./app/EmployeeModel');

let port = process.env.PORT || 3000;

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json({ limit: '50mb' })); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
let Routes = new routes.Routes();
let employee = new employeeModel.EmployeeModel();

app.post('/api/v1/Token', Routes.Token);
app.get('/api/v1/GetEmployees', function(req: express.Request, res: express.Response){
    employee.All((err: Error, data: mongodb.Collection[]) => {
        if(err) { res.send({err: err}); }
        res.send(data);
    });
});

// start app ===============================================

app.listen(port);										// startup our app at http://localhost:8080
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 