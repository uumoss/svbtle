'use strict';

angular.module('teamApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
	 $urlRouterProvider.otherwise("/");
	 
	 $stateProvider
	    .state('main', {
	      url: "/",
	      templateUrl: "views/main.html",
	      controller: "MainCtrl",	
	      resolve: {
	      	teams: function (TurtleService) {
	      		return TurtleService.getTeams();
	      	}
	      }
	    })
	    .state('team', {
	    	url: "/team:teamId",
	    	templateUrl: "views/team.html",
	    	Controller: "TeamCtrl",
	    	resolve: {
	    		team: function (TurtleService, $stateParams) {
	    			return TurtleService.getTeam($stateParams.teamId);
	    		}
	    	}
	    });
});

