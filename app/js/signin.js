var podlle = angular.module('podlleSignin', [])

podlle.controller('mainCtrl', function($scope) {
  $scope.hello = "";
});


//facebook
//window.fbAsyncInit = function() {
    //FB.init({
//      appId      : '1670740146500385',
  //    xfbml      : true,
  //    version    : 'v2.5'
    //});
//    FB.getLoginStatus(function(response){
    //    if (response.status == 'connected') {
    //        $("").html("We're Co");
  //      } else{
    //      $(".title").html("We're not connected");
    //    }
  //  });
  //};

  //(function(d, s, id){
  //   var js, fjs = d.getElementsByTagName(s)[0];
  //   if (d.getElementById(id)) {return;}
    // js = d.createElement(s); js.id = id;
  //   js.src = "//connect.facebook.net/en_US/sdk.js";
  //   fjs.parentNode.insertBefore(js, fjs);
   //}(document, 'script', 'facebook-jssdk'));


//$("#fbLogin").click(function(){
//    FB.login(function(response){
  //    if (response.status == 'connected') {
    //      $(".title").html("its connected");
  //    } else{
  //      $(".title").html("We're not connected");
//      }
  //  });

//  $(document).ready(function(){
  //  FB.api('/me', function(response) {
    //  console.log(JSON.stringify(response.name));
    //});
  //});
//});











//parse
//Parse.initialize("JsFA35G6SM4h5uvFhmUTkudrfoVvpJfE4DyuHvPZ", "NVdXmOt1KMlMc8FZd3W9MGxhv3hKRNE9zWPysZMx");var item = Parse.Object.extend("User");

//$("#signin-submit").click(function(event){

 //event.preventDefault();

//var username = $("#signin-username").val();
//var password = $("#signin-password").val();

//Parse.User.logIn(username,password);

//});
