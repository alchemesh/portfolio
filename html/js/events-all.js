$(function() {
	$( '.topinnerbutton a, .toprollmenu .mywork' ).click(function() {
		if($( '.banner' ).hasClass("is-active"))
			$( '.banner' ).removeClass("is-active");


		if($( '.image-section' ).hasClass("is-animated")) {
			$( '.image-progress' ).removeClass("is-active");
                	$( '.image-indicator' ).removeClass("is-active");
                	$( '.image-section' ).removeClass("is-active");

			$( '.image-section' ).first().addClass("is-scrollable--first");

			$( '.image-section' ).removeClass("is-animated");
		}
                

        	$( '.overlaypanel' ).addClass("is-active");
                $( '.exit' ).addClass("is-active");
                //$( '.overlaypanel .image-wrapper img' ).addClass("is-loaded");

                $( "html, body" ).addClass("has-active-overlaypanel-selector");
        });

	
	$( '.footer-nav-heading ' ).click(function() {
                $(this).parent().parent().parent().toggleClass("is-active");

        });
});
