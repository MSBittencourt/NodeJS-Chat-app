const express = require('express');
const socket = require('socket.io')
const app = express();
//const mongodb = require('mongodb').MongoClient;
let port = process.env.PORT || 9000;
let server = app.listen(port, ()=>{
    console.log('Server listening at port %d', port);
})

app.use(express.static('public'));
let io = socket(server);


    io.on('connection', function(socket){
        

        console.log('User connected');
    
        socket.on('disconnect', function () {
            console.log('user disconnected');
        });
    
        socket.on('chat', function(data){
            io.sockets.emit('chat', data);
        })

        socket.on('typing', function(data){
            socket.broadcast.emit('typing', data)
        })
    
        
    })
