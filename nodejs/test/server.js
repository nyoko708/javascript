var http = require("http");
var formidable = require("formidable");
var url  = require('url');
var form = require('fs').readFileSync('./form.html');


http.createServer(function(req, res) {
  if(req.method == 'GET') {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end(form);
  } else if(req.method == 'POST') {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    var incoming = new formidable.IncomingForm();
    incoming.uploadDir = './uploads'
    incoming.on('fileBegin', function(field, file) {
      if(file.name) {
        file.path += '-'+file.name;
      }
    }).on('file', function(filed, file) {
      if(!file.size) { return; }
      res.write(file.name+ 'を受け取りました。\n');

    }).on('field', function(field, value) {
      res.write(field+' : '+value+' \n');

    }).on('end', function() {
      res.end("すべてのファイルを受信しました。");
    });
    incoming.parse(req);
  }
}).listen(8080);


