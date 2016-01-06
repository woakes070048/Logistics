var _MongoClient = require('mongodb');
var db = (function () {
    function db() {
        var _this = this;
        this.MongoClient = _MongoClient.MongoClient;
        this.getAllEmployees = function () {
            var ret;
            _this._db.collection('employees').find({}).toArray(function (err, docs) {
                ret = docs;
                db.close();
            });
            return ret;
        };
        this.logError = function (err, db) {
            console.log(err);
        };
        this.MongoClient.connect("mongodb://localhost:27017/logistics", function (err, db) {
            if (err) {
                this.logError(err);
            }
            this._db = db;
        });
    }
    return db;
})();
exports.db = db;
//# sourceMappingURL=db.js.map