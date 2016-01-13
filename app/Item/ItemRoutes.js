var itemModel = require('./ItemModel');
var ItemRoutes = (function () {
    function ItemRoutes(app) {
        var _this = this;
        this.item = new itemModel();
        app.get('/api/v1/Items', function (req, res) {
            _this.item.All(function (err, results) {
                if (err)
                    res.send({ success: false });
                res.send(results);
            });
        });
        app.get('/api/v1/Item/:itemID', function (req, res) {
            _this.item.One(req.params.itemID, function (err, results) {
                if (err)
                    res.send({ success: false });
                res.send(results);
            });
        });
        app.post('/api/v1/Item/New', function (req, res) {
            console.log(req.body);
            _this.item.CreateItem(req.body, function (err, results) {
                res.send({ success: results });
            });
        });
        app.post('/api/v1/Item/Update', function (req, res) {
            _this.item.Update(req.body, function (err, results) {
                res.send({ success: results });
            });
        });
        app.post('/api/v1/Item/Delete', function (req, res) {
            console.log(req.body);
            _this.item.Delete(req.body._id, function (err, results) {
                res.send({ success: results });
            });
        });
    }
    return ItemRoutes;
})();
exports.ItemRoutes = ItemRoutes;
//# sourceMappingURL=ItemRoutes.js.map