System.register(['angular2/http', '../classes/STATIC'], function(exports_1) {
    var http_1, STATIC_1;
    var Employee;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
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
                        var body = '_id=' + e._id + '&firstname=' + e.firstname + '&lastname=' + e.lastname + '&employeeID=' + e.employeeID;
                        var headers = new http_1.Headers();
                        headers.append('Content-Type', 'application/x-www-form-urlencoded');
                        return _this.http.post('/api/v1/Employee/' + _this.employeeID + '/Update', body, { headers: headers });
                    };
                }
                return Employee;
            })();
            exports_1("Employee", Employee);
        }
    }
});
//# sourceMappingURL=Employee.js.map