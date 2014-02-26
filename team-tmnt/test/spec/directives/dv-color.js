'use strict';

describe('Directive: dvColor', function () {

  // load the directive's module
  beforeEach(module('teamApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dv-color></dv-color>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dvColor directive');
  }));
});
