'use strict';

describe('Controller: UserDashCtrl', function () {

  // load the controller's module
  beforeEach(module('voteTimeApp'));

  var UserDashCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserDashCtrl = $controller('UserDashCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
