var Auth = (function () {
    function Auth() {
    }
    Auth.prototype.login = function (username, password, callback) {
        callback(null, { username: username });
    };
    return Auth;
})();
exports.Auth = Auth;
//# sourceMappingURL=Auth.js.map