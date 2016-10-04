chat.controller('ChatController',function($scope,$routeParams,mySocket,$localStorage,$http){

  var activeUser = $localStorage.username;
  $scope.logout = function(){
      delete $localStorage.token;
      delete $localStorage.username;

      console.log("delete token "+$localStorage.token);
      console.log("delete user "+$localStorage.username);
      $http.defaults.headers.common.Authorization = null;

  }

/* To send a request to get a list of all logged in users*/
  mySocket.emit("logged-user",activeUser);

/* To receive a chat request*/
  mySocket.on("request-chatMessage",function(msg){
    console.log("--rid--"+msg.receiverId);
    console.log("--sid---"+msg.senderId);
    console.log("--sname--"+msg.senderName);
  });

/* To get a list of loggedin users from server*/
  mySocket.on("send-logInArr",function(msg){
      console.log(msg);
      $scope.users = "Number of logged in Users : "+msg.length;
      $scope.msg = msg;
    });

/*Function to  send a request for chat to a particular loggedin user*/
    $scope.connect = function(u){
      console.log(u);
      var senderId = findId(activeUser);
      console.log(senderId);
      mySocket.emit("chat-request",{"receiverId":u.id,"senderId":senderId,"senderName":activeUser});
    }//connect

/* function to get socket id of a particular username */
    function findId(username){
      for(var i=0 ; i<$scope.msg.length ; i++){
          if($scope.msg[i].name == username)
            return $scope.msg[i].id;
      }//for
    }//findId

  });
