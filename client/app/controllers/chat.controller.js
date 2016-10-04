chat.controller('ChatController',function($scope,$routeParams,mySocket,$location,$localStorage,$http,$window){
  $scope.chatBoxes = [];
  var activeUser = $localStorage.username;

  // logout
  $scope.logout = function(){
      mySocket.emit("logout",{name:$localStorage.username});

      delete $localStorage.token;
      delete $localStorage.username;

      $http.defaults.headers.common.Authorization = null;
      $location.url("/");
  }

/* To send a request to get a list of all logged in users*/
  mySocket.emit("logged-user",activeUser);

/* To receive a chat request*/
  mySocket.on("request-chatMessage",function(msg){
    console.log("--rid--"+msg.receiverId);
    console.log("--sid---"+msg.senderId);
    console.log("--sname--"+msg.senderName);

    $scope.ShowConfirm = function () {
              if ($window.confirm(msg.senderName +" is requesting a chat with you .Please confirm or deny.")) {
                console.log("You clicked YES.");
                $scope.chatBoxes.push(msg);
                mySocket.emit("accept-request",{receiveId:msg.receiverId , senderId:msg.senderId , senderName:msg.senderName});
              } else {
                  console.log("You clicked NO.");
              }
          }
          $scope.ShowConfirm();
  });

/* request sent has been accepted*/
  mySocket.on("my-accepted",function(msg){

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
