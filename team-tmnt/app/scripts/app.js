'use strict';

angular.module('teamApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider, TurtleService){
	 $urlRouterProvider.otherwise("/");
	 $stateProvider
	    .state('main', {
	      url: "/",
	      templateUrl: "views/main.html",
	      controller: "MainCtrl"	    
	    })
	    .state('team', {
	    	url: "/team",
	    	templateUrl: "views/teamview.html",
	    	Controller: "TeamCtrl"
	    })
});

