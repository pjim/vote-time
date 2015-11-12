'use strict';

angular.module('voteTimeApp')
  .controller('UserDashCtrl', function ($scope,$http,Auth,pollGetter) {


      $scope.getUnvoted = () => {$scope.thisUsersPolls = pollGetter.getUnvotedPolls();};


      $scope.getUnvoted();

      $scope.getAllPolls = () => {
          $http.get('api/polls/all/' + Auth.getCurrentUser().name).success(response => {
          $scope.fullUsersPolls = response;
          });
      };

      $scope.getAllPolls();

//when you vote it's not dissapearing from the list
      $scope.newPoll = false;

      $scope.viewPoll = false;


      $scope.showPollForm = () => {

        if($scope.newPoll === false){$scope.newPoll = true;}
        else{$scope.newPoll = false;}
      };



      $scope.showUsersPolls = () => {
        if($scope.viewPoll === false){$scope.viewPoll= true;}
        else{$scope.viewPoll = false;}
      };

      //send the poll form to the server for saving
      $scope.addPoll = () => {
           var optionSendArray = [];
           $scope.options.forEach(option => {
                optionSendArray.push({optionName:option.opt,votes:0});
           });
           console.log(optionSendArray);
           var pollQuestion = $scope.pollQuestion;
           var userName = Auth.getCurrentUser().name ;
          $http.post('api/polls/', {question:pollQuestion,options:optionSendArray,owner:userName});

          $scope.getUnvoted();
          $scope.getAllPolls();
          $scope.pollQuestion = '';
          $scope.options = [
               {opt:'option1'},
               {opt:'option2'},
             ];

      };


     //add option boxes to the poll entry page
      $scope.addOption = event => {
        event.preventDefault();
        var optNum = $scope.options.length +1;
        $scope.options.push({opt:'option' + optNum});
      };

    //delete option boxes
      $scope.removeOption = event => {
        event.preventDefault();
        if($scope.options.length > 2){
          $scope.options.pop();
        }else{
          alert('You must have at least two options in your poll');
        }
      };

      $scope.options = [
            {opt:'option1'},
            {opt:'option2'},
          ];

      $scope.deletePoll = poll => {
        var pollId = poll._id;
        $http.delete(`api/polls/${pollId}`);
        //remove from scope
        $scope.getUnvoted();
        $scope.getAllPolls();
        };
      });
