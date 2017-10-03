/**
 * Created by home on 20/7/17.
 */

var socket= io.connect('http://localhost:8000');

var btn = document.getElementById('send');
var handle = document.getElementById('handle');
var message = document.getElementById('message');
var output = document.getElementById('output-window');
var feedback = document.getElementById('feedback');

btn.addEventListener("click",function(){

    socket.emit('chat',{
        message:message.value,
        handle:handle.value
    });
});

message.addEventListener('keydown', function(){
    socket.emit('typing',{
       handle:handle.value
    });
});

socket.on('typing',function(data){

    feedback.innerHTML ='<p><em>'+ data.handle + ' is typing...</em></p>'
});

socket.on('chat', function(data){
    feedback.innerHTML=" ";
    output.innerHTML += '<p> <strong>' +data.handle+ ': &nbsp </strong>' +data.message +'</p>'
});