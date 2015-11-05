'use strict';

angular.module('voteTimeApp')
  .controller('MainCtrl', function ($scope, $http) {
     $scope.polls = $http.get('api/poll').success(function(resp){
       $scope.polls = resp;
     });
  });
