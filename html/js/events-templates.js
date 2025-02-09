var resizeId;


$(window).resize(function() {
        clearTimeout(resizeId);
        resizeId = setTimeout(templateGrid, 500);
});



$(".template a[class='hover-trigger']").hover(function() {
	$(this).siblings(".device-screen").children().css("background-image", "none");
	$(this).siblings(".hover-mask").children().css("transform", "none");
}, function() {
	$(this).siblings(".hover-mask").children().css("transform", "translateY(8em)");
	$(this).siblings(".device-screen").children().css("background-image", "url(" + $(this).siblings(".device-screen").find("img").attr("src") + ")");
	

});

$(".projects a[class='hover-trigger']").hover(function() {
	        $(this).parent().siblings(".grid-item-content").children().css("background-image", "none");
	        $(this).parent().siblings().first().children().css("background-image", "none");
	        $(this).siblings(".hover-mask").children().css("transform", "none");
}, function() {
	        $(this).siblings(".hover-mask").children().css("transform", "translateY(8em)");
	        $(this).parent().siblings(".grid-item-content").children().css("background-image", "url(" + $(this).parent().siblings(".grid-item-content").find("img").attr("src") + ")");


		$(this).parent().siblings().first().children().css("background-image", "url(" + $(this).parent().siblings().first().find("img").attr("src") + ")");	        


});



function templateGrid() {
        if($("body").outerWidth() >= 768) {

                /*if(!$('.grid-wrapper .device-grid').children().hasClass("tablet laptop monitor")) {
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

                }*/


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

		/*
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

                }*/


                if($('.grid-wrapper .device-grid').children().hasClass("left right")) {
                        $('.grid-wrapper .device-grid').children().removeClass("left right");
                }

        }
}


templateGrid();


