let socket = io.connect('http://localhost:9000');

//query DOM:

//First Room
let sendBtn = document.getElementById('send1');
let output = document.getElementById('output');
let textbox = document.getElementById('message1');
let name = document.getElementById('name1');
let feedback = document.getElementById('feedBack');
//Emit events

sendBtn.addEventListener('click', function(){
    socket.emit('chat', {
        message: textbox.value,
        name: name.value
    });
});

//Listen for events

socket.on('chat', function(data){
    output.innerHTML += '<p><strong>' + 
    data.name +
     ': </strong>' +
      data.message +
      '</p>'})


socket.on("typing", function(data){
    feedback.innerHTML = "<p><em>" + data + " is typing a message...</em></p>"
});
         


/* //Second Room
let sendBtn2 = document.getElementById('send2');
let output2 = document.getElementById('messages2');
let textbox2 = document.getElementById('message2');
let name2 = document.getElementById('name2');

 */

