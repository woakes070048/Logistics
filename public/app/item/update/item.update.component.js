System.register(['angular2/core', 'angular2/http', 'angular2/router', '../../classes/Item'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, http_1, router_1, Item_1;
    var ItemUpdateComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Item_1_1) {
                Item_1 = Item_1_1;
            }],
        execute: function() {
            ItemUpdateComponent = (function () {
                function ItemUpdateComponent(http, params, location, router) {
                    var _this = this;
                    this.http = http;
                    this.params = params;
                    this.location = location;
                    this.router = router;
                    this.item = { name: '', description: '', cost: 0 };
                    this.getItem = function () {
                        _this.itemService.one(_this.itemID).subscribe(function (data) { return _this.getItemCallback(data.json()); }, function (err) { return _this.logError(err); });
                    };
                    this.save = function (item) {
                        _this.itemService.update(item).subscribe(function (data) { return _this.saveCallback(data.json()); }, function (err) { return _this.logError(err); });
                    };
                    this.saveCallback = function (data) {
                        if (data.success) {
                            _this.router.navigate(['Item_List']);
                        }
                    };
                    this.getItemCallback = function (data) {
                        _this.item = data;
                    };
                    this.logError = function (err) {
                        console.log(err);
                    };
                }
                ItemUpdateComponent.prototype.ngOnInit = function () {
                    this.itemID = this.params.get('itemID');
                    this.itemService = new Item_1.Item(this.http);
                    this.getItem();
                };
                ItemUpdateComponent = __decorate([
                    core_1.Component({
                        selector: 'update-item',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: './app/item/_item.html'
                    }),
                    __param(0, core_1.Inject(http_1.Http)),
                    __param(1, core_1.Inject(router_1.RouteParams)),
                    __param(2, core_1.Inject(router_1.Location)),
                    __param(3, core_1.Inject(router_1.Router))
                ], ItemUpdateComponent);
                return ItemUpdateComponent;
            })();
            exports_1("ItemUpdateComponent", ItemUpdateComponent);
        }
    }
});
//# sourceMappingURL=item.update.component.js.map