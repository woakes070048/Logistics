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
                    this.headers = new http_1.Headers();
                    this.all = function () {
                        return _this.http.get('/api/v1/Items');
                    };
                    this.one = function (id) {
                        return _this.http.get('/api/v1/Item/' + id);
                    };
                    this.create = function (item) {
                        var body = '&name=' + item.name +
                            '&description=' + item.description +
                            '$cost=' + item.cost;
                        return _this.http.post('/api/v1/Item/New', body, { headers: _this.headers });
                    };
                    this.update = function (item) {
                        var body = '_id=' + item._id +
                            '&name=' + item.name +
                            '&description=' + item.description +
                            '$cost=' + item.cost;
                        return _this.http.post('/api/v1/UpdateItem', body, { headers: _this.headers });
                    };
                    this.delete = function (id) {
                        var body = '_id=' + id;
                        return _this.http.post('/api/v1/Item/Delete', body, { headers: _this.headers });
                    };
                }
                Item.prototype.ngOnInit = function () {
                    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
                };
                return Item;
            })();
            exports_1("Item", Item);
        }
    }
});
//# sourceMappingURL=Item.js.map