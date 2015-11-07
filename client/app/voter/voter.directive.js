'use strict';

angular.module('voteTimeApp')
  .directive('voter', function () {
    return {
      templateUrl: 'app/voter/voter.html',
      restrict: 'EA',
      scope:{
        poll:'='
      },
      controller:function($scope,$http){

      },
      link: function (scope, element, attrs) {
      }
    };
  });


  //directive should take teh poll options and place them in a list group with checkboxes
  //it should show the poll title
  //it should then post to the server when a vote goes though
  //then it dissaplears or switches to a chart display
