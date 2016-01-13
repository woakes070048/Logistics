System.register(['angular2/core', 'angular2/http', '../../classes/Item'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, http_1, Item_1;
    var ItemListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Item_1_1) {
                Item_1 = Item_1_1;
            }],
        execute: function() {
            ItemListComponent = (function () {
                function ItemListComponent(http) {
                    var _this = this;
                    this.http = http;
                    this.delete = function (evt, itemID) {
                        evt.preventDefault();
                        _this.itemService.deleteItem(itemID).subscribe(function (data) { return _this.deleteCallback(data.json()); }, function (err) { return _this.logError(err); });
                    };
                    this.deleteCallback = function (data) {
                        if (data.success) {
                            _this.getItems();
                        }
                    };
                    this.getItems = function () {
                        _this.itemService.all().subscribe(function (data) { return _this.getItemsCallback(data.json()); }, function (err) { return _this.logError(err); });
                    };
                    this.getItemsCallback = function (data) {
                        _this.items = data;
                    };
                    this.logError = function (err) {
                        console.log(err);
                    };
                }
                ItemListComponent.prototype.ngOnInit = function () {
                    this.itemService = new Item_1.Item(this.http);
                    this.getItems();
                };
                ItemListComponent = __decorate([
                    core_1.Component({
                        selector: 'items',
                        directives: [],
                        inputs: [],
                        templateUrl: './app/item/list/item.list.component.html'
                    }),
                    __param(0, core_1.Inject(http_1.Http))
                ], ItemListComponent);
                return ItemListComponent;
            })();
            exports_1("ItemListComponent", ItemListComponent);
        }
    }
});
//# sourceMappingURL=item.list.component.js.map