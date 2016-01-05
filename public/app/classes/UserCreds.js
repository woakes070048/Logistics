System.register([], function(exports_1) {
    var UserCreds;
    return {
        setters:[],
        execute: function() {
            UserCreds = (function () {
                function UserCreds(_username, _password) {
                    this.username = _username !== undefined ? _username : '';
                    this.password = _password !== undefined ? _password : '';
                }
                return UserCreds;
            })();
            exports_1("UserCreds", UserCreds);
        }
    }
});
//# sourceMappingURL=UserCreds.js.map