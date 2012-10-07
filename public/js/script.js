function generateSite(page_id) {
	window.page_id = page_id||window.page_id;
	return window.site = {
		width: (window.block.size + 2*window.block.margin) * window.pages[window.page_id].width
	};
}
function generatePage() {
	$("#content").empty();
	$.each(window.pages[window.page_id].elements, function(i){
		var a = $("<article>").attr("data-element-id", i).attr("id", "element_"+i).html(this.html);
		for(i in this.classes)
			a.addClass(this.classes[i]);

		$("#content").append(a);
	});
	renderPage();
}
function renderPage() {
	console.log("renderPage()");
	window.site.width = (window.block.rsize) * window.pages[window.page_id].width;

	var s = window.pages[window.page_id],
		sx = parseInt(($(window).width() - window.site.width) / 2),
		sy = 100,
		wbm = window.block.margin,
		wbs = window.block.size,
		wbp = window.block.padding;
	$.each(window.pages[window.page_id].elements, function(i){
		console.log("renderPage()","element "+i, this);
		var e = $("#element_"+i)
			.css({	"position": "absolute",
					"left":     (sx+wbm+wbs*this.x)+"px",
					"top":      (sy+wbm+wbs*this.y)+"px",
					"padding":  (wbp)+"px",
					"width":    (wbs*this.width-wbm-2*wbp)+"px",
					"height":   (wbs*this.height-wbm-2*wbp)+"px"});
	});
}
function parsePages(_arr) {
	console.log("Parsing pages", _arr);
	for(i in _arr) {
		for(e in _arr[i].elements) {
			_arr[i].elements[e] = window.elements[_arr[i].elements[e]];
		}
	}
	console.log("Parsing pages", _arr);
	return _arr;
}
function parseElements(_arr) {
	console.log("Parsing elements", _arr);
	for(i in _arr) {
		_arr[i].classes.push("element");
	}
	return _arr;
}
function parseBlock(_arr) {
console.log("Parsing block", _arr);
	_arr["rsize"] = _arr.size;//+_arr.margin*2
	return _arr;
}

$(function(){
	generatePage();
	$(window).resize(function(){
		generatePage();
	});
	$(".element").live("mouseover", function(){
		$(this).addClass("hover");
	}).live("mouseout", function(){
		$(this).removeClass("hover");
	});

});

