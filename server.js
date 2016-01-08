var express = require('express');
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
app.get('/api/v1/Employee/:employeeID', function (req, res) {
    var employeeID = parseInt(req.params.employeeID);
    if (!isNaN(employeeID)) {
        employee.Get(employeeID, function (err, data) {
            if (err) {
                res.send({ err: err });
            }
            res.send(data);
        });
    }
    else {
        res.send({ err: new Error('employeeID must be a number') });
    }
});
app.post('/api/v1/Employee/:employeeID/Update', function (req, res) {
    var employeeID = parseInt(req.params.employeeID);
    if (!isNaN(employeeID)) {
        employee.Update(employeeID, req.body, function (err, success) {
            if (err)
                res.send({ err: err });
            res.send({ success: success });
        });
    }
    else {
        res.send({ err: new Error('employeeID must be a number') });
    }
});
app.listen(port);
console.log('Magic happens on port ' + port);
exports = module.exports = app;
//# sourceMappingURL=server.js.map