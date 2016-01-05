System.register([], function(exports_1) {
    var AuthInterceptorService;
    return {
        setters:[],
        execute: function() {
            AuthInterceptorService = (function () {
                function AuthInterceptorService() {
                    this.request = function (config) {
                        config.headers = config.headers || {};
                        var authData = localStorage.getItem('authToken');
                        if (authData) {
                            config.headers.Authorization = 'Bearer' + authData;
                        }
                        return config;
                    };
                }
                return AuthInterceptorService;
            })();
            exports_1("AuthInterceptorService", AuthInterceptorService);
        }
    }
});
//# sourceMappingURL=AuthInterceptorService.js.map