
angular.module('codellama.search', [])

  .service('SearchService', function($http) {

    // initialize empty tutor data array that will hold search results
    this.tutorData = [];

    // TODO: figure out which query to search by
    this.getTutors = function(city, subjects) {
      parsedCity = city.replace(/\ /, '+');
      parsedSubjects = subjects.replace(/\ /g, '+');
      // TODO: make sure to get api url from server side
      // make GET request to api (db) to get tutor data array
      return $http({
        method: 'GET',
        url: '/api/tutor/search',
        params: {
          city: city,
          subjects: subjects
        }
      })
      .then(function (resp) {
        console.log(resp.data);
        return resp.data;
      });
    };
  })

  .controller('SearchController', function ($scope, SearchService, $location) {

    // initialize empty tutor data array that will hold search results
    // $scope.tutorData = [];
  
    // define search on scope
    $scope.search = function(city, subjects) {

      // call function from SearchService
      SearchService.getTutors(city, subjects)

        // upon success, assign returned tutors data to scope's tutorData
        .then(function(tutors) {
          SearchService.tutorData = tutors;
          $location.path('/search');
        })

        // on error, console log error
        .catch(function(error) {
          console.log('There was an error retrieving tutor data: ', error);
        });
    };
  })

  .controller('SearchResultsController', function ($scope, SearchService) {

    $scope.tutorData = SearchService.tutorData;

    console.log(SearchService.tutorData);
    console.log('$search results scope.tutorData:', $scope.tutorData);

  });


