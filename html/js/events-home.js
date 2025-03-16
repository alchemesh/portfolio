var scrolling;
var readyToScroll;
var currentImageStr = "0";
var hasBeenExecuted = false;
var currentPosition = 0;

$('.image-section').bind("transitionend", function() {
	//alert("Im animating");
	if($(this).hasClass("is-animated")) {
		readyToScroll = setTimeout(addReadyToScroll, 100, $(this))
		//alert("Im animating");
	}
	//$(this).addClass('is-ready-scroll')
});

function addReadyToScroll(e) {
	$( ".image-section").removeClass("is-ready-to-scroll");
	e.addClass('is-ready-to-scroll');
	$("body").removeClass("has-active-scrolllock");
	hasBeenExecuted = false;
	currentPosition = $( "html, body" ).scrollTop();
	//console.log("yikes1");
	if(currentImageStr == "0") {
		$( ".image-section[data-departure-index='0']" ).addClass("is-scrollable--first");
		var imagecontent = $(".image-section[data-departure-index='0']").offset();
    	$("html, body").animate({scrollTop: imagecontent.top - 150}, 0);
		$( '.image-progress' ).removeClass("is-active");
	}

	if(currentImageStr == "2") {
		$( ".image-section[data-departure-index='2']" ).addClass("is-scrollable--last");
		$( '.image' ).css("position", "relative");
		$("html, body").css("scrollbar-width", "initial");
		//$("body").removeClass("has-active-scrolllock");
		//$( '.image' ).addClass("relative");
		var imagecontent = $(".image-section[data-departure-index='2']").offset();
    	$("html, body").animate({scrollTop: imagecontent.top - 150}, 0);
		currentPosition = $( "html, body" ).scrollTop();
		//console.log("yikes2");
	}

	//clearTimeout(readyToScroll);
	//scrolling = setTimeout(justScrolled, 500);

}

var scrollArea = function(direction) {
	$("body").addClass("has-active-scrolllock");
	clearTimeout(scrolling);
	//scrolling = setTimeout(justScrolled, 500);


	//$( ".image-section[data-arrival-index='0']").removeClass("is-animated");
	//$( ".image-section[data-arrival-index='0']").removeClass("is-ready-to-scroll");
	//console.log("Im here");

	if(direction == "forward") {
		imageSlideCopy();
		imageSlide();
	}
	else {
		imageSlideBackCopy();
		imageSlideBack();
	}

	//console.log(currentImageStr);
	//$("body").removeClass("has-active-scrolllock");

	//$( ".image-section[data-arrival-index='0']").addClass("is-animated");

	//var imagecontent = $('.image').offset();

    //$("html, body").animate({scrollTop: imagecontent.top}, 1000);
};



var imageSlideCopy = function() {
	var currentImage;
	$('.image-section').each(function() {
		if($(this).hasClass("is-animated") && !hasBeenExecuted) {
			hasBeenExecuted = true;
			//$(this).removeClass("is-ready-to-scroll");
			$(this).removeClass("is-animated");
			var dataDeparture = parseInt($(this).attr("data-departure-index"));
			currentImage = dataDeparture;
			//console.log(currentImage);
			//console.log("I died");
			currentImage = currentImage + 1;
			//console.log(currentImage);
			currentImageStr = currentImage.toString();

			if(!isNaN(currentImage) && currentImage != " ") {
				//currentImage = currentImage + 1;
				//console.log(currentImage);
				//currentImageStr = currentImage.toString();
				//clearTimeout(scrolling);
				$(".image-section[data-departure-index='" + currentImageStr + "']").addClass("is-animated");

				
			}
		}
	});

	
};

var imageSlideBackCopy = function() {
	var currentImage;
	$('.image-section').each(function() {
		if($(this).hasClass("is-animated") && !hasBeenExecuted) {
			hasBeenExecuted = true;
			//$(this).removeClass("is-ready-to-scroll");
			$(this).removeClass("is-animated");
			var dataDeparture = parseInt($(this).attr("data-departure-index"));
			currentImage = dataDeparture;
			//console.log("I died");
			currentImage = currentImage - 1;
			//console.log(currentImage);
			currentImageStr = currentImage.toString();

			//console.log(currentImage);

			if((!isNaN(currentImage) && currentImage != " ") || currentImage == 0) {
				//currentImage = currentImage + 1;
				//console.log("phew, i made it");
				//currentImageStr = currentImage.toString();
				//clearTimeout(scrolling);
				$(".image-section[data-departure-index='" + currentImageStr + "']").addClass("is-animated");

			}
		}
	});

	
};

var imageSlide = function() {
	$('.image-progress').find("[data-arrival-index]").each(function() {
		var dataArrival = parseInt($(this).attr("data-arrival-index"));			
		var max = $('.image-progress').children().length;
		//console.log(max);
																

		dataArrival -= 1;

		if(dataArrival <= -1)
			dataArrival = max - 1;

												
		$(this).attr("data-arrival-index", dataArrival);
											
	});


};


var imageSlideBack = function()  {
	$('.image-progress').find("[data-arrival-index]").each(function() {
		var dataArrival = parseInt($(this).attr("data-arrival-index"));
				
		var max = $('.image-progress').children().length;

		dataArrival += 1;
				
		if(dataArrival >= max)
			dataArrival = 0;


		$(this).attr("data-arrival-index", dataArrival);
		
	
	});
};


function justScrolled() {
	var image = $('.image').offset();
	
    if($( "html, body" ).scrollTop() > 1 ||$( "body" ).scrollTop() > 1 ) {

        if(!$( '.topmenu' ).hasClass("is-scrolled"))
            $( '.topmenu' ).addClass("is-scrolled");

        else {
			var topinnerbutton = $('.topimagearrow').offset();
			var footer = $('.footer').offset();

            if($( "html, body" ).scrollTop() > topinnerbutton.top || $( "body" ).scrollTop() > topinnerbutton.top) {
                //if(!$( '.bottom-menu' ).hasClass("is-active") && ($( "html, body" ).scrollTop() < footer.top - 650 || $( "body" ).scrollTop() < footer.top - 650))
                    //$( '.bottom-menu' ).addClass("is-active");

				
                //else {
					var maincontent = $('.main-content').offset();
					
                    if($( "html, body" ).scrollTop() > maincontent.top || $( "body" ).scrollTop() > maincontent.top) {
                        /*if(!$( ".image-section[data-arrival-index='0']" ).hasClass("is-animated") && ($( "html, body" ).scrollTop() < image.top || $( "body" ).scrollTop() < image.top)) {

                            $( ".image-section[data-arrival-index='0']" ).addClass("is-animated");
						}*/

						//else {
							
							var descriptioncontainer = $('.description').offset();
								
							if($( "html, body" ).scrollTop() > descriptioncontainer.top + 100 || $( "body" ).scrollTop() > descriptioncontainer.top + 100) 
								$('.hosting-content').addClass("ready");
								                                   
							//var footer = $('.footer').offset();

							//if($( "html, body" ).scrollTop() > footer.top - 650 || $( "body" ).scrollTop() > footer.top - 650) {
								//console.log("Im here");
								//$( '.bottom-menu' ).removeClass("is-active");
							//}
							//else
								//$( '.bottom-menu' ).addClass("is-active");
							/*var journeyheading = $('.image .journey-heading').offset();
							//if(!$( ".image-section[data-departure-index='0']" ).hasClass("is-animated"))
								//$( ".image-section[data-departure-index='0']" ).addClass("is-animated");

                            if(($( "html, body" ).scrollTop() > journeyheading.top - 250 || $( "body" ).scrollTop() > journeyheading.top - 250) && $( '.skills' ).css("display") == "none") {
								if(!$( '.image-progress' ).hasClass("is-active")) 
									$( '.image-progress' ).addClass("is-active");

                                                              
								if($( "html, body" ).scrollTop() > journeyheading.top || $( "body" ).scrollTop() > journeyheading.top) {
									
                                    if($( ".image-section[data-arrival-index='0']" ).hasClass("is-scrollable--first")) {
    									$( ".image-section[data-arrival-index='0']" ).removeClass("is-scrollable--first");
										setTimeout(addReadyToScroll, 500, $( ".image-section[data-arrival-index='0']" ));
										$("html, body").css("scrollbar-width", "none");

										if(currentPosition = 0)
											currentPosition = $( "html, body" ).scrollTop();
										//console.log("In the wrong area");
									}
									else {
										//currentPosition = $( "html, body" ).scrollTop();
										//console.log(currentPosition);
										//if(currentPosition < $( "html, body" ).scrollTop()) {
											//console.log(currentPosition);
										if($( ".image-section[data-departure-index='" + currentImageStr + "']" ).hasClass("is-ready-to-scroll") && !$( ".image-section[data-departure-index='2']").hasClass("is-animated") && currentPosition < $( "html, body" ).scrollTop()) {
										//if($( "html, body" ).scrollTop() > image.top + ($('.image').outerHeight()/ 4) || $( "body" ).scrollTop() > image.top + ($('.image').outerHeight()/ 4)) {
											//if(!$( ".image-section[data-departure-index='1']" ).hasClass("is-animated") && !$( ".image-section[data-departure-index='2']" ).hasClass("is-animated")) {
											//if(!$( ".image-section[data-departure-index='2']" ).hasClass("is-scrollable--last")) {
												

											scrollArea("forward");
										
										}

										else {
											//console.log("Im running");
											//var imagecontent = $(".image-section[data-departure-index='2']").offset();
											if($( "html, body" ).scrollTop() < currentPosition && $( ".image-section[data-departure-index='" + currentImageStr + "']" ).hasClass("is-ready-to-scroll")) {
												if($( ".image-section[data-departure-index='2']" ).hasClass("is-scrollable--last")) {
													$( '.image' ).css("position", "initial");
                        							$( ".image-section[data-departure-index='2']" ).removeClass("is-scrollable--last");
													$("html, body").css("scrollbar-width", "none");
												}
												else {
													scrollArea("backwards");
												}
												//console.log("Im running");
												//$( '.image' ).css("position", "initial");
                        						//$( ".image-section[data-departure-index='2']" ).removeClass("is-scrollable--last");
											}
										}

									}
								}


							}*/
							

                        //}
					}

					/*else {
												
                        if(($( "html, body" ).scrollTop() < maincontent.top || $( "body" ).scrollTop() < maincontent.top) && $( '.image-progress' ).hasClass("is-active")) {
                            $( '.image-progress' ).removeClass("is-active");
                            //$( '.image-indicator' ).first().removeClass("is-active");
                            //$( ".image-section[data-arrival-index='0']" ).removeClass("is-animated");
							$( ".image-section[data-departure-index='0']" ).addClass("is-animated");
                        }
                    }*/

				//}
			}
			
			else {
                if(($( "html, body" ).scrollTop() < topinnerbutton.top || $( "body" ).scrollTop() < topinnerbutton.top) && $( '.bottom-menu' ).hasClass("is-active"))
                    $( '.bottom-menu' ).removeClass("is-active");
            }
		}
	}

	else {
        $( '.topmenu' ).removeClass("is-scrolled");
    }

}


$(function() {
	


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

				var skillSlideInt = -($('.skills-item').outerWidth());


                var skillStart = skillSlideInt;
                var skillEnd = skillStart * 4;


                if(xTransform <= skillEnd) {

                	$( '.skills-wrap' ).css("transition", "none");
                        $( '.skills-wrap' ).css("transform", "translate3d(" + skillStart + "px, 0px, 0px)");


                }


        });


	$( window ).scroll(function() {

		clearTimeout(scrolling);
		scrolling = setTimeout(justScrolled, 5);



	});



	if($( "html, body" ).scrollTop() > 1 ||$( "body" ).scrollTop() > 1 ) {

              	if(!$( '.topmenu' ).hasClass("is-scrolled"))
                       	$( '.topmenu' ).addClass("is-scrolled");
	}




});
