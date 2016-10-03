chat.service('loginService',function($http){

    this.loginAuthenticate = function(user){
      return $http.post("/login",user).then(SuccessFunction , FailureFunction);
    };

  });

  function SuccessFunction(data){
    return data.data;
  }

  function FailureFunction(data){
    return data.data;
  }
