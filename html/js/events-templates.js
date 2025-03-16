var resizeId;
var scrolling;


$(window).resize(function() {
        clearTimeout(resizeId);
        resizeId = setTimeout(templateGrid, 500);
});

$( window ).scroll(function() {
        clearTimeout(scrolling);
        scrolling = setTimeout(justScrolled, 5);

});

$( ".sideNav-button" ).click(function() {
        var sideNavButtonName = $(this).html();

        $( ".sideNav-button" ).removeClass("is-active");
        $(this).addClass("is-active");
        //console.log($(this).html());
        
        
        var templateSelector = $(".template-selector[data-template-name='" + sideNavButtonName + "']").offset();
        //var maincontent = $('.main-content').offset();

        $("html, body").animate({scrollTop: templateSelector.top}, 1000);
        //alert("Im here");
});

function justScrolled() {
	var maincontent = $('.account-navigation').offset();
        var toprollmenu = $('.toprollmenu').offset();
	
        if($( "html, body" ).scrollTop() > (toprollmenu.top + 70) || $( "body" ).scrollTop() > (toprollmenu.top + 70)) {
                //alert($( "html, body" ).scrollTop());
                //console.log(maincontent.top);
                //console.log($( "html, body" ).scrollTop());
                if(!$( '.account-navigation' ).hasClass("is-active")) {
                        $( '.account-navigation' ).addClass("is-active");
                        $( '.account-content-container' ).addClass("is-active");

                }
                else {
                        var projects = $(".template-selector[data-template-name='Projects'").offset();
                        var devops = $(".template-selector[data-template-name='DevOps'").offset();
                        var webapps = $(".template-selector[data-template-name='Web Applications'").offset();

                        if($( "html, body" ).scrollTop() >= projects.top - 100 && $( "html, body" ).scrollTop() <= (projects.top + $(".template-selector[data-template-name='Projects'").outerHeight() -50)) {
                                $( ".sideNav-button" ).removeClass("is-active");
                                $(".sideNav-button[title='Projects']").addClass("is-active");
                        }
                        else if($( "html, body" ).scrollTop() >= devops.top - 100 && $( "html, body" ).scrollTop() <= (devops.top + $(".template-selector[data-template-name='DevOps'").outerHeight() - 50)) {
                                $( ".sideNav-button" ).removeClass("is-active");
                                $(".sideNav-button[title='DevOps']").addClass("is-active");
                        }
                        else if($( "html, body" ).scrollTop() >= webapps.top - 100 && $( "html, body" ).scrollTop() < webapps.top + $(".template-selector[data-template-name='Web Applications'").outerHeight() - 50) {
                                $( ".sideNav-button" ).removeClass("is-active");
                                $(".sideNav-button[title='Web Applications']").addClass("is-active");
                        }
                        else {
                                $( ".sideNav-button" ).removeClass("is-active");
                        }
                }
        }

        else {
                if($( "html, body" ).scrollTop() < (toprollmenu.top + 70) || $( "body" ).scrollTop() < (toprollmenu.top + 70)) {
                        //alert($( "html, body" ).scrollTop());
                        //console.log(maincontent.top);
                        //alert($( "html, body" ).scrollTop());
                        //console.log(toprollmenu);
                        $( '.account-navigation' ).removeClass("is-active");
                        $( '.account-content-container' ).removeClass("is-active");
                }
        }
}


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


