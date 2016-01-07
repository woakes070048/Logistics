var mongodb = require('mongodb');
var EmployeeModel = (function () {
    function EmployeeModel() {
        var _this = this;
        this.All = function (callback) {
            _this.client.collection('employees', function (error, docs) {
                if (error) {
                    console.error(error);
                    callback(error);
                }
                docs.find({}, { limit: 100 }).toArray(function (err, docs) {
                    if (error) {
                        console.error(error);
                        callback(err);
                    }
                    callback(null, docs);
                });
            });
        };
        var dbname = 'logistics';
        var host = 'localhost';
        var port = 27017;
        this.server = new mongodb.Server(host, port, { auto_reconnect: true });
        this.client = new mongodb.Db(dbname, this.server);
        this.client.open(function (err) {
            if (err) {
                console.log(err);
            }
        });
    }
    return EmployeeModel;
})();
exports.EmployeeModel = EmployeeModel;
//# sourceMappingURL=EmployeeModel.js.map