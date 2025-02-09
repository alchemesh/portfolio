<?php

	function emailCheck($email) {
		if(!filter_var($email, FILTER_VALIDATE_EMAIL)) 
                	return "Error: Email is invalid!";
        
		return true;
	}

	function passwordCheck($password) {
		if(!(preg_match("/^[a-zA-Z0-9]+$/", $password))) 
                	return "Error: Password must contain only letters and numbers";
        
		return true;
	}

	function nameCheck($name) {
		if(!(preg_match("/^[a-zA-Z]+$/", $name))) 
                	return "Error: Names must contain only letters";
        
		return true;
	}

	function skuCheck($sku) {
                if(!(preg_match("/^[a-zA-Z0-9]+$/", $sku)))
                        return "Error: Something went wrong removing " . get_product_name($sku, 'classes', 'class_listing') . " to your cart!";

                return true;
        }

	function subscribeCheck($subscribe) {
                if($subscribe != "" && $subscribe != "on")
                        return "Error: Subscribe must be on or off";

                return true;
        }

	function newsletter() {
		if(gettype($emailResult = emailCheck($_REQUEST['newsletter'])) == "boolean") {
                	//echo $emailResult;

                        Database_Access('Customers');

                        $result=mysql_query("select * from customer_creds where Customer_email = '{$_REQUEST['newsletter']}'") or die("select * from customer_creds"."<br/><br/>".mysql_error());

                        if($row=mysql_fetch_array($result))
                                mysql_query("update customer_creds set subscribed=1 where Customer_email = '{$_REQUEST['newsletter']}'") or die("select * from customer_creds"."<br/><br/>".mysql_error());



                        else {

                                $result=mysql_query("select * from newsletter_signup where Customer_email = '{$_REQUEST['newsletter']}'") or die("select * from newsletter_signup"."<br/><br/>".mysql_error());


                                if($row=mysql_fetch_array($result))
                                        mysql_query("update newsletter_signup set subscribed=1 where Customer_email = '{$_REQUEST['newsletter']}'") or die("select * from newsletter_signup"."<br/><br/>".mysql_error());

                                else
                                        mysql_query("insert into newsletter_signup (Customer_email, subscribed) VALUES ('{$_REQUEST['newsletter']}', true)") or die("insert into newsletter_signup"."<br/><br/>".mysql_error());

                        }
        	}
	}

	function writeReview() {
		$error = "Error: ";
					
		if($_REQUEST['nickname'] == "" || $_REQUEST['nickname'] == null) 
                        $error += "Nickname is required: ";

		if($_REQUEST['review'] == "" || $_REQUEST['review'] == null) 
                        $error += "Review content is required: ";		

		if($_REQUEST['rating'] == "" || $_REQUEST['rating'] == null || $_REQUEST['rating'] < 0) 
                        $error += "Rating is required";


		if($error == "Error: ") {
			Database_Access('Review');

			mysql_query("insert into reviews_temp (user_nickname, user_email, review_title, review_rating, review_thoughts) VALUES ('{$_REQUEST['nickname']}', '{$_REQUEST['email']}', '{$_REQUEST['title']}', '{$_REQUEST['rating']}', '{$_REQUEST['review']}',)") or die("insert into reviews_temp"."<br/><br/>".mysql_error());		

			
		}


		else
			echo $error;			



		//if(gettype($emailResult = emailCheck($_REQUEST['email'])) != "boolean" ) 
                	//echo $emailResult;
                        
                
	
	}


	function memberLogin($trigger) {
		if($_REQUEST['email'] != null && $_REQUEST['password'] != null) {
			if(userLoggedIn()) {
				if($trigger == "ajax")
                			echo "Error: User already logged in";
				else
					return "Error: User already logged in";
                	
        		}

        		else {
                		if(gettype($emailResult = emailCheck($_REQUEST['email'])) != "boolean" ) {
					if($trigger == "ajax")
                        			echo $emailResult;
					else
						return $emailResult;
				}

                		else if(gettype($passwordResult = passwordCheck($_REQUEST['password'])) != "boolean" )
                        		echo $passwordResult;


                		else {
                        		Database_Access('Customers');

                        		$result=mysql_query("select * from customer_creds where Customer_email = '{$_REQUEST['email']}' and Customer_pass = '{$_REQUEST['password']}'") or die("select * from customer_creds"."<br/><br/>".mysql_error());


                        		if($row=mysql_fetch_array($result)) {
                                		if(gettype(userLogin($row['Customer_email'], $row['Customer_fname'])) == "boolean")
                                        		echo "Success: reload";
                        		}

                        		else {
						if($trigger == "ajax")
                                			echo "Error: Email or password was typed incorrectly!";
			
						else
							return "Error: Email or password was typed incorrectly!";
                                	
                        		}
                		}
        		}

		}
	}


	function memberRegister($trigger) {
		if(gettype($emailResult = emailCheck($_REQUEST['email'])) != "boolean") {
			if($trigger == "ajax")
                		echo $emailResult;
			else
				return $emailResult;

		}

        	else if(gettype($passwordResult = passwordCheck($_REQUEST['password'])) != "boolean") {
			if($trigger == "ajax")
                		echo $passwordResult;
			else
				return $passwordResult;

		}

        	else if(gettype($fnameResult = nameCheck($_REQUEST['fname'])) != "boolean") {
			if($trigger == "ajax")
                		echo $fnameResult;
			else
				return $fnameResult;
		}


        	else if(gettype($lnameResult = nameCheck($_REQUEST['lname'])) != "boolean") {
			if($trigger == "ajax")
                		echo $lnameResult;
			else
				return $lnameResult;
		}


        	else if(gettype($subscribeResult = subscribeCheck($_REQUEST['subscribe'])) != "boolean") {
			if($trigger == "ajax")
                		echo $subscribeResult;
			else
				return $subscribeResult;

		}


		else {
			Database_Access('Customers');

                	$result=mysql_query("select * from customer_creds where Customer_email = '{$_REQUEST['email']}'") or die("select * from customer_creds"."<br/><br/>".mysql_error());


                	if($row=mysql_fetch_array($result)) {
				if($trigger == "ajax")
                        		echo "Error: Email address already exist";
				else
					return "Error: Email address already exist";

			}


                	else {
                        	//Database_Access('Customers');

                        	$subscribe = false;

                        	if($_REQUEST['subscribe'] == "on") {
                                	$subscribe = true;
                        	}

                        	mysql_query("insert into customer_creds(Customer_email,Customer_pass,Customer_fname,Customer_lname,emailCheck,loggedIn,subscribed) VALUES ('{$_REQUEST['email']}','{$_REQUEST['password']}','{$_REQUEST['fname']}', '{$_REQUEST['lname']}',false,false,'{$subscribe}')") or die("insert into customer_creds"."<br/><br/>".mysql_error());

                        	if(gettype(userLogin($_REQUEST['email'], $_REQUEST['fname'])) == "boolean") {
					if($trigger == "ajax")
                                		echo "Success: reload";
					else
						return "Success: reload";
				}


                        	//newUserSet($_REQUEST['userEmail'], $_REQUEST['fName'], $_REQUEST['gender']);
                	}
		}


	}


?>
