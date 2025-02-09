<?php
	include("dbfunctions.php");

	$category = $_REQUEST['category'];

        if($category == '')
		$category = "none";


	$templateArray = getTemplates("rarealchemy_templates", $category);

?>
