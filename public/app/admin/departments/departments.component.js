System.register(['angular2/core', 'angular2/http', '../../classes/Departments'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, http_1, Departments_1;
    var DepartmentsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Departments_1_1) {
                Departments_1 = Departments_1_1;
            }],
        execute: function() {
            DepartmentsComponent = (function () {
                function DepartmentsComponent(http) {
                    var _this = this;
                    this.http = http;
                    this.department = { title: '' };
                    this.departments = [];
                    this.getDepartments = function () {
                        _this.departmentService.list().subscribe(function (data) { return _this.getDepartmentsCallback(data.json()); }, function (err) { return _this.errorCallback(err); });
                    };
                    this.new = function (department) {
                        _this.departmentService.new(department).subscribe(function (data) { return _this.departmentCallback(data.json()); }, function (err) { return _this.errorCallback(err); });
                    };
                    this.update = function (department) {
                        _this.departmentService.update(department).subscribe(function (data) { return _this.departmentCallback(data.json()); }, function (err) { return _this.errorCallback(err); });
                    };
                    this.delete = function (id) {
                        _this.departmentService.delete(id).subscribe(function (data) { return _this.departmentCallback(data.json()); }, function (err) { return _this.errorCallback(err); });
                    };
                    this.departmentCallback = function (data) {
                        if (data.success) {
                            _this.department = { title: '' };
                            _this.getDepartments();
                        }
                    };
                    this.getDepartmentsCallback = function (data) {
                        _this.departments = data;
                    };
                    this.errorCallback = function (err) {
                        console.log(err);
                    };
                }
                DepartmentsComponent.prototype.ngOnInit = function () {
                    this.departmentService = new Departments_1.Departments(this.http);
                    this.getDepartments();
                };
                DepartmentsComponent = __decorate([
                    core_1.Component({
                        selector: 'departments',
                        inputs: [],
                        directives: [],
                        templateUrl: './app/admin/departments/departments.component.html'
                    }),
                    __param(0, core_1.Inject(http_1.Http))
                ], DepartmentsComponent);
                return DepartmentsComponent;
            })();
            exports_1("DepartmentsComponent", DepartmentsComponent);
        }
    }
});
//# sourceMappingURL=departments.component.js.map