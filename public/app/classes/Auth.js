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
    var Auth;
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
            Auth = (function () {
                function Auth(http) {
                    var _this = this;
                    this.http = http;
                    this.login = function (userCreds) {
                        try {
                            var username = userCreds.username, password = userCreds.password;
                            var creds = 'username=' + username + '&password=' + password;
                            var headers = new http_1.Headers();
                            headers.append('Content-Type', 'application/x-www-form-urlencoded');
                            _this.http.post(Static_1.STATIC.loginPath, creds, { headers: headers })
                                .subscribe(function (data) { return _this.saveToken(data); }, function (err) { return _this.logError(err); }, function () { return console.log('auth complete'); });
                        }
                        catch (err) {
                            _this.logError(err);
                            return false;
                        }
                    };
                    this.logout = function () {
                        try {
                            localStorage.removeItem('authToken');
                        }
                        catch (err) {
                            _this.logError(err);
                        }
                    };
                    this.saveToken = function (token) {
                        if (token) {
                            localStorage.setItem('authToken', JSON.parse(token._body).token);
                            return true;
                        }
                        else {
                            _this.logError(new Error('Token is empty'));
                            return false;
                        }
                    };
                    this.logError = function (err) {
                        console.log('could not authenicate', err);
                    };
                }
                Auth = __decorate([
                    core_1.Injectable(),
                    __param(0, core_1.Inject(http_1.Http))
                ], Auth);
                return Auth;
            })();
            exports_1("Auth", Auth);
        }
    }
});
//# sourceMappingURL=Auth.js.map