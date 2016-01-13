var mongoose = require('mongoose');
var mongodb = require('mongodb');
var DepartmentModel = (function () {
    function DepartmentModel() {
        var _this = this;
        this.departmentSchema = new mongoose.Schema({
            title: 'string'
        });
        this.getDepartments = function (callback) {
            _this.Department.find(function (err, results) {
                if (err) {
                    _this.logError(err);
                    callback(err);
                }
                callback(null, results);
            });
        };
        this.getDepartment = function (department, callback) {
            _this.Department.findOne({ _id: new mongodb.ObjectID(department._id) }, function (err, result) {
                if (err) {
                    _this.logError(err);
                    callback(err);
                }
                callback(null, result);
            });
        };
        this.createDepartment = function (department, callback) {
            var newDepartment = new _this.Department(department);
            newDepartment.save(function (err, result) {
                if (err) {
                    _this.logError(err);
                    callback(err, false);
                }
                callback(null, true);
            });
        };
        this.updateDepartment = function (department, callback) {
            _this.Department.update(department, function (err, result) {
                if (err) {
                    _this.logError(err);
                    callback(err, false);
                }
                callback(null, true);
            });
        };
        this.deleteDepartment = function (id, callback) {
            _this.Department.remove({ _id: new mongodb.ObjectID(id) }, function (err) {
                if (err) {
                    _this.logError;
                    callback(err, false);
                }
                callback(null, true);
            });
        };
        this.logError = function (err) {
            console.log(err);
        };
        this.Department = mongoose.model('departments', this.departmentSchema);
    }
    return DepartmentModel;
})();
module.exports = DepartmentModel;
//# sourceMappingURL=DepartmentModel.js.map