function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
        console.log('Successfully logged in with Facebook');
         FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  }
}

function changeUser(response)	{
	console.log('Response is ')
	console.log(response)
	
 	var fbButton = $("p.facebookLogin")
	fbButton.hide()
	var name = $("h1").find("#name");
	name.text(response.name)
	$.attr("src","response.picture.data.url")
	var picture = $("img").find("#photo")
}
