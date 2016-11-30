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
	
	
	$scope.addSchool = function() {
		$scope.school.type = "edu";
		console.log($scope.school);
		$http.post('/resume/', $scope.school).success(function(response) {
			console.log(response);
			refresh1();
		});
	};
	
	$scope.addSkill = function() {
		$scope.skill.type = "skill";
		console.log($scope.skill);
		$http.post('/resume/', $scope.skill).success(function(response) {
			console.log(response);
			refresh2();
		});
	};
	
	$scope.addProject = function() {
		$scope.project.type = "project";
		console.log($scope.project);
		$http.post('/resume/', $scope.project).success(function(response) {
			console.log(response);
			refresh3();
		});
	};
	
	$scope.remove = function(id) {
		console.log(id);
		$http.delete('/resume/' + id).success(function(response) {
			refresh1();
			refresh2();
			refresh3();
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
			refresh1();
			refresh2();
			refresh3();
		});
	};
	
	$scope.deselect = function () {
		$scope.contact = "";
		$scope.skill = "";
		$scope.project = "";
	};
	
	
	
}]);