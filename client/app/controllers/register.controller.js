chat.controller('RegisterController',function($scope, $location ,$http ,registerService){
    $scope.title = "Register Here";
    $scope.user = {};
      $scope.newUserSubmit = function(){
        registerService.registerNewUser($scope.user).then(function(data){
          if(data.success == true){
              var url = '/';
              $location.url(url);
          }
          else{
            var url = '/register';
            $location.url(url);
          }
        });

      };
    });//http
