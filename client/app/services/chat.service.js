chat.factory('mySocket', function (socketFactory) {

  var myIoSocket = io.connect('localhost:8084');

  mySocket = socketFactory({
    ioSocket: myIoSocket
  });

  return mySocket;
//  return socketFactory();
});
