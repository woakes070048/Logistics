System.register(['angular2/core', 'angular2/http', 'angular2/router', '../../classes/Employee', '../../classes/departments'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, http_1, router_1, Employee_1, departments_1;
    var EmployeeUpdateComponent;
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
            function (departments_1_1) {
                departments_1 = departments_1_1;
            }],
        execute: function() {
            EmployeeUpdateComponent = (function () {
                function EmployeeUpdateComponent(http, params, location, router) {
                    var _this = this;
                    this.http = http;
                    this.params = params;
                    this.location = location;
                    this.router = router;
                    this.employee = { firstname: '', lastname: '', username: '' };
                    this.stateList = [];
                    this.departments = [];
                    this.firstnameValid = true;
                    this.lastnameValid = true;
                    this.save = function (e) {
                        if (_this.checkFormValid()) {
                            _this.employeeService.update(e)
                                .subscribe(function (data) { return _this.updateEmployeeCallback(data.json()); }, function (err) { return _this.errorCallback(err); });
                        }
                    };
                    this.updateEmployeeCallback = function (data) {
                        if (data.success) {
                            _this.router.parent.navigate(['/Employees']);
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
                        return _this.firstnameValid && _this.lastnameValid;
                    };
                    this.statelistCallback = function (data) {
                        _this.stateList = data;
                    };
                    this.getEmployeeCallback = function (data) {
                        _this.employee = data;
                    };
                    this.getDepartmentsCallback = function (data) {
                        _this.departments = data;
                    };
                    this.errorCallback = function (err) {
                        console.log(err);
                    };
                }
                EmployeeUpdateComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.username = this.params.get('username');
                    this.employeeService = new Employee_1.Employee(this.http, this.username);
                    this.employeeService.get().subscribe(function (data) { return _this.getEmployeeCallback(data.json()); }, function (err) { return _this.errorCallback(err); });
                    this.http.get('/api/v1/States').subscribe(function (data) { return _this.statelistCallback(data.json()); }, function (err) { return _this.errorCallback(err); });
                    this.departmentService = new departments_1.Departments(this.http);
                    this.departmentService.list().subscribe(function (data) { return _this.getDepartmentsCallback(data.json()); }, function (err) { return _this.errorCallback(err); });
                };
                EmployeeUpdateComponent = __decorate([
                    core_1.Component({
                        selector: 'update-employee',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        inputs: [],
                        templateUrl: './app/employee/_employee.html'
                    }),
                    __param(0, core_1.Inject(http_1.Http)),
                    __param(1, core_1.Inject(router_1.RouteParams)),
                    __param(2, core_1.Inject(router_1.Location)),
                    __param(3, core_1.Inject(router_1.Router))
                ], EmployeeUpdateComponent);
                return EmployeeUpdateComponent;
            })();
            exports_1("EmployeeUpdateComponent", EmployeeUpdateComponent);
        }
    }
});
//# sourceMappingURL=employee.update.component.js.map