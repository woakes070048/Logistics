System.register(['angular2/core', 'angular2/http', '../classes/Static'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, http_1, Static_1;
    var EmployeesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Static_1_1) {
                Static_1 = Static_1_1;
            }],
        execute: function() {
            EmployeesComponent = (function () {
                function EmployeesComponent(http) {
                    this.http = http;
                }
                EmployeesComponent.prototype.getEmployees = function () {
                    var _this = this;
                    this.http.get(Static_1.STATIC.getEmployeesPath)
                        .subscribe(function (data) { return _this.GetEmployeesCallback(data); }, function (err) { console.log(err); }, function () { console.log('done'); });
                };
                EmployeesComponent.prototype.ngOnInit = function () {
                    this.getEmployees();
                };
                EmployeesComponent.prototype.GetEmployeesCallback = function (res) {
                    this.employeeList = JSON.parse(res._body);
                    console.log(this.employeeList);
                };
                EmployeesComponent = __decorate([
                    core_1.Component({
                        selector: 'employees-component',
                        directives: [],
                        templateUrl: './app/employee/employees.component.html'
                    }),
                    __param(0, core_1.Inject(http_1.Http))
                ], EmployeesComponent);
                return EmployeesComponent;
            })();
            exports_1("EmployeesComponent", EmployeesComponent);
        }
    }
});
//# sourceMappingURL=employees.component.js.map