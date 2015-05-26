(function() {
	"use strict";

	angular
		.module("app.teams")
		.config(configure);

	/* @ngInject */
	function configure($routeProvider) {
		$routeProvider
			.when("/", {
				redirectTo: "/teams/1"
			})
			.when("/teams/:teamId", {
				templateUrl: "team.html",
				controller: "Team"
			})
			.otherwise({
				redirectTo: "/teams/1"
			});
	};
})();