var mongoose = require('mongoose');
var ModelBase = (function () {
    function ModelBase() {
        this._mongoose = mongoose.connect('mongodb://localhost/logistics');
        this.db = this._mongoose.connection;
        this.db.on('error', console.error.bind(console, 'employee connection error:'));
    }
    return ModelBase;
})();
module.exports = ModelBase;
//# sourceMappingURL=ModelBase.js.map