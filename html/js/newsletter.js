!function(a) {
	//alert(b);

	


	
	a.fn.newsletter = function( options ) {
 
        	// This is the easiest way to have default options.

		var registerOptions = {
                  
                        

                     
		
                 };

	



		var defaults = {
			backdropAttrs : {
        			class: "modal-backdrop fade in"
    			},


    			wrapperAttrs : {
        			class: "modal-dialog search"
    			},

			modalHeaderAttrs : {
                        	class: "modal-header"
			},

			
			buttonCloseAttrs : {
				class: "close",
				type: "button"
                        
                	},

		
			spanButtonCloseAttrs : {
                        	class: ""
                	},

			contentAttrs : {
                        	class: "modal-content"
                	},

			modalBodyAttrs : {
                        	class: "modal-body"
                	},

		

			
			

			modalBodyContentAttrs : {
                        	class: "modal-body-content"
                	},

			modalNewsletterOptionsAttrs : {
                        	class: "modal-newsletter jorrellS-row"
                	},


		
			modalNewsletterWrapAttrs : {
                        	class: "modal-newsletter-wrapper jorrellS-col "
                	},

	


			modalNewsletterFormAttrs : {
                        	class: "form-wrapper",
                        	id: "modalNewsletterForm"
                	},

		
			modalNewsletterParagraphAppend : "#modalNewsletterForm",


			modalNewsletterMessageAttrs : {
                        	id: "modalNewsletterMessage"
                	},

			modalNewsletterBodyTitleAttrs : {
				class: "modal-body-title"
			},

			modalNewsletterBodyTitleTextAttrs : {
			},

			modalEmailFormGroupAttrs : {
                        	class: "form-group email"
                	},

			modalFormEmailInputAttrs : {
                        	class: "form-control",
				type: "email",
                        	name: "txtModalLoginEmail",
				id: "txtModalNewsletterEmail",
				placeholder: "Email *"
	
                	},

			modalDoubleWrapAttrs : {
                        	class: "double-wrapper jorrellS-row"
			},

			modalFormGroupAttrs : {
                        	class: "form-group"
                	},

			
			modalNewsletterActionsGroupAttrs : {
                        	class: "form-group actions jorrellS-row jorrellS-relative-position"
                	},

			modalNewsletterActionsGroupInnerAttrs : { 
                                class: "jorrellS-center-text"
                        },


			
                	modalNewsletterActionsLogButtonAttrs : {
                        	class: "btn-signin",
                        	id: "btnModalLogin"

                	},

			
			modalNewsletterActionsLogButtonText : "Subscribe", 
			//modalLoginActionsButtonFunction : "memberLogin",

		 
			modalNewsletterActionsLimeGreenBack : {
				background: "#2fff05"
			},


			modalNewsletterBodyTextAttrs : {
				class: "modal-body-text"
			},

			modalNewsletterBodyTextTextAttrs : {
			},

		
		
			
	

			modalEvent : "click",

		        container : "#modal"
			
		
    			// ... rest of settings ...
		};
 

	
		// We can use the extend method to merge options/settings as usual:
		// But with the added first parameter of TRUE to signify a DEEP COPY:
		var settings = a.extend( true, {}, defaults, options );



	
		//alert(settings.modalEvent);

		if(settings.modalEvent == "click") {
			//alert();
		return this.click(function() {
			makeModal();
		});
		}

		else {
		
			$('body').addClass("modal-open");
		
			$('#modal').click(function() { $(this).removeClass("in"); $('body').removeClass("modal-open"); $('.modal-backdrop').remove(); });
		
		
		
			var backdrop = $( "<div />" )
                		.attr( settings.backdropAttrs )
				.appendTo( $('body') );

			makeModal();
		}





		function makeModal() {
		$('#modal').children().remove();
		var wrapper = $( "<div />" )
    			.attr( settings.wrapperAttrs )
			.hover(function() { $(this).parent().unbind("click"); }, function() { $(this).parent().click(function() { $(this).removeClass("in"); $('body').removeClass("modal-open"); $('.modal-backdrop').remove(); });  })
    			.appendTo( settings.container );


		


		var header = $( "<div />" )
                	.attr( settings.modalHeaderAttrs )
                	.appendTo( wrapper );




		

		var buttonClose = $( "<button />" )
                        .attr( settings.buttonCloseAttrs )
			.attr("data-dismiss", "modal")
			.attr("aria-label", "Close")
			.click(function() { $('#modal').click(function() { $(this).removeClass("in"); $('body').removeClass("modal-open"); $('.modal-backdrop').remove(); }); })
                        .appendTo( header );

		
		var spanButtonClose = $( "<span />" )
                        .attr( settings.spanButtonCloseAttrs )
			.attr("aria-hidden", "true")
			.html("No Thanks!")
                        .appendTo( buttonClose );



		

		var content = $( "<div />" )
                	.attr( settings.contentAttrs )
                	.appendTo( wrapper );


		var modalBody = $( "<div />" )
                	.attr( settings.modalBodyAttrs )
                	.appendTo( content );


                




		


		var modalBodyContent = $( "<div />" )
                	.attr( settings.modalBodyContentAttrs )
                	.appendTo( modalBody );

		
	


		var modalNewsletterOptions = $( "<div />" )
                	.attr( settings.modalNewsletterOptionsAttrs )
                	.appendTo( modalBodyContent );




		var modalNewsletterWrap = $( "<div />" )
                	.attr( settings.modalNewsletterWrapAttrs )
                	.appendTo( modalNewsletterOptions );

		



		var modalNewsletterForm = $( "<div />" )
                	.attr( settings.modalNewsletterFormAttrs )
                	.appendTo( modalNewsletterWrap );

		

		var modalNewsletterMessage = $( "<div />" )
                	.attr( settings.modalNewsletterMessageAttrs )
                	.appendTo( modalNewsletterForm );






		var modalNewsletterBodyTitle = $( "<div />" )
                	.attr( settings.modalNewsletterBodyTitleAttrs )
                	.appendTo( modalNewsletterForm );




		var modalNewsletterBodyTitleText = $( "<span />" )
                	.attr( settings.modalNewsletterBodyTitleTextAttrs )
			.html("Subscribe to SD Custom Graphics to receive a 10% off coupon and the latest updates!")
			.appendTo( modalNewsletterBodyTitle );





		var modalEmailFormGroup = $( "<div />" )
                	.attr( settings.modalEmailFormGroupAttrs )
			.attr("data-field", "Email")
                	.appendTo( modalNewsletterForm );

		


		var modalFormEmailInput = $( "<input />" )
               		.attr( settings.modalFormEmailInputAttrs )
			//.on( "click", checkEmailExist("sabatiel180@gmail.com") )
               		.appendTo( modalEmailFormGroup );



		

		var modalNewsletterActionsGroup = $( "<div />" )
              		.attr( settings.modalNewsletterActionsGroupAttrs )
              		.appendTo( modalNewsletterForm );



		var modalNewsletterActionsGroupInner = $( "<div />" )
                        .attr( settings.modalNewsletterActionsGroupInnerAttrs )
                        .appendTo( modalNewsletterActionsGroup );






        	var modalNewsletterActionsLogButton = $( "<button />" )
                	.attr( settings.modalNewsletterActionsLogButtonAttrs )
                	.html( settings.modalNewsletterActionsLogButtonText )
			//.css( settings.modalLoginActionsLimeGreenBack )
			//.memberlogin()
                	.click(function() { newsletterSignup($(this)); })
                	//.webpageLogin()
                	.appendTo( modalNewsletterActionsGroupInner );




		
		var modalNewsletterBodyText = $( "<div />" )
                        .attr( settings.modalNewsletterBodyTextAttrs )
                        .appendTo( modalNewsletterForm );
		

		var modalNewsletterBodyTextText = $( "<span />" )
                        .attr( settings.modalNewsletterBodyTextTextAttrs )
			.html("You can unsubscribe from emails at any time.<br><strong>If you don't wish to receive coupons, just click No Thanks! in the top, right corner.</strong>")
                        .appendTo( modalNewsletterBodyText );



		//$('#div2').appendTo(modalBodyContent);
		//$('#div2 .emails a').removeAttr("data-toggle data-target");
		

		

	

		};
		//return this;
	

			
    	};
	


	function newsletterSignup(button) {
		//alert(button.parent().parent("[data-field='Email']").html());

		//button.parent().parent().siblings("[data-field='Email']").children("input").val();
	
		button.parent().parent().siblings("#modalNewsletterMessage").children().remove();		

		var newsletterEmail = button.parent().parent().siblings("[data-field='Email']").children("input").val().trim();

		var newsletterEmailResult = newletterEmailCheck(newsletterEmail);

		if(typeof newsletterEmailResult != "boolean") {
			var alertwrap = $( "<div />" )
	                        .attr( {class: "alert-generic-wrapper"} )
                                .appendTo( button.parent().parent().siblings("#modalNewsletterMessage") );


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


		else
			ajaxCall({ newsletter : newsletterEmail }, "/scripts/newsletterModal.php" , button.parent().parent().siblings("#modalNewsletterMessage"));
			
	}



}(jQuery);

$('#newsletter').newsletter({modalEvent: "click"});

//$('#modalLogin').css("display", "block");
//$('body').newsletter();

//$('#modal').addClass("in");
