'use strict';

angular.module('voteTimeApp')
  .controller('UserDashCtrl', function ($scope) {
      $scope.addPoll = function(){
          for(option in options,function(){
            //turn a variable number of options into an array for sending
          });
          $http.post('api/polls/', {question:pollQuestion,options:[optionArray]})  
      }
  });
