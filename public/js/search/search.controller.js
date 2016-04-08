(function() {
  
  'use strict';

  /* Controllers */ 

  angular.module('myApp') 

  .controller('SearchController', function ($scope, SearchService) {

    // initialize empty tutor data array that will hold search results
    $scope.tutorData = [];

    // define search on scope
    $scope.search = function(query) {

      // call function from SearchService
      SearchService.getTutors(query)

        // upon success, assign returned tutors data to scope's tutorData
        .then(function(tutors) {
          $scope.tutorData = tutors;
        })

        // on error, console log error
        .catch(function(error) {
          console.log('There was an error retrieving tutor data: ', error);
        })
    }
     

  });
})();

