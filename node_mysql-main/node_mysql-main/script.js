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
    $scope.message = 'A one stop solution for all road side Assistance.'
    $scope.compname = 'Automania Tow Services'
    });

     
    app.controller('SecondController', ['$scope', '$http', function($scope, $http)  {
        $scope.userData = undefined;
        var req = {
            method: 'GET',
            url: 'http://localhost:5500/check',
            headers: { 'Content-Type': 'application/json' }
        };
        $http(req).then(function (response) {
            $scope.userData  = response.data;
        });
      }]);
     
