'use strict';

angular.module('voteTimeApp')
  .factory('pollGetter', function ($http,Auth) {
    // Service logic
    // ...


    // Public API here
    return {
      getUnvotedPolls: function () {
        var pollsArray = [];
        $http.get('api/polls').success(function(resp){
            resp.forEach(function(value){
               if(value.voted.indexOf(Auth.getCurrentUser().name)  === -1){
                   pollsArray.push(value);
               }
            });
        });

          return pollsArray;
      }

   };
 });
