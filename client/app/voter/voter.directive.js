'use strict';

angular.module('voteTimeApp')
  .directive('voter', function () {
    return {
      templateUrl: 'app/voter/voter.html',
      restrict: 'EA',
      scope:{
        poll:'='
      },
      controller:function($scope,$http,Auth){
          $scope.vote = {
              selectedOption:'no option selected',
          };
          $scope.sendOption = function(){
            $http.put('api/polls/' + $scope.poll._id, {optionName:$scope.vote.selectedOption});
          };
          //must check if user has voted on this poll if so ng-hide the poll and display the result

          //must show the result as a chart after vote is cast

          //sets a cookie to prevent reloading and revoting
      },
      link: function (scope, element, attrs) {
      }
    };
  });


  //directive should take teh poll options and place them in a list group with checkboxes
  //it should show the poll title
  //it should then post to the server when a vote goes though
  //then it dissaplears or switches to a chart display
