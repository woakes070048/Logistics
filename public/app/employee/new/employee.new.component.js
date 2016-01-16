System.register(['angular2/core', 'angular2/http', 'angular2/router', '../../classes/Employee', '../../classes/Departments'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, http_1, router_1, Employee_1, Departments_1;
    var EmployeeNewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Employee_1_1) {
                Employee_1 = Employee_1_1;
            },
            function (Departments_1_1) {
                Departments_1 = Departments_1_1;
            }],
        execute: function() {
            EmployeeNewComponent = (function () {
                function EmployeeNewComponent(http, router) {
                    var _this = this;
                    this.http = http;
                    this.router = router;
                    this.employee = { firstname: '', lastname: '', username: '' };
                    this.stateList = [];
                    this.usernameTaken = false;
                    this.firstnameValid = true;
                    this.lastnameValid = true;
                    this.usernameValid = true;
                    this.save = function (e) {
                        if (_this.checkFormValid()) {
                            _this.employeeService.create(e).subscribe(function (data) { return _this.newEmployeeDataCallback(data.json()); }, function (err) { return _this.errorCallback(err); });
                        }
                    };
                    this.checkInputValid = function (input, value) {
                        if (value.length > 0) {
                            _this[input + 'Valid'] = true;
                        }
                        else {
                            _this[input + 'Valid'] = false;
                        }
                    };
                    this.checkFormValid = function () {
                        _this.firstnameValid = _this.employee.firstname.length > 0;
                        _this.lastnameValid = _this.employee.lastname.length > 0;
                        _this.usernameValid = _this.employee.username.length > 0;
                        return _this.firstnameValid && _this.lastnameValid && _this.usernameValid;
                    };
                    this.checkUsernameExists = function (username) {
                        if (username.length > 0) {
                            _this.employeeService.checkUsernameExists(username).subscribe(function (data) { return _this.checkUsernameCallback(data.json()); }, function (err) { return _this.errorCallback(err); });
                        }
                        _this.checkInputValid('username', _this.employee.username);
                    };
                    this.checkUsernameCallback = function (data) {
                        if (data.exists) {
                            _this.usernameTaken = true;
                        }
                        else {
                            _this.usernameTaken = false;
                        }
                    };
                    this.newEmployeeDataCallback = function (data) {
                        if (data.success) {
                            _this.router.navigate(['Employees']);
                        }
                    };
                    this.statelistCallback = function (data) {
                        _this.stateList = JSON.parse(data.body);
                    };
                    this.getDepartmentsCallback = function (data) {
                        _this.departments = data;
                    };
                    this.errorCallback = function (e) {
                        console.log(e);
                    };
                }
                EmployeeNewComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.employeeService = new Employee_1.Employee(this.http);
                    this.http.get('/api/v1/States').subscribe(function (data) { return _this.statelistCallback(data.json()); }, function (err) { return _this.errorCallback(err); });
                    this.departmentService = new Departments_1.Departments(this.http);
                    this.departmentService.list().subscribe(function (data) { return _this.getDepartmentsCallback(data.json()); }, function (err) { return _this.errorCallback(err); });
                };
                EmployeeNewComponent = __decorate([
                    core_1.Component({
                        selector: 'new-employee',
                        directives: [],
                        inputs: ['employee'],
                        templateUrl: './app/employee/_employee.html'
                    }),
                    __param(0, core_1.Inject(http_1.Http)),
                    __param(1, core_1.Inject(router_1.Router))
                ], EmployeeNewComponent);
                return EmployeeNewComponent;
            })();
            exports_1("EmployeeNewComponent", EmployeeNewComponent);
        }
    }
});
//# sourceMappingURL=employee.new.component.js.map