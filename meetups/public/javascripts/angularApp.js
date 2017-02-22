 var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/home', {
    templateUrl: 'partials/home.ejs'
  })
  .otherwise({
      redirectTo: '/home'
  })
}]);
