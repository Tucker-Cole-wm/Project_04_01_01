var myApp = angular.module('myApp', ['ngRoute', 'artistControllers']);
myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/list', {
    templateUrl: 'partials/list.html',
<<<<<<< .merge_file_OBe4bx
    controller : 'ListController'
  })
  .when('/details/:itemId', {
    templateUrl: 'partials/details.html',
    controller: 'DetailsController'
=======
    controller : 'speakerController'
>>>>>>> .merge_file_ZFbpxw
  })
  .otherwise({
      redirectTo: 'list'
  })
}]);
