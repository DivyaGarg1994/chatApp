chat.factory('chatInterceptor' , interceptCallback);

function interceptCallback(){
  var chatCustInterceptor = {
                              'request' : function(config){
                                console.log(config);
                                return config;
                              }
                            }
  return chatCustInterceptor;
};
