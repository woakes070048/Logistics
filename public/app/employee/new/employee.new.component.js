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
            }],
        execute: function() {
            EmployeeNewComponent = (function () {
                function EmployeeNewComponent(http, router) {
                    var _this = this;
                    this.http = http;
                    this.router = router;
                    this.save = function (e) {
                        _this.employeeService.create(e).subscribe(function (data) { return _this.newEmployeeDataCallback(data.json()); }, function (err) { return _this.errorCallback(err); });
                    };
                    this.errorCallback = function (e) {
                        console.log(e);
                    };
                    this.newEmployeeDataCallback = function (data) {
                        if (data.success) {
                            _this.router.parent.navigate(['/Employees']);
                        }
                    };
                    this.employee = {
                        firstname: '',
                        lastname: '',
                        employeeID: 0
                    };
                }
                EmployeeNewComponent.prototype.ngOnInit = function () {
                    this.employeeService = new Employee_1.Employee(this.http);
                };
                EmployeeNewComponent = __decorate([
                    core_1.Component({
                        selector: 'new-employee',
                        directives: [],
                        inputs: ['employee'],
                        templateUrl: './app/employee/new/employee.new.component.html'
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