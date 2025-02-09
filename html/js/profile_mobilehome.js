var skillCarousel;
var skillResize;


function skillSlider() {
	carouselSlide($('.skills'), $('.skills-images'));
}

function skillSliderSet() {
	clearInterval(skillCarousel);
	skillCarousel = setInterval(skillSlider , 5000);
}

/*
function carouselSetNSlide() {
	clearInterval(skillCarousel);
	carouselSlide();
	carousel = setInterval(carouselSlide , 5000);
}

function carouselSetNSlideBack() {
	clearInterval(carousel);
	carouselSlideBack();
	carousel = setInterval(carouselSlide , 5000);
}

*/


$(function() {

/*
var templateSlider;
var timeOut;

var slideRuleInt;
var startingPoint;
var endPoint;
var templateCurrent;


var cloneLast;
var cloneFirst;


var skillSlideInt;
//var skillStart;
//var skillEnd;
var skillCurrent;


var firstrun = true;

function getTemplateCurrent() {
        return templateCurrent;
}

function setTemplateCurrent(newPosition) {
        templateCurrent = newPosition;
}


function getSkillCurrent() {
	return skillCurrent;
}

function setSkillCurrent(newPosition) {
	skillCurrent = newPosition;
}
*/


	var skillResize;


	$(window).resize(function() {
        	clearTimeout(skillRresize);
        	skillRresize = setTimeout(skillSliderSet, 500);
	});

	skillSliderSet();








function resetTransformAnimationWidth() {
	//slideRuleInt = -($('.template-preview').outerWidth());
        skillSlideInt = -($('.skills-item').outerWidth());


        skillStart = skillSlideInt;
        skillEnd = skillStart * 4;


	/*
        if($(window).outerWidth() >= 776)
        	startingPoint = slideRuleInt + parseInt(slideRuleInt * .54);
		
        else 
        	startingPoint = (slideRuleInt * 2) - parseInt(slideRuleInt * .05);
	
	*/	
	
	

	//skillStart = skillStart + parseInt(skillStart * .05);

        //var obj = $('.template-preview').siblings();

        //endPoint = ((parseInt(obj.length) - 5) * slideRuleInt) + startingPoint;


        //cloneLast = startingPoint + -(slideRuleInt);
        //cloneFirst = endPoint + slideRuleInt;



	/*
        var currentPoint = 0;

        for(var index = 0; ;index++) {

        	if($('.template-preview').eq(index).hasClass("is-active")) {
                	currentPoint = ((index - 2) * slideRuleInt) + startingPoint;
                        break;
                }

        }
	*/


	var skillCurrent = 0;

        for(var index = 0; ;index++) {

        	if($('.skills-pow .progress .progress-dot').eq(index).hasClass("is-active")) {
                	skillCurrent = (index * skillSlideInt) + skillStart;
                        break;
                }

        }

	
	//setTemplateCurrent(currentPoint);
	
	if($( '.skills' ).css("display") != "none") {
		setSkillCurrent(skillCurrent);
        	$( '.skills-wrap' ).css("transform", "translate3d(" + skillCurrent + "px, 0px, 0px)");
	}

	//else
		//$( '.template-preview-slider' ).css("transform", "translate3d(" + currentPoint + "px, 0px, 0px)");

	//clearInterval(templateSlider);


	//var firstImage = $( '.image-section' ).first().outerWidth();


	//$( '.image-section.is-animated .image-image').last().css("transform", "none");
	
	//if($( '.journeyJS .image-section.is-animated .image-image').last().hasClass(""))
		//alert("Im here");

	//$( '.journeyJS .image-section.is-animated .image-image').first().toggleClass("image-image");

	//alert($( '.journeyJS .image-section.is-animated .image-image').children().css("width"));


	/*
	$( '.image-section' ).each(function() {
		var wrapperWidth = $(this).children(".image-image-wrapper").first().children().first().outerWidth();
		var leftMargin = (firstImage - wrapperWidth) / 2;

		$(this).children(".image-image-wrapper").children().css("left", leftMargin);
		
		// $(this).children(".image-image-wrapper").children("image-image").last().css("transform", "none");
		
		

		//alert(wrapperWidth);
	});
 	*/      


}


function setTemplateSlider() {
	//alert("Im here");
	templateSlider = setInterval(function() {

		//console.log("intervalran");
        	if($( '.skills' ).css("display") != "none")
                	skillSlider(skillSlideInt);

                //else
                	//templateSlide(slideRuleInt);
			//clearInterval(templateSlider);


        }, 5000);
}



function skillSlider(xTransform) {
	$( '.skills-wrap' ).css("transition", "transform .7s cubic-bezier(.8,.01,.55,.94),-webkit-transform .7s cubic-bezier(.8,.01,.55,.94)");


        var obj = $('.skills-images');

        var transformMatrix = obj.css("-webkit-transform") ||
        obj.css("-moz-transform")    ||
        obj.css("-ms-transform")     ||
        obj.css("-o-transform")      ||
        obj.css("transform");
        var matrix = transformMatrix.replace(/[^0-9\-.,]/g, '').split(',');
        var xPosition = matrix[12] || matrix[4];

        
        xPosition = parseInt(xPosition) + parseInt(xTransform);

        if(xPosition <= skillEnd) {
        	$('.skills-pow .progress .progress-dot').last().removeClass("is-active");
                $('.skills-pow .progress .progress-dot').first().addClass("is-active");

        }

        else
        	$('.skills-pow .progress .is-active').removeClass("is-active").next().addClass("is-active");


        $( '.skills-wrap' ).css("transform", "translate3d(" + xPosition + "px, 0px, 0px)");


}

//resetTransformAnimationWidth();
//setTemplateSlider();






/*
function templateSlide(xTransform) {
	//alert("templatesliderran");
	//console.log("templatesliderran");

	$( '.template-preview-slider' ).css("transition", "transform .7s cubic-bezier(.8,.01,.55,.94),-webkit-transform .7s cubic-bezier(.8,.01,.55,.94)");

        if(parseInt(xTransform) > 0) {
        	if($('.prev-active').hasClass("clone-last")) {
                	$('.template-preview').first().next().removeClass("prev-active");
                        $('.template-preview').first().next().next().removeClass("is-active");
                        $('.template-preview').first().next().next().next().removeClass("next-active");


                        $('.template-preview').last().prev().addClass("next-active");
                        $('.template-preview').last().prev().prev().addClass("is-active");
                        $('.template-preview').last().prev().prev().prev().addClass("prev-active");



                        $('.progress-container .progress-dot').last().addClass("is-active");
                        $('.progress-container .progress-dot').first().removeClass("is-active");
                }

                else {

                	$('.template-preview-slider .prev-active').next().removeClass("is-active");
                        $('.template-preview-slider .prev-active').next().next().removeClass("next-active");

                        $('.template-preview-slider .prev-active').addClass("is-active");
                        $('.template-preview-slider .prev-active').removeClass("prev-active");


                        $('.template-preview-slider .is-active').next().addClass("next-active");
                        $('.template-preview-slider .is-active').prev().addClass("prev-active");


                        $('.progress-container .progress .is-active').removeClass("is-active").next().addClass("is-active");
                        //$('.progress .is-active').prev().removeClass("is-active");



                }



	}
				
	else {

        	if($('.next-active').hasClass("clone-first")) {
                	$('.template-preview').last().prev().removeClass("next-active");
                        $('.template-preview').last().prev().prev().removeClass("is-active");
                        $('.template-preview').last().prev().prev().prev().removeClass("prev-active");


                        $('.template-preview').first().next().addClass("prev-active");
                        $('.template-preview').first().next().next().addClass("is-active");
                        $('.template-preview').first().next().next().next().addClass("next-active");



                        $('.progress-container .progress-dot').first().addClass("is-active");
                        $('.progress-container .progress-dot').last().removeClass("is-active");
                }

                else {

                        $('.template-preview-slider .next-active').prev().removeClass("is-active");
                        $('.template-preview-slider .next-active').prev().prev().removeClass("prev-active");

                        $('.template-preview-slider .next-active').addClass("is-active");
                        $('.template-preview-slider .next-active').removeClass("next-active");


                        $('.template-preview-slider .is-active').next().addClass("next-active");
                        $('.template-preview-slider .is-active').prev().addClass("prev-active");


                        $('.progress-container .progress .is-active').removeClass("is-active").next().addClass("is-active");




                }

	}

				

	var obj = $('.template-preview-slider');

        var transformMatrix = obj.css("-webkit-transform") ||
        obj.css("-moz-transform")    ||
        obj.css("-ms-transform")     ||
        obj.css("-o-transform")      ||
        obj.css("transform");
        var matrix = transformMatrix.replace(/[^0-9\-.,]/g, '').split(',');
        var xPosition = matrix[12] || matrix[4];

        

	//alert("I ran");
        xPosition = parseInt(getTemplateCurrent()) + parseInt(xTransform);
	//xPosition = getTemplateCurrent() + parseInt(xTransform);
	//alert(getTemplateCurrent());

	setTemplateCurrent(xPosition);

        $( '.template-preview-slider' ).css("transform", "translate3d(" + xPosition + "px, 0px, 0px)");

}



function templateGrid() {
	if($("body").outerWidth() >= 768) {
 
		if(!$('.grid-wrapper .device-grid').children().hasClass("tablet laptop monitor")) {
                        $('.grid-wrapper .device-grid').children().each(function() {
                                if($(this).index() % 3 == 0)
                                        $(this).addClass("tablet");
                                else {
                                        if($(this).prev().hasClass("tablet"))
                                                $(this).addClass("laptop");

                                        else
                                                $(this).addClass("monitor");
                                }
                        });

                }


	       	if(!$('.grid-wrapper .device-grid').children().hasClass("left right")) {
                	$('.grid-wrapper .device-grid').children().each(function() {
                        	if($(this).index() % 2 == 0)
                                	$(this).addClass("left");
                                else
                                        $(this).addClass("right");
                        });
                }

                else {
                }
        }

        else {

		if(!$('.grid-wrapper .device-grid').children().hasClass("tablet laptop monitor")) {
			$('.grid-wrapper .device-grid').children().each(function() {
                                if($(this).index() % 3 == 0)
                                        $(this).addClass("tablet");
                                else {
					if($(this).prev().hasClass("tablet"))
                                        	$(this).addClass("laptop");

					else
						$(this).addClass("monitor");
				}
                        });

		}


		if($('.grid-wrapper .device-grid').children().hasClass("left right")) {
                        $('.grid-wrapper .device-grid').children().removeClass("left right");
                }

        }
}
*/

});
