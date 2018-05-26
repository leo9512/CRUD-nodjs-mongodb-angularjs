var myApp = angular.module("myApp",['ui.router']);
myApp.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'index.html',
        controller: "LoginController"
    })
    .state('user', {
        url: '/user',
        templateUrl: 'index.html',
        controller: "LoginController"
    })

});