<?php
	$templates = $elements = $pages = array();
	require_once("functions.php");
	require_once("classes.php");
	require_once("initTEST.php");
	
	foreach($pages[$page_id]["elements"] as $k => $v)
		$pages[$page_id]["elements"][$k] = $elements[$v];

	$tpage = $pages[$page_id];
?><!DOCTYPE html>
<html lang="fi">
	<head>
		<meta name="author" content="Miro 'leonarven' Nieminen" />
		<script type="text/javascript" src="/jquery.min.js"></script>
		<script type="text/javascript">
			function generateSite(page_id) {
				window.page_id = page_id||window.page_id;
				return window.site = {
					width: (window.block.size + 2*window.block.margin) * window.pages[window.page_id].width
				};
			}
			function generatePage() {
				$("#content").empty();
				$.each(window.pages[window.page_id].elements, function(){
					console.log(this);
					$("#content").append('<article class="element" data-element-id="'+this.element_id+'" id="element_'+this.element_id+'"></article>');
					$("#element_"+this.element_id).html(this.html);
				});
				renderPage();
			}
			function renderPage() {
				window.site.width = (window.block.rsize) * window.pages[window.page_id].width;

				var s = window.pages[window.page_id];
				var sx = parseInt(($(window).width() - window.site.width) / 2);
				var sy = 100;
				$.each(window.pages[window.page_id].elements, function(){
					$("#element_"+this.element_id)
						.css({	"position": "absolute",
								"left":     (sx+window.block.margin+window.block.rsize*this.x)+"px",
								"top":      (sy+window.block.margin+window.block.rsize*this.y)+"px",
								"width":    (window.block.size*this.width-window.block.margin)+"px",
								"height":   (window.block.size*this.height-window.block.margin)+"px"});
				});
			}
			function parsePages(_arr) {
				$.each(_arr, function(i){
					_arr[i].page_id = i;
				});
				return _arr;
			}
			function parseElements(_arr) {
				$.each(_arr, function(i){
					_arr[i].element_id = i;
				});
				return _arr;
			}
			function parseBlock(_arr) {
				_arr["rsize"] = _arr.size;//+_arr.margin*2
				return _arr;
			}

			window.block =    parseBlock(<?=json_encode($block)?>);
			window.pages =    parsePages(<?=json_encode($pages)?>);
			window.elements = parseElements(<?=json_encode($elements)?>);
			window.page_id = <?=$page_id?>;
			window.site = generateSite(<?=$page_id?>);
			
			$(function(){
				generatePage();
				$(window).resize(function(){
					generatePage();
				});
//				$(".element").css({"margin": (window.block.margin)+"px"});
			});
		</script>
		<style type="text/css">
			* {
				margin:  0px;
				padding: 0px;
			}
			body {
				background-color: #efefef;
			}
			.element {
				background-color: #ffffff;
			}
		</style>
	</head>
	<body>
		<section id="content"></section>
		<pre><?php var_dump(); ?> </pre>
	</body>
</html>
