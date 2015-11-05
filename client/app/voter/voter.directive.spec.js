'use strict';

describe('Directive: voter', function () {

  // load the directive's module and view
  beforeEach(module('voteTimeApp'));
  beforeEach(module('app/voter/voter.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<voter></voter>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the voter directive');
  }));
});