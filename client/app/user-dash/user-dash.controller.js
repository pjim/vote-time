'use strict';

angular.module('voteTimeApp')
  .controller('UserDashCtrl', function ($scope,$http,Auth,pollGetter) {

      // function getUsersPolls(){
      //   $http.get('api/polls/all/' + Auth.getCurrentUser().name ).success(function(resp){
      //       console.log(resp);
      //       $scope.thisUsersPolls = resp;
      //   });
      // }
      //
      // getUsersPolls();
      //

      $scope.thisUsersPolls = pollGetter.getUnvotedPolls();

      $scope.newPoll = false;

      $scope.showPollForm = function(){

        if($scope.newPoll === false){$scope.newPoll = true;}
        else{$scope.newPoll = false;}
      };

      $scope.viewPoll = false;

      $scope.showUsersPolls = function(){
        if($scope.viewPoll === false){$scope.viewPoll= true;}
        else{$scope.viewPoll = false;}
      };

      //send the poll form to the server for saving
      $scope.addPoll = function(){
           var optionSendArray = [];
           $scope.options.forEach(function(option){
                optionSendArray.push({optionName:option.opt,votes:0});
           });
           console.log(optionSendArray);
           var pollQuestion = $scope.pollQuestion;
          var userName = Auth.getCurrentUser().name ;
         $http.post('api/polls/', {question:pollQuestion,options:optionSendArray,owner:userName});
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
          console.log($scope.thisUsersPolls);
      };


  });
