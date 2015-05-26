(function() {
	"use strict";

	angular
		.module("app.teams")
		.controller("Team", Team);

	/* @ngInject */
	function Team($scope, $routeParams, teamsRepository, $timeout) {
		
		activate();
		foo();

		$timeout(function() {
			chu();
		}, 500);

		function activate() {
			return teamsRepository.getById(1).then(function(team) {
				$scope.name = team.name;
				$scope.captain = team.captain;
			})
		}

		function foo() {
			return teamsRepository.getById(2).then(function(team) {
				$scope.nametwo = team.name;
				$scope.captaintwo = team.captain;
			})	
		}

		function chu() {
			return teamsRepository.getById(3).then(function(team) {
				$scope.namethree = team.name;
				$scope.captainthree = team.captain;
			})	
		}
	}

})();