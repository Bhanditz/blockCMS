function generatePage() {
	window.site = {
		width: (window.block.size + 2*window.block.margin) * window.tpage.width
	};
	$("#content").empty();
	$.each(window.tpage.elements, function(i){
		var a = $("<article>").attr("data-element-id", i).attr("id", "element_"+i).html(this.html);
		for(i in this.classes)
			a.addClass(this.classes[i]);

		$("#content").append(a);
	});
	renderPage();
}
function renderPage() {
	console.log("renderPage()");
	window.site.width = (window.block.size) * window.tpage.width;

	var s = window.tpage,
		sx = parseInt(($(window).width() - window.site.width) / 2),
		sy = 100,
		wbm = window.block.margin,
		wbs = window.block.size,
		wbp = window.block.padding;
	$.each(window.tpage.elements, function(i){
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

