(function(){
	angular.module('RPG')
		.controller('HomeController', ['$scope', '$location', '$http', '$cookieStore',
			function($scope, $location, $http, $cookieStore) {
				console.log("Hey there, hi there, and ho there.");
				$scope.hi =function(){
					console.log("Honey, I'm hooooome!");
				}

			}
		])
}())