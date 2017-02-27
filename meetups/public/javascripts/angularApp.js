 var myApp = angular.module('myApp', ['ngRoute', 'meetupsController']);
myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/home', {
    templateUrl: 'partials/home.ejs',
    controller: 'meetupsController'
  })
  .when('/speakers', {
    templateUrl: 'partials/speakers.ejs',
    controller: 'speakersController'
  })
  .when('/speakers/:itemid' , {
    templateUrl: 'partials/speakers.ejs',
    controller: 'detailsController'
  })
  .otherwise({
      redirectTo: '/home'
  })
}]);
