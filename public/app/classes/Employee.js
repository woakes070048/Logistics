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
                function Employee(http, username) {
                    var _this = this;
                    this.http = http;
                    this.username = username;
                    this.list = function () {
                        return _this.http.get(STATIC_1.STATIC.getEmployeesPath);
                    };
                    this.get = function () {
                        return _this.http.get('/api/v1/Employee/' + _this.username);
                    };
                    this.create = function (e) {
                        var body = '&firstname=' + e.firstname +
                            '&lastname=' + e.lastname +
                            '&username=' + e.username +
                            '&address1=' + e.address1 +
                            '&address2=' + e.address2 +
                            '&city=' + e.city +
                            '&state=' + e.state +
                            '&zip=' + e.zip;
                        var headers = new http_1.Headers();
                        headers.append('Content-Type', 'application/x-www-form-urlencoded');
                        return _this.http.post('/api/v1/Employee', body, { headers: headers });
                    };
                    this.update = function (e) {
                        var body = '_id=' + e._id +
                            '&firstname=' + e.firstname +
                            '&lastname=' + e.lastname +
                            '&username=' + e.username +
                            '&address1=' + e.address1 +
                            '&address2=' + e.address2 +
                            '&city=' + e.city +
                            '&state=' + e.state +
                            '&zip=' + e.zip;
                        var headers = new http_1.Headers();
                        headers.append('Content-Type', 'application/x-www-form-urlencoded');
                        return _this.http.post('/api/v1/Employee/' + _this.username + '/Update', body, { headers: headers });
                    };
                    this.delete = function (id) {
                        var body = '_id=' + id;
                        var headers = new http_1.Headers();
                        headers.append('Content-Type', 'application/x-www-form-urlencoded');
                        return _this.http.post('/api/v1/Employee/Delete', body, { headers: headers });
                    };
                    this.checkUsernameExists = function (username) {
                        var body = 'username=' + username;
                        var headers = new http_1.Headers();
                        headers.append('Content-Type', 'application/x-www-form-urlencoded');
                        return _this.http.post('/api/v1/Employee/Exists', body, { headers: headers });
                    };
                }
                return Employee;
            })();
            exports_1("Employee", Employee);
        }
    }
});
//# sourceMappingURL=Employee.js.map