console.log('Listening on port 3000');

console.log('Loading express');   var express = require('express');
console.log('Loading cjson');     var cjson   = require('cjson');
console.log('Loading jade');      var jade    = require('jade');

console.log('Creating app');      var app     = express();

console.log('Initializing db');   var db    = require('./db.js');

var port = 3000;

console.log('Start to listen port ' + port);
app.listen(port);

console.log('Loading and generating configurations');
app.configure(function(){
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.cookieParser());
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(__dirname + '/public'));
});
var config  = cjson.load("./config.json");
config.page = cjson.load("./pages.json");

console.log('config', config);

console.log('Starting to generate variables');
console.log('Loading block.js');    var block = require('./block.js');
console.log('Loading element.js');  var element  = require('./element.js'),   elements  = db.get(config, "elements");
console.log('Loading template.js'); var template  = require('./template.js'), templates = db.get(config, "templates");
console.log('Loading page.js');     var page  = require('./page.js'),         pages     = db.get(config, "pages");

var page_id = 0;

console.log('block', block);
console.log('page_id', page_id);


jadeOptions = {};
app.get('/', function(req, res){
	res.render("index", {	elementsJson:  elements,
							templatesJson: templates,
							blockJson:     block,
							page_idJson:   page_id,
							pagesJson:     pages});
});
app.get('/test', function(req, res){
	console.log('Request form', req.ip, req.headers);
	res.render("test");
	pages[0].render(req, res);
});
