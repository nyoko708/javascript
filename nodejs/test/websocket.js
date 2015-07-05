var http = require("http");
var clientHtml = require("fs").readFileSync('./client.html');

var plainHttpServer = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(clientHtml);
}).listen(8081);

var io = require('socket.io').listen(plainHttpServer);
  io.set('origins', ['localhost:8081', '127.0.0.1:8081']);
  io.sockets.on('connection', function(socket) {
    socket.on('msg', function(msg) {
        console.log(msg);
        socket.emit("othermessage", msg);
    });
});


