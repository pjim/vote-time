'use strict';

angular.module('voteTimeApp')
  .controller('UserDashCtrl', function ($scope) {
  //    $scope.addPoll = function(){
        //  for(option in options,function(){
            //turn a variable number of options into an array for sending
        //  });
        //  $http.post('api/polls/', {question:pollQuestion,options:[optionArray]})
      //}
      $scope.options = [
        'option1',
        'option2'
      ];
      $scope.addOption = function(event){
        event.preventDefault();
        var optNum = $scope.options.length +1;
        $scope.options.push('option' + optNum);
      };
      $scope.removeOption = function(event){
        event.preventDefault();
        if($scope.options.length > 2){
          $scope.options.pop();
        }else{
          alert('You must have at least two options in your poll');
        }
      };
  });
