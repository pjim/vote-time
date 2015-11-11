'use strict';

angular.module('voteTimeApp')
  .controller('MainCtrl', function ($scope, $http,Auth,pollGetter) {
    $scope.polls = pollGetter.getUnvotedPolls();

   //chart data will contain all the polls with votes

    $scope.chartData = pollGetter.getChartObjects();

    //  $http.get('api/polls').success(function(resp){
     //
    //     resp.forEach(function(value){
    //       var voteCount = 0;
    //        value.options.forEach(function(val){
    //           voteCount += val.votes;
    //        });
    //         if(voteCount > 0){
    //           var chartObject = {};
    //           chartObject.options = {};
    //           chartObject.options.chart = {type:'column'};
    //           chartObject.xAxis = {}  ;
    //           chartObject.xAxis.categories = [];
    //           chartObject.xAxis.title = {text:'Poll Options'};
    //           chartObject.yAxis = {};
    //           chartObject.yAxis.title = {text:'Votes'};
    //           chartObject.yAxis.minTickInterval = 1;
    //           chartObject.series = [{data:[]}];
    //           chartObject.series[0].name = 'Number of Votes';
    //           chartObject.title = {text:value.question};
    //           value.options.forEach(function(option){
    //              chartObject.xAxis.categories.push(option.optionName);
    //              chartObject.series[0].data.push(option.votes);
    //           });
    //           $scope.chartData.push(chartObject);
    //         }
    //     });

  //   });
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
