var sample=angular.module("sample", []);
sample.controller("myctrl", function($scope, $http)
{
    $http.get('data.json')
    .success(function(response)
    {
        $scope.entry=response.data;
    });
});