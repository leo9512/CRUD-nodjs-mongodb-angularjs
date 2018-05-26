angular.module('myApp')
.controller("LoginController", ["$scope", "$http", "$state","UserService", function ($scope, $http,$state,UserService) {
    $scope.login=function(){
        UserService.getUsuarios()
        .then(function (res) {
            console.log(res.data);
        })
    }
}]);