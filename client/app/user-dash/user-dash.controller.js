'use strict';

angular.module('voteTimeApp')
  .controller('UserDashCtrl', function ($scope,$http) {

      //send the poll form to the server for saving
      $scope.addPoll = function(){
           var optionSendArray = [];
           $scope.options.forEach(function(option){
                optionSendArray.push(option);
           });
           console.log(optionSendArray);
           var pollQuestion = $scope.pollQuestion;

         $http.post('api/polls/', {question:pollQuestion,options:[optionSendArray]});
      };

      $scope.options = [
        {opt:'option1'},
        {opt:'option2'},
      ];

     //add option boxes to the poll entry page
      $scope.addOption = function(event){
        event.preventDefault();
        var optNum = $scope.options.length +1;
        $scope.options.push({opt:'option' + optNum});
      };

    //delete option boxes
      $scope.removeOption = function(event){
        event.preventDefault();
        if($scope.options.length > 2){
          $scope.options.pop();
        }else{
          alert('You must have at least two options in your poll');
        }
      };

      $scope.test = function(){
          console.log($scope.options) ;
      };
  });
