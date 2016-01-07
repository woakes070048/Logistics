System.register(['../classes/STATIC'], function(exports_1) {
    var STATIC_1;
    var Employee;
    return {
        setters:[
            function (STATIC_1_1) {
                STATIC_1 = STATIC_1_1;
            }],
        execute: function() {
            Employee = (function () {
                function Employee(http, employeeID) {
                    var _this = this;
                    this.http = http;
                    this.employeeID = employeeID;
                    this.list = function () {
                        return _this.http.get(STATIC_1.STATIC.getEmployeesPath);
                    };
                    this.get = function () {
                        return _this.http.get('/api/v1/Employee/' + _this.employeeID);
                    };
                    this.update = function (e) {
                        return _this.http.post('/api/v1/Employee/' + _this.employeeID + '/Update', null, { employee: e });
                    };
                }
                return Employee;
            })();
            exports_1("Employee", Employee);
        }
    }
});
//# sourceMappingURL=Employee.js.map