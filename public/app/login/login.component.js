System.register(['angular2/core', 'angular2/http', '../classes/UserCreds', '../classes/Auth'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, http_1, UserCreds_1, Auth_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (UserCreds_1_1) {
                UserCreds_1 = UserCreds_1_1;
            },
            function (Auth_1_1) {
                Auth_1 = Auth_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(http) {
                    this.http = http;
                    this.user = new UserCreds_1.UserCreds();
                    this.auth = new Auth_1.Auth(this.http);
                }
                LoginComponent.prototype.ngOnInit = function () {
                    this.auth.logout();
                };
                LoginComponent.prototype.login = function (user) {
                    if (this.auth.login(user)) {
                    }
                    else {
                    }
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login-component',
                        templateUrl: './app/login/login.html',
                        inputs: ['username', 'password']
                    }),
                    __param(0, core_1.Inject(http_1.Http))
                ], LoginComponent);
                return LoginComponent;
            })();
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map