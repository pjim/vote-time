'use strict';

angular.module('voteTimeApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/vote', {
        templateUrl: 'app/vote/vote.html',
        controller: 'VoteCtrl'
      });
  });
