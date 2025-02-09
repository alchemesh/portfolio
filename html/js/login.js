//var access_token;


//function onLoadCallback() {
	//alert("Im here");
//}

var googleUser = {};

var startApp = function() {
	//alert("Im here");


	
	
	gapi.load('auth2', function() {
      		// Retrieve the singleton for the GoogleAuth library and set up the client.
		
		auth2 = gapi.auth2.init({
        		client_id: '849760355737-6m7q8fhucd95054rcr63fm9a3amv0cfp.apps.googleusercontent.com',
        		cookiepolicy: 'single_host_origin',
        		// Request scopes in addition to 'profile' and 'email'
        		//scope: 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
      		});

     		

		//alert("Im here");
	    	attachSignin(document.getElementById('gplus-login'));
    	});
	
};

function attachSignin(element) {
	//alert("I got here");
	//console.log(element.id);
    	auth2.attachClickHandler(element, {},
        function(googleUser) {
        	//document.getElementById('name').innerText = "Signed in: " +
        	//googleUser.getBasicProfile().getName();
		//alert(googleUser.getBasicProfile().getName());
		var name = googleUser.getBasicProfile().getName();

		//var name = name.split(" ");

		//alert(name[0]);
		var email = googleUser.getBasicProfile().getEmail();

		ajaxCall({name: name, email: email, gender:"NULL", token:"NULL"}, "/scripts/memberFBGoogleLogin.php", $('#loginError'));

		//alert(JSON.stringify(googleUser.getBasicProfile()));
        }, function(error) {
        	alert(JSON.stringify(error, undefined, 2));
        });
}


function googleSignOut() {
	var auth2 = gapi.auth2.getAuthInstance();
    	auth2.signOut().then(function () {
		alert("signing out");
		//console.log('User signed out.');
		//document.getElementById("userFName").innerHTML = "";
		//$('.g-signin2').attr('style', 'display: ');
	 	//$('.googleLoginButtonContainer').attr('style', 'display: none');

		//$('#login').attr('style', 'display: ');
    	});
}


startApp();


window.fbAsyncInit = function() {
    	FB.init({
      		appId      : '1984962008400916',
      		cookie     : true,	
      		xfbml      : true,
      		version    : 'v2.8'
    	});

    	FB.getLoginStatus(function(response) {
    		statusChangeCallback(response, "Login");
  	});
};

(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
     	if (d.getElementById(id)) {return;}
     	js = d.createElement(s); js.id = id;
     	js.src = "//connect.facebook.net/en_US/sdk.js";
     	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



function statusChangeCallback(response, actionLoginLogout) {
    	console.log('statusChangeCallback');
    	console.log(response);
    	// The response object is returned with a status field that lets the
    	// app know the current login status of the person.
    	// Full docs on the response object can be found in the documentation
    	// for FB.getLoginStatus().
    	if (response.status === 'connected') {
      		// Logged into your app and Facebook.
		//var loginState = document.getElementById("loginState").value;

        	/*if(!loginState)
                 	//fbLogout();

                 	testAPI();
        	*/
		access_token = response.authResponse.accessToken; 
		//if(!loginState && actionLoginLogout == "Login")
      			testAPI();
        	//else if(loginState && actionLoginLogout == "Logout")
                	//fbLogout();
        
    	} else if (response.status === 'not_authorized') {
      		// The person is logged into Facebook, but not your app.
      		console.log('Please log into this app.');
    	} else {
      		// The person is not logged into Facebook, so we're not sure if
      		// they are logged into this app or not.
      		//console.log('User logged out.');
      		//var auth2 = gapi.auth2.getAuthInstance();

		//if (!auth2.isSignedIn.get()) {
	
      			//document.getElementById("userFName").innerHTML = "";
			//$('.g-signin2').attr('style', 'display: none');
                	//$('.googleLoginButtonContainer').attr('style', 'display: block');

                	//$('#login').attr('style', 'display: none');
		//}
    	}
}

function checkLoginState() {
	FB.getLoginStatus(function(response) {
      			statusChangeCallback(response, "Login");
    	});

}

function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    //console.log(response);
    FB.api('/me?fields=name,email,gender', function(response) {
        console.log(response);
        console.log(response.email);
        console.log(response.gender);

        //var usersFullName = response.name;

        //var userFullNameArray = usersFullName.split(" ");
    });
        
}




$(function() {
	
	$('.sign-in').click(function() {
		
		$('#loginError').children().remove();
				

		var email = $(this).parent().parent().find("[data-field='Email']").children("input");
		var password = $(this).parent().parent().find("[data-field='Password']").children("input");


		var emailResult = emailCheck(email.val().trim());
		var passwordResult = passwordCheck(password.val().trim());

		
		if(errorHandle(emailResult, $('#loginError'))) 
			email.focus();

	
		
		if(errorHandle(passwordResult, $('#loginError'))) {
			if($('#loginError').children().attr("class") == null) 
				password.focus();
				
		}
			

		if($('#loginError').children().attr("class") == null) {
			$(this).parent().parent().find("input[name='mode']").val("LoggingIn");
			return true;
		}

		return false;
	});

	$('.fb-logout').click(function() {
		//alert(access_token);
		FB.api('/me/permissions', 'delete', function(response) {
			console.log(response);
		});
	});

	$('.gplus-logout').click(function() {
		googleSignOut();	
	});

	$('.sign-out').click(function() {
		//alert("time to sign out");
		ajaxCall( { code:"signout" }, "/scripts/memberLogout.php", null );
	});

	$('.fb-login').click(function() {
		FB.login(function(response) {
			if (response.authResponse) {
            			console.log('Welcome!  Fetching your information.... ');
            			//console.log(response); // dump complete info
            			access_token = response.authResponse.accessToken; //get access token
            			user_id = response.authResponse.userID; //get FB UID

				FB.api('/me?fields=name,email,gender', function(response) {
        				console.log(response);
        				console.log(response.email);
        				console.log(response.gender);					
					console.log(response.id);
				
					response.token = access_token;

					//alert(access_token);

					ajaxCall(response, "/scripts/memberFBGoogleLogin.php", $('#loginError'));
        				//var usersFullName = response.name;

       					 //var userFullNameArray = usersFullName.split(" ");
    				});

				

        		} else {
            			//user hit cancel button
            			console.log('User cancelled login or did not fully authorize.');

        		}
    		}, {
        		scope: 'public_profile,email'
			
		});
		//alert("Im here");
		//checkLoginState();
		//FB.getLoginStatus(function(response) {
      			//statusChangeCallback(response, "Login");
    		//});
	});



	$('.create-account').click(function() {
		$(location).attr("href", "/account/register/");
	});

});
