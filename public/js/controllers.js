'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services']).
  controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

  }).
  controller('MyCtrl1', function ($scope) {
    // Test dummy data
    $scope.data = dummyData.getData();

  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  });
