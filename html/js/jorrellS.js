var carousel;
var resizeId;



var carouselSlide = function(carousel_s, carouselSlide) {
	carousel_s.find("[data-departure-index]").each(function() {
		var dataArrival = parseInt($(this).attr("data-arrival-index"));
		var dataDeparture = parseInt($(this).attr("data-departure-index"));
		
		var max = carouselSlide.children().length;

		//alert($('.template-gallery').children().length);

			
		
		dataArrival -= 1;
		dataDeparture += 1;

		if(dataArrival <= -1)
			dataArrival = max - 1;

		if(dataDeparture >= max)
			dataDeparture = 0;


		$(this).attr("data-arrival-index", dataArrival);
		$(this).attr("data-departure-index", dataDeparture);

			
				
	});
};


var carouselSlideBack = function() {
	$('.jorrellS-carousel').find("[data-departure-index]").each(function() {
		var dataArrival = parseInt($(this).attr("data-arrival-index"));
		var dataDeparture = parseInt($(this).attr("data-departure-index"));
		
		var max = $('.jorrellS-carousel-slider').children().length;

		//alert($('.template-gallery').children().length);

			
	
		dataArrival += 1;
		dataDeparture -= 1;

				
		if(dataArrival >= max)
			dataArrival = 0;

		if(dataDeparture <= -1)
			dataDeparture = max - 1;



		$(this).attr("data-arrival-index", dataArrival);
		$(this).attr("data-departure-index", dataDeparture);
	
	});
};


/*
function carouselSlider() {
	carouselSlide($('.jorrellS-carousel'), $('.jorrellS-carousel-slider'));
}*/


function carouselSet() {
	clearInterval(carousel);
	carousel = setInterval(carouselSlide , 5000, $('.jorrellS-carousel'), $('.jorrellS-carousel-slider') );
}

/*
function carouselSetNSlide() {
	clearInterval(carousel);
	carouselSlider();
	carousel = setInterval(carouselSlider , 5000);
}

function carouselSetNSlideBack() {
	clearInterval(carousel);
	carouselSlideBack();
	carousel = setInterval(carouselSlider , 5000);
}*/


$(function() {

	/*

var resizeId;
var timeOut;
var carouselSlider = [];
var currentPosition = [];


function setCurrentPosition(carousel, CurrentPosition) {
	currentPosition[carousel.index()] = CurrentPosition;
}

function getCurrentPosition(carousel) {
	return currentPosition[carousel.index()];
}
*/

	$('.jorrellS-carousel-arrow-right').click(function() {
		//clearInterval(carousel);
		//carouselSlide()
		//clearTimeout(resizeId);

		//clearTimeout(carousel);

		clearTimeout(resizeId);
		clearInterval(carousel);
        	resizeId = setTimeout(carouselSlide, 500,  $('.jorrellS-carousel'), $('.jorrellS-carousel-slider'));


		//carouselSlide($('.jorrellS-carousel'), $('.jorrellS-carousel-slider'));
		carousel = setInterval(carouselSlide , 5000, $('.jorrellS-carousel'), $('.jorrellS-carousel-slider') );
		//resizeId = setTimeout(carouselSetNSlide, 500);
		//carousel = setInterval(carouselSlide , 500);

	});

	$('.jorrellS-carousel-arrow-left').click(function() {
		//clearTimeout(resizeId);

		//clearTimeout(carousel);
		//clearInterval(carousel);
		//resizeId = setTimeout(carouselSetNSlideBack, 500);
		

		clearTimeout(resizeId);
		clearInterval(carousel);
		
		resizeId = setTimeout(carouselSlideBack, 500,  $('.jorrellS-carousel'), $('.jorrellS-carousel-slider'));
		
		//carouselSlideBack($('.jorrellS-carousel'), $('.jorrellS-carousel-slider'));
		carousel = setInterval(carouselSlide , 5000, $('.jorrellS-carousel'), $('.jorrellS-carousel-slider') );
		//clearInterval(carousel);
		//carouselSlideBack();
		//carousel = setInterval(carouselSlide , 8000);

	});


	document.addEventListener('visibilitychange', function() {    		
		if(document.hidden)
			clearTimeout(carousel);
		else
			carouselSet();
	});


	$(window).resize(function() {
		//alert("Im here");
		//clearTimeout(carousel);
		clearTimeout(resizeId);
		clearInterval(carousel);
        	resizeId = setTimeout(carouselSet, 500);
	});


	carouselSet();


	


/*
function carouselSlide(carousel, myevent) {
	
	var currentSlider = carousel.children().children('.jorrellS-carousel-slider' );

        var transformMatrix = currentSlider.css("-webkit-transform") ||
        currentSlider.css("-moz-transform")    ||
        currentSlider.css("-ms-transform")     ||
        currentSlider.css("-o-transform")      ||
        currentSlider.css("transform");
        var matrix = transformMatrix.replace(/[^0-9\-.,]/g, '').split(',');
        var currentPosition = matrix[12] || matrix[4];
	


	var slideRuleInt = -(carousel.children().children().children('.jorrellS-carousel-slide').outerWidth());
	var slideTransform = slideRuleInt * myevent;



	//var vhWidth = Math.abs(slideRuleInt) / carousel.outerWidth();
        //vhWidth = vhWidth.toFixed(2) * 100; //round 2 decimal and convert to integer



	if(slideTransform > 0) {
		

		if(carousel.children().children('.jorrellS-carousel-slider').children('.prev-active').hasClass("clone-last")) {
			carousel.children().children().children('.jorrellS-carousel-slide').removeClass('prev-active is-active next-active');
                        carousel.children().children('.jorrellS-carousel-slider').children('.clone-first').first().toggleClass('next-active').prev().addClass('is-active').prev().addClass('prev-active');

			//carousel.children('.progress-container').children('.is-active').removeClass('is-active').siblings().last().addClass('is-active');

		}
	
		else {
			var isActive = carousel.children().children('.jorrellS-carousel-slider').children('.is-active').index();

                        carousel.children().children().children('.jorrellS-carousel-slide').removeClass('prev-active is-active next-active');
                        carousel.children().children().children('.jorrellS-carousel-slide').eq(isActive).toggleClass('next-active').prev().addClass('is-active').prev().addClass('prev-active');		

			carousel.children('.progress-container').children('.is-active').removeClass('is-active').prev().addClass('is-active');

		}

	}

	else {
		if(carousel.children().children('.jorrellS-carousel-slider').children('.next-active').hasClass("clone-first")) {
			carousel.children().children().children('.jorrellS-carousel-slide').removeClass('prev-active is-active next-active');
			carousel.children().children('.jorrellS-carousel-slider').children('.clone-last').last().toggleClass('prev-active').next().addClass('is-active').next().addClass('next-active');

			//carousel.children('.progress-container').children('.is-active').removeClass('is-active').siblings().first().addClass('is-active');

                }

                else {
			var isActive = carousel.children().children('.jorrellS-carousel-slider').children('.is-active').index();
			
			carousel.children().children().children('.jorrellS-carousel-slide').removeClass('prev-active is-active next-active');
                        carousel.children().children().children('.jorrellS-carousel-slide').eq(isActive).toggleClass('prev-active').next().addClass('is-active').next().addClass('next-active');

			carousel.children('.progress-container').children('.is-active').removeClass('is-active').next().addClass('is-active');
			
                }
	}
        

        carousel.children().children('.jorrellS-carousel-slider' ).css("transition", "transform .7s cubic-bezier(.8,.01,.55,.94),-webkit-transform .7s cubic-bezier(.8,.01,.55,.94)");


	
	var newPosition = getCurrentPosition(carousel) + slideTransform;

	setCurrentPosition(carousel, newPosition);

        carousel.children().children('.jorrellS-carousel-slider' ).css("transform", "translate3d(" + newPosition + "px, 0px, 0px)");
}

                       



function init() {
	for(var index= 0; index < carouselSlider.length; index++)
		clearInterval(carouselSlider[index]); 


	var index = 0;
	
	$('.jorrellS-carousel').each(function() {

		var carousel = $(this);
		

		var carouselWidth = $(this).attr("data-width");
		var carouselHeight = $(this).attr("data-height");		
		
		if(carouselWidth != null && carouselHeight != null) {
			var slideWidth = carouselWidth.match(/[\d.]+/)[0] / 100
      , unit = carouselWidth.match(/[vwh]+/)[0];

			var slideHeight = carouselHeight.match(/[\d.]+/)[0] / 100
      , unit = carouselHeight.match(/[vwh]+/)[0];
			
			var newWidth = slideWidth * $(window).outerWidth();
			var newHeight =  slideHeight * $(window).outerWidth();

			
			$(this).children().children().children('.jorrellS-carousel-slide').css("width", parseInt(newWidth) )
			$(this).children().children().children('.jorrellS-carousel-slide').css("height", parseInt(newHeight));
			

		}

		$(this).children().children( '.jorrellS-carousel-arrow-left' ).off("click");
		$(this).children().children( '.jorrellS-carousel-arrow-right' ).off("click");

		
		
		$(this).children().children( '.jorrellS-carousel-arrow-left' ).click(function() {
			                
			var thisCarousel = $(this).parent().parent();
                        var carouselIndex = thisCarousel.index() - 1;

                        clearInterval(carouselSlider[carouselIndex]);
 
       
                	clearTimeout(timeOut);
			carouselSlide($(this).parent().parent(), -1);
			
			//var thisCarousel = $(this).parent().parent();
			//var carouselIndex = thisCarousel.index() - 1;

			//clearInterval(carouselSlider[carouselIndex]);


                        timeOut = setTimeout(function() {
				carouselSlider[carouselIndex] = setInterval(function() {

                        		carouselSlide(thisCarousel, 1);

				}, carousel.attr("data-loop-interval") * 1000);

				

                                clearTimeout(timeOut);

                        }, 1000);
			


                });		

		
		
		$(this).children().children( '.jorrellS-carousel-arrow-right' ).click(function() {
                        
                        clearTimeout(timeOut);
                        carouselSlide($(this).parent().parent(), 1);

                        var thisCarousel = $(this).parent().parent();
                        var carouselIndex = thisCarousel.index() - 1;

                        clearInterval(carouselSlider[carouselIndex]);



                        timeOut = setTimeout(function() {
                                carouselSlider[carouselIndex] = setInterval(function() {

                                        carouselSlide(thisCarousel, 1);

                                }, carousel.attr("data-loop-interval") * 1000);



                                clearTimeout(timeOut);

                        }, 1000);



                });




		$(this).children('.jorrellS-carousel-container' ).bind( 'transitionend', function() {
			
			
			var carouselSlider = $(this).children('.jorrellS-carousel-slider' );

                        var transformMatrix = carouselSlider.css("-webkit-transform") ||
                        carouselSlider.css("-moz-transform")    ||
                        carouselSlider.css("-ms-transform")     ||
                        carouselSlider.css("-o-transform")      ||
                        carouselSlider.css("transform");
                        var matrix = transformMatrix.replace(/[^0-9\-.,]/g, '').split(',');
                        var currentPosition = matrix[12] || matrix[4];
			


			var slideRuleInt = -($(this).children().children('.jorrellS-carousel-slide').outerWidth());



                	var vhWidth = -(slideRuleInt) / $(this).outerWidth();
                	vhWidth = vhWidth.toFixed(2) * 100; //round 2 decimal and convert to integer

                

                	var startingPoint = slideRuleInt + parseInt(slideRuleInt * ((vhWidth - (100 - vhWidth) / 2) / vhWidth));

			var obj = $(this).children().children('.jorrellS-carousel-slide').siblings();

        		var endPoint = ((parseInt(obj.length) - 5) * slideRuleInt) + startingPoint;


			var cloneLast = startingPoint + -(slideRuleInt);
        		var cloneFirst = endPoint + slideRuleInt;


			


			if(getCurrentPosition(carousel) <= parseInt(cloneFirst)) {
				
                        	$(this).children('.jorrellS-carousel-slider' ).css("transition", "none");

                                $(this).children('.jorrellS-carousel-slider' ).css("transform", "translate3d(" + startingPoint + "px, 0px, 0px)");

                                setCurrentPosition(carousel, startingPoint);


				carousel.children().children().children('.jorrellS-carousel-slide').removeClass('prev-active is-active next-active');
                        	carousel.children().children('.jorrellS-carousel-slider').children('.clone-last').last().toggleClass('prev-active').next().addClass('is-active').next().addClass('next-active');
				
				carousel.children('.progress-container').children().removeClass('is-active');
				carousel.children('.progress-container').children().first().addClass('is-active');

                        }

                        if(getCurrentPosition(carousel) >= parseInt(cloneLast)) {
                                
				$(this).children('.jorrellS-carousel-slider' ).css("transition", "none");

                                $(this).children('.jorrellS-carousel-slider' ).css("transform", "translate3d(" + endPoint + "px, 0px, 0px)");

				setCurrentPosition(carousel, endPoint);


				carousel.children().children().children('.jorrellS-carousel-slide').removeClass('prev-active is-active next-active');
                                carousel.children().children('.jorrellS-carousel-slider').children('.clone-first').first().toggleClass('next-active').prev().addClass('is-active').prev().addClass('prev-active');

				carousel.children('.progress-container').children('.is-active').removeClass('is-active').siblings().last().addClass('is-active');


                        }		
	
		});


		

		carouselSlider[index++] = setInterval(function() {
			
			carouselSlide(carousel, 1);
	
       
                }, $(this).attr("data-loop-interval") * 1000);

		



		var slideRuleInt = -($(this).children().children().children('.jorrellS-carousel-slide').outerWidth());

		

		var vhWidth = -(slideRuleInt) / $(this).outerWidth();
		vhWidth = vhWidth.toFixed(2) * 100; //round 2 decimal and convert to integer

		

		var startingPoint = (slideRuleInt *  ($(this).children().children('.jorrellS-carousel-slider').children('.is-active').index() - 1)) + parseInt(slideRuleInt * ((vhWidth - (100 - vhWidth) / 2) / vhWidth));
		



		setCurrentPosition(carousel, startingPoint);

		$(this).children().children('.jorrellS-carousel-slider' ).css("transform", "translate3d(" + startingPoint + "px, 0px, 0px)");				

		

	});
}
*/
	//init();

});




