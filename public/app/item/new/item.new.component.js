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
    var ItemNewComponent;
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
            ItemNewComponent = (function () {
                function ItemNewComponent(http, router) {
                    var _this = this;
                    this.http = http;
                    this.router = router;
                    this.item = { name: '', description: '' };
                    this.createCallback = function (data) {
                        if (data.success) {
                            _this.router.parent.navigate(['/Items']);
                        }
                    };
                    this.logError = function (err) {
                        console.log(err);
                    };
                }
                ItemNewComponent.prototype.save = function (item) {
                    var _this = this;
                    this.itemService.create(item).subscribe(function (data) { return _this.createCallback(data.json()); }, function (err) { return _this.logError(err); });
                };
                ItemNewComponent.prototype.ngOnInit = function () {
                    this.itemService = new Item_1.Item(this.http);
                };
                ItemNewComponent = __decorate([
                    core_1.Component({
                        selector: 'new-item',
                        directives: [],
                        inputs: [],
                        templateUrl: './app/public/item/_item.html'
                    }),
                    __param(0, core_1.Inject(http_1.Http)),
                    __param(1, core_1.Inject(router_1.Router))
                ], ItemNewComponent);
                return ItemNewComponent;
            })();
            exports_1("ItemNewComponent", ItemNewComponent);
        }
    }
});
//# sourceMappingURL=item.new.component.js.map