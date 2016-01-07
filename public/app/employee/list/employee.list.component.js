System.register(['angular2/core', 'angular2/http', '../../classes/Employee'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, http_1, Employee_1;
    var EmployeeListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Employee_1_1) {
                Employee_1 = Employee_1_1;
            }],
        execute: function() {
            EmployeeListComponent = (function () {
                function EmployeeListComponent(http) {
                    this.http = http;
                }
                EmployeeListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    new Employee_1.Employee(this.http).list().subscribe(function (data) { return _this.employeeList = data.json(); });
                };
                EmployeeListComponent = __decorate([
                    core_1.Component({
                        selector: 'employees-component',
                        directives: [],
                        templateUrl: './app/employee/list/employee.list.component.html'
                    }),
                    __param(0, core_1.Inject(http_1.Http))
                ], EmployeeListComponent);
                return EmployeeListComponent;
            })();
            exports_1("EmployeeListComponent", EmployeeListComponent);
        }
    }
});
//# sourceMappingURL=employee.list.component.js.map