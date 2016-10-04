var chat = angular.module('chat',['ngRoute' , 'ngMaterial' ,'btford.socket-io','ngStorage'])
  .config(function($routeProvider,$locationProvider){

    $routeProvider
    // login page
      .when('/',{
        templateUrl : 'views/login.html',
        controller : 'LoginController'
      })
      //going to register a new user page
      .when('/register',{
        templateUrl : 'views/register.html',
        controller : 'RegisterController'
      })
      .when('/chat',{
        templateUrl : 'views/chat.html',
        controller : 'ChatController'
      })
      .otherwise({
        redirectTo :'/'
      });
  });
