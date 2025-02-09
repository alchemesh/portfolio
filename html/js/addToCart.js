!function(a) {
        a.fn.addToCart = function( options ) {
		

		return this.click(function() {
                        //alert($(this).data("id"));

			$(this).parent().parent().siblings(".detail-size").children(".error").children().remove();

			var sku = $(this).data("id");
			var size = $(this).parent().parent().siblings(".detail-size").children("select");

			var sizeSelected = size.children("option:selected").text().trim();

			var color;
			
			if($( window ).outerWidth() <= 768) {
				$(this).parent().parent().parent().parent().siblings('.detail-images-wrapper').find('.mobile-detail-carousel-wrapper').find("ul").children().each(function() {
					if($(this).attr("data-arrival-index") == 0 && $(this).attr("data-departure-index") == 0 )
						color = $(this).attr("data-product-color");
				});
			}

			else {
				color = $(this).parent().parent().parent().parent().siblings('.detail-images-wrapper').find('.full-image').attr("data-product-color")	
			}

			//alert(color);

			var skuResult = skuCheck(sku);
			var sizeResult = sizeCheck(sizeSelected);
			var colorResult = colorCheck(color);
			
			if(typeof sizeResult != "boolean") {
				size.focus();
			}

			else if(errorHandle(colorResult, $(this).parent().parent().parent().siblings(".detail-header"))) {
			
			}

			else if(errorHandle(skuResult, $(this).parent().parent().parent().siblings(".detail-header"))) {
				//if($('#registerError').children().attr("class") == null)
					//email.focus();

			}

			else {
				if($(this).parent().parent().hasClass("product-img-wrap"))
					ajaxCall({ sku: sku }, "/scripts/addToCart.php" , null);
				else {
					//alert("Im here");
					ajaxCall({ sku: sku, size: sizeSelected, color: color}, "/scripts/addToCart.php" , $(this).parent().parent().siblings(".detail-size").children(".error"));
				}
			}

	
			/*
			if(typeof skuResult != "boolean") {
				
				
                        	//if($(this).parent().parent().hasClass("detail-cart-wrapper")) {
                                	//if($('#modalLoginMessage').children().attr("class") == null) {
                                        	var alertwrap = $( "<div />" )
                                                	.attr( {class: "alert-generic-wrapper", id: "alertGenericMessage"} )
                                                	.prependTo( $(this).parent().parent().siblings(".detail-size") );

                                        	var alertdanger = $( "<div />" )
                                                	.attr( {class: "alert danger"} )
                                                	.appendTo( alertwrap );

                                        	var alertbody = $( "<div />" )
                                                	.attr( {class: "alert-body"} )
                                                	.appendTo( alertdanger );

                                        	var alertlist = $( "<ul />" )
                                                	.appendTo( alertbody );

                                        	var alertitem = $( "<li />" )
                                                	.html(skuResult)
                                                	.appendTo( alertlist );
                                	//}

				//}
			}

			

			else {
				if($(this).parent().parent().hasClass("product-img-wrap"))
					ajaxCall("sku=" + $(this).data("id"), "/scripts/addToCart.php?" , null);
				else
					ajaxCall("sku=" + $(this).data("id"), "/scripts/addToCart.php?" , $(this).parent().parent().siblings(".detail-size"));
			}


			*/

                });

		function skuCheck(sku) {

                	if(sku.length < 1)
                        	return {"error":"Something went wrong adding " + $('#detailProdName').html() + " to your cart!"};


                	re = /^[a-zA-Z0-9]*$/;
                	if(!re.test(sku))
                        	return {"error":"Something went wrong adding " + $('#detailProdName').html() + " to your cart!"};


                	if(sku.length < 9)
                        	return {"error":"Something went wrong adding " + $('#detailProdName').html() + " to your cart! "};


                	if(sku.length > 60)
                        	return {"error":"Something went wrong adding " + $('#detailProdName').html() + " to your cart!"};


                	return true;
        	};
	

		function colorCheck(color) {
			re = /^[a-zA-Z]*$/;
                	if(!re.test(color))
                        	return {"error":"Something went wrong adding " + $('#detailProdName').html() + " to your cart!"};	
			return true;
		}

		function sizeCheck(size) {
			if(size == "Select a size")
				return {"error": "Size not selected"};

			return true;	
		}
	};
	
}(jQuery);

$("a[id='btnAddToCart']").addToCart();
$("button[id='btnAddToCart']").addToCart();
