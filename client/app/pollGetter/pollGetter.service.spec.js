'use strict';

describe('Service: pollGetter', function () {

  // load the service's module
  beforeEach(module('voteTimeApp'));

  // instantiate service
  var pollGetter;
  beforeEach(inject(function (_pollGetter_) {
    pollGetter = _pollGetter_;
  }));

  it('should do something', function () {
    expect(!!pollGetter).toBe(true);
  });

});
