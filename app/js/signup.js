//facebook
window.fbAsyncInit = function() {
    FB.init({
      appId      : '1670740146500385',
      xfbml      : true,
      version    : 'v2.5'
    });
    FB.getLoginStatus(function(response){
        if (response.status == 'connected') {
          //  $(".title").html("We're Co");
        } else{
          //$(".title").html("We're not connected");
        }
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


$("#fbLogin").click(function(){
    FB.login(function(response){
      if (response.status == 'connected') {
        //  $(".title").html("its connected");
      } else{
        //$(".title").html("We're not connected");
      }
    });
});

$('#getInfo').click(function(){
  FB.api('/me', function(response) {
  console.log(JSON.stringify(response.name));
  console.log(JSON.stringify(response.id));
  console.log(JSON.stringify(response.email));
});
});





//parse
Parse.initialize("iEaAJb5XYjoN6mpanY6NCpdujp8z7fTcgPejZA5t", "q7EPMwgJLnsK4BI4UgUHlEQ0Wp15SPmuTq3Lfs2O");
var user = new Parse.User();
 $("#signup-submit").click(function(event){

 var name = $("#signup-name").val();
 var family = $("#signup-family").val();
 var username = $("#signup-username").val();
 var email = $("#signup-eamil").val();
 var country = $("#signup-country").val();
 var password = $("#signup-password").val();

user.set("first",name);
user.set("last",family);
user.set("username",username);
user.set("email",email);
user.set("country",country);
user.set("password",password);

user.signUp(null,{
  success: function(user) {
  console.log("Success");
},
error: function(user, error) {
  console.log("Oh Shit " + error.message);
}
});

 });
