'use strict';

angular.module('voteTimeApp')
  .controller('MainCtrl', function ($scope, $http,Auth,pollGetter) {
    $scope.polls = pollGetter.getUnvotedPolls();

   //chart data will contain all the polls with votes

    $scope.chartData = pollGetter.getChartObjects();


     $scope.seePolls = false ;

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

     $scope.isLoggedIn = Auth.isLoggedIn;
  });
