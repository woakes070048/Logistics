var mongodb = require('mongodb');
var EmployeeModel = (function () {
    function EmployeeModel() {
        var _this = this;
        this.All = function (callback) {
            _this.client.collection('employees', function (error, docs) {
                if (error) {
                    console.error(error);
                    callback(error);
                }
                docs.find({}, { limit: 100 }).toArray(function (err, docs) {
                    if (error) {
                        console.error(error);
                        callback(err);
                    }
                    callback(null, docs);
                });
            });
        };
        this.Get = function (employeeID, callback) {
            _this.client.collection('employees', function (error, docs) {
                if (error) {
                    console.error(error);
                    callback(error);
                }
                docs.find({ 'employeeID': employeeID }, {}).toArray(function (err, results) {
                    if (error) {
                        console.error(error);
                        callback(err);
                    }
                    if (results.length === 1) {
                        callback(null, results[0]);
                    }
                    else {
                        var e = new Error("Too many employees");
                        _this.LogError(e);
                        callback(e);
                    }
                });
            });
        };
        this.Update = function (employeeID, employee, callback) {
            _this.client.collection('employees', function (error, doc) {
                if (error) {
                    _this.LogError(error);
                    callback(error);
                }
                var updateEmployee = employee;
                updateEmployee._id = new mongodb.ObjectID(employee._id);
                updateEmployee.employeeID = parseInt(employee.employeeID);
                doc.save(updateEmployee, function (err, result) {
                    if (err)
                        callback(err);
                    callback(null, true);
                });
            });
        };
        this.LogError = function (err) {
            console.log(err);
        };
        var dbname = 'logistics';
        var host = 'localhost';
        var port = 27017;
        this.server = new mongodb.Server(host, port, { auto_reconnect: true });
        this.client = new mongodb.Db(dbname, this.server);
        this.client.open(function (err) {
            if (err) {
                console.log(err);
            }
        });
    }
    return EmployeeModel;
})();
exports.EmployeeModel = EmployeeModel;
//# sourceMappingURL=EmployeeModel.js.map