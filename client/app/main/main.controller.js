'use strict';

angular.module('voteTimeApp')
  .controller('MainCtrl', function ($scope, $http,Auth) {
    $scope.polls =  [];
     $http.get('api/polls').success(function(resp){
       console.log(resp);
       resp.forEach(function(value){
        if(value.voted.indexOf(Auth.getCurrentUser().name)  === -1){
            $scope.polls.push(value);
        }
       });

     });
     $scope.seePolls = false;

     $scope.showPolls = function(){
       if($scope.seePolls === true){
         $scope.seePolls = false;
       }else{
         $scope.seePolls = true;
       }
     };

     $scope.seeResults = false;

     $scope.showResults = function(){
       if($scope.seeResults){
         $scope.seeResults = false;
       }else{
         $scope.seeResults = true;
       }
     };

  });
