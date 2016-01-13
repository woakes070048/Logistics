System.register(['angular2/http'], function(exports_1) {
    var http_1;
    var Item;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            Item = (function () {
                function Item(http) {
                    var _this = this;
                    this.http = http;
                    this.all = function () {
                        return _this.http.get('/api/v1/Items');
                    };
                    this.one = function (id) {
                        return _this.http.get('/api/v1/Item/' + id);
                    };
                    this.create = function (item) {
                        var body = 'name=' + item.name +
                            '&description=' + item.description +
                            '&cost=' + item.cost;
                        var headers = new http_1.Headers();
                        headers.append('Content-Type', 'application/x-www-form-urlencoded');
                        return _this.http.post('/api/v1/Item/New', body, { headers: headers });
                    };
                    this.update = function (item) {
                        var body = '_id=' + item._id +
                            '&name=' + item.name +
                            '&description=' + item.description +
                            '&cost=' + item.cost;
                        var headers = new http_1.Headers();
                        headers.append('Content-Type', 'application/x-www-form-urlencoded');
                        return _this.http.post('/api/v1/Item/Update', body, { headers: headers });
                    };
                    this.deleteItem = function (itemID) {
                        var body = '_id=' + itemID;
                        var headers = new http_1.Headers();
                        headers.append('Content-Type', 'application/x-www-form-urlencoded');
                        return _this.http.post('/api/v1/Item/Delete', body, { headers: headers });
                    };
                }
                Item.prototype.ngOnInit = function () { };
                return Item;
            })();
            exports_1("Item", Item);
        }
    }
});
//# sourceMappingURL=Item.js.map