(function() {
	"use strict";

	angular
		.module("app.teams")
		.factory("teamsRepository", teamsRepository);

	/* @ngInject */
	function teamsRepository($http, $q) {
		var loaded = false,
			loading = false,
			deferreds = [],
			_teams = [];

		var service = {
			getTeams: getTeams,
			getById: getById
		};

		return service;

		function getTeams() {
			return read();
		}

		function getById(id) {
			return read()
				.then(function(teams) {
					for (var i = 0; i < teams.length; i++) {
						if (id === teams[i].id) {
							return $q.when(teams[i]);
						}
					}

					throw new Error("Team not found");
				});
		}

		function read() {

			if (loaded) {
				console.log("teams already loaded");
				return $q.when(_teams);
			}
			else if (loading) {
				console.log("loading teams");
				var deferred = $q.defer();
				deferreds.push(deferred);
				return deferred.promise;
			}
			else {
				console.log("calling api");
				loading = true;
				return $http.post("/teams")
					.then(function(res) {
						var data = res.data;
						console.log(data);
						for (var i = 0; i < data.length; i++) {
							_teams.push(data[i]);
						}
						loaded = true;
						loading = false;

						deferreds.forEach(function(deferred) {
							deferred.resolve(_teams);
						});

						deferreds = [];

						return _teams;
					});
			}
		}
	}
})();