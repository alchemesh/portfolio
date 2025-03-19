<?php
        include("/var/www/credentials.php");

        function getFullView($serial, $username , $password) {
		$fullViewArray = array();



                $result=mysqli_query(mysqli_connect("mysql", $username , $password, "Portfolio"),"select * from portfolio_websites where Website_ID = '{$serial}' ") or die("select * from '{$table}'"."<br/><br/>".mysqli_error());

                while($row=mysqli_fetch_array($result))
                {

                        $mergeArray = array(    "Website_ID" => $row['Website_ID'],
						"name" => $row['name'],
						"url" => $row['url'],
						"description" => $row['description'],
                                                "location" => $row['location'],
						"filter" => $row['filter'],
                                                "monitor_preview" => $row['monitor_preview'],
						"tablet_preview" => $row['tablet_preview'],
						"phone_preview" => $row['phone_preview']);


                        $fullViewArray = array_merge($fullViewArray, $mergeArray);


                }


		

		return array($fullViewArray);
				
                      
        }


	
	list($fullViewArray) = getFullView($_REQUEST['s'], $username , $password);


	//$featuresArray = explode(": ", $fullViewArray['product_features']);
	
	
?>
