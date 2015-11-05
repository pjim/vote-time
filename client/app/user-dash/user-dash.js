'use strict';

angular.module('voteTimeApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/user-dash', {
        templateUrl: 'app/user-dash/user-dash.html',
        controller: 'UserDashCtrl'
      });
  });
