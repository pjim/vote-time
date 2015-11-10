'use strict';

describe('Service: chartMaker', function () {

  // load the service's module
  beforeEach(module('voteTimeApp'));

  // instantiate service
  var chartMaker;
  beforeEach(inject(function (_chartMaker_) {
    chartMaker = _chartMaker_;
  }));

  it('should do something', function () {
    expect(!!chartMaker).toBe(true);
  });

});
