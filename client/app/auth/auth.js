
angular.module('codellama.auth', [])

.factory('AuthService', function ($http, $location, $window) {
  var signin = function(user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin/',
      data: user
    })
    .then(function (res) {
      $window.localStorage.setItem('com.codeLlama', res.data.token);
      $location.path('/'); // do we want it to redirect to home?
    })
    .catch(function (error) {
      console.error(error);
    });
  };

  var signup = function(user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup/',
      data: user
    })
    .then(function (res) {
      $window.localStorage.setItem('com.codeLlama', res.data.token);
      console.log('signup worked');
      $location.path('/'); // do we want it to redirect to home?
    })
    .catch(function (error) {
      console.error(error);
    });
  };

  var logout = function() {
    $window.localStorage.Item('com.codeLlama');
    $location.path('/');
  };

  return {
    signin: signin,
    signup: signup,
    logout: logout
  };

})

.controller('AuthController', function($scope, AuthService) {
  $scope.dummyData = ['hi', 'I am', 'Fred'];
  // we want form submit to ... connect to backend ... with email & password
  //
  $scope.user = {};
  // var user = $scope.user;

  $scope.signin = function() {
    AuthService.signin($scope.user);
  };

  $scope.signup = function() {
    AuthService.signup($scope.user);
  };
});