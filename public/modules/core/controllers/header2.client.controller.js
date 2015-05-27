'use strict';
//['$scope', 'Authentication', 'Menus','$translate',
// ['$scope', '$http', '$location', '$state', 'Authentication',
var usersApp=angular.module('core');
usersApp.controller('core').controller('Header2Controller',	['$scope', 'Authentication','$http','$location',
	function($scope, Authentication,$http,$location) {
		$scope.authentication = Authentication;


//function($scope, Authentication, Menus) {
	//	$scope.authentication = Authentication;
	//	$scope.isCollapsed = false;
	//	$scope.menu = Menus.getMenu('topbar');
    //
    //
	//	$scope.toggleCollapsibleMenu = function() {
	//		$scope.isCollapsed = !$scope.isCollapsed;
	//	};
    //
	//	// Collapsing the menu after navigation
	//	$scope.$on('$stateChangeSuccess', function() {
	//		$scope.isCollapsed = false;
	//	});
    //
	//	//$translate.use('de');
	//}

		// If user is signed in then redirect back home
	//	if ($scope.authentication.user) $location.path('/');

			$scope.signup = function () {
			$http.post('/auth/signup', $scope.credentials).success(function (response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$location.path('/');
			}).error(function (response) {
				$scope.error = response.message;
			});
		};
/*
	$scope.signin = function () {
			console.log('signin credentials 1 ', $scope.credentials);

			$http.post('/auth/signin', $scope.credentials).success(function (response) {
				// If successful we assign the response to the global user model


				$scope.authentication.user = response;
				console.log('user counter ', $scope.authentication.user.count);

				if ($scope.authentication.user.count === 0) {
					console.log('user counter ', $scope.authentication.user.count);

					console.log('authentication.client.controller signin credentials success response 2 ', response);
					console.log('authentication.client.controller signin credentials success location 2', $location);
					// And redirect to the index page
					$location.path('/');
				} else {
					console.log('user counter ', $scope.authentication.user.count);

					console.log('authentication.client.controller signin credentials success response  OVERRIDE 3', response);
					console.log('scope.crendentials.user', $scope.credentials.username);

					//$location.path('/override');
					var result = 'allomok';

					$state.go('override', {'username': result});

					//$location.path('/override');
				}

			}).error(function (response) {
				console.log('signin response', response.message);
				$scope.error = response.message;
			});



		};*/
		/*

		 $scope.cancel = function() {

		 console.log('cancel controller called Authentication.username', Authentication.user);

		 $scope.authentication = Authentication;

		 console.log('cancel  called credentials ',$scope.credentials );

		 $http.post('/auth/cancel', $scope.credentials).success(function (response) {
		 // If successful we assign the response to the global user model
		 $scope.authentication.user = response;

		 // And redirect to the index page
		 //$location.path('/');
		 }).error(function (response) {
		 $scope.error = response.message;
		 });


		 };
		 */





		$scope.cancelprevious = function() {
			console.log('Cancel Called  ');



		};





	}
]);

/*

usersApp.controller('CancelController',  ['$scope',  'Authentication', '$http',
	function($scope, Authentication,$http) {
		// This provides Authentication context.
		console.log('cancel 1 controller called Authentication.username',$scope.credentials);

		$scope.authentication = Authentication;


		$scope.cancel= function (updatedusername) {
			var username = updatedusername;
			console.log('cancel user name ',username);

			$http.post('/auth/cancel', $scope.credentials).success(function (response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;


				// And redirect to the index page
				//$location.path('/');
			}).error(function (response) {
				$scope.error = response.message;
			});
		};

	}


]);
*/

