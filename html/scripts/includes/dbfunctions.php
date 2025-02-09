<?php
	//include("defaults.php");

	function get_product_name($sku, $select, $db){
        	Database_Access($select);

        	$result=mysql_query("select product_name from {$db} where product_sku='{$sku}'") or die("select product_name from {$db}"."<br/><br/>".mysql_error());
        	$row=mysql_fetch_array($result);
        	return $row['product_name'];

	}


	function get_product_sku($pid){
                Database_Access('products');

                $result=mysql_query("select product_sku from products where Serial='{$pid}'") or die("select product_skue from products"."<br/><br/>".mysql_error());
                $row=mysql_fetch_array($result);
                return $row['product_sku'];
	}

	function get_product_price($sku, $select, $db) {

        	Database_Access($select);

        	$result=mysql_query("select product_price from {$db} where product_sku='{$sku}'") or die("select product_price from {$db}"."<br/><br/>".mysql_error());
        	$row=mysql_fetch_array($result);
        	return $row['product_price'];
	}

	function get_product_image($sku, $select, $db) {

                Database_Access($select);

                $result=mysql_query("select product_image_th from {$db} where product_sku='{$sku}'") or die("select product_image_th from {$db}"."<br/><br/>".mysql_error());
                $row=mysql_fetch_array($result);
                return $row['product_image_th'];
        }

	function get_product_features($sku, $select, $db) {

                Database_Access($select);

                $result=mysql_query("select product_features from {$db} where product_sku='{$sku}'") or die("select product_features from {$db}"."<br/><br/>".mysql_error());
                $row=mysql_fetch_array($result);
                return $row['product_features'];
        }



	function sortByOrderAscend($a, $b) {
                 return $a['product_price'] - $b['product_price'];
        }

        function sortByOrderDescend($a, $b) {
                 return $b['product_price'] - $a['product_price'];
        }

        function sortByAlphaAscend($a, $b) {
                return strcasecmp( $a['product_name'], $b['product_name'] );
        }

        function sortByAlphaDescend($a, $b) {
                return strcasecmp( $b['product_name'], $a['product_name'] );
        }


        function totalSoldOrderDescend($a, $b) {
                 return $b['product_totalSold'] - $a['product_totalSold'];
        }

        function productRatingOrderDescend($a, $b) {
                 return $b['product_rating'] - $a['product_rating'];
        }

        function custom_sort($a,$b) {
                return $a['product_view']>$b['product_view'];
        }

	function getCategory() {
                return $_REQUEST['c'];
        }

	function getSubCategory() {
                return $_REQUEST['sc'];
        }

	function getPageNum() {
		return $_REQUEST['p'];	
	}
	
	function getSortBy() {
		return $_REQUEST['sb'];
        }
	
	function getNumOfProducts() {
		return $_REQUEST['n'];
	}
	
	function getFullViewSKU() {
                return $_REQUEST['sku'];
        }
	

	function getTotalProducts($category, $subCategory) {

		Database_Access('products');
	
		if($category != null && $subCategory != null)
			$result=mysql_query("select count(*) as totalProducts from machine_listing where product_category = '{$category}' and product_subcategory = '{$subCategory}'") or die("select count(*) from machine_listing"."<br/><br/>".mysql_error());


		else {
			if(getCategory() != null)
				$result=mysql_query("select count(*) as totalProducts from machine_listing where product_category = '{$category}'") or die("select count(*) from machine_listing"."<br/><br/>".mysql_error());
 
                        		
			else
				$result=mysql_query("select count(*) as totalProducts from machine_listing") or die("select count(*) from machine_listing"."<br/><br/>".mysql_error());

				

		}

		$row=mysql_fetch_array($result);
                return $row['totalProducts'];
	} 	

	function getTotalClasses($category, $subCategory) {

                Database_Access('classes');

                if($category != null && $subCategory != null)
                        $result=mysql_query("select count(*) as totalClasses from class_listing where product_category = '{$category}' and product_subcategory = '{$subCategory}'") or die("select count(*) from class_listing"."<br/><br/>".mysql_error());


                else {
                        if(getCategory() != null)
                                $result=mysql_query("select count(*) as totalClasses from class_listing where product_category = '{$category}'") or die("select count(*) from class_listing"."<br/><br/>".mysql_error());


                        else
                                $result=mysql_query("select count(*) as totalClasses from class_listing") or die("select count(*) from class_listing"."<br/><br/>".mysql_error());



                }

                $row=mysql_fetch_array($result);
                return $row['totalClasses'];
        }
	
	function getMenuCount($dbselect) {
		if($dbselect == "products")
			return ceil(getTotalProducts(getThisCategory(getCategory()) , getSubCategory()) / getThisNumOfProducts(getNumOfProducts())); 

		else
			return ceil(getTotalClasses(getThisCategory(getCategory()) , getSubCategory()) / getThisNumOfProducts(getNumOfProducts()));
	}
	



           
?>
