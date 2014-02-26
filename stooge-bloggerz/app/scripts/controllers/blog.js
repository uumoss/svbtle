'use strict';

angular.module('stoogerBloggerzApp')
  .controller('BlogCtrl', function ($scope, blogService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.blogPosts = blogService.getPosts();
  });

