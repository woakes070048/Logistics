System.register(['angular2/http'], function(exports_1) {
    var http_1;
    var Departments;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            Departments = (function () {
                function Departments(http) {
                    var _this = this;
                    this.http = http;
                    this.list = function () {
                        return _this.http.get('/api/v1/Departments');
                    };
                    this.new = function (department) {
                        var body = 'title=' + department.title;
                        var headers = new http_1.Headers();
                        headers.append('Content-Type', 'application/x-www-form-urlencoded');
                        return _this.http.post('/api/v1/Department/New', body, { headers: headers });
                    };
                    this.update = function (department) {
                        var body = '_id=' + department._id + '&title=' + department.title;
                        var headers = new http_1.Headers();
                        headers.append('Content-Type', 'application/x-www-form-urlencoded');
                        return _this.http.post('/api/v1/Department/Update', body, { headers: headers });
                    };
                    this.delete = function (id) {
                        var body = '_id=' + id;
                        var headers = new http_1.Headers();
                        headers.append('Content-Type', 'application/x-www-form-urlencoded');
                        return _this.http.post('/api/v1/Department/Delete', body, { headers: headers });
                    };
                }
                return Departments;
            })();
            exports_1("Departments", Departments);
        }
    }
});
//# sourceMappingURL=Departments.js.map