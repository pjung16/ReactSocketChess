const express = require("express");
const http = require("http");
const socket = require("socket.io");
const path = require('path');

const port = process.env.PORT || 5000;

const app = express();

app.use(express.static(path.join(__dirname, '/../build')));

//production mode
if(process.env.NODE_ENV === 'production') {  
  app.use(express.static(path.join(__dirname, '/../build'))); 
  app.get('*', (req, res) => {    
    res.sendfile(path.join(__dirname = '/../build/index.html'));  
  })
}

//build mode
app.get('*', (req, res) => {  
  res.sendFile(path.join(__dirname+'/../build/index.html'));
})

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