chat.service('loginService',function($http){

    this.loginAuthenticate = function(user){
      return $http.post("/login",user).then(SuccessFunction , FailureFunction);
    };

    this.getAuthentication = function(){
      return $http.get("/chat/chatPage").then(SuccessFunction , FailureFunction);
    }
  });

  function SuccessFunction(data){
    console.log(data.data);
    return data.data;
  }

  function FailureFunction(data){
    return data.data;
  }
