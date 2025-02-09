<?php

	/*
	function Database_Access() {
		@mysql_connect("localhost","root","poppey360!virgil") or die("Could not connect to database");
                @mysql_select_db("Portfolio") or die("Could not connect, try again later");
	}
	*/


	function getTemplates($table, $Filter) {
		$templateArray = array();

		//Database_Access('templates');
		

		
		if($Filter == "none")
                	$result=mysqli_query(@mysqli_connect("mysql", "webserver", "poppey360!virgil", "RareAlchemyTemplates"), "select * from {$table}") or die("select * from {$table}"."<br/><br/>".mysqli_error());

		else 
			$result=mysqli_query(@mysqli_connect("mysql", "webserver", "poppey360!virgil", "RareAlchemyTemplates"), "select * from {$table} where filter = '{$Filter}'") or die("select * from {$table}"."<br/><br/>".mysqli_error());

		if($table == "rarealchemy_templates") {
                	while($row=mysqli_fetch_array($result))
                	{
				$mergeArray = array(    array("Website_ID" => $row['Website_ID'],
                                                	"name" => $row['name'],
							"location" => $row['location'],
							"location-alt" => $row['location-alt'],
                                                	"filter" => $row['filter'])
                        	);

				$templateArray = array_merge($templateArray, $mergeArray);
			}
		}

		else {
			while($row=mysqli_fetch_array($result))
			{
				$mergeArray = array(    array("serial" => $row['serial'],
								"name" => $row['name'],
								"location" => $row['location'],
								"background" => $row['background'],
								"filter" => $row['filter'],
								"description" => $row['description'])
				);

				$templateArray = array_merge($templateArray, $mergeArray);
			}
		}
		
		return $templateArray;
		 
	}


	

	
	$category = $_REQUEST['category'];

        if($category == '')
                $category = "none";


        $templateArray = getTemplates("rarealchemy_templates", $category);

	
?>
