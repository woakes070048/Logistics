var restify = require('restify');
var app = restify.createServer({
    name: 'logistics',
    version: '0.0.1'
});
app.pre(restify.pre.sanitizePath());
app.use(restify.acceptParser(app.acceptable));
app.use(restify.queryParser());
app.use(restify.bodyParser());
var port = process.env.PORT || 3000;
var base = require('./app/ModelBase');
var db = new base();
var employeeRoutes = require('./app/Employee/EmployeeRoutes');
new employeeRoutes.EmployeeRoutes(app);
var departmentRoutes = require('./app/Department/DepartmentRoutes');
new departmentRoutes.DepartmentRoutes(app);
var itemsRoutes = require('./app/Item/ItemRoutes');
new itemsRoutes.ItemRoutes(app);
app.get(/\/?.*/, restify.serveStatic({
    directory: __dirname + '/public',
    default: 'index.html',
}));
app.listen(port, function () {
    console.log('Magic happens on port ' + port);
});
exports = module.exports = app;
//# sourceMappingURL=server.js.map