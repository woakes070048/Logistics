var Auth = require('./auth');
var Routes = (function () {
    function Routes() {
        var _this = this;
        this.Token = function (req, res) {
            _this.req = req;
            _this.res = res;
            var auth = Auth.Auth;
            auth.prototype.login(req.body.username, req.body.password, _this.loginCallback);
        };
        this.loginCallback = function (err, data) {
            if (err) {
                _this.res.send({ success: false });
            }
            else {
                _this.res.send({ success: true });
            }
        };
    }
    return Routes;
})();
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map