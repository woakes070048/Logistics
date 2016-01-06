System.register(['angular2/core', 'angular2/http', '../classes/STATIC'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, http_1, STATIC_1;
    var Employee;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (STATIC_1_1) {
                STATIC_1 = STATIC_1_1;
            }],
        execute: function() {
            Employee = (function () {
                function Employee(http) {
                    var _this = this;
                    this.http = http;
                    this.list = function () {
                        _this.http.get(STATIC_1.STATIC.getEmployeesPath)
                            .subscribe(function (data) { _this.DataCallback; }, function (err) { return err; });
                    };
                    this.DataCallback = function (data) {
                    };
                    this.ErrCallback = function (err) {
                    };
                }
                Employee = __decorate([
                    __param(0, core_1.Inject(http_1.Http))
                ], Employee);
                return Employee;
            })();
            exports_1("Employee", Employee);
        }
    }
});
//# sourceMappingURL=Employee.js.map