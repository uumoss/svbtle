'use strict';

angular.module('teamApp')
  .service('TurtleService', function TurtleService($http, $q) {
	  return{
	  	getTeam: function (teamId) {
	  		var deferred = $q.defer();
	  		
	  		$http({method: 'GET', url: 'http://pure-ocean-3603.herokuapp.com/team/' + teamId}).success(function (data, status, headers, config){
	  			if (Array.isArray(data)) {
	  				deferred.resolve(data[0]);
	  			} else {
	  				deferred.resolve(data);
	  			}
	  			}).error(function (data, status, headers, config){
	  				deferred.reject(data);
	  			});
	  		
  			return deferred.promise;
	  	},


	  getTeams: function() {
	  	var deferred = $q.defer();
	  	
	  	$http({method: 'GET', url: 'http://pure-ocean-3603.herokuapp.com/team'}).success(function(data, status, headers, config) {
	      deferred.resolve(data);
	    }).error(function (data, status, headers, config) {
	    	deferred.reject(data);
	    });
	  return deferred.promise;
	}
	}
});
