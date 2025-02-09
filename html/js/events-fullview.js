
$(function() {
	
	$(".demo-device-icon").click(function() {
		var oldDevice = $(this).siblings(".is--active").attr("data-device")
		$(this).addClass("is--active").siblings().removeClass("is--active");

		var newDevice = $(this).attr("data-device");
		
		$(this).parent().siblings(".demo-screen-wrapper").children(".demo-screen").removeClass("demo-" + oldDevice).addClass("demo-" + newDevice);

		var image = $(this).attr("data-src");

			

		$(".demo-screen").one("webkitTransitionEnd otransitionend msTransitionEnd transitionend", function() {
			$(".demo-screen-image").attr("src", image);

		});

		

	});

	//$(".template-preview-button").click(function() {
		//$(location).attr({"href": $(this).attr("data-url"), "target": "_blank"});
	//});


	/*
	var resizeId;
	
	$( window ).resize(function() {
        	clearTimeout(resizeId);
                resizeId = setTimeout(windowResized, 500);

        });

	
	$('.mobile-detail-carousel-control-next').click(function() {

		var max = $(this).siblings('.mobile-detail-carousel').children().children().length;

		$(this).siblings('.mobile-detail-carousel').children().children().each(function() {
						//alert("Im here");
						
			var dataArrival = parseInt($(this).attr("data-arrival-index"));
			var dataDeparture = parseInt($(this).attr("data-departure-index"));

			dataArrival -= 1;
			dataDeparture += 1;

			if(dataArrival <= -1)
				dataArrival = max - 1;

			if(dataDeparture >= max)
				dataDeparture = 0;


			$(this).attr("data-arrival-index", dataArrival);
			$(this).attr("data-departure-index", dataDeparture);

		});

	});


	$('.mobile-detail-carousel-control-prev').click(function() {

		var max = $(this).siblings('.mobile-detail-carousel').children().children().length;

		$(this).siblings('.mobile-detail-carousel').children().children().each(function() {
						//alert("Im here");
						
			var dataArrival = parseInt($(this).attr("data-arrival-index"));
			var dataDeparture = parseInt($(this).attr("data-departure-index"));

			dataArrival += 1;
			dataDeparture -= 1;

			if(dataArrival >= max)
				dataArrival = 0;

			if(dataDeparture <= -1)
				dataDeparture = max - 1;


			$(this).attr("data-arrival-index", dataArrival);
			$(this).attr("data-departure-index", dataDeparture);

		});

	});




	

		

	
	

	$("#zoomImage").elevateZoom({ responsive: true,
        		zoomType: "inner",
                        cursor: "crosshair",
                        z_index: "15",
                        containLensZoom: true});

	

	


	$('.detail-alt-views ul li a').click(function() {
		$('#zoomImage').attr("src", $(this).attr("href")).data("zoom-image", $(this).attr("href")).elevateZoom({
                        responsive: true,
                        zoomType: "inner",
                        cursor: "crosshair",
                        containLensZoom: true
       		}).parent().attr("data-product-color", $(this).attr("data-product-color"));

		return false;
	});

	

	$('#lnkReadReviews').click(function() {
                $('.nav-tabs > li.active').toggleClass("active").siblings("li:nth-of-type(2)").toggleClass("active");
                $('.tab-content > .active').toggleClass("active").siblings("div:nth-of-type(2)").toggleClass("active");



                var detailImageWrapper = $('.detail-images-wrapper').offset();
                var scroll = detailImageWrapper.top + $('.detail-images-wrapper').outerHeight() - 50;


                $('html, body').animate({scrollTop: scroll}, 1000);
        });



	$('#lnkWriteReview').click(function() {
		$('.nav-tabs > li.active').toggleClass("active").siblings("li:last-of-type").toggleClass("active");
		$('.tab-content > .active').toggleClass("active").siblings("div:last-of-type").toggleClass("active"); 

		

		var detailImageWrapper = $('.detail-images-wrapper').offset();
		var scroll = detailImageWrapper.top + $('.detail-images-wrapper').outerHeight() - 50;
			

		$('html, body').animate({scrollTop: scroll}, 1000);				
	});	

	
		
	$('.star-rating a').hover(function() {
		$(this).parent().parent().children().css("background-image", "url(https://revere.blob.core.windows.net/data/2/assets/img/emptystars.jpg)");

		var currentIndex = $(this).parent().index();

		$(this).parent().parent().children().filter(function( index ) {
    			if($(this).index() <= currentIndex)
				//$(this).css("background-image", "url(https://revere.blob.core.windows.net/data/2/assets/img/fullstars.jpg)");
				$(this).css("background-image", "url(/images/fullstars.jpg.png)");
		});


		
	}, function() {
		var checkedIndex = ($(this).parent().parent().parent().children(".star-rating-applied:checked").index() - 1) / 2;
	
		$(this).parent().parent().children().filter(function( index ) {
                        if($(this).index() > checkedIndex)
                                $(this).css("background-image", "url(https://revere.blob.core.windows.net/data/2/assets/img/emptystars.jpg)");
			else
				//$(this).css("background-image", "url(https://revere.blob.core.windows.net/data/2/assets/img/fullstars.jpg)");
				$(this).css("background-image", "url(/images/fullstars.jpg.png)");
		});		

        });
	
	

	

	$('.star-rating a').click(function() {

		var currentIndex = $(this).parent().index();

		
		$(this).parent().parent().parent().children(".star-rating-applied").eq(currentIndex - 1).prop("checked", true);


                $(this).parent().parent().children().filter(function( index ) {
                        if($(this).index() <= currentIndex)
                                //$(this).css("background-image", "url(https://revere.blob.core.windows.net/data/2/assets/img/fullstars.jpg)");
				$(this).css("background-image", "url(/images/fullstars.jpg.png)");
		});
	});




	
	$("#btnWriteSubmit").click(function() {
		$('#RevereWriteError').children().remove();
		$('#RevereWriteError').css("display", "none");

		var error = false;

		$(this).parent().siblings("fieldset").find(".form-group").each(function() {
			if($(this).attr("data-field-name") == "Nickname") {

				if($(this).children(":nth-child(2)").val().trim() == "") {
                                        
					if($('#RevereWriteError').children().attr("id") == null) {
						$('#RevereWriteError').html("");

						var alertlist = $( "<ul />" )
							.attr({ id: "RevereErrorList" })
                                                	.appendTo( $('#RevereWriteError') );

                                        	var alertitem = $( "<li />" )
                                                	.html("Nickname is required")
                                                	.appendTo( alertlist );

					}
					
					else {
                                        	var alertitem = $( "<li />" )
                                                	.html("Nickname is required")
                                                	.appendTo( $('#RevereWriteError ul') );
                                	}

					error = true;

				}
			}

			if($(this).attr("data-field-name") == "Review") {

				if($(this).children(":nth-child(2)").val().trim() == "") {
                                       
					if($('#RevereWriteError').children().attr("id") == null) {
						$('#RevereWriteError').html("");
						
                                                var alertlist = $( "<ul />" )
							.attr({ id: "RevereErrorList" })
                                                        .appendTo( $('#RevereWriteError') );

                                                var alertitem = $( "<li />" )
                                                        .html("Review content is required")
                                                        .appendTo( alertlist );

                                        }

                                        else {
                                                var alertitem = $( "<li />" )
                                                        .html("Review content is required")
                                                        .appendTo( $('#RevereWriteError ul') );
                                        }

                                        error = true;

				}
			}

			if($(this).attr("data-field-name") == "Rating") {

				if($(this).find(".star-rating-applied:checked").index() < 0) {
					
					if($('#RevereWriteError').children().attr("id") == null) {
 						$('#RevereWriteError').html("");
						
	                                        var alertlist = $( "<ul />" )
							.attr({ id: "RevereErrorList" })
                                                        .appendTo( $('#RevereWriteError') );

                                                var alertitem = $( "<li />" )
                                                        .html("Rating is required")
                                                        .appendTo( alertlist );

                                        }

                                        else {
                                                var alertitem = $( "<li />" )
                                                        .html("Rating is required")
                                                        .appendTo( $('#RevereWriteError ul') );
                                        }

                                        error = true;
				}
			}
		});

		if($('#RevereWriteError').children().attr("id") != null)
			$('#RevereWriteError').css("display", "block");

		else {
			//alert("Free to send");
			$('#RevereWriteSuccess').css("display", "block");
			var nickname = $(this).parent().siblings("fieldset").find("[data-field-name='Nickname']").children(":nth-child(2)").val().trim();
			var email = $(this).parent().siblings("fieldset").find("[data-field-name='Email']").children(":nth-child(2)").val().trim();			
			var title = $(this).parent().siblings("fieldset").find("[data-field-name='Title']").children(":nth-child(2)").val().trim();			
			var rating = $(this).parent().siblings("fieldset").find("[data-field-name='Rating']").find(".star-rating-applied:checked").index();			
			var review = $(this).parent().siblings("fieldset").find("[data-field-name='Review']").children(":nth-child(2)").val().trim();




			ajaxCall("nickname=" + nickname + "&email=" + email + "&title=" + title + "&rating=" + rating + "&review=" + review, "/sewmuchmore/scripts/writeReview.php?" , null);
		}

	
		
		$('html, body').animate({scrollTop: 0}, 300);



		
		$(this).parent().siblings("fieldset").find(".form-group").children(":nth-child(2)").each(function() {
			if($(this).parent().attr("data-field-name") == "Nickname" || $(this).parent().attr("data-field-name") == "Review") {
				if($(this).val() == "")
					alert("Error");
				else
					alert("Succes");
			}
		});
                
        });
	
	*/


	/*
	$('#btnWriteSubmit').click(function() {
		alert("Im here");
		//$(this).parent().parent().toggleClass("jorrellS-display-none");
		//.siblings("#RevereWriteSuccess").toggleClass("jorrellS-display-none");
	});*/


	/*
        $(".mobile-detail-carousel ul li").css("width", $('.mobile-detail-carousel').outerWidth());
	$(".mobile-detail-carousel-wrapper").css("min-height", $('.mobile-detail-carousel ul li img').outerWidth());



        if($( window ).outerWidth() <= 992) {

        	var index = 1;

                $(".tab-content").children().toggleClass("tab-pane").each(function() {
                	var div = $(this).detach();

                        div.toggleClass("panel-body");



                        div.appendTo($(".panel-default:nth-child(" + index++ +") > .panel-collapse"));
                });
        }

	*/

	
});
