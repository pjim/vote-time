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
                //checkUserVoted();
            }
         };
          function checkUserVoted(){
             var userName = Auth.getCurrentUser().name;
              console.log(userName);
              var currentPoll;
              console.log($scope.poll._id);
              $http.get('api/polls/' + $scope.poll._id).then(function(response){
                currentPoll = response;
              });
              currentPoll.voted.forEach(function(value){
                  if(value === userName){$scope.thisUserCanVote = false;}
              });
          }
          $timeout(checkUserVoted,100);
          //must check if user has voted on this poll if so ng-hide the poll and display the result
          // so if has voted show chart
          //must show the result as a chart after vote is cast

      },
      link: function (scope, element, attrs) {

      }

    };
  });


  //directive should take teh poll options and place them in a list group with checkboxes
  //it should show the poll title
  //it should then post to the server when a vote goes though
  //then it dissaplears or switches to a chart display
