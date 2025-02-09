/*function phoneCheck(number) {	
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
*/


$(function() {
	$('.register .btn-submit').click(function() {

		//alert("Im here");
		//return false;
		$('#registerError').children().remove();

		var title = $(this).parent().parent().find("[data-field='Title']").children("select");

		//alert(title.children("option:selected").text().trim());

		var fname = $(this).parent().parent().find("[data-field='FirstName']").children("input");
		var lname = $(this).parent().parent().find("[data-field='LastName']").children("input");
		var email = $(this).parent().parent().find("[data-field='Email']").children("input");
		
		var password = $(this).parent().parent().find("[data-field='Password']").children("input");
		var password2 = $(this).parent().parent().find("[data-field='Password2']").children("input");




		var month = $(this).parent().parent().find("[data-field='BirthdayField']").children(".month").children("select");
		var day = $(this).parent().parent().find("[data-field='BirthdayField']").children(".day").children("select");
		var year = $(this).parent().parent().find("[data-field='BirthdayField']").children(".year").children("select");



		var address1 = $(this).parent().parent().find("[data-field='Address1']").children("input");
		var address2 = $(this).parent().parent().find("[data-field='Address2']").children("input");


		var city = $(this).parent().parent().find("[data-field='City']").children("input");
		var state = $(this).parent().parent().find("[data-field='State']").children("select");

		var zip = $(this).parent().parent().find("[data-field='Zip']").children("input");
		var phone = $(this).parent().parent().find("[data-field='Phone']").children("input");

		var subscribed = $(this).parent().parent().find("[data-field='Subscribe']").find("input");


		
		var fnameResult = nameCheck(fname.val().trim());
		var lnameResult = nameCheck(lname.val().trim());
		var emailResult = emailCheck(email.val().trim());

		var passwordResult = passwordCheck(password.val().trim());

		var address1Result = addressCheck(address1.val().trim());

		var cityResult = cityCheck(city.val().trim());


		
		var zipResult = phoneCheck({ id: "zip", value: zip.val().trim() }); //Number Check
		var phoneResult = phoneCheck({ id: "phone", value: phone.val().trim() });
		

		if(errorHandle(fnameResult, $('#registerError')))
			fname.focus();

		if($('#registerError').children().attr("class") == null) {
			if(errorHandle(lnameResult, $('#registerError')))
				lname.focus();

		}

		if(errorHandle(emailResult, $('#registerError'))) {
			if($('#registerError').children().attr("class") == null)
				email.focus();

		}

		


		if(password.val().trim() == password2.val().trim()) {
			if(errorHandle(passwordResult, $('#registerError'))) {
				if($('#registerError').children().attr("class") == null) 
					password.focus();
				
			}
		}

		else {
			if(errorHandle("Passwords do not match", $('#registerError'))) {
				if($('#registerError').children().attr("class") == null)
					password.focus();
			}
		}
		
		
		if(errorHandle(address1Result, $('#registerError'))) {
			if($('#registerError').children().attr("class") == null)
				address1.focus();
		}

		var birthday = birthdayExist({ month: month.children("option:selected").text().trim(), day: day.children("option:selected").text().trim(), year: year.children("option:selected").text().trim() });

		if(typeof birthday != "boolean") {			
			if(errorHandle(birthday, $('#registerError'))) {
				if($('#registerError').children().attr("class") == null)
					month.focus();
			}
		}

		
		if(address2.val().trim() != "") {
			var address2Result = addressCheck(address2.val().trim());
			if(errorHandle(address2Result, $('#registerError'))) {
				if($('#registerError').children().attr("class") == null)
					address2.focus();	
			}

		}


		if(errorHandle(cityResult, $('#registerError'))) {
			if($('#registerError').children().attr("class") == null)
				city.focus();
		}

		if(state.children("option:selected").text().trim() === "State *") {
			if(errorHandle("State is required!", $('#registerError'))) {
				if($('#registerError').children().attr("class") == null)
					state.focus();
			}
		}



		if(errorHandle(zipResult, $('#registerError'))) {
			if($('#registerError').children().attr("class") == null)
				zip.focus();
		}


		if(errorHandle(phoneResult, $('#registerError'))) {
			if($('#registerError').children().attr("class") == null)
				phone.focus();
		}

		
		
		if($('#registerError').children().attr("class") == null) {
			//ajaxCall({ title: title.children("option:selected").text().trim(), fname: fname.val().trim(), lname: lname.val().trim(), email: email.val().trim(), password: password.val().trim(), birthmonth: month.children("option:selected").text().trim(), birthday: day.children("option:selected").text().trim(), birthyear: year.children("option:selected").text().trim(), address1: address1.val().trim(), address2: address2.val().trim(), city: city.val().trim(), state: state.children("option:selected").text().trim(), zip: zip.val().trim(), phone: phone.val().trim(), subscribe: subscribe.is(':checked') }, "/scripts/memberRegister.php?" , $('#registerError'));

			
			$(this).parent().parent().find("input[name='mode']").val("Registered");
			
			return true;
		}


		/*
		if(typeof fnameResult != "boolean") {

                        //if(formwrap.hasClass("form-wrapper")) {
                                //alert($('#modalLoginMessage').children().attr("class"));

                                if($('#registerError').children().attr("class") == null) {
                                        
                                        var alertwrap = $( "<div />" )
                                                .attr( {class: "alert-generic-wrapper"} )
                                                .appendTo( $('#registerError') );


                                        var alertdanger = $( "<div />" )
                                                .attr( {class: "alert danger"} )
                                                .appendTo( alertwrap );

                                        var alertbody = $( "<div />" )
                                                .attr( {class: "alert-body"} )
                                                .appendTo( alertdanger );

                                        var alertlist = $( "<ul />" )
                                                .appendTo( alertbody );

                                        var alertitem = $( "<li />" )
                                                .html(fnameResult)
                                                .appendTo( alertlist );


                                }


                                else {
                                        var alertitem = $( "<li />" )
                                                .html(fnameResult)
                                                .appendTo( $('.alert-body ul') );
                                }
                        //}
		}
		*/

		


		return false;


	});
	

});
