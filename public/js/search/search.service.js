(function() {
  
  'use strict';

  /* Services */

  angular.module('myApp')

  .service('SearchService', function($http) {

    // TODO: figure out which query to search by
    this.getTutors = function(query) {

      // TODO: make sure to get api url from server side
      // make GET request to api (db) to get tutor data array
      return $http.get(url)
        .then(function(res) {
          return res.data.tutors;
        })
    }
  });
})();

  
