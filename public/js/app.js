(function() { 

  // import angular from 'angular'
  // import 

  // var angular = require('angular')


  // <script type="text/javascript" src="../node_modules/jquery/dist/jquery.min.js"></script>
  // <script src="../node_modules/angular/angular.min.js"></script>
  // <script src="../node_modules/angular/angular-route.min.js"></script>
  // <script src="js/app.js"></script>
  // <script src="js/search/search.service.js"></script>
  // <script src="js/search/search.controller.js"></script>



'use strict';

// Declare app level module which depends on filters, and services

  angular.module('myApp', ['ngRoute'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'search/search.html',
        controller: 'SearchController'
      })

      .when('/view1', {
        templateUrl: 'partials/partial1',
        controller: 'MyCtrl1'
      })
      .when('/view2', {
        templateUrl: 'partials/partial2',
        controller: 'MyCtrl2'
      })
      .otherwise({
        redirectTo: '/view1'
      });

    $locationProvider.html5Mode(true);
  });
})();
