<?php
	global $templates, $elements, $pages, $page_id;

	function makeElement($template_id, $x, $y, $html = "") { global $templates, $elements, $pages, $page_id;
		$nelement = $templates[$template_id];
		$nelement["x"]    = $x;
		$nelement["y"]    = $y;
		$nelement["html"] = $html;
		return $nelement;
	}
