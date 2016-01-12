System.register(['angular2/platform/browser', 'angular2/core', 'angular2/http', 'angular2/router', './login/login.component', './about/about.component', './default/default.component', './employee/list/employee.list.component', './employee/update/employee.update.component', './employee/new/employee.new.component', './admin/departments/departments.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var browser_1, core_1, http_1, router_1, login_component_1, about_component_1, default_component_1, employee_list_component_1, employee_update_component_1, employee_new_component_1, departments_component_1;
    var app;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (default_component_1_1) {
                default_component_1 = default_component_1_1;
            },
            function (employee_list_component_1_1) {
                employee_list_component_1 = employee_list_component_1_1;
            },
            function (employee_update_component_1_1) {
                employee_update_component_1 = employee_update_component_1_1;
            },
            function (employee_new_component_1_1) {
                employee_new_component_1 = employee_new_component_1_1;
            },
            function (departments_component_1_1) {
                departments_component_1 = departments_component_1_1;
            }],
        execute: function() {
            app = (function () {
                function app(router) {
                    this.router = router;
                    this.isActive = this.router.lastNavigationAttempt;
                }
                app = __decorate([
                    core_1.Component({
                        selector: 'app',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: './app/app.html'
                    }),
                    router_1.RouteConfig([
                        { path: '/Login', component: login_component_1.LoginComponent, as: 'Login' },
                        { path: '/', component: default_component_1.defaultComponent, as: 'Home' },
                        { path: '/About', component: about_component_1.aboutComponent, as: 'About' },
                        { path: '/Employees', component: employee_list_component_1.EmployeeListComponent, as: 'Employees' },
                        { path: '/Employee', component: employee_new_component_1.EmployeeNewComponent, as: 'NewEmployee' },
                        { path: '/Employee/:username/Update', component: employee_update_component_1.EmployeeUpdateComponent, as: 'Update Employee' },
                        { path: '/Admin/Departments', component: departments_component_1.DepartmentsComponent, as: 'Admin_Departments' }
                    ]),
                    __param(0, core_1.Inject(router_1.Router))
                ], app);
                return app;
            })();
            exports_1("app", app);
            browser_1.bootstrap(app, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
        }
    }
});
//# sourceMappingURL=app.js.map