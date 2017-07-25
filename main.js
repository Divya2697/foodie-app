

	   //$('#user-email').on('input',function() {
	  // var email = $('#user-email').val()
	  // var message = 'Welcome Back, ' + email;
	  // $('.welcome-message').text(message);
     //});


	 var foodieApp = angular.module('foodieApp',['ngRoute']);
	 foodieApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
})



	 foodieApp.controller('loginController',function($scope) {

})


	 foodieApp.controller('mainController',function($scope) {
			$scope.restaurants = [{
				name: 'Farzi Cafe',
				address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
				location: 'Connaught Place',
				category: 'Casual Dining, Bar',
				vote: '4.2',
				cuisines: 'Modern Indian',
				cost: '2200',
				hours: '12 Noon to 1 AM (Mon-Sun)',
				image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
			},
			{
				name: 'Barbeque Nation',
				address: 'SCO 39, Madhya Marg, Sector 26, Chandigarh',
				location: 'Sector 26, Chandigarh',
				category: 'Casual Dining',
				vote: '4.6',
				cuisines: 'North Indian, Chinese',
				cost: '1300',
				hours: '12 Noon to 3 PM, 6:30 PM to 11 PM (Mon-Sun) ',
				image: 'https://b.zmtcdn.com/data/pictures/chains/4/120014/481a8438b57d25815e87ee14c75aa3e5.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'
			},
			{
					name: 'Virgin Courtyard',
					address: 'Backside, SCO 1A, Madhya Marg, Sector 7, Chandigarh',
					location: 'Sector 7, Chandigarh',
					category: 'Fine Dining',
					vote: '4.3',
					cuisines: 'Italian',
					cost: '2200',
					hours: '11:30 AM to 11:30 PM (Mon-Sun) ',
					image: 'https://b.zmtcdn.com/data/pictures/0/121120/6509dcdce78d8d0046bba6f98542442b.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'
				},
				{
					name: 'Uncle Jack',
					address: 'Booth 11, Sector 8, Chandigarh',
					location: 'Sector 8, Chandigarh',

					vote: '4.2',
					cuisines: 'American,Beverages,Desserts',
					cost: '600',
					hours: '10 AM to 10:30 PM (Mon-Fri),10 AM to 11 PM (Sat-Sun)',
					image: 'https://b.zmtcdn.com/data/pictures/chains/0/122830/e65c53e0fbc78af6cb86ad5d4bd0f28c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'
				},
				{
					name: 'Burgill',
					address: 'Booth 70, Sector 8, Chandigarh',
					location: 'Sector 8, Chandigarh',
					category: 'Quick Bites',
					vote: '4.5',
					cuisines: 'Burger, Fast Food, Beverages',
					cost: '500',
					hours: '12 Noon to 11 PM (Mon-Sun) ',
					image: 'https://b.zmtcdn.com/data/reviews_photos/ab1/c2b343682cbb4331b63fac7c2dab6ab1_1478363486.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'
				},

				{
					name: 'Pirates of Grill',
					address: '313, Third Floor, Elante Mall, Phase 1, Chandigarh Industrial',
					location: 'Elante Mall, Chandigarh Industrial',
					category: 'Casual Dining',
					vote: '4.0',
					cuisines: 'North Indian, Continental, Asian',
					cost: '1200',
					hours: '11 AM to 4 PM, 6:30 PM to 11 PM (Mon-Sun) ',
					image: 'https://b.zmtcdn.com/data/reviews_photos/6b3/43cf511633ce2a717b1d0be23d23e6b3_1414519778.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'
				}



]

	 })
