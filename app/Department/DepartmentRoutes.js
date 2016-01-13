var departmentModel = require('./DepartmentModel');
var request = require('request');
var DepartmentRoutes = (function () {
    function DepartmentRoutes(app) {
        var _this = this;
        this.department = new departmentModel();
        app.get('/api/v1/Departments', function (req, res) {
            _this.department.getDepartments(function (err, results) {
                if (err)
                    res.send([]);
                res.send(results);
            });
        });
        app.post('/api/v1/Department/New', function (req, res) {
            _this.department.createDepartment(req.body, function (err, result) {
                if (err)
                    res.send({ success: false });
                res.send({ success: result });
            });
        });
        app.post('/api/v1/Department/Update', function (req, res) {
            _this.department.updateDepartment(req.body, function (err, result) {
                if (err)
                    res.send({ success: false });
                res.send({ success: result });
            });
        });
        app.post('/api/v1/Department/Delete', function (req, res) {
            _this.department.deleteDepartment(req.body._id, function (err, result) {
                if (err)
                    res.send({ success: false });
                res.send({ success: result });
            });
        });
    }
    return DepartmentRoutes;
})();
exports.DepartmentRoutes = DepartmentRoutes;
//# sourceMappingURL=DepartmentRoutes.js.map