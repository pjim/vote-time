'use strict';

describe('Service: votedChecker', function () {

  // load the service's module
  beforeEach(module('voteTimeApp'));

  // instantiate service
  var votedChecker;
  beforeEach(inject(function (_votedChecker_) {
    votedChecker = _votedChecker_;
  }));

  it('should do something', function () {
    expect(!!votedChecker).toBe(true);
  });

});
