var app = angular.module('myApp', ['ngRoute']);
 
app.config(function($routeProvider) {
$routeProvider
 
.when('/', {
templateUrl : 'page1.html',
controller : 'FirstController'}).when('/index/:first/:last',
{
    templateUrl:'index.html',
    controller:'FirstController'
})
 
.when('/database', {
templateUrl : 'page2.html',
controller : 'SecondController'
})
 
.when('/databasewithsearch', {
templateUrl : 'page3.html',
controller : 'ThirdController'
})
 
.otherwise({redirectTo: '/'});
});

    app.controller('FirstController', function($scope,$routeParams) {
    $scope.message = 'A community Discussion platform for Lawyers and Law students.'
    if($routeParams.first&&$routeParams.last)
    {
        $scope.person={
            first:$routeParams.first,
            last:$routeParams.last,
        };
    }
    });

     
    app.controller('SecondController', ['$scope', '$http', function($scope, $http)  {
        $scope.userData = undefined;
        var req = {
            method: 'GET',
            url: 'https://johnylogic.github.io/Assignments/Jsonlab/data.json',
            headers: { 'Content-Type': 'application/json' }
        };
        
        
        $http(req).then(function (response) {
            $scope.userData  = response.data.data;
        });
      }]);
     
      app.controller('ThirdController', ['$scope', '$http', function($scope, $http)  {
        $scope.userData = undefined;
        var req = {
            method: 'GET',
            url: 'https://johnylogic.github.io/Assignments/Jsonlab/data.json',
            headers: { 'Content-Type': 'application/json' }
        };
        
        
        $http(req).then(function (response) {
            $scope.userData  = response.data.data;
        });
      }]);