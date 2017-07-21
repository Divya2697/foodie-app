

	   //$('#user-email').on('input',function() {
	  // var email = $('#user-email').val()
	  // var message = 'Welcome Back, ' + email;
	  // $('.welcome-message').text(message);
     //});
	 
	 
	 var foodieApp = angular.module('foodieApp',[]);
	 
	 
	 foodieApp.controller('mainController',function($scope) {
     $scope.restaurants = ['Farzi Cafe','Pizza Hut','Wenger\'s Deli','Sagar Ratna'];
	 
	 })