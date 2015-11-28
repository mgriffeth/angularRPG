(function(){
	angular.module('RPG', ['ngRoute', 'ngCookies', 'firebase'])
		.constant('fb', {
			url: "https://luminous-torch-5681.firebaseio.com"
		})
		.config(function($routeProvider, $locationProvider) {

			$routeProvider.when('/', {
				templateUrl: 'scripts/home/home_view.html',
				controller: 'HomeController'
			});
			$routeProvider.when('/createCharacter', {
				templateUrl:'scripts/character_creator/character_creator_view.html',
				controller: 'CharacterCreator'
			});
		});
}())