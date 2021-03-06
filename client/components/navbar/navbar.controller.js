'use strict';

angular.module('voteTimeApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/',
      'show':'true'
    },
    {
      'title':'My Home',
      'link':'/user-dash',
      'show':'isLoggedIn()'
    },
    {
      'title':'Vote on Polls',
      'link':'/vote',
      'show':'isLoggedIn()'
    }
  ];
    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
