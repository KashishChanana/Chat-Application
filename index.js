/**
 * Created by home on 20/7/17.
 */
 var express= require('express');
 var socket= require('socket.io');

 var app= express();

 var server= app.listen(8000,function(){
  console.log("we are listening to port no. 8000");
});

 app.use(express.static('public_static'));

 var io= socket(server);

 io.on('connection' ,function(socket){
  console.log("new socket made with id= ", socket.id);

  socket.on('chat', function(data){
   io.sockets.emit('chat', data);
  });

     socket.on('typing',function(data){
      socket.broadcast.emit('typing',data);
     });

 });
