exports.new = function(width, elements) {
	s = {}
	s.width    = width;
	s.elements = elements;
	s.render = function(req, res) {
		res.send("Foobar");
	}
	
	return s;
}

