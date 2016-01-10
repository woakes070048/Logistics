var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));
var routes = require('./app/Routes');
var r = new routes.Routes(app);
app.listen(port);
console.log('Magic happens on port ' + port);
exports = module.exports = app;
//# sourceMappingURL=server.js.map