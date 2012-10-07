<?php
	global $templates, $elements, $pages, $page_id;

	$page_id = 0;
	$block = array(	"size" => 64,
					"margin" => 8 );
	// PAGES
	$pages[0]=array(
		"width" => 10,
		"elements" => array(
						0, 1, 2, 3, 4, 5, 6, 7, 8, 9 )
	);
	// TEMPLATES
	$templates[0] = array("width" => 1,  "height" => 1,
	                      "html" => "",
	                      "name" => "block");
	$templates[1] = array("width" => 10, "height" => 2,
	                      "html" => "",
	                      "name" => "full");
	$templates[2] = array("width" => 5,  "height" => 3,
	                      "html" => "",
	                      "name" => "medium");
	$templates[3] = array("width" => 3,  "height" => 3,
	                      "html" => "",
	                      "name" => "small");
	$templates[4] = array("width" => 1,  "height" => 1,
	                      "html" => "",
	                      "name" => "mini");
	$templates[5] = array("width" => 10,  "height" => 1,
	                      "html" => "",
	                      "name" => "tab");
	// ELEMENTS
	foreach(array(0=>array(1, 0, 0),
				  1=>array(2, 0, 2),
				  2=>array(2, 5, 2),
				  3=>array(5, 0, 5),
				  4=>array(3, 0, 6),
				  5=>array(3, 3, 6),
				  6=>array(3, 6, 6),
				  7=>array(4, 9, 6),
				  8=>array(4, 9, 7),
				  9=>array(4, 9, 8)) as $k => $v)
		$elements[$k] = array_merge(makeElement($v[0], $v[1], $v[2]), array("element_id" => $k));
?>
