<?php
	
	include("../scripts/websites.php");



?>

<!DOCTYPE html>
<html>
<head>
	<title>Templates</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="icon" href="/images/mynewlogo-favicon.ico?v=2" />

	<meta name="description" content="Hi, Im Jorrell Smith a designer from Panama City, FL. I create highly functional interfaces with the perfect simpicity, elegance, and innovation for each individual. In my portfolio you will find some samples of different types of work I was involved in.  ">
	        
	<meta name="keywords" content="jorrell, smith, jorrell smith, web, web design, interfaces, web interfaces, portfolio, designer, designer portfolio, web designer porfolio, florida, panama city">
	
	
	<meta property="og:url"                content="https://jorrellsmith.com" />
	<meta property="og:title"              content="Jorrell Smith's Portfolio." />
	<meta property="og:description"        content="Hi, Im Jorrell Smith a designer from Panama City, FL. I create highly functional interfaces with the perfect simpicity, elegance, and innovation for each individual. In my portfolio you will find some samples of different types of work I was involved in." />
	<meta property="og:type"               content="article" />             
	<meta property="og:image"              content="https://jorrellsmith.com/images/mynewlogo-crop-full-share.png" />
	
	


	<link rel="stylesheet" href="/css/bootstrap.min.css">


        <link rel="stylesheet" type="text/css" href="/css/profile_mainstyleanimations.css">




        <link rel="stylesheet" href="/css/jorrellS.css">
        <link rel="stylesheet" type="text/css" href="/css/profile_mobilehome.css" />
        <link rel="stylesheet" type="text/css" href="/css/profile_mobilehome2.css" />
        <link rel="stylesheet" type="text/css" href="/css/profile_mobilehome3.css" />



        <script src="/jquery/jquery-3.1.1.min.js"></script>

        <script src="/js/bootstrap.min.js"></script>
        

	


		
           
</head>
<body>
	<div data-role="page" class="fullpage">


		
		<div class="mywork">
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
													<div class="carousel-slide-block-content-inner">
														<h1>Jorrell Smith</h1>
														<h4>DevOps Engineer</h4>
													</div>
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
						<div class="jorrellS-col">
							<div class="toprollmenu-container">

								<div style="display:inline-block;padding: 0% 2%;"><a href="/" ><span style="font-size:9px;font-weight:600;color:#222;">Home</span></a></div>

								<div style="display:inline-block;padding: 0% 2%;"><a href="/mywork/"><span style="font-size:9px;font-weight:600;color:#222;">My Work</span></a></div>

								<div style="display:inline-block;padding: 0% 2%;"><a href="/aboutme/"><span style="font-size:9px;font-weight:600;color:#222;">About Me</span></a></div>

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

						<div class="account-wrapper jorrellS-row">

                                                        <div class="account-navigation jorrellS-col large-4 xlarge-3">
                                                                <button type="button" class="toggle-left-nav" data-toggle="collapse" data-target="#sideNav" id="btnSideNavCollapse">
                                                                        <span class="fa fa-chevron-down"></span>
                                                                </button>
                                                                <nav class="side-nav" id="sideNav" role="navigation">
                                                                        <ul>

										<li><a href="#" class="sideNav-button" title="Projects">Projects</a></li>
										<li><a href="#" class="sideNav-button" title="DevOps">DevOps</a></li>
										<li><a href="#" class="sideNav-button" title="Web Applications">Web Applications</a></li>
										


                                                                        </ul>
                                                                </nav>
                                                        </div>
                                                        <div class="account-content-container">
                                                                <div class="account-content jorrellS-col large-8 xlarge-9 jorrellS-relative-position z-index-1" id="accountContent">
                                                                        <div data-template-name="Projects" class="template-selector light projects" >
                                                                                <div class="template-selector-inner">
                                                                                        <div class="template-grid light">
                                                                                                <div class="grid-wrapper">
                                                                                                        <div class="grid-menu">
                                                                                                                <div>
                                                                                                                        <div class="template-grid-copy device-grid-copy">
                                                                                                                                <div class="template-grid-heading"><span>View My Projects</span></div>
                                                                                                                                <div class="template-grid-subheading"><span>Some of the different projects i've done over the years.</span></div>
                                                                                                                        </div>
                                                                                        		        </div>                                
                                                                                		        </div>

												        <div class="jorrellS-row device-grid">
                                                                                        		        <?php
                                                                                                	        foreach($templateArray as $template => $values) {?>

                                                                                                                        <div class="jorrellS-col large-6 grid-item device">
                                                                                                                                <div class="grid-browser-wrapper">
                                                                                                                                        <div class="grid-item-inner">
                                                                                                                                                <div class="jorrellS-absolute-position z-index-4 grid-item-overlay">
                                                                                                                                                        <div class="jorrellS-absolute-position z-index-4 jorrellS-full-height screen-content is-visible" style="background-image:url(<?php echo $values['location' ]; ?>);">
                                                                                                                                                                <img class="jorrellS-full-width jorrellS-full-height" alt="<?php echo $values['name']; ?>" src="<?php echo $values['location']; ?>" />
                                                                                                                                                        </div>
                                                                                                                                                </div>

																		<div class="jorrellS-absolute-position z-index-4 grid-item-overlay overlay-margin">																	
			                                                                                                                                <a href="/construction" class="hover-trigger"></a>
                                                                                                                                                        <div class="hover-mask">
                                                                                                                                                                <a><span><?php echo $values['description']; ?></span></a>
                                                                                                                                                        </div>
                                                                                                                        
                                                                                                                                                </div>																
																															

                                                                                                                                                <div class="grid-item-upper">
                                                                                                                                                        <div>
                                        
                                                                                                                                                        </div>
                                                                                                                                                </div>
                                                                                                                                                <div class="grid-item-content">
													
                                                                                                                                                        <div class="jorrellS-absolute-position z-index-3 jorrellS-full-height screen-content is-visible" style="background-image:url(<?php echo $values['background']; ?>);">
                                                                                                                                                                <img class="jorrellS-full-width jorrellS-full-height" alt="<?php echo $values['name']; ?>" src="<?php echo $values['background']; ?>" />
                                                                                                                                                        </div>																	
                                                                                                                                                        <div class="jorrellS-absolute-position grid-item-overlay overlay-background">

                                                                                                                                                        </div>
                                                                                                                                                </div>										
															                </div>
                                                                                                                                </div>
                                                                                        		                </div>

                                                                                        	        <?php   }       ?>

												        </div>
											        </div>
                                                                		        </div>
                                                        		        </div>
                                                		        </div>
                                                                        <div data-template-name="DevOps" class="template-selector light devops" >
                                                                                <div class="template-selector-inner">
                                                                                        <div class="template-grid light">
                                                                                                <div class="grid-wrapper">
                                                                                                        <div class="grid-menu">
                                                                                                                <div>
                                                                                                                        <div class="template-grid-copy device-grid-copy">
                                                                                                                                <div class="template-grid-heading"><span>View My DevOps Works</span></div>
                                                                                                                                <div class="template-grid-subheading"><span>Diving into DevOps.</span></div>
                                                                                                                        </div>
                                                                                        		        </div>                                
                                                                                		        </div>

												        <div class="jorrellS-row device-grid">

												        </div>
											        </div>
                                                                		        </div>
                                                        		        </div>
                                                		        </div>
                                                                        <div data-template-name="Web Applications" class="template-selector light template web-application" >
                                                                                <div class="template-selector-inner">
                                                                                        <div class="template-grid light">
                                                                                                <div class="grid-wrapper">
                                                                                                        <div class="grid-menu">
                                                                                                                <div>
                                                                                                                        <div class="template-grid-copy device-grid-copy">
                                                                                                                                <div class="template-grid-heading"><span>View website templates</span></div>
                                                                                                                                <div class="template-grid-subheading"><span>Feel free to browse through my collection of websites.</span></div>
                                                                                                                        </div>

                                                                                                                </div>
                                                                                                        </div>

                                                                                                        <div class="template-grid device-grid">
                                                                                                                <?php
                                                                                                                        $index = 0;
                                                                                                                        foreach($websiteArray as $websites => $values) {?>

                                                                                                                                <div class="grid-item device <?php if($index % 3 == 0) echo 'tablet'; else { if($index == 1) echo 'laptop'; else echo 'monitor'; }?>">
                                                                                                                                        <a href="view/?s=<?php echo $values['Website_ID']; ?>" class="hover-trigger"></a>
                                                                                                                                        <div class="device-hardware"></div>

                                                                                                                                        <div class="hover-mask">
                                                                                                                                                <a><span><?php echo $values['name']; ?></span></a>
                                                                                                                                        </div>

                                                                                                                                        <div class="device-screen">
                                                                                                                                                <div class="screen-content is-visible" style="background-image: url(<?php if($index != 2) echo $values['location']; else echo $values['location-alt']; ?>);">
                                                                                                                                                        <img alt="<?php echo $values['name']; ?>" src="<?php if($index != 2) echo $values['location']; else echo $values['location-alt']; ?>" />
                                                                                                                                                </div>
                                                                                                                                        </div>
                                                                                                                                </div>

                                                                                                                <?php   
                                                                                                                        $index += 1;
                                                                                                                        if($index > 2)
                                                                                                                                $index = 0;
                                                                                                                        } ?>



                                                                                                        </div>
                                                                                                </div>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>
						</div>
					</div>
				</div>
			</div>
		</div>

	
		<div class="footer">
			<div class="footer-top">
				<div class="container-wrap">
					<div class="jorrellS-row">
						<div class="jorrellS-col large-2">
							<div class="companyinfo">					
								<img alt="jorrell smith logo" class="jorrellS-full-max-width" src="/images/mynewlogo-crop-white.png" />
								<h2></h2>
								<p></p>
							</div>
						</div>
						<div class="jorrellS-col large-7">
										
						</div>
						<div class="jorrellS-col large-3">
							<div class="address" style="display: flex; justify-content: center;">
								<img src="/images/map.png" alt="map" />
								<p>Panama City, FL(Florida)</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="footer-widget">
				<div class="container-wrap">
					<div class="jorrellS-row">
						<div class="single-widget jorrellS-col large-3 xlarge-2">
							<div class="footer-nav-list">
								<div class="footer-nav-list-inner">
									<div class="footer-nav-list-inner-inner">
										<div class="footer-nav-heading"><span>Portfolio</span></div>
									</div>
								</div>

								<div class="footer-nav-content containts-2">
									<div class="footer-nav-link">
										<a href="/"><span>Home</span></a>
									</div>
									<div class="footer-nav-link">
										<a href="/aboutme/"><span>About Me</span></a>
									</div>
								</div>
                            </div>

                        </div>
                        <div class="single-widget jorrellS-col large-6 xlarge-2">
							<div class="footer-nav-list">
                                <div class="footer-nav-list-inner">
									<div class="footer-nav-list-inner-inner">
											<div class="footer-nav-heading"><span>My Work</span></div>
									</div>
                                </div>
								<div class="footer-nav-content containts-3">
									<div class="footer-nav-link">
										<a href="/mywork"><span>Projects</span></a>
									</div>

									<div class="footer-nav-link">
										<a href="/mywork"><span>DevOps</span></a>
									</div>

									<div class="footer-nav-link">
										<a href="/mywork"><span>Web Applications</span></a>
									</div>
								</div>
                            </div>
                        </div>
                        <div class="single-widget jorrellS-col large-3 xlarge-8 ">
							<div class="footer-social" style="padding-bottom:0;">
								<span>Social Media</span>
							</div>
							<div class="footer-social">                                                		
                                <div style="display:inline-block;margin-left:5px;"><a rel="external" target="_blank" href="https://twitter.com/JorrellSmith"><img alt="twitter logo" src="/images/mytwitter-logo.png" /></a></div>
                                <div style="display:inline-block;margin-left:5px;"> <a rel="external" target="_blank" href="https://www.linkedin.com/in/jorrell-smith/"><img alt="linkedin logo" src="/images/mylinkedin-logo.png" /></a></div>
                            </div>
							<div class="email-contact">
								<div class="email-header">
									<span>Contact Me</span>
								</div>
								<div class="email-content">
									<img style="width:25px; height:18px;" src="/images/icons/email-icon.png"/>
									<span style="padding:0 0 0 6px;">sabatiel180@gmail.com</span>
								</div>
							</div>
                        </div>
					</div>
                </div>
            </div>

			<div class="footer-bottom">
                <div class="footer-bottom-begin" ></div>
				<div class="container-wrap">
                    <div class="jorrellS-row">
                        <p class="jorrellS-col">Copyright © 2024 Jorrell Smith. All rights reserved.</p>
                        <p class="jorrellS-col">Designed by <span><a target="_blank" href="http://www.jorrellsmith.com">jorrellsmith.com</a></span></p>
                    </div>
                </div>
            </div>
		</div>																													
	</div>

	<script src="/js/events-templates.js"></script>
	<script src="/js/events-all.js"></script>
	
</body>
</html>
