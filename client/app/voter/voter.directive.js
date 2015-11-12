'use strict';

angular.module('voteTimeApp')
  .directive('voter', function () {
    return {
      templateUrl: 'app/voter/voter.html',
      restrict: 'EA',
      scope:{
        poll:'='
      },
      controller:function($scope,$http,Auth,$timeout){
          $scope.thisUserCanVote = true;
          $scope.vote = {
              selectedOption:'no option selected',
          };
          $scope.sendOption = function(){
            if($scope.thisUserCanVote){
                $http.put('api/polls/' + $scope.poll._id, {
                  optionName:$scope.vote.selectedOption,
                  votingUser:Auth.getCurrentUser().name}
                );
            }
            //call the parent scope to remove any now voted polls
            $scope.$parent.getUnvoted();
            $scope.$parent.getAllPolls();
         };

      },
      link: function (scope, element, attrs) {

      }

    };
  });


  //directive should take teh poll options and place them in a list group with checkboxes
  //it should show the poll title
  //it should then post to the server when a vote goes though
  //then it dissaplears or switches to a chart display
