'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])

// Inject with myApp.services.dummyData.... I think
.service('dummyData', function() {
  this.getData = function() {
    var dummies = [];
    var dummy;
    function (var i = 0; i < 100; i++) {
      dummy = {};

      dummy.latitude = 105.270233;
      dummy.longitude = -33.431885;
      dummy.email = 'brandon.s@gmail.com';
      dummy.name = 'Brandon Sanderson ' + i;
      dummy.subjects = ['React', 'Angular', 'Backbone'];

      dummies.push(dummy);
    }
  }
});