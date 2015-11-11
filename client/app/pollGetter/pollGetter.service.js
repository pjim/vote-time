'use strict';

angular.module('voteTimeApp')
  .factory('pollGetter', function ($http,Auth) {
    // Service logic
    // ...


    // Public API here
    return {
      //returns an array of poll data for the voter directive
      getUnvotedPolls: function () {
        var pollsArray = [];
        $http.get('api/polls').success(function(resp){
            resp.forEach(function(value){
               if(value.voted.indexOf(Auth.getCurrentUser().name)  === -1){
                   pollsArray.push(value);
               }
            });
        });

          return pollsArray;
      },
      //returns an array of config objects for the highchart directive
      getChartObjects: function(){
        var chartArray = [];
        $http.get('api/polls').success(function(resp){
          resp.forEach(function(value){
            var voteCount = 0;
             value.options.forEach(function(val){
                voteCount += val.votes;
             });
              if(voteCount > 0){
                var chartObject = {};
                chartObject.options = {};
                chartObject.options.chart = {type:'column'};
                chartObject.xAxis = {}  ;
                chartObject.xAxis.categories = [];
                chartObject.xAxis.title = {text:'Poll Options'};
                chartObject.yAxis = {};
                chartObject.yAxis.title = {text:'Votes'};
                chartObject.yAxis.minTickInterval = 1;
                chartObject.series = [{data:[]}];
                chartObject.series[0].name = 'Number of Votes';
                chartObject.title = {text:value.question};
                value.options.forEach(function(option){
                   chartObject.xAxis.categories.push(option.optionName);
                   chartObject.series[0].data.push(option.votes);
                });
                chartArray.push(chartObject);
              }
          });
        });
            return chartArray;
      }

   };
 });
