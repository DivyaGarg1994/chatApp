chat.service('registerService',function($http){

    this.registerNewUser = function(user){
      return $http.post("/newRegister",user).then(SuccessFunction , FailureFunction);
    };


  function SuccessFunction(data){
    console.log(data.data);
    return data.data;
  }

  function FailureFunction(data){
    return data.data;
  }
});
