<?php
		

	function getWebsites()
        {
		//umOfProducts = getThisNumOfProducts(getNumOfProducts());
		//ategory = getThisCategory(getCategory());
		

		$websitesArray = array();
		//$productsArray_m = array();		
		



		//if(getPageNum() == null)
			//$pageNum = 1;

		//$productGetStart = (($pageNum - 1) * $numOfProducts) + 1;
                //$productGetFinish = $numOfProducts * $pageNum;

		//$countIndex = 1;


		
                //Database_Access('products');
	
		

		
		$result=mysqli_query(mysqli_connect("mysql","webserver","poppey360!virgil","Portfolio"), "select * from portfolio_websites ") or die("select * from portfolio_websites"."<br/><br/>".mysqli_error());



		/*

		if($category != null && $subcategory != null)

			if($division != null)
				$result=mysqli_query(mysqli_connect("mysql","webserver","poppey360!virgil","SDGraphicsProducts"), "select * from sdgraphics_products where product_category = '{$category}' and product_subcategory = '{$subcategory}' and product_division = '{$division}' order by Serial desc ") or die("select * from sdgraphics_products"."<br/><br/>".mysqli_error());

			else
				$result=mysqli_query(mysqli_connect("mysql","webserver","poppey360!virgil","SDGraphicsProducts"), "select * from sdgraphics_products where product_category = '{$category}' and product_subcategory = '{$subcategory}' order by Serial desc ") or die("select * from sdgraphics_products"."<br/><br/>".mysqli_error());

			//$result=mysql_query("select * from machine_listing where product_category = '{$category}' and product_subcategory = '{$subcategory}' order by Serial desc ") or die("select * from machine_listing"."<br/><br/>".mysql_error());


		else {
			if(getCategory() != null)
				
				$result=mysqli_query(mysqli_connect("mysql","webserver","poppey360!virgil","SDGraphicsProducts"), "select * from sdgraphics_products where product_category = '{$category}' order by Serial desc ") or die("select * from sdgraphics_products"."<br/><br/>".mysqli_error());
				//$result=mysql_query("select * from machine_listing where product_category = '{$category}' order by Serial desc ") or die("select * from machine_listing"."<br/><br/>".mysql_error());
		

			else
				$result=mysqli_query(mysqli_connect("mysql","webserver","poppey360!virgil","SDGraphicsProducts"), "select * from sdgraphics_products order by Serial desc ") or die("select * from sdgraphics_products"."<br/><br/>".mysqli_error());

				//$result=mysql_query("select * from machine_listing order by Serial desc ") or die("select * from machine_listing"."<br/><br/>".mysql_error());
		}
	
		 */
		
	

		while($row=mysqli_fetch_array($result))
                {

                        //echo "Im here";
			//if($countIndex >= $productGetStart && $countIndex <= $productGetFinish) {

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

			//}

			//$countIndex++;

               	}


		//for($index=($pageNum - 1) * $numOfProducts;$index< $numOfProducts * $pageNum && $index < count($productsArray); $index++ )

                        //$productsArray_m = array_merge($productsArray_m, $productsArray[$index]);


	       	//echo $productsArray[1][0]['product_name'];
		

               	/*switch(getSortBy()) {
                        case "bs":
				usort($productsArray_m, 'totalSoldOrderDescend');
                                //$productsArray = averageBestSellerTopRated($productsArray,  'product_totalSold');
                                break;
                        case "tr":
				usort($productsArray_m, 'productRatingOrderDescend');
                                //$productsArray = averageBestSellerTopRated($productsArray,  'product_rating');
                                break;
                        case "pa":
                                usort($productsArray_m, 'sortByOrderAscend');
                                break;
                        case "pd":
                                usort($productsArray_m, 'sortByOrderDescend');
                                break;
                        case "la":
                                usort($productsArray_m, 'sortByAlphaAscend');
                                break;
                        case "ld":
                                usort($productsArray_m, 'sortByAlphaDescend');
                                break;
                        default:
                                break;
		};*/

		//echo $productsArray[0]['product_name'];
		

		/*
		for($index=($pageNum - 1) * $numOfProducts;$index< $numOfProducts * $pageNum && $index < count($productsArray); $index++ ) 
			
			$productsArray_m = array_merge($productsArray_m, $productsArray[$index]);
			
		*/		

		

         	return $websitesArray;      


	}


	
	$websiteArray = getWebsites();



?>
