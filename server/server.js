const express = require("express");
const http = require("http");
const socket = require("socket.io");

const port = process.env.PORT || 4001;

const app = express();

app.use(express.static('public'));

const server = http.createServer(app);

const io = socket(server); // < Interesting!

server.listen(port, function() {
    console.log('listening on *: ' + port);
});

io.on('connection', function(socket) {
  console.log('New connection');

  socket.on('move', function(msg) {
    socket.broadcast.emit('move', msg);
  });
});