<?php
	include("/var/www/credentials.php");


	function getTemplates($username, $password) {
		$templateArray = array();
		
        $result=mysqli_query(@mysqli_connect("mysql", $username , $password , "RareAlchemyTemplates"), "select * from rarealchemy_projects") or die("select * from rarealchemy_projects"."<br/><br/>".mysqli_error());

		
		
		while($row=mysqli_fetch_array($result)) {
			$mergeArray = array(    array("serial" => $row['serial'],
										"name" => $row['name'],
										"location" => $row['location'],
										"background" => $row['background'],
										"filter" => $row['filter'],
										"description" => $row['description'])
			);

			$templateArray = array_merge($templateArray, $mergeArray);
		}
		
		
		return $templateArray;
		 
	}

	function getWebsites($username, $password) {
		
		$websitesArray = array();		

		
		$result=mysqli_query(mysqli_connect("mysql", $username , $password , "Portfolio"), "select * from portfolio_websites ") or die("select * from portfolio_websites"."<br/><br/>".mysqli_error());


		while($row=mysqli_fetch_array($result)) {

			$mergeArray = array(    array(	"Website_ID" => $row['Website_ID'],
											"name" => $row['name'],
											"url" => $row['url'],
											"description" => $row['description'],
											"filter" => $row['filter'],
											"location" => $row['location'],
											"location-alt" => $row['location-alt'],
											"monitor_preview" => $row['monitor_preview'],
											"tablet_preview" => $row['tablet_preview'],
											"phone_preview" => $row['phone_preview'])
			);


			$websitesArray = array_merge($websitesArray, $mergeArray);

        }
					
        return $websitesArray;      


	}

	
	$websiteArray = getWebsites($username, $password);
	$templateArray = getTemplates($username, $password);


?>
