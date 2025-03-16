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




function carouselSet() {
	clearInterval(carousel);
	carousel = setInterval(carouselSlide , 5000, $('.jorrellS-carousel'), $('.jorrellS-carousel-slider') );
}



$(function() {


	$('.jorrellS-carousel-arrow-right').click(function() {

		clearTimeout(resizeId);
		clearInterval(carousel);
        	resizeId = setTimeout(carouselSlide, 500,  $('.jorrellS-carousel'), $('.jorrellS-carousel-slider'));


		//carouselSlide($('.jorrellS-carousel'), $('.jorrellS-carousel-slider'));
		carousel = setInterval(carouselSlide , 5000, $('.jorrellS-carousel'), $('.jorrellS-carousel-slider') );

	});

	$('.jorrellS-carousel-arrow-left').click(function() {
		

		clearTimeout(resizeId);
		clearInterval(carousel);
		
		resizeId = setTimeout(carouselSlideBack, 500,  $('.jorrellS-carousel'), $('.jorrellS-carousel-slider'));
		
		//carouselSlideBack($('.jorrellS-carousel'), $('.jorrellS-carousel-slider'));
		carousel = setInterval(carouselSlide , 5000, $('.jorrellS-carousel'), $('.jorrellS-carousel-slider') );

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


});




