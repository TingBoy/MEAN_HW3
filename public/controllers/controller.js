var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("Hello World from controller");
	
	var refresh1 = function() {
		$http.get('/resume/').success(function (response) {
			console.log("I got the data I requested");
			$scope.schools = response;
			$scope.school = "";
		});
	};
	
	var refresh2 = function() {
		$http.get('/resume/').success(function (response) {
			console.log("I got the data I requested");
			$scope.skills = response;
			$scope.skill = "";
		});
	};
	
	var refresh3 = function() {
		$http.get('/resume/').success(function (response) {
			console.log("I got the data I requested");
			$scope.projects = response;
			$scope.project = "";
		});
	};
	
	refresh1();
	refresh2();
	refresh3();
	
	/*
	$scope.addContact = function() {
		console.log($scope.contact);
		$http.post('/resume/', $scope.contact).success(function(response) {
			console.log(response);
			refresh();
		});
	};
	
	$scope.remove = function(id) {
		console.log(id);
		$http.delete('/resume/' + id).success(function(response) {
			refresh();
		});
	};
	
	$scope.edit = function(id) {
		console.log(id);
		$http.get('/resume/' + id).success(function(response) {
			$scope.contact = response;
		});
	};
	
	$scope.update = function() {
		console.log($scope.contact._id);
		$http.put('/resume/' + $scope.contact._id, $scope.contact).success(function(response) {
			refresh();
		});
	};
	
	$scope.deselect = function () {
		$scope.contact = "";
	};
	*/
	
	
}]);