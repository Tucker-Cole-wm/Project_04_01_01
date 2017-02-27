var meetups = angular.module('meetupsController' ,  ['ngSanitize']);

meetups.controller('meetupsController',['$scope', '$http', function ($scope , $http) {

$http.get('data.json').then(function(response) {
      $scope.artists = response.data.speakers;
      $scope.home = "home";
    },
    function(result) {
      console.log('HTTP request failed with result: ' + result);
    });
}]);

meetups.controller('speakersController' , ['$scope' , '$http' , function($scope , $http) {
  $http.get('data.json').then(function(response){
    $scope.speakers = 'true';
    $scope.artists = response.data.speakers;
  },
    function(result){
      console.log('HTTP request failed with result: ' + result);
    });
}]);
