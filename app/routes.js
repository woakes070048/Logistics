var employeeModel = require('./EmployeeModel');
var request = require('request');
var Routes = (function () {
    function Routes(app) {
        var _this = this;
        this.app = app;
        this.employee = new employeeModel.EmployeeModel();
        this.config = require('../private/config.json');
        app.get('/api/v1/Employees', function (req, res) {
            _this.employee.All(function (err, data) {
                if (err) {
                    res.send({ err: err });
                }
                res.send(data);
            });
        });
        app.get('/api/v1/Employee/:username', function (req, res) {
            _this.employee.Get(req.params.username, function (err, data) {
                if (err) {
                    res.send({ err: err });
                }
                res.send(data);
            });
        });
        app.post('/api/v1/Employee/:username/Update', function (req, res) {
            var username = req.params.username;
            _this.employee.Update(username, req.body, function (err, success) {
                if (err)
                    res.send({ err: err });
                res.send({ success: success });
            });
        });
        app.post('/api/v1/Employee', function (req, res) {
            _this.employee.Create(req.body, function (err, data) {
                if (err)
                    res.send({ err: err });
                res.send({ success: true, data: data });
            });
        });
        app.post('/api/v1/Employee/Delete', function (req, res) {
            _this.employee.Delete(req.body._id, function (err, data) {
                if (err)
                    res.send({ err: err });
                res.send({ success: true, data: data });
            });
        });
        app.post('/api/v1/Employee/Exists', function (req, res) {
            _this.employee.CheckExists(req.body.username, function (err, data) {
                if (err)
                    res.send({ exists: true });
                res.send({ exists: data });
            });
        });
        app.get('/api/v1/States', function (req, res) {
            var url = _this.config.openStates.baseUrl + '/metadata/?apikey=' + _this.config.openStates.apiKey;
            request(url, function (err, response, html) {
                res.send(html);
            });
        });
    }
    return Routes;
})();
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map