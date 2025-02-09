<?php
	function userArrayExist() {
                if(is_array($_SESSION['thisUser'])){
                        return true;
                }
                else {
                        return false;
                }
        }

	function setToken($token) {
		if(userArrayExist()){
			$_SESSION['thisUser']['userInfo']['token'] = $token;
		}
		else {
			$_SESSION['thisUser'] = array();
                        $_SESSION['thisUser']['userInfo']['token'] = $token;
		}
	}

	function getToken() {
		return $_SESSION['thisUser']['userInfo']['token'];
	}

	
	function userLogin($user, $fname) {
		Database_Access('Customers');

		mysql_query("update customer_creds set loggedIn=true where Customer_email='{$user}'") or die("update customer_creds"."<br/><br/>".mysql_error());


		if(userArrayExist()){
                        $_SESSION['thisUser']['userInfo']['userName'] = $user;
                        $_SESSION['thisUser']['userInfo']['firstName'] = $fname;
                }

                else {

                        $_SESSION['thisUser'] = array();
                        $_SESSION['thisUser']['userInfo']['userName'] = $user;
                        $_SESSION['thisUser']['userInfo']['firstName'] = $fname;
                }		

		return true;

	}

	function userLogOut() {
		Database_Access('Customers');

                $result=mysql_query("update customer_creds set loggedIn=false where Customer_email='{$_SESSION['thisUser']['userInfo']['userName']}'") or die("select * from customer_creds"."<br/><br/>".mysql_error());


                unset($_SESSION['thisUser']['userInfo']);


	}

	function userLoggedIn() {
		if(is_array($_SESSION['thisUser']['userInfo'])){


                        Database_Access('Customers');

                        $result=mysql_query("select * from customer_creds where Customer_email='{$_SESSION['thisUser']['userInfo']['userName']}'") or die("select * from customer_creds"."<br/><br/>".mysql_error());


                        $row=mysql_fetch_array($result);



                        if($row['loggedIn'] == false) {
                                userLogOut();
                                return false;
                        }

                        else
                                return true;
                }

                else {
                        return false;
                }

        }

	function addtocart($sku){
                //if($pid<1 && $q<1) return;

                if(userArrayExist()){
			
			foreach($_SESSION['thisUser']['cart'] as $num => $cartItems) {
				if($sku==$cartItems['product_sku'])
					return "Error: Something went wrong adding " . get_product_name($cartItems['product_sku'], 'classes', 'class_listing') . " to your cart!";
					
			}
			
			//return "Error: Simple error";

			$max=count($_SESSION['thisUser']['cart']);

                        $_SESSION['thisUser']['cart'][$max]['product_sku'] = $sku;
                        $_SESSION['thisUser']['cart'][$max]['qty'] = 1;
			$_SESSION['thisUser']['cart'][$max]['Serial'] = $max + 1;

			
		}

		else {
			$_SESSION['thisUser']=array();

			$_SESSION['thisUser']['cart'][0]['product_sku'] = $sku;
                        $_SESSION['thisUser']['cart'][0]['qty'] = 1;
                        $_SESSION['thisUser']['cart'][0]['Serial'] = 1;

			
		}

		return true;
	}

	function userHasShopped() {
                if(is_array($_SESSION['thisUser']['cart'])){
                        return true;
                }
                else {
                        return false;
                }
        }

        function getUserShoppingCart() {
                return $_SESSION['thisUser']['cart'];
        }

	function cartCount() {
		if(count(getUserShoppingCart()) == 0)
			return;

		return count(getUserShoppingCart());
	}


	function updateCart($sku, $qty) {
		if($qty<1) return;

                //$Serial=intval($Serial);
                $qty=intval($qty);


                $max=count($_SESSION['thisUser']['cart']);
                for($i=0;$i<$max;$i++){
                        if($sku==$_SESSION['thisUser']['cart'][$i]['product_sku']){
                                $_SESSION['thisUser']['cart'][$i]['qty'] = $qty;
                                break;
                        }
                }

        }
 
	function remove_fromCart($sku){
                //$sku=intval($sku);
                $max=count($_SESSION['thisUser']['cart']);
                for($i=0;$i<$max;$i++){
                        if($sku==$_SESSION['thisUser']['cart'][$i]['product_sku']){
                                unset($_SESSION['thisUser']['cart'][$i]);
				$_SESSION['thisUser']['cart']=array_values($_SESSION['thisUser']['cart']);

				if(count($_SESSION['thisUser']['cart']) <= 0)
					unset($_SESSION['thisUser']['cart']);
		
				return true;
                                //break;
                        }
                }
                return;
        }


	function getItemSubtotal($price, $qty) {
		return $price * $qty;
	}

	
	function getOrderTotal() {
		$cart = getUserShoppingCart();
		
		foreach($cart as $num => $cartItems) {
			$sum += getItemSubtotal(get_product_price($cartItems['product_sku'], "classes", "class_listing"), $cartItems['qty']);
		}

		return $sum; 
	}


	function getItemFeatures($features) {
		return explode(": ", $features);
	}

?>
