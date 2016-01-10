var express = require('express');
var request = require('request');
var config = require('./private/config.json');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var routes = require('./app/routes');
var employeeModel = require('./app/EmployeeModel');
var port = process.env.PORT || 3000;
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));
var Routes = new routes.Routes();
var employee = new employeeModel.EmployeeModel();
app.post('/api/v1/Token', Routes.Token);
app.get('/api/v1/Employees', function (req, res) {
    employee.All(function (err, data) {
        if (err) {
            res.send({ err: err });
        }
        res.send(data);
    });
});
app.get('/api/v1/Employee/:username', function (req, res) {
    employee.Get(req.params.username, function (err, data) {
        if (err) {
            res.send({ err: err });
        }
        res.send(data);
    });
});
app.post('/api/v1/Employee/:username/Update', function (req, res) {
    var username = req.params.username;
    employee.Update(username, req.body, function (err, success) {
        if (err)
            res.send({ err: err });
        res.send({ success: success });
    });
});
app.post('/api/v1/Employee', function (req, res) {
    employee.Create(req.body, function (err, data) {
        if (err)
            res.send({ err: err });
        res.send({ success: true, data: data });
    });
});
app.post('/api/v1/Employee/Delete', function (req, res) {
    employee.Delete(req.body._id, function (err, data) {
        if (err)
            res.send({ err: err });
        res.send({ success: true, data: data });
    });
});
app.post('/api/v1/Employee/Exists', function (req, res) {
    employee.CheckExists(req.body.username, function (err, data) {
        if (err)
            res.send({ exists: true });
        res.send({ exists: data });
    });
});
app.get('/api/v1/States', function (req, res) {
    var url = config.openStates.baseUrl + '/metadata/?apikey=' + config.openStates.apiKey;
    request(url, function (err, response, html) {
        res.send(html);
    });
});
app.listen(port);
console.log('Magic happens on port ' + port);
exports = module.exports = app;
//# sourceMappingURL=server.js.map