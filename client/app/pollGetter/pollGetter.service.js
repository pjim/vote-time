'use strict';

angular.module('voteTimeApp')
  .factory('pollGetter', function ($http,Auth) {
    // Service logic
    // ...

    var pollsArray = [];

    // Public API here
    return {
      getUnvotedPolls: function () {
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
