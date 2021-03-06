console.log('Loading cjson');
var cjson = require('cjson');

exports.get = function(config, target) {
	console.log(config);
	switch(target) {
		case "pages":
			return cjson.load("./pages.json");
		case "templates":
			return cjson.load("./templates.json");
		case "elements":
			return cjson.load("./elements.json");
		case "hashlist":
			return cjson.load("./hashlist.json");
	}
	return null;
}
