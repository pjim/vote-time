'use strict';

angular.module('voteTimeApp')
  .controller('MainCtrl', function ($scope, $http) {
     $scope.polls = $http.get('api/polls').success(function(resp){
       console.log(resp);
       $scope.polls = resp;
     });
  });
