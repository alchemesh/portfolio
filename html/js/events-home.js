var scrolling;


var imageSlide = function() {
	$('.image').find("[data-arrival-index]").each(function() {
		var dataArrival = parseInt($(this).attr("data-arrival-index"));			
		var max = $('.image').children().length - 2;
																
		
		dataArrival -= 1;

		if(dataArrival <= -1)
			dataArrival = max - 1;

													

		$(this).attr("data-arrival-index", dataArrival);
													
			
	});
};


var imageSlideBack = function()  {
	$('.image').find("[data-arrival-index]").each(function() {
		var dataArrival = parseInt($(this).attr("data-arrival-index"));
				
		var max = $('.image').children().length - 2;

		//alert($('.template-gallery').children().length);

			
	
		dataArrival += 1;
		

				
		if(dataArrival >= max)
			dataArrival = 0;

		


		$(this).attr("data-arrival-index", dataArrival);
		
	
	});	
};


function justScrolled() {
	var image = $('.image').offset();

	//alert("Im there");

	
        if($( "html, body" ).scrollTop() > 1 ||$( "body" ).scrollTop() > 1 ) {

		//alert("Im here");

              	if(!$( '.topmenu' ).hasClass("is-scrolled"))
                       	$( '.topmenu' ).addClass("is-scrolled");

        	else {
			var topinnerbutton = $('.topimagearrow').offset();

                	if($( "html, body" ).scrollTop() > topinnerbutton.top || $( "body" ).scrollTop() > topinnerbutton.top) {
                      		if(!$( '.banner' ).hasClass("is-active"))
                               		$( '.banner' ).addClass("is-active");

                		else {
					var maincontent = $('.main-content').offset();

                        		if($( "html, body" ).scrollTop() > maincontent.top || $( "body" ).scrollTop() > maincontent.top) {

                              			if(!$( ".image-section[data-arrival-index='0']" ).hasClass("is-animated") && ($( "html, body" ).scrollTop() < image.top || $( "body" ).scrollTop() < image.top)) {

							//alert("Im here");
                                    			//$( '.image-progress' ).addClass("is-active");
                                        	//$( '.image-indicator' ).first().addClass("is-active");
                                         		$( ".image-section[data-arrival-index='0']" ).addClass("is-animated");
						}

						else {
							var carouselcontainer = $('.jorrellS-carousel-container').offset();
								
							if($( "html, body" ).scrollTop() > carouselcontainer.top + 100 || $( "body" ).scrollTop() > carouselcontainer.top + 100) 
								$('.hosting-content').addClass("ready");
								


                                                               
							var journeyheading = $('.image .journey-heading').offset();

                                                        if(($( "html, body" ).scrollTop() > journeyheading.top - 250 || $( "body" ).scrollTop() > journeyheading.top - 250) && $( '.skills' ).css("display") == "none") {
								if(!$( '.image-progress' ).hasClass("is-active"))
									$( '.image-progress' ).addClass("is-active");
                                                              
								if($( "html, body" ).scrollTop() > journeyheading.top || $( "body" ).scrollTop() > journeyheading.top) {


                                                              		if($( ".image-section[data-arrival-index='0']" ).hasClass("is-scrollable--first"))

    										$( ".image-section[data-arrival-index='0']" ).removeClass("is-scrollable--first");
									else {
										if($( "html, body" ).scrollTop() > image.top + ($('.image').outerHeight()/ 4) || $( "body" ).scrollTop() > image.top + ($('.image').outerHeight()/ 4)) {

											
											if(!$( ".image-section[data-departure-index='1']" ).hasClass("is-animated") && !$( ".image-section[data-departure-index='2']" ).hasClass("is-animated")) {


	              	 								

 												$( ".image-section[data-arrival-index='0']").removeClass("is-animated");

												imageSlide();

												/*

												$('.image').find("[data-departure-index]").each(function() {
													var dataArrival = parseInt($(this).attr("data-arrival-index"));
													
		
													var max = $('.image').children().length - 2;

																
		
													dataArrival -= 1;

													if(dataArrival <= -1)
														dataArrival = max - 1;

													


													$(this).attr("data-arrival-index", dataArrival);
													
			
				
												});

												*/

 												$( ".image-section[data-arrival-index='0']").addClass("is-animated");                                                        
 												

											}


            										else {

												if($( "html, body" ).scrollTop() > image.top + (2 * ($('.image').outerHeight()/ 4)) || $( "body" ).scrollTop() > image.top + (2 * ($('.image').outerHeight()/ 4))) {

                            											if(!$( ".image-section[data-departure-index='2']" ).hasClass("is-animated")) {

                													//$( '.journeyJS .image-section.is-animated .image-image-wrapper').children().toggleClass("image-image");
    //$( '.image-section.is-animated').removeClass("is-animated").next().addClass("is-animated");
    $( ".image-section[data-arrival-index='0']").removeClass("is-animated");

														   imageSlide();

    $( ".image-section[data-arrival-index='0']").addClass("is-animated");


    //$( '.image-section' ).first().next().removeClass("is-active");

    //if(!$( '.image-progress' ).hasClass("is-active"))
    	//$( '.image-progress' ).addClass("is-active");


    //$( '.image-indicator' ).first().next().removeClass("is-active");
    
    //$( '.image-section' ).last().addClass("is-active");
    
    //$( '.image-indicator' ).last().addClass("is-active");
														}

														else {
    															if($( "html, body" ).scrollTop() > image.top + (3 * ($('.image').outerHeight()/ 4)) || $( "body" ).scrollTop() > image.top + (3 * ($('.image').outerHeight()/ 4))) {

																//(!$( ".image-section[data-departure-index='0']" ).hasClass("is-scrollable--first") && !$( ".image-section[data-departure-index='2']" ).hasClass("is-scrollable--last")) {


																	// ".image-section[data-departure-index='0']" ).addClass("is-scrollable--first");


																	//$( '.image-progress' ).removeClass("is-active");


																//



        	//else {

		
        		if($( "html, body" ).scrollTop() > image.top + (3.1 * ($('.image').outerHeight()/4)) || $( "body" ).scrollTop() > image.top + (3.1 * ($('.image').outerHeight()/4))) {

                		$( ".image-section[data-departure-index='2']" ).addClass("is-scrollable--last");

                        	$( '.image' ).css("position", "relative");

                	}


                	else {


                		$( '.image' ).css("position", "initial");

                        	$( ".image-section[data-departure-index='2']" ).removeClass("is-scrollable--last");
                        
                	}
		
                
        	//

    	}

    	else {

    		$( '.image-progress' ).addClass("is-active");

    	}
    

														}



												}

												else {

                            																								if(($( "html, body" ).scrollTop() < image.top + (2 * ($('.image').outerHeight()/ 4)) || $( "body" ).scrollTop() < image.top + (2 * ($('.image').outerHeight()/ 4))) && $( ".image-section[data-departure-index='2']" ).hasClass("is-animated")) {

																																										//$( '.image-section.is-animated').removeClass("is-animated").prev().addClass("is-animated");
														$( ".image-section[data-arrival-index='0']" ).removeClass("is-animated");
														imageSlideBack();
														$( ".image-section[data-arrival-index='0']" ).addClass("is-animated");
    

   //$( '.image-section' ).first().next().addClass("is-active");

   //if(!$( '.image-progress' ).hasClass("is-active"))
    	//$( '.image-progress' ).addClass("is-active");

   //$( '.image-indicator' ).first().next().addClass("is-active");
    
   //$( '.image-section' ).last().removeClass("is-active");
                                                                                                                     
   //$( '.image-indicator' ).last().removeClass("is-active");

																											}

														
                    										}


											}
										}

										else {

            										if(($( "html, body" ).scrollTop() < image.top + ($('.image').outerHeight()/ 4) || $( "body" ).scrollTop() < image.top + ($('.image').outerHeight()/ 4)) && $( ".image-section[data-departure-index='1']" ).hasClass("is-animated")) {


												$( ".image-section[data-arrival-index='0']" ).removeClass("is-animated");
												imageSlideBack();
												$( ".image-section[data-arrival-index='0']" ).addClass("is-animated");

 												//$( '.image-section.is-animated').removeClass("is-animated").prev().addClass("is-animated");                       
 												//$( '.image-section' ).first().addClass("is-animated");
 												//$( '.image-section' ).first().next().removeClass("is-animated");

 												//$( '.image-section' ).first().addClass("is-active");

 												//if(!$( '.image-progress' ).hasClass("is-active"))
        												//$( '.image-progress' ).addClass("is-active");

                    										//$( '.image-indicator' ).first().addClass("is-active");

                    										//$( '.image-section' ).first().next().removeClass("is-active");
                                                                                                                
                        									//$( '.image-indicator' ).first().next().removeClass("is-active");

            										}

    										}

									}
								}

								else {
                                                                      	if(($( "html, body" ).scrollTop() < journeyheading.top || $( "body" ).scrollTop() < journeyheading.top) && !$( ".image-section[data-departure-index='0']" ).hasClass("is-scrollable--first"))
                                                                               	$( ".image-section[data-departure-index='0']" ).addClass("is-scrollable--first");
										$( '.image-progress' ).removeClass("is-active");
                                                                 }




							}
							

                                 		}
					}


					else {
												
                                               	if(($( "html, body" ).scrollTop() < maincontent.top || $( "body" ).scrollTop() < maincontent.top) && $( '.image-progress' ).hasClass("is-active")) {
                                                       	$( '.image-progress' ).removeClass("is-active");
                                                        //$( '.image-indicator' ).first().removeClass("is-active");
                                                        $( ".image-section[data-arrival-index='0']" ).removeClass("is-animated");
                                        	}
                                        }

				}
			}
			
			else {
                               	if(($( "html, body" ).scrollTop() < topinnerbutton.top || $( "body" ).scrollTop() < topinnerbutton.top) && $( '.banner' ).hasClass("is-active"))
                                       	$( '.banner' ).removeClass("is-active");
                        }
		}
	}

	else {
        	$( '.topmenu' ).removeClass("is-scrolled");
        }

}


$(function() {
	/*
	$( '.footer-nav-heading ' ).click(function() {
        	$(this).parent().parent().parent().toggleClass("is-active");

        });
	*/

	/*
        $( '.topinnerbutton a, .toprollmenu .mywork' ).click(function() {
		if($( '.banner' ).hasClass("is-active"))
			$( '.banner' ).removeClass("is-active");


		if($( '.image-section' ).hasClass("is-animated")) {
			$( '.image-progress' ).removeClass("is-active");
                	$( '.image-indicator' ).removeClass("is-active");
                	$( '.image-section' ).removeClass("is-active");

			$( '.image-section' ).first().addClass("is-scrollable--first");

			$( '.image-section' ).removeClass("is-animated");
		}
                

        	$( '.overlaypanel' ).addClass("is-active");
                $( '.exit' ).addClass("is-active");
                //$( '.overlaypanel .image-wrapper img' ).addClass("is-loaded");

                $( "html, body" ).addClass("has-active-overlaypanel-selector");
        });*/

        $( '.exit' ).click(function() {
        	$( '.overlaypanel' ).removeClass("is-active");
                $( '.exit' ).removeClass("is-active");
                //$( '.overlaypanel .image-wrapper img' ).removeClass("is-loaded");

                $( "html, body" ).removeClass("has-active-overlaypanel-selector");
        });


        $( '.topimagearrow' ).click(function() {

        	var maincontent = $('.main-content').offset();

                $("html, body").animate({scrollTop: maincontent.top}, 1000);
        });



	$('.skills-images').bind( 'transitionend', function() {
        	var obj = $('.skills-images');

                var transformMatrix = obj.css("-webkit-transform") ||
                                      obj.css("-moz-transform")    ||
                                      obj.css("-ms-transform")     ||
                                      obj.css("-o-transform")      ||
                                      obj.css("transform");
                var matrix = transformMatrix.replace(/[^0-9\-.,]/g, '').split(',');
                var xTransform = matrix[12] || matrix[4];

                if(xTransform <= skillEnd) {

                	$( '.skills-wrap' ).css("transition", "none");
                        $( '.skills-wrap' ).css("transform", "translate3d(" + skillStart + "px, 0px, 0px)");


                }




                //if(!firstrun)
                //templateSlide(slideRuleInt);

                //firstrun = false;
        });


	$( window ).scroll(function() {

		clearTimeout(scrolling);
		scrolling = setTimeout(justScrolled, 5);




		/*
        	var image = $('.image').offset();


                if($( "html, body" ).scrollTop() > 1 ||$( "body" ).scrollTop() > 1 ) {


                	if(!$( '.topmenu' ).hasClass("is-scrolled"))
                        	$( '.topmenu' ).addClass("is-scrolled");

                        else {
				var topinnerbutton = $('.topinnerbutton').offset();

                                if($( "html, body" ).scrollTop() > topinnerbutton.top || $( "body" ).scrollTop() > topinnerbutton.top) {
                                	if(!$( '.banner' ).hasClass("is-active"))
                                        	$( '.banner' ).addClass("is-active");

                                        else {
						var maincontent = $('.main-content').offset();



                                                if($( "html, body" ).scrollTop() > maincontent.top || $( "body" ).scrollTop() > maincontent.top) {

                                                	if(!$( '.image-progress' ).hasClass("is-active") && ($( "html, body" ).scrollTop() < image.top || $( "body" ).scrollTop() < image.top)) {


                                                        	$( '.image-progress' ).addClass("is-active");
                                                                //$( '.image-indicator' ).first().addClass("is-active");
                                                                $( ".image-section[data-arrival-index='0']" ).addClass("is-animated");



                                                        }

                                                        else {
								var carouselcontainer = $('.jorrellS-carousel-container').offset();
								
								if($( "html, body" ).scrollTop() > carouselcontainer.top + 100 || $( "body" ).scrollTop() > carouselcontainer.top + 100) 
									$('.hosting-content').addClass("ready");
								


                                                                
								var journeyheading = $('.image .journey-heading').offset();

                                                                if(($( "html, body" ).scrollTop() > journeyheading.top - 250 || $( "body" ).scrollTop() > journeyheading.top - 250) && $( '.skills' ).css("display") == "none") {


                                                                	if($( "html, body" ).scrollTop() > journeyheading.top || $( "body" ).scrollTop() > journeyheading.top) {


                                                                        	if($( '.image-section' ).first().hasClass("is-scrollable--first") && $( '.image-section' ).first().hasClass("is-active"))

    											$( '.image-section' ).first().removeClass("is-scrollable--first");

                                                                                else {



											
											if($( "html, body" ).scrollTop() > image.top + ($('.image').outerHeight()/ 4) || $( "body" ).scrollTop() > image.top + ($('.image').outerHeight()/ 4)) {

	              	 									if(!$( '.image-section' ).first().next().hasClass("is-active") && !$( '.image-section' ).last().hasClass("is-active")) {

 													$( '.image-section').first().removeClass("is-animated");
 													$( '.image-section').first().next().addClass("is-animated");                                                        
 													$( '.image-section' ).first().removeClass("is-active");

 													if(!$( '.image-progress' ).hasClass("is-active"))
        													$( '.image-progress' ).addClass("is-active");
                                                                                                        
													$( '.image-indicator' ).first().removeClass("is-active");

                    											$( '.image-section' ).first().next().addClass("is-active");

                    											$( '.image-indicator' ).first().next().addClass("is-active");

            											}


            											else {

													
													if($( "html, body" ).scrollTop() > image.top + (2 * ($('.image').outerHeight()/ 4)) || $( "body" ).scrollTop() > image.top + (2 * ($('.image').outerHeight()/ 4))) {

                            											if(!$( '.image-section' ).last().hasClass("is-active")) {

                													//$( '.journeyJS .image-section.is-animated .image-image-wrapper').children().toggleClass("image-image");
    //$( '.image-section.is-animated').removeClass("is-animated").next().addClass("is-animated");
    $( '.image-section').first().next().removeClass("is-animated");
    $( '.image-section').last().addClass("is-animated");


    $( '.image-section' ).first().next().removeClass("is-active");

    if(!$( '.image-progress' ).hasClass("is-active"))
    	$( '.image-progress' ).addClass("is-active");


    $( '.image-indicator' ).first().next().removeClass("is-active");
    
    $( '.image-section' ).last().addClass("is-active");
    
    $( '.image-indicator' ).last().addClass("is-active");

														}


                            											else {
    															if($( "html, body" ).scrollTop() > image.top + (3 * ($('.image').outerHeight()/ 4)) || $( "body" ).scrollTop() > image.top + (3 * ($('.image').outerHeight()/ 4))) {

    	if(!$( '.image-section' ).first().addClass("is-scrollable--first") && !$( '.image-section' ).last().hasClass("is-scrollable--last")) {


        	$( '.image-section' ).first().addClass("is-scrollable--first");



                //$( '.image-progress' ).removeClass("is-active");



        }



        else {

		
        	if($( "html, body" ).scrollTop() > image.top + (3.1 * ($('.image').outerHeight()/4)) || $( "body" ).scrollTop() > image.top + (3.1 * ($('.image').outerHeight()/4))) {

                	$( '.image-section' ).last().addClass("is-scrollable--last");

                        $( '.image' ).css("position", "relative");

                }


                else {


                	$( '.image' ).css("position", "initial");

                        $( '.image-section' ).last().removeClass("is-scrollable--last");
                        
                }
		
                
        }

    }

    else {

    	$( '.image-progress' ).addClass("is-active");

    }
    

														}
													}


                    											else {

                            											if(($( "html, body" ).scrollTop() < image.top + (2 * ($('.image').outerHeight()/ 4)) || $( "body" ).scrollTop() < image.top + (2 * ($('.image').outerHeight()/ 4))) && $( '.image-section' ).last().hasClass("is-active")) {

                													//$( '.image-section.is-animated').removeClass("is-animated").prev().addClass("is-animated");
    $( '.image-section' ).first().next().addClass("is-animated");
    $( '.image-section' ).last().removeClass("is-animated");
    
    $( '.image-section' ).first().next().addClass("is-active");

    if(!$( '.image-progress' ).hasClass("is-active"))
    	$( '.image-progress' ).addClass("is-active");

    $( '.image-indicator' ).first().next().addClass("is-active");
    
    $( '.image-section' ).last().removeClass("is-active");
                                                                                                                     
    $( '.image-indicator' ).last().removeClass("is-active");

														}

														
                    											}

													
            											}

    											}
				
											else {

            											if(($( "html, body" ).scrollTop() < image.top + ($('.image').outerHeight()/ 4) || $( "body" ).scrollTop() < image.top + ($('.image').outerHeight()/ 4)) && $( '.image-section' ).first().next().hasClass("is-active")) {


 													//$( '.image-section.is-animated').removeClass("is-animated").prev().addClass("is-animated");                       
 													$( '.image-section' ).first().addClass("is-animated");
 													$( '.image-section' ).first().next().removeClass("is-animated");

 													$( '.image-section' ).first().addClass("is-active");

 													if(!$( '.image-progress' ).hasClass("is-active"))
        													$( '.image-progress' ).addClass("is-active");

                    											$( '.image-indicator' ).first().addClass("is-active");

                    											$( '.image-section' ).first().next().removeClass("is-active");
                                                                                                                
                        										$( '.image-indicator' ).first().next().removeClass("is-active");

            											}

    											}
                                                                               
										                                     
                                                                     		}    
                                         	                        }

									else {
                                                                        	if(($( "html, body" ).scrollTop() < journeyheading.top || $( "body" ).scrollTop() < journeyheading.top) && !$( '.image-section' ).first().hasClass("is-scrollable--first"))
                                                                                	$( '.image-section' ).first().addClass("is-scrollable--first");
                                                                        }




                                                        	}

                                                                else {
                                                                	//$( '.image-progress' ).removeClass("is-active");
                                                                        //$( '.image-progress' ).css("opacity", "0");
                                                                }


                                                                 
							}
						}
					
						else {
                                                	if(($( "html, body" ).scrollTop() < maincontent.top || $( "body" ).scrollTop() < maincontent.top) && $( '.image-progress' ).hasClass("is-active")) {
                                                        	$( '.image-progress' ).removeClass("is-active");
                                                                $( '.image-indicator' ).first().removeClass("is-active");
                                                                $( '.image-section' ).first().removeClass("is-active");
                                                        }
                                                }
					}
				}
				
				else {
                                	if(($( "html, body" ).scrollTop() < topinnerbutton.top || $( "body" ).scrollTop() < topinnerbutton.top) && $( '.banner' ).hasClass("is-active"))
                                        	$( '.banner' ).removeClass("is-active");
                                }
			}
		}
		
		else {
                	$( '.topmenu' ).removeClass("is-scrolled");
                }

		*/

	});



	if($( "html, body" ).scrollTop() > 1 ||$( "body" ).scrollTop() > 1 ) {

              	if(!$( '.topmenu' ).hasClass("is-scrolled"))
                       	$( '.topmenu' ).addClass("is-scrolled");
	}




});
