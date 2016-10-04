chat.controller('LoginController',function($scope,$location,$http,loginService,$localStorage){
    $scope.title = "Login Here";
    $scope.user = {};
    $scope.submit = function(){
          loginService.loginAuthenticate($scope.user).then(function(data){

            if(data.success == true){
              //local storages
              $localStorage.token = data.token;
              $localStorage.username = data.user.name;

              $scope.name = data.user.name;
              $http.defaults.headers.common.Authorization = "JWT "+$localStorage.token;

              loginService.getAuthentication().then(function(data){

                var url = '/chat';
                $location.url(url);
              });

            }
            else{
              var url = '/';
              $location.url(url);
            }
              //$location.url(url);
          });
        }//submit



    });//http
