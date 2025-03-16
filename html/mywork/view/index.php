<?php
	
	include("../../scripts/fullview.php");

?>

<!DOCTYPE html>
<html>
<head>
	<title>Template</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="icon" href="/images/mynewlogo-favicon.ico?v=2" />

	<meta name="description" content="Hi, Im Jorrell Smith a designer from Panama City, FL. I create highly functional interfaces with the perfect simpicity, elegance, and innovation for each individual. In my portfolio you will find some samples of different types of work I was involved in.  ">
	        
	<meta name="keywords" content="web, web design, interfaces, web interfaces, portfolio, designer, designer portfolio, web designer porfolio, florida, panama city">
	
	
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


		
		<div class="fullview">

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
										<div style="text-align:center;padding:1.5vh 1.5%;height:7vh;position:relative:z-index:1;overflow-x:auto;">

											<div style="display:inline-block;padding: 0% 2%;"><a href="/"><span style="font-size:10px;font-weight:600;color:#222;">Home</span></a></div>
											<div style="display:inline-block;padding: 0% 2%;"><a href="/mywork/" ><span style="font-size:10px;font-weight:600;color:#222;">My Work</span></a></div>
											<div style="display:inline-block;padding: 0% 2%;"><a href="/aboutme/"><span style="font-size:10px;font-weight:600;color:#222;">About Me</span></a></div>
											

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

						<div class="template-detail-content-wrapper jorrellS-row">
							<heading class="mobile-template-name jorrellS-display-none">
        							<small class="template-name-subheadline">Template</small>
								<h1 class="template-name-headline"><?php echo $fullViewArray['name']; ?></h1>
      							</heading>

      
      							<div class="demo jorrellS-col">
        							<div class="demo-screen-wrapper">
          								<div class="demo-screen demo-monitor">
            									<div class="demo-screen-browser"></div>
										<img class="demo-screen-image" data-src="" data-image-dimensions="100x57" src="<?php echo $fullViewArray['monitor_preview']; ?>" data-image-resolution="1000w">
									</div>

          								<div class="demo-tablet-home-button"></div>
          								<div class="demo-phone-home-button"></div>
          								<div class="demo-screen-monitor-base"></div>
								</div>

        							<div class="demo-devices">
									<span class="demo-device-icon demo-device-monitor is--active" data-device="monitor" data-src="<?php echo $fullViewArray['monitor_preview']; ?>">
										<svg width="28" height="22" viewBox="0 0 28 22" xmlns="http://www.w3.org/2000/svg">
  											<g fill="#000" fill-rule="evenodd">
    												<path d="M11 18h1v4h-1z"></path>
    												<path d="M9 21h10v1H9z"></path>
    												<path d="M16 18h1v4h-1z"></path>
    												<path d="M1 3v13c0 1.11.891 2 1.996 2h22.008A2.004 2.004 0 0 0 27 16V3c0-1.11-.891-2-1.996-2H2.996A2.004 2.004 0 0 0 1 3zM0 3c0-1.657 1.35-3 2.996-3h22.008A2.994 2.994 0 0 1 28 3v13c0 1.657-1.35 3-2.996 3H2.996A2.994 2.994 0 0 1 0 16V3z"></path>
  											</g>
										</svg>
									</span>
          								<span class="demo-device-icon demo-device-tablet" data-device="tablet" data-src="<?php echo $fullViewArray['tablet_preview']; ?>">
										<svg width="20" height="28" viewBox="0 0 20 28" xmlns="http://www.w3.org/2000/svg">
  											<g fill="#000" fill-rule="evenodd">
    												<path d="M1 2.996v22.008C1 26.1 1.897 27 2.994 27h14.012c1.1 0 1.994-.895 1.994-1.996V2.996A2.001 2.001 0 0 0 17.006 1H2.994C1.894 1 1 1.895 1 2.996zm-1 0A2.997 2.997 0 0 1 2.994 0h14.012A3.001 3.001 0 0 1 20 2.996v22.008A2.997 2.997 0 0 1 17.006 28H2.994A3.001 3.001 0 0 1 0 25.004V2.996z"></path>
    												<path d="M9 23h2v2H9z"></path>
  											</g>
										</svg>
									</span>
          								<span class="demo-device-icon demo-device-phone" data-device="phone" data-src="<?php echo $fullViewArray['phone_preview']; ?>">
										<svg width="12" height="22" viewBox="0 0 12 22" xmlns="http://www.w3.org/2000/svg">
  											<g fill="#000" fill-rule="evenodd">
    												<path d="M1 3.001V19C1 20.105 1.894 21 2.997 21h6.006A2 2 0 0 0 11 18.999V3A1.999 1.999 0 0 0 9.003 1H2.997A2 2 0 0 0 1 3.001zm-1 0A3 3 0 0 1 2.997 0h6.006A2.999 2.999 0 0 1 12 3.001V19A3 3 0 0 1 9.003 22H2.997A2.999 2.999 0 0 1 0 18.999V3z"></path>
    												<path d="M5 18h2v2H5z"></path>
  											</g>
										</svg>
									</span>
        							</div>
      							</div>

      
      							<div class="template-information">

        
        							<heading class="template-name">
          								<small class="template-name-subheadline">Template</small>
          								<h1 class="template-name-headline"><?php echo $fullViewArray['name']; ?></h1>
        							</heading>

        
        							<p class="template-description"></p>
									<a class="template-preview-button button knockout" data-action="preview" href="/construction">Preview <?php echo $fullViewArray['name']; ?></a>

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
                        <p class="jorrellS-float-left">Copyright © 2024 Jorrell Smith. All rights reserved.</p>
                        <p class="jorrellS-float-right">Designed by <span><a target="_blank" href="http://www.jorrellsmith.com">jorrellsmith.com</a></span></p>
                    </div>
                </div>
            </div>
		</div>


	

	</div>

	<script src="/js/events-fullview.js"></script>
	<script src="/js/events-all.js"></script>
	
</body>
</html>
