var myApp = angular.module('myApp');
angular.module('myApp')
.factory('UserService', ["$http", function($http) {
    return {
        getUsuarios: function(idea) {
          var usuarios = $http({
            url: '/users',
            method: 'GET'
          });
          return usuarios;
        } 
    }
}])