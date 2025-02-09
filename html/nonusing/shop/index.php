<?php
        session_start();
        include("../scripts/includes/db.php");
        include("../scripts/includes/sessionfunctions.php");
        include("../scripts/includes/dbfunctions.php");
        include("../scripts/includes/checkfunctions.php");


        include("../scripts/includes/sewmuchmore-products.php");


        //echo $productsArray[0]['product_name'];


?>

<!DOCTYPE html>
<html>
<head>
	<title>Shop</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<link rel="stylesheet" href="../css/bootstrap.min.css">


        <link rel="stylesheet" type="text/css" href="../css/profile_mainstyleanimations.css">




        <link rel="stylesheet" href="../css/jorrellS.css">
        <link rel="stylesheet" type="text/css" href="../css/profile_mobilehome.css" />
        <link rel="stylesheet" type="text/css" href="../css/profile_mobilehome2.css" />
        <link rel="stylesheet" type="text/css" href="../css/profile_mobilehome3.css" />



        <script src="../jquery/jquery-3.1.1.min.js"></script>

        <script src="../js/bootstrap.min.js"></script>
        

	


		
           
</head>
<body>
	<div data-role="page" class="fullpage">
        	<div class="header jorrellS-absolute-position z-index-3">
                	<div class="headercontent jorrellS-flex-start flex-row space-between align-start jorrellS-left-align-text jorrellS-auto-margin">
				<div class="headerlogo">
                                        <div class="headerfulllogo">
                                                <a class="jorrellS-full-height jorrellS-auto-width jorrellS-display-block jorrellS-zero-padding" href="/" rel="external">
                                                        <div class="headerlogodesktop">
                                                                <img class="headerlogoimg"  src="../myportfolioimages/mynewlogo.png"/>
                                                        </div>

                                                        <div class="headerlogomobile">
                                                                <img class="headerlogoimg"  src="../myportfolioimages/mynewlogo_crop.png"/>
                                                        </div>

                                                </a>
                                        </div>
                                </div>



                        </div>

                </div>


		
		<div class="aboutMe">

			<div class="topimageroll">
				<div class="topimageroll-carousel-images topimageroll-images">
					<div class="topimageroll-image about is-loaded is-active">
                                        </div>
					<div class="topimageroll-image template is-loaded ">
                        		</div>
					<div class="topimageroll-image modeling is-loaded ">
                                	</div>
					<div class="topimageroll-image projects is-loaded">
                                	</div>
                		</div>

				<div class="topimageroll-carousel-content">
					<div class="copy-carousel">
						<ul class="copy-carousel-slides">
							<li >
								<div class="topimageviewunderlay">
                                                        		<div class="topimageviewunderlay-inner">
                                                                		
                                                        		</div>
                                                		</div>
							</li>
						
							<li>
								<div class="topimageviewoverlay" >
                                                      	  		<div class="topimageviewoverlay-inner">
                                                                		<div class="topimageviewoverlay-img">
                                                                        		
                                                                		</div>
                                                        		</div>
                                                		</div>
							</li>


							<li class="copy-carousel-slide services ">
								<div class="carousel-slide-layout">
									<div class="carousel-slide-row row">
										<div class="carousel-slide-col-12 col">
											<div class="carousel-slide-block html-block carousel-block-html">
												<div class="carousel-slide-block-content">
													<div class="carousel-slide-block-content-inner"><span>Break The Mold</span></div>
												</div>
											</div>

										 	<div class="carousel-slide-row row">
                                                                                        	<div>
                                                                                                	<span></span>
                                                                                        	</div>
                                                                                	</div>
										</div>
									</div>
								</div>
							</li>
                                		</ul>
                        		</div>
				</div>
			
				<ol class="topimageroll-carousel-indicator">
				</ol>
			</div>

			<div class="toprollmenu">
                                <div class="jorrellS-container-container">
                                        <div class="jorrellS-row">
                                                <div class="jorrellS-col large-6">
                                                        <div style="text-align:center;padding:1.5vh 1.5%;height:7vh;position:relative:z-index:1;overflow-x:auto;">

                                                                <div style="display:inline-block;padding: 0% 2%;"><a href="/shop/"><span style="font-size:9px;font-weight:600;color:#222;">Web Hosting</span></a></div>

                                                                <div style="display:inline-block;padding: 0% 2%;"><a href="/rare-alchemy/aboutus/"><span style="font-size:9px;font-weight:600;color:#222;">About Us</span></a></div>

                                                                <div style="display:inline-block;padding: 0% 2%;"><a href="/rare-alchemy/customer-service/"><span style="font-size:9px;font-weight:600;color:#222;">Contact Us</span></a></div>

                                                                <div style="display:inline-block;padding: 0% 2%;"><a href="/news/"><span style="font-size:9px;font-weight:600;color:#222;">News</span></a></div>

                                                                <div style="display:inline-block;padding: 0% 2%;"><a href="/account/"><span style="font-size:9px;font-weight:600;color:#222;">My Account</span></a></div>


                                                        </div>
                                                </div>

                                                <div class="jorrellS-col medium-6">
                                                </div>
                                        </div>
                                </div>
                        </div>






			<div data-role="main" class="ui-content">
				<div class="container-container">
					<div class="main-content is-active" >


						<div class="products jorrellS-relative-position z-index-1 jorrellS-row">

                                                <?php
                                                foreach($productsArray as $num => $products) { ?>

                                                <div class="product jorrellS-col small-6 large-3 jorrellS-relative-position z-index-1 jorrellS-center-text">
                                                        <div class="product-img-wrap jorrellS-relative-position z-index-1">
                                                                <div class="quickshop-wrap">
                                                                        <a href="fullview?sku=<?php echo $products['product_sku']; ?>" class="quickshop-link" data-id="429024">Learn More</a>
                                                                </div>


                                                                <a class="product-img-link jorrellS-display-block jorrellS-relative-position z-index-1" href="fullview?sku=<?php echo $products['product_sku']; ?>">

                                                                        <span class="badge-wrapper">

                                                                                <?php
                                                                                if($products['product_new']) {?>

                                                                                <img src="../images/new-sewmuchmore.gif" alt="only at sewmuchmore" class="badge-new new">
                                                                                <?php
                                                                                } ?>

                                                                        </span>

                                                                        <img class="jorrellS-display-inline-block jorrellS-center-text img-responsive" src="<?php echo $products['product_image_fs']; ?>" alt="Destiny II" itemprop="image">
                                                                </a>
                                                        </div>
                                                        <a class="product-name-link" href="fullview?sku=<?php echo $products['product_sku']; ?>">
                                                                <span><?php echo $products['product_name']; ?></span>

                                                        </a>
                                                </div>

                                                <?php
                                                } ?>
						</div>
						



					</div>
				</div>
			</div>

		</div>

	


		<div class="footer">
			
			<div class="footer-top">
                                <div class="jorrellS-container-container container">
                                        <div class="jorrellS-row">
                                                <div class="jorrellS-col large-2">
                                                        <div class="companyinfo">
                                                                <h2>Rare Alchemy</h2>
                                                                <p></p>
                                                        </div>
                                                </div>
                                                <div class="jorrellS-col large-7">
                                                        <div class="jorrellS-col large-3">
                                                                <div class="video-gallery text-center">

                                                                </div>
                                                        </div>

                                                        <div class="jorrellS-col large-3">
                                                                <div class="video-gallery text-center">

                                                                </div>
                                                        </div>

                                                        <div class="jorrellS-col large-3">
                                                                <div class="video-gallery text-center">

                                                                </div>
                                                        </div>

                                                        <div class="jorrellS-col large-3">
                                                                <div class="video-gallery text-center">

                                                                </div>
                                                        </div>
                                                </div>
                                                <div class="jorrellS-col large-3">
                                                        <div class="address">
                                                                <img src="/rare-alchemy/images/map.png" alt="" />
                                                                <p>299 w 15th Street Panama City, FL(Florida)</p>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>


			<div class="footer-widget">
                                <div class="jorrellS-container-container container">
                                        <div class="jorrellS-row">
                                                <div class="single-widget jorrellS-col large-3 xlarge-2">

                                                        <div class="footer-nav-list">
                                                                <div class="footer-nav-list-inner">
                                                                        <div class="footer-nav-list-inner-inner">
                                                                                <div class="footer-nav-heading"><span>Get Started</span></div>
                                                                        </div>
                                                                </div>

                                                                <div class="footer-nav-content containts-3">
                                                                        <div class="footer-nav-link">
                                                                                <a href="/templates/"><span>Templates</span></a>
                                                                        </div>

                                                                        <div class="footer-nav-link">
                                                                                <a href="/modeling/"><span>Domains</span></a>
                                                                        </div>

                                                                        <div class="footer-nav-link">
                                                                                <a href="/projects/"><span>Hosting</span></a>
                                                                        </div>

                                                                </div>

                                                        </div>

                                                </div>
						<div class="single-widget jorrellS-col large-3 xlarge-2">

                                                        <div class="footer-nav-list">
                                                                <div class="footer-nav-list-inner">
                                                                        <div class="footer-nav-list-inner-inner">
                                                                                <div class="footer-nav-heading"><span>Policies</span></div>
                                                                        </div>
                                                                </div>

                                                                <div class="footer-nav-content containts-3">
                                                                        <div class="footer-nav-link">
                                                                                <a href=""><span>Privacy Policy</span></a>
                                                                        </div>

                                                                        <div class="footer-nav-link">
                                                                                <a href=""><span>Billing System</span></a>
                                                                        </div>

                                                                        <div class="footer-nav-link">
                                                                                <a href="#"><span>Copyright</span></a>
                                                                        </div>

                                                                </div>

                                                        </div>


                                                </div>
						<div class="single-widget jorrellS-col large-3 xlarge-2">
                                                        <div class="footer-nav-list">
                                                                <div class="footer-nav-list-inner">
                                                                        <div class="footer-nav-list-inner-inner">
                                                                                <div class="footer-nav-heading"><span>Business</span></div>

                                                                        </div>
                                                                </div>

                                                                <div class="footer-nav-content containts-3">
                                                                        <div class="footer-nav-link">
                                                                                <a href="/rare-alchemy/aboutus/"><span>Company Information</span></a>
                                                                        </div>

                                                                        <div class="footer-nav-link">
                                                                                <a href="/rare-alchemy/customer-service/"><span>Contact Us</span></a>
                                                                        </div>

                                                                        <div class="footer-nav-link">
                                                                                <a href="#"><span>Store Location</span></a>
                                                                        </div>

                                                                </div>
                                                        </div>


                                                </div>
						<div class="single-widget jorrellS-col large-3 xlarge-5 ">
                                                        <div class="footer-social">
                                                                <div style="display:inline-block;"><a rel="external" href="https://www.facebook.com/SDCustomGraphics/"><img style="width:25px;height:25px;" src="/rare-alchemy/images/myfb-logo.png" /></a></div>
                                                                <div style="display:inline-block;margin-left:5px;"><a rel="external" href="https://www.facebook.com/SDCustomGraphics/"><img style="width:25px;height:25px;" src="/rare-alchemy/images/mytwitter-logo.png" /></a></div>
                                                                <div style="display:inline-block;margin-left:5px;"> <a rel="external" href="https://www.pinterest.com/sdcustomgraphic/"><img style="width:25px;height:25px;" src="/rare-alchemy/images/mypinterest-logo.png" /></a></div>
                                                                <div style="display:inline-block;margin-left:5px;"><a rel="external" href="https://www.facebook.com/SDCustomGraphics/"><img style="width:25px;height:25px;" src="/rare-alchemy/images/myinstagram-logo.png" /></a></div>

                                                        </div>

                                                </div>
                                        </div>
                                </div>
                        </div>
						






			<div class="footer-bottom">
                                        <div class="footer-bottom-begin" ></div>

                                        <div class="jorrellS-container-container container">
                                                <div class="jorrellS-row">
                                                        <p class="jorrellS-float-left">Copyright © 2016 Rare Alchemy Inc. All rights reserved.</p>
                                                        <p class="jorrellS-float-right">Designed by <span><a target="_blank" href="http://www.jorrellsmith.com">jorrellsmith.com</a></span></p>
                                                </div>
                                        </div>


                         </div>





                </div>


	

	</div>

	<script src="../js/functions.js"></script>
	
</body>
</html>
