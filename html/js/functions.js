
function ajaxCall(dataString, script, errorDisplay) {
	
	
	$.ajax({
    		type: "POST",
    		url: script,
    		data: dataString,
    		success: function(data) {

			
			data = JSON.parse(data);

			if(data.success != null) {
				
				switch(data.success.trim()) {
                                        case "reload":
                                                location.reload();
                                                break;
					case "newsletter":
						successHandle("Thank you for subscribing!", errorDisplay);
						//$(location).attr("href", "/");
                                                //location.attr("href", "/");
                                                break;
                                        default:
                                                break;
                                }
			}

			else {
							
				if(errorDisplay != null) 
					errorHandle(data.error.trim(), errorDisplay);
				
                                
                        }
			
    		}
	});


	/*
	var xhttp;
        if (window.XMLHttpRequest) {
                // code for modern browsers
                xhttp = new XMLHttpRequest();
        } else {
                // code for IE6, IE5
                xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhttp.onreadystatechange = function() {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                	var responseString = xhttp.responseText;

                        var responseHandle = responseString.split(":");

                        if(responseHandle[0].trim() == "Success") {
				switch(responseHandle[1].trim()) {
					case "reload":
						location.reload();
						break;
					default:
						break;
				};
			} 

			else {
				errorDisplay.html(responseHandle[1].trim()); 
			}	
			 
                }
        };

        
        xhttp.open("POST", script + data, true);
        xhttp.send();
	*/	
}


function phoneCheck(number) {	
	var checkedValue = "Phone Number";

	if(number.id === "zip")
		checkedValue = "Zip Code";
	

	if(number.value.length < 1)          	
		return checkedValue + " is required!";
	
	
	re = /^[0-9-]*$/;
	if(!re.test(number['value']))
		return checkedValue + " must contain only numbers!";

	return true;	
}


function cityCheck(city) {
	if(city.length < 1)
               	return "City is required!";


	re = /^[a-zA-Z.,-\s]*$/;
	if(!re.test(city))
		return "City must not contain numbers or special characters!";

	return true;	
}

function addressCheck(address) {
	if(address.length < 1)
               	return "Address is required!";


	re = /^[a-zA-Z0-9.,-\s]*$/;
	if(!re.test(address))
		return "Address must not contain special characters!";

	return true;	
}

function emailCheck(email) {

      	if(email.length < 1)
               	return "Email is required!";

        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email))
              	return "Email is invalid!";



        if(email.length > 512)
              	return "Please provide a different Email!";


        return true;
}

function passwordCheck(password) {

        if(password.length < 1)
               	return "Password is required!";


        re = /^[a-zA-Z0-9]*$/;
        if(!re.test(password))
               	return "Password must contain only letters and numbers!";


        if(password.length < 9)
               	return "Password must be atleast 9 characters long ";


        if(password.length > 60)
               	return "Email or Password was incorrect";


        return true;
}

function nameCheck(name) {

	if(name.length < 2)
        	return "Please provide your full name!";


        var re = /^[a-zA-Z]*$/;
        if(!re.test(name))
               	return "Names must contain only letters!";


        if(name.length > 20)
               	return "Names must be less than 20 characters!";

        return true;

}


function birthdayExist(birthday) {
	
	if(birthday['month'] == "MM" && birthday['day'] != "DD" && birthday['year'] != "YYYY")
		return "Birth Month was never filled out";
		
	else if	(birthday['month'] != "MM" && birthday['day'] == "DD" && birthday['year'] != "YYYY")
		return "Birth Day was never filled out";
		
	else if (birthday['month'] != "MM" && birthday['day'] != "DD" && birthday['year'] == "YYYY")
		return "Birth Year was never filled out";	
	

	else if	(birthday['month'] != "MM" && birthday['day'] == "DD" && birthday['year'] == "YYYY")
		return "Birth Day and Birth Year were never filled out";
		
	else if (birthday['month'] == "MM" && birthday['day'] != "DD" && birthday['year'] == "YYYY")
		return "Birth Month and Birth Year were never filled out";

	else if	(birthday['month'] == "MM" && birthday['day'] == "DD" && birthday['year'] != "YYYY")
		return "Birth Month and Birth Day were never filled out";
		
	
	else {
		if (birthday['month'] == "MM" && birthday['day'] == "DD" && birthday['year'] == "YYYY")
			return false;
	}

	return true;
}

function successHandle(result, errorDisplay) {
	if(typeof result != "boolean") {
		var alertwrap = $( "<div />" )
                       	.attr( {class: "alert-generic-wrapper"} )
                        .appendTo( errorDisplay );


                var alertdanger = $( "<div />" )
                      	.attr( {class: "alert success"} )
                        .appendTo( alertwrap );

                var alertbody = $( "<div />" )
                       	.attr( {class: "alert-body"} )
                        .appendTo( alertdanger );

                var alertlist = $( "<ul />" )
                       	.appendTo( alertbody );

                var alertitem = $( "<li />" )
                       	.html(result)
                        .appendTo( alertlist );
	
		
	}

	return true;

}


function errorHandle(result, errorDisplay) {
	if(typeof result != "boolean") {

        	//if(formwrap.hasClass("form-wrapper")) {
                //alert($('#modalLoginMessage').children().attr("class"));

                if(errorDisplay.children().attr("class") == null) {
                                        
                	var alertwrap = $( "<div />" )
                        	.attr( {class: "alert-generic-wrapper"} )
                                .appendTo( errorDisplay );


                        var alertdanger = $( "<div />" )
                        	.attr( {class: "alert danger"} )
                                .appendTo( alertwrap );

                        var alertbody = $( "<div />" )
                        	.attr( {class: "alert-body"} )
                                .appendTo( alertdanger );

                        var alertlist = $( "<ul />" )
                        	.appendTo( alertbody );

                        var alertitem = $( "<li />" )
                        	.html(result)
                                .appendTo( alertlist );


                }


                else {
                	var alertitem = $( "<li />" )
                        	.html(result)
                                .appendTo( $('.alert-body ul') );
		}

		return true;
        	//}
	}

	return false;
}






function checkEmailExist(email, errorDisplay) {
        var data = "email=" + email;
        return ajaxCall(data, "/sewmuchmore/scripts/emailLookup.php?", errorDisplay);
}




function registerEmailCheck() {
	var errorDisplay = $('#modalRegisterError');
	

	var email = $('#txtModalRegEmail').val().trim();
	var emailResult = emailCheck(email);

	if(typeof emailResult != "boolean")
        	errorDisplay.html(emailResult);

	else
		checkEmailExist(email, errorDisplay);
}

function newletterEmailCheck(email) {

	if(email.length < 1)
        	return "Email is required!";

        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email))
        	return "Email is invalid!";



        if(email.length > 512)
        	return "Please provide a different Email!";


        return true;
}




function memberLogout() {
	var data = "";
	return ajaxCall(data, "/sewmuchmore/scripts/memberLogout.php?", null);
}


function windowResized() {
	$('.zoomContainer').remove();
        $("#zoomImage").removeData('elevateZoom');

        // Update source for images
        //$("#zoomImage").attr('src', $("#zoomImage").data('image'));
        $("#zoomImage").data('zoom-image', $("#zoomImage").attr("src")).elevateZoom({
        		responsive: true,
                   	zoomType: "inner",
                        cursor: "crosshair",
                        containLensZoom: true
        });



        $(".mobile-detail-carousel ul li").css("width", $('.mobile-detail-carousel').outerWidth());
	$(".mobile-detail-carousel-wrapper").css("min-height", $('.mobile-detail-carousel ul li img').outerWidth());


        if($( window ).outerWidth() <= 992) {
                                       //alert("Im here");

                                        var index = 1;

                                        $(".tab-content").children().toggleClass("tab-pane").each(function() {
                                                var div = $(this).detach();

                                                div.toggleClass("panel-body");



                                                div.appendTo($(".panel-default:nth-child(" + index++ +") > .panel-collapse"));
                                        });


                                }

				else {
                                        $(".panel-default .panel-collapse").children().toggleClass("panel-body").each(function() {
                                                //$(this).toggleClass("panel-body");

                                                var div = $(this).detach();
                                                div.toggleClass("tab-pane");

                                                div.appendTo($(".tab-content"));
                                        });
                                }

                        }

								
