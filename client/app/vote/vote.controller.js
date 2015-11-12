'use strict';

angular.module('voteTimeApp')
  .controller('VoteCtrl', function ($scope,pollGetter) {

      $scope.getUnvoted = ()  => {$scope.polls = pollGetter.getUnvotedPolls();};

      $scope.getUnvoted() ;

  });
