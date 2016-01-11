var mongodb = require('mongodb');
var mongoose = require('mongoose');
var EmployeeModel = (function () {
    function EmployeeModel() {
        var _this = this;
        this.employeeSchema = new mongoose.Schema({
            username: 'string',
            firstname: 'string',
            lastname: 'string',
            address1: 'string',
            address2: 'string',
            city: 'string',
            state: 'string',
            zip: 'string'
        });
        this.CheckExists = function (username, callback) {
            _this.Employee.find({ username: username }, function (err, docs) {
                if (err)
                    callback(err, true);
                callback(null, docs.length > 0);
            });
        };
        this.All = function (callback) {
            _this.Employee.find(function (err, docs) {
                if (err)
                    callback(err);
                callback(null, docs);
            });
        };
        this.Get = function (username, callback) {
            _this.Employee.findOne({ username: username }, function (err, docs) {
                if (err)
                    callback(err);
                callback(null, docs);
            });
        };
        this.Update = function (username, employee, callback) {
            _this.Employee.update(employee, function (err, result) {
                if (err)
                    callback(err);
                callback(null, true);
            });
        };
        this.Create = function (employee, callback) {
            var newEmployee = new _this.Employee(employee);
            newEmployee.save(function (err, res) {
                if (err)
                    callback(err);
                callback(null, res);
            });
        };
        this.Delete = function (id, callback) {
            _this.Employee.remove({ _id: new mongodb.ObjectID(id) }, function (err) {
                if (err)
                    callback(err);
                callback(null, true);
            });
        };
        this.LogError = function (err) {
            console.log(err);
        };
        this._mongoose = mongoose.connect('mongodb://localhost/logistics');
        this.db = this._mongoose.connection;
        this.db.on('error', console.error.bind(console, 'connection error:'));
        this.Employee = mongoose.model('employees', this.employeeSchema);
    }
    return EmployeeModel;
})();
module.exports = EmployeeModel;
//# sourceMappingURL=EmployeeModel.js.map