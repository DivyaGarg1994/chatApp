chat.controller('LoginController',function($scope,$location,loginService){
    $scope.title = "Login Here";
    $scope.user = {};
    $scope.submit = function(){
          loginService.loginAuthenticate($scope.user).then(function(data){
            if(data.success = "true"){
              var url = '/register';
              $location.url(url);
            }
            
          });
        }//submit

    });//http
