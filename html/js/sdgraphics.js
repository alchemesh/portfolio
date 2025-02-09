


var players = [];




function getPlayerName() {
	if(players.length > 0) {

		$.each(players[0], function(index, value) {
			//if(Object.keys(value['players'][0]) == null)
			if(!$('.youtube-players').has("iframe[id='" + value[0]['id'] + "']"))
				//players.splice(index);
				alert("I don't have this");

			//alert(Object.keys(value[0]));
		});

	}

	else {
		return "widget2";
	}
}




function carouselB(interval) {
	this.carousel = { interval: interval, slide: (function() {return setInterval(carouselSlide , interval);})() };

	//this.interval = interval;
	//this.slide =  setInterval(carouselSlide , interval);

	this.setInterval = function (newInterval) { this.carousel.interval = newInterval; }

	this.setSlide = function() { this.carousel.slide = setInterval(carouselSlide , this.carousel.interval); }

	this.clearSlide = function() { clearInterval(this.carousel.slide); }


	this.interval = function() { return this.carousel.interval; }

	function carouselSlide() {
		runCarousel("forward");
	}
}

function runCarousel(direction) {
	//alert("Im here");
	$('.hero-carousel').find("[data-departure-index]").each(function() {
			var dataArrival = parseInt($(this).attr("data-arrival-index"));
			var dataDeparture = parseInt($(this).attr("data-departure-index"));
		
			var max = $('.template-gallery').children().length;

			//alert($('.template-gallery').children().length);

			
			
			if(direction == "forward") {
				dataArrival -= 1;
				dataDeparture += 1;

				if(dataArrival <= -1)
					dataArrival = max - 1;

				if(dataDeparture >= max)
					dataDeparture = 0;

				if($(this).hasClass("imagery-wrapper") && dataArrival == 0 && dataDeparture == 0) {
					if($(this).hasClass("has-dark-background"))
						$('.hero-carousel').addClass("has-dark-background");
					else
						$('.hero-carousel').removeClass("has-dark-background");
				}
			}

			else {

				dataArrival += 1;
				dataDeparture -= 1;

				
				if(dataArrival >= max)
					dataArrival = 0;

				if(dataDeparture <= -1)
					dataDeparture = max - 1;

				if($(this).hasClass("imagery-wrapper") && dataArrival == 0 && dataDeparture == 0) {
					if($(this).hasClass("has-dark-background"))
						$('.hero-carousel').addClass("has-dark-background");
					else
						$('.hero-carousel').removeClass("has-dark-background");
				}
			}

			$(this).attr("data-arrival-index", dataArrival);
			$(this).attr("data-departure-index", dataDeparture);

			
		});

}

var carousel = (function() {
	var newcarousel = new carouselB(8000);

	return function(control) {
		//alert(control);
		if(control == "clear")
			newcarousel.clearSlide();
		else
			newcarousel.setSlide();
	}
})();


function createPlayer(playerName) {
	
	this.player = new YT.Player(playerName, {
                events: {
                        'onReady': onPlayerReady,
                        'onStateChange': onPlayerStateChange
                }
        });

        
}




function onYouTubeIframeAPIReady() {
	//alert("Im here");
	var player = new createPlayer(getID());
	players.push({id: getID(), player: player});	
	
}



function onPlayerReady(event) {    
	event.target.playVideo();
}

function isPlaying(event) {
    //changeBorderColor(event.data);
	//alert("Im there"); 
	if (event.data == -1) {
		event.target.playVideo();
		//alert("video hasnt started");
      		// unstarted = gray
    	} else if (event.data == 0) {
      		//$('.hero-carousel .video-overlay, .hero-carousel .video-overlay .youtube-player').toggleClass("is-active");
		//carousel("set");
		//alert("video ended");
		// ended = yellow
    	} else if (event.data == 1) {
		alert("video playing");
      		// playing = green
    	} 
}

function onPlayerStateChange(event) {
    //changeBorderColor(event.data);
	//alert("Im there"); 
	if (event.data == -1) {
		event.target.playVideo();
		//alert("video hasnt started");
      		// unstarted = gray
    	} else if (event.data == 0) {
      		$('.hero-carousel .video-overlay, .hero-carousel .video-overlay .youtube-player').removeClass("is-active");
		carousel("set");
		//alert("video ended");
		// ended = yellow
    	} else if (event.data == 1) {
		//alert("video playing");
      		// playing = green
    	} else if (event.data == 2) {
		$('.hero-carousel .video-overlay, .hero-carousel .video-overlay .youtube-player').removeClass("is-active");
		carousel("set");
		      	

		//alert("video paused");
		 // paused = red
    	} else if (event.data == 3) {
      		 // buffering = purple
    	} else if (event.data == 5) {
      		// video cued = orange
    	}

}




function scriptFound(script) {
	var scriptFound = false;
	$('script').each(function() {
		if($(this).attr("id") == script) {
			scriptFound = true;
		}
	});

	return scriptFound;
}




var resizeId;



$(function() {
	//$('#modal').addClass("in");
	//var c = "<?php echo $_REQUEST['c']; ?>";
	//alert("Im here");
	
	$('script').each(function() {
		if($(this).attr("data-request") != ""  && typeof($(this).attr("data-request")) !== "undefined") {
			$('body').newsletter({modalEvent: "page"});		
			$('#modal').addClass("in");
		}

	});
	
	//alert("Im here");
	//var thisScript = $("script[src='/js/newsletter.js']");

	//var dataRequest = thisScript.attr("data-request");
	//alert(dataRequest);

	//if(dataRequest != "" ) {
		//dataRequest = false
		//$('body').newsletter();		
		//$('#modal').addClass("in");
	//}

	//else
		//alert(dataRequest);

	(function() {
		//alert("self-running functions are awesome");
		if($(".imagery-wrapper[data-arrival-index='0'][data-departure-index='0']").hasClass("has-dark-background")) {
			$('.hero-carousel').addClass("has-dark-background");	
		}

	})();


	$(window).resize(function() {
        	clearTimeout(resizeId);
        	resizeId = setTimeout(mouseMove, 500);
	});


	//$( window ).bind("scroll", function(event) {
		//alert("Im here");
	//});

	$( window ).scroll(function() {
		
		var learnmoreButtonCue = $('.marketing .learn-more').offset();

		//if($( "html, body" ).scrollTop() > 1 || $( "body" ).scrollTop() > 1 ) 

		//if($(this).scrollTop() > maincontent.top)
		//alert("Im here");
		if($( "html, body" ).scrollTop() > learnmoreButtonCue.top || $( "body" ).scrollTop() > learnmoreButtonCue.top) {		
			if(!$('.printpricing-content').hasClass("ready"))
				$('.printpricing-content').addClass("ready");
		}

		else {
			var marketingCue = $('.marketing').offset();

			
			if($( "html, body" ).scrollTop() < marketingCue.top && $( "body" ).scrollTop() < marketingCue.top) {
				
				if($('.printpricing-content').hasClass("ready"))
					$('.printpricing-content').removeClass("ready");
			}

		}

			
	});

	

	$('.learn-more').click(function() {
		$(location).attr("href", "/customize/");
	});


	$('.topcatlink').click(function() {
		if(!$(this).hasClass("no-arrow") && $('#bottom-header .for-mobile').css("display") != "none") {
		//alert("Im here");
			$(this).parent().toggleClass("hovering");
			return false;
		}
	});

	$('.subcattopmenulinks').click(function() {
		//alert("Im here");
		$(this).parent().toggleClass("active-submenu");
		return false;
	});


	$( '#burger-icon' ).click(function() {
		if(!$('#bottom-header.overlaypanel').hasClass("transition")) {
			$( '#bottom-header.overlaypanel .exit' ).toggleClass("is-active");
			$('#bottom-header.overlaypanel').toggleClass("transition is-active");
			$('#sdgraphics').toggleClass("no-scroll");
		}

		else {
			//alert("Im here");
			$('#bottom-header.overlaypanel.transition').bind("transitionend", function() {
				$(this).toggleClass("transition");
				$(this).unbind();
			});

			$( '#bottom-header.overlaypanel .exit' ).toggleClass("is-active");

			$('#bottom-header.overlaypanel').toggleClass("is-active");
			$('#sdgraphics').toggleClass("no-scroll");
		}
	});



	$( '#account-icon' ).click(function() {
		//$('.overlaypanel').toggleClass("is-active");
		if($(this).siblings(".headercustomerinfo").find(".submenu-help").hasClass("is-active")) {
			$(this).siblings(".headercustomerinfo").find(".submenu-help.transition").bind('transitionend', function() {
				$(this).parents(".headercustomerinfo").children(".headerlogin").toggleClass("transition is-active");

				$(this).toggleClass("transition");
				$(this).unbind();
			});
			
			$(this).siblings(".headercustomerinfo").find(".submenu-help").toggleClass("is-active");
		}

		else {
			if(!$(this).siblings(".headercustomerinfo").children(".headerlogin").hasClass("transition"))
				$(this).siblings(".headercustomerinfo").children(".headerlogin").toggleClass("transition is-active");

			else {
				$('.headerlogin.transition').bind('transitionend', function() {
					$(this).toggleClass("transition");
					$(this).unbind();
				});

				$(this).siblings(".headercustomerinfo").children(".headerlogin").toggleClass("is-active");
			}
		}
	});

	$( '#top-header .headercustomerinfo .headerhelp .header-link-help' ).click(function() {
		//$('.overlaypanel').toggleClass("is-active");
		if($(this).parent().siblings(".headerlogin").hasClass("is-active")) {
			$(this).parent().siblings(".headerlogin.transition").bind('transitionend', function() {
				$(this).siblings(".headerhelp").children(".submenu-help").toggleClass("transition is-active");
				$(this).toggleClass("transition");
				$(this).unbind();
			});

			$(this).parent().siblings(".headerlogin").toggleClass("is-active");
		}

		else {

		if(!$(this).siblings(".submenu-help").hasClass("transition"))
			$(this).siblings(".submenu-help").toggleClass("transition is-active");

		else {
			$('.submenu-help.transition').bind('transitionend', function() {
				$(this).toggleClass("transition");
				$(this).unbind();
			});

			$(this).siblings(".submenu-help").toggleClass("is-active");
		}

		}
	});
	

	//$('#minicart').click(function() {
		//$(this).find('minicarttotal').children().each(function() {
			//if($(this).hasClass("emptycart"))
				//return false;

			//if()
				//$(location).attr("href", "/cart");
		//});
	//});


	$( '#bottom-header.overlaypanel .exit' ).click(function() {
		$(this).parent('.transition').bind("transitionend", function() {
			$(this).toggleClass("transition");
			$(this).unbind();
		});

		$(this).removeClass("is-active");
		$(this).parent().removeClass("is-active");
		$('#sdgraphics').removeClass("no-scroll");
	});

	$( '.footer-nav-heading ' ).click(function() {
                $(this).parent().parent().parent().toggleClass("is-active");

        });


	

	
	$('.social-icon-idle').click(function() {	
		if($(this).parent().css("width") == "97px")
			$(this).parent().css("width", "282px");

		else
			$(this).parent().css("width", "97px");
	});
	

	$('.newsletter button').click(function() {
		$(this).parent().siblings(".alert-generic-wrapper").remove();		

		var newsletterEmail = $(this).siblings("input").val().trim();

		var newsletterEmailResult = newletterEmailCheck(newsletterEmail);

		
		if(typeof newsletterEmailResult != "boolean") {
			var alertwrap = $( "<div />" )
	                        .attr( {class: "alert-generic-wrapper"} )
                                .insertAfter( $(this).parent().siblings("h2") );


                        var alertdanger = $( "<div />" )
                        	.attr( {class: "alert danger"} )
                                .appendTo( alertwrap );

                        var alertbody = $( "<div />" )
                        	.attr( {class: "alert-body"} )
                            	.appendTo( alertdanger );

                        var alertlist = $( "<ul />" )
                                .appendTo( alertbody );

                        var alertitem = $( "<li />" )
                                .html(newsletterEmailResult)
                                .appendTo( alertlist );


			return false;
		}


		if($(location).attr("href").indexOf("n=true") >= 0)
			$("form[class='newsletter']").attr("action", "/");
		



        });


	$( '.carousel-alt-images .mobile-detail-carousel-control-prev' ).click(function() {
        	var max = $(this).siblings(".carousel-alt-images-wrapper").children().length;

		//alert(max);

		$(this).siblings(".carousel-alt-images-wrapper").children().each(function() {
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


	$( '.carousel-alt-images .mobile-detail-carousel-control-next' ).click(function() {

		var max = $(this).siblings(".carousel-alt-images-wrapper").children().length;

		$(this).siblings(".carousel-alt-images-wrapper").children().each(function() {
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



	/*
	$( '.carousel-alt-images-wrapper' ).unbind().on( "mousemove", function( event ) {
		$(this).on("mouseout", function() {
			$(this).css("cursor", "").unbind("click mouseout");
			//$(this).unbind("mouseout");
		});
  		//$( "#log" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
		//$(this).width * .25
		var templateWidth = $(this).width();

		//var hoverEventScale = templateWidth * .25;

		var position = $(this).offset();

		var offset = ($(this).width() - $(this).find(".carousel-alt-images-container").width()) / 2;
		//alert(position.left);

		if(event.pageX > position.left && event.pageX < position.left + offset) {
			if($(this).css("cursor") != "w-resize")
                        	$(this).css("cursor", "w-resize").click(function() {
                               		var max = $(this).children().length;

					$(this).children().each(function() {
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
		}

		else if(event.pageX < (position.left + templateWidth) && event.pageX > (position.left + templateWidth) - offset) {
			if($(this).css("cursor") != "e-resize")
                        	$(this).css("cursor", "e-resize").click(function() {

					var max = $(this).children().length;

					$(this).children().each(function() {
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
		}

		else
			$(this).css("cursor", "").unbind("click");

	});
	*/



	$('.carousel-alt-image').hover(function() {
		//alert($(this).find("img").attr("src"));
		$(this).parents(".product").find(".product-image img").attr("src", $(this).find("img").attr("src"))
	}, function() {
		$(this).parents(".product").find(".product-image img").attr("src", $(this).parents(".product").find(".product-image").attr("data-image-src"));
	});



	
	function mouseMove() {
		carousel("clear");
                carousel("set");

		//alert($(window).width());
		//if($(window).width() < "825")
			//$('.header-container').removeClass('state-large').addClass('state-small');

		//else
			//$('.header-container').removeClass('state-small').addClass('state-large');

	$( '.hero-carousel' ).unbind().on( "mousemove", function( event ) {
  		//$( "#log" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
		//$(this).width * .25
		var templateWidth = $('.hero-carousel .template-gallery .template').width();

		if($(window).width() < 1024) {
			//alert($(window).width());

			var hoverEventScale = ($(window).width() - templateWidth) / 2;

			if(event.pageX < hoverEventScale) {
				if($(this).css("cursor") != "w-resize")
					$(this).css("cursor", "w-resize").click(function() {
						//alert("going back");
						carousel("clear");
						runCarousel("back");
						carousel("set");
					});
			}

			else if(event.pageX > $(window).width() - hoverEventScale) {
				if($(this).css("cursor") != "e-resize")
					$(this).css("cursor", "e-resize").click(function() {
						//alert("going forward");
						carousel("clear");
						runCarousel("forward");
						carousel("set");
					});
			}

			else
				$(this).css("cursor", "").unbind("click");


			//if(event.pageX < hoverEventScale || event.pageX > $(window).width() - hoverEventScale)
				//alert("I need my hover effect");
		}

		else {
			var hoverEventScale = $(window).width() * .2;

			if(event.pageX < hoverEventScale) {
				if($(this).css("cursor") != "w-resize")
                                        $(this).css("cursor", "w-resize").click(function() {
                                                //alert("going back");
                                                carousel("clear");
                                                runCarousel("back");
                                                carousel("set");
                                        });
			}

			else if(event.pageX > $(window).width() - hoverEventScale) {
				if($(this).css("cursor") != "e-resize")
                                        $(this).css("cursor", "e-resize").click(function() {
                                                //alert("going back");
                                                carousel("clear");
                                                runCarousel("forward");
                                                carousel("set");
                                        });
			}

			else
				$(this).css("cursor", "").unbind("click");
		}

	});

	}

	mouseMove();

	


	
	document.addEventListener('visibilitychange', function() {
    		//document.hidden; // whether or not the tab is visible
		//alert("navigated away");

		if(document.hidden)
			carousel("clear");
		else
			carousel("set");

		//alert("navigated away");
	});

	

	$('.hero-carousel .exit').click(function() {
		//alert("Im here");
		$.each(players, function(index, value) {
			value["player"].player.pauseVideo();
			//alert(value["player"]["v"].onStateChange);
			//value["player"].player.stopVideo();
			//value["player"].player.playVideo();

			return false;
			
		});

		

	});


	

	
	$('.hero-carousel .cta-gallery .cta').click(function(event) {
		event.stopPropagation();

		
		carousel("clear");
		$('.hero-carousel').css("cursor", "").unbind("click");

		//alert($(this).attr("data-portrait"));

		



		if(scriptFound("iframe-demo")) {
			//alert("Im here");
			if(playerFound($(this).attr("data-portrait"))) {
				//$(".youtube-player[data-portrait='" + $(this).attr("data-portrait") + "']").appendTo( $('.youtube-players') );
				var playerFoundID = $(".youtube-player[data-portrait='" + $(this).attr("data-portrait") + "']").attr("id");

				$.each(players, function(index, value) {
					if(value["id"] == playerFoundID) {
						//alert(value["player"]);
						value["player"].player.stopVideo();
						//value["player"].player.playVideo();

						return false;
					}
				});
				
			}

			else {

				var videosrc = "https://www.youtube.com/embed/" + $(".imagery-wrapper[data-arrival-index='0']").attr("data-video-id");

				videosrc += "?controls=0&modestbranding=0&playsinline=0&rel=0&showinfo=0&enablejsapi=1";

				//alert(playerName());
				setID(playerName());


				var modalIframe = $( "<iframe />" )
                        		.attr( { "id": getID(), "class": "youtube-player", "data-portrait": $(this).attr("data-portrait"), "src": videosrc } )
                        		.appendTo( $('.youtube-players') );

			
				onYouTubeIframeAPIReady();
			}

		}

		else {
			//alert("Im here");
			var tag = document.createElement('script');
                	tag.id = 'iframe-demo';
                	tag.src = 'https://www.youtube.com/iframe_api';

                	//var firstScriptTag = document.getElementsByTagName('script')[0];
                	//firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

                	$('body').append(tag);

			if(playerFound($(this).attr("data-portrait"))) {
				var playerFoundID = $(".youtube-player[data-portrait='" + $(this).attr("data-portrait") + "']").attr("id");

				$.each(players, function(index, value) {
					if(value["id"] == playerFoundID) {
						//alert(value["player"]);
						value["player"].player.stopVideo();
						value["player"].player.playVideo();

						return false;
					}
				});
			}
	

			else {
				var videosrc = "https://www.youtube.com/embed/" + $(".imagery-wrapper[data-arrival-index='0']").attr("data-video-id");

				videosrc += "?controls=0&modestbranding=0&playsinline=0&rel=0&showinfo=0&enablejsapi=1";	



				setID(playerName());

				var modalIframe = $( "<iframe />" )
                        		.attr( { "id": getID(), "class": "youtube-player", "data-portrait": $(this).attr("data-portrait"), "src": videosrc } )
                        		.appendTo( $('.youtube-players') );
			}
		}



		//if(!foundPlayer) {
			//var videosrc = "https://www.youtube.com/embed/" + $(".imagery-wrapper[data-arrival-index='0']").attr("data-video-id");

	

			//videosrc += "?controls=0&modestbranding=0&playsinline=0&rel=0&showinfo=0&enablejsapi=1";
		//alert(videosrc);

		//var modalIframe = $( "<div />" )
                        //.attr( { "id":"widget2", "class": "youtube-player" } )
                        //.on("change", function() {alert("changed stated");})
                        //.appendTo( $('.youtube-players') );

			//var scriptFound = false;

			//$('script').each(function() {
				//alert(scriptFound);

				//if($(this).attr("id") == "iframe-demo") {
					//scriptFound = true;
				//}

			//});

			//alert(scriptFound);

		
			//if(!scriptFound) {
				//var tag = document.createElement('script');
                		//tag.id = 'iframe-demo';
                		//tag.src = 'https://www.youtube.com/iframe_api';

                		//var firstScriptTag = document.getElementsByTagName('script')[0];
                		//firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

                		//$('body').append(tag);
			//}

		
	
	

		

		$('.hero-carousel .video-overlay').addClass("is-active");
		$(".youtube-player[data-portrait='" + $(this).attr("data-portrait") + "']").addClass("is-active");

		
		//$('.hero-carousel .video-overlay, .hero-carousel .video-overlay .youtube-player').toggleClass("is-active");
		
		
		
			
		
		// 4. The API will call this function when the video player is ready.
      		//function onPlayerReady(event) {
			//alert("Im ready");
        		//event.target.playVideo();
			//player.playVideo();
      		//}

		//player.events.onReady();

      		// 5. The API calls this function when the player's state changes.
      		//    The function indicates that when playing a video (state=1),
      		//    the player should play for six seconds and then stop.
      		


		




		



		//document.getElementById('widget2').addEventListener('onStateChange', 'player_state_changed');
		//if($('iframe .html5-video-player').hasClass("unstarted-mode"))
                        //$('.html5-video-player').toggleClass("unstarted-mode playing-mode");
                        //alert("video not started");


	});	

	

	




});
