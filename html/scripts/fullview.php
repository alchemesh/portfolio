<?php
        

        function getFullView($serial, $table) {
		$fullViewArray = array();



                $result=mysqli_query(mysqli_connect("mysql", "webserver", "poppey360!virgil", "Portfolio"),"select * from {$table} where Website_ID = '{$serial}' ") or die("select * from '{$table}'"."<br/><br/>".mysqli_error());

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


	
	list($fullViewArray) = getFullView($_REQUEST['s'], "portfolio_websites");


	//$featuresArray = explode(": ", $fullViewArray['product_features']);
	
	
?>
