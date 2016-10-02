var example2 = angular.module('example2',['ngRoute','ngMaterial'])
  .config(function($routeProvider){
  // .config(function($routeProvider , $locationProvider){
  //  $locationProvider.html5Mode(true);
    $routeProvider
      .when('/main',{
        templateUrl : 'main.html',
        controller: 'mainCtlr'
      })
      .when('/about',{
        templateUrl : 'about.html',
        controller: 'aboutCtlr'
      })
      .otherwise({
        redirectTo :'/'
      });
  });
