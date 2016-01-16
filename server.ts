/// <reference path="./typings/tsd.d.ts" />

import mongodb = require('mongodb');
import restify = require('restify');

let app = restify.createServer({
	name: 'logistics',
	version: '0.0.1'
});

app.pre(restify.pre.sanitizePath());

app.use(restify.acceptParser(app.acceptable));
app.use(restify.queryParser());
app.use(restify.bodyParser());

let port = process.env.PORT || 3000;

import base = require('./app/ModelBase');
let db = new base(); //db init

// routes ==================================================

import employeeRoutes = require('./app/Employee/EmployeeRoutes');
new employeeRoutes.EmployeeRoutes(app);

import departmentRoutes = require('./app/Department/DepartmentRoutes');
new departmentRoutes.DepartmentRoutes(app);

import itemsRoutes = require('./app/Item/ItemRoutes');
new itemsRoutes.ItemRoutes(app);

app.get(/\/?.*/, restify.serveStatic({
	directory: __dirname + '/public',
	default: 'index.html',
}));


// start app ===============================================

app.listen(port, () => {
	console.log('Magic happens on port ' + port);	
});										

exports = module.exports = app; 