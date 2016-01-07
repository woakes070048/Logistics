System.register(['angular2/core', 'angular2/http', 'angular2/router', '../../classes/Employee'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, http_1, router_1, Employee_1;
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
            }],
        execute: function() {
            EmployeeUpdateComponent = (function () {
                function EmployeeUpdateComponent(http, params) {
                    var _this = this;
                    this.http = http;
                    this.params = params;
                    this.updateEmployee = function (e) {
                        _this.employeeService.update(e).subscribe(function (data) { return _this.employeeUpdateCallback(data); });
                    };
                    this.employeeUpdateCallback = function (data) {
                        if (data.success) {
                        }
                    };
                }
                EmployeeUpdateComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var _employeeID = parseInt(this.params.get('employeeID'));
                    if (!isNaN(_employeeID)) {
                        this.employeeID = _employeeID;
                    }
                    this.employeeService = new Employee_1.Employee(this.http, this.employeeID);
                    this.employeeService.get().subscribe(function (data) { _this.employee = data.json(); });
                };
                EmployeeUpdateComponent = __decorate([
                    core_1.Component({
                        selector: 'update-employee',
                        directives: [],
                        inputs: ['employeeID'],
                        templateUrl: './app/employee/update/employee.update.component.html'
                    }),
                    __param(0, core_1.Inject(http_1.Http)),
                    __param(1, core_1.Inject(router_1.RouteParams))
                ], EmployeeUpdateComponent);
                return EmployeeUpdateComponent;
            })();
            exports_1("EmployeeUpdateComponent", EmployeeUpdateComponent);
        }
    }
});
//# sourceMappingURL=employee.update.component.js.map