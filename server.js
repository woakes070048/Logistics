var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var routes = require('./app/routes');
var auth = require('./app/auth');
var port = process.env.PORT || 3000;
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));
var _auth = new auth.Auth;
var Routes = new routes.Routes();
app.post('/api/v1/Token', Routes.Token);
app.get('/api/v1/GetEmployees', function (req, res) {
    res.send([
        { firstname: 'first', lastname: 'last', employeeID: 1 },
        { firstname: 'first', lastname: 'last', employeeID: 2 },
        { firstname: 'first', lastname: 'last', employeeID: 3 }
    ]);
});
app.listen(port);
console.log('Magic happens on port ' + port);
exports = module.exports = app;
//# sourceMappingURL=server.js.map