<?php
	
        function Database_Access($select)
        {
		if($select == 'Customers')
                {
                        @mysqli_connect("mysql","webserver","poppey360!virgil", "RareAlchemyProducts", "3306") or die("Could not connect to database");
                        //@mysql_select_db("RareAlchemy_CustomerCreds") or die("Could not connect, try again later");
                }

        	else if($select == 'products')
             	{
		  
			@mysqli_connect("mysql","webserver","poppey360!virgil", "RareAlchemyProducts", "3306") or die("Could not connect to database");
		  	//@mysql_select_db("RareAlchemyProducts") or die("Could not connect, try again later");

             	}

		else if($select == 'templates')
                {

                        @mysqli_connect("172.18.0.5","webserver","poppey360!virgil", "RareAlchemyTemplates") or die("Could not connact");
                        @mysqli_select_db(@mysqli_connect("172.18.0.5", "webserver", "poppey360!virgil"), "RareAlchemyTemplates") or die("Could not connect, try again later");

                }



		
		else if($select == 'Activities')
                {
                        @mysql_connect("mysql:3306","webserver","poppey360!virgil") or die("Could not connect to database");
                        @mysql_select_db("activityLogs_015") or die("Could not connect, try again later");
                }

		else if($select == 'ContactUs')
                {
                        @mysql_connect("mysql:3306","webserver","poppey360!virgil") or die("Could not connect to database");
                        @mysql_select_db("ContactUs675") or die("Could not connect, try again later");
                }
		
		else if($select == 'Orders')
                {
                        @mysql_connect("mysql:3306","webserver","poppey360!virgil") or die("Could not connect to database");
                        @mysql_select_db("CustomerOrders94") or die("Could not connect, try again later");
                }
	
             //session_start();
        }

	 	

?>
