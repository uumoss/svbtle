'use strict';

angular.module('mlsappApp', ['angular-underscore']);

$.ajax({
  url: 'http://api.randomuser.me/?results=10',
  dataType: 'json',
  success: function(data) {
    // uncomment console.log to view the user Object
    // console.log(data.results);

    $('.random-user--wrap > img').each(function(i) {
      $(this).attr('src', data.results[i].user.picture);
    });
    
    $('.container > .random-user--wrap span.fname').each(function(i) {
      $(this).append(data.results[i].user.name.first);
    });

    $('.container > .random-user--wrap span.lname').each(function(i) {
      $(this).append(data.results[i].user.name.last);
    });
  }
});