var mongoose = require('mongoose');
var mongodb = require('mongodb');
var ItemModel = (function () {
    function ItemModel() {
        var _this = this;
        this.itemSchema = new mongoose.Schema({
            _id: 'string',
            name: 'string',
            description: 'string',
            cost: 'description'
        });
        this.All = function (callback) {
            _this.Item.find(function (err, results) {
                if (err) {
                    console.log(err);
                    callback(err);
                }
                callback(null, results);
            });
        };
        this.One = function (id, callback) {
            _this.Item.findOne({ _id: new mongodb.ObjectID(id) }, function (err, results) {
                if (err) {
                    console.log(err);
                    callback(err);
                }
                callback(null, results);
            });
        };
        this.CreateItem = function (item, callback) {
            var newItem = new _this.Item(item);
            newItem.save(function (err, results) {
                if (err) {
                    console.log(err);
                    callback(err, false);
                }
                callback(null, true);
            });
        };
        this.Update = function (item, callback) {
            _this.Item.update(item, function (err, results) {
                if (err) {
                    console.log(err);
                    callback(err, false);
                }
                callback(null, true);
            });
        };
        this.Delete = function (id, callback) {
            _this.Item.remove({ _id: new mongodb.ObjectID(id) }, function (err) {
                if (err) {
                    console.log(err);
                    callback(err, false);
                }
                callback(null, true);
            });
        };
        this.Item = mongoose.model('item', this.itemSchema);
    }
    return ItemModel;
})();
module.exports = ItemModel;
//# sourceMappingURL=ItemModel.js.map