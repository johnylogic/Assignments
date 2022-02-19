var myapp=angular.module("myapp",[]);
myapp.controller("myctrl",function($scope,$http){
    $http.get("http://localhost:5500/display").success(function(response){$scope.names=response;})
})