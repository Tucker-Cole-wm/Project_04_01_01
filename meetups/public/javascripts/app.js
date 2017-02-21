var myApp = angular.module('myApp', ['ngRoute', 'speakerController']);
myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/list', {
    templateUrl: 'partials/list.html',
    controller : 'speakerController'
  })
  .otherwise({
      redirectTo: '/#!'
  })
}]);
