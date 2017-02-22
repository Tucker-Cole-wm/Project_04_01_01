var meetups = angular.module('meetups', ['ngAnimate']);

meetups.controller('indexController',['$scope', '$http', function ($scope , $http) {
  
$http.get('data.json').then(function(response) {
      $scope.artists = response.data;
      $scope.artistOrder = 'name';
    },
    function(result) {
      console.log('HTTP request failed with result: ' + result);
    });
}]);
