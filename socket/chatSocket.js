module.exports = function(ioConn){

  var logUser = [];

  ioConn.on('connection' , function(socket){
    console.log("-----------------User is connected--------");

    socket.on('disconnect', function(){
      console.log("*************** User DISCONNECTED************");

    //  var index = logUser.indexOf(socket.name);
      logUser.splice(logUser.indexOf(socket.name),1);
    });  // on disconnect

  /*
      receiving messages
  */
    socket.on('message', function(msg){
      socket.broadcast.emit('receiveMsg',msg);
    });

    socket.on('typing', function(msg){
      socket.broadcast.emit('receiveTyping',msg);
    });

    socket.on('notyping', function(msg){
      socket.broadcast.emit('receiveNoTyping',msg);
    });


    socket.on('logged',function(msg){
      if(logUser.indexOf(msg)==-1)
        {
          logUser.push(msg);
          socket.name = msg;
        }

      console.log(msg);
      console.log(logUser);
        socket.emit('logarr',logUser);
    });

    // socket.on('logged',function(msg){
    //   //if(logUser.indexOf(msg)==-1){
    //     socket.name = msg;
    //     logUser.push(socket);
    //   //}
    //     socket.emit('logarr',logUser);
    // });

  }); // on connect

};
