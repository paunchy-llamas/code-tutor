
  angular.module('codellama', [
    'codellama.tutor', 
    'codellama.search', 
    'ngRoute'])

  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/search/search.html',
        controller: 'SearchController'
      });

      // .when('/view1', {
      //   templateUrl: 'partials/partial1',
      //   controller: 'MyCtrl1'
      // })
      // .when('/view2', {
      //   templateUrl: 'partials/partial2',
      //   controller: 'MyCtrl2'
      // })
      // .otherwise({
      //   redirectTo: '/view1'
      // });

  });
