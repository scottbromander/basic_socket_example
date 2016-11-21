

var express = require('express');
var socketIO = require('socket.io');
var path = require('path');

var PORT = process.env.PORT || 3000;
var INDEX = path.join(__dirname, 'index.html');

var server = express()
  .use(function(req, res) {res.sendFile(INDEX)} )
  .listen(PORT, function(){console.log('Listening on ', PORT )});

var io = socketIO(server);

io.on('connection', function(socket){
  console.log('Client connected');
  socket.on('disconnect', function(){ console.log('Client disconnected')});
});

setInterval(function(){ io.emit('time', new Date().toTimeString())}, 1000);
