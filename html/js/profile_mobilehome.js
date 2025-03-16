var skillCarousel;
var skillResize;


function skillSlider() {
	carouselSlide($('.skills'), $('.skills-images'));
}

function skillSliderSet() {
	clearInterval(skillCarousel);
	skillCarousel = setInterval(skillSlider , 5000);
}



$(function() {


	var skillResize;


	$(window).resize(function() {
        	clearTimeout(skillResize);
        	skillResize = setTimeout(skillSliderSet, 500);
	});

	skillSliderSet();



});
