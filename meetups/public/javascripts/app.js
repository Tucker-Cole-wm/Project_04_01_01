var myApp = angular.module('myApp', ['ngRoute', 'artistControllers']);
myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/list', {
    templateUrl: 'partials/list.html',
    controller : 'speakerController'
  })
  .otherwise({
      redirectTo: 'list'
  })
}]);
