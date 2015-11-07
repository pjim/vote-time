'use strict';

angular.module('voteTimeApp')
  .controller('MainCtrl', function ($scope, $http) {
     $scope.polls = $http.get('api/polls').success(function(resp){
       console.log(resp);
       $scope.polls = resp;

     });
     $scope.seePolls = false;

     $scope.showPolls = function(){
       if($scope.seePolls === true){
         $scope.seePolls = false;
       }else{
         $scope.seePolls = true;
       }
     };
  });
