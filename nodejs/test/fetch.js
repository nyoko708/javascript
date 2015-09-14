var http = require("http");
var url = require('url');

var urlOpts = {host: 'www.nodejs.org', path: '/', port: '80'};

if(process.argv[2]) {
  if(process.argv[2].match('http://')){
    process.argv[2] = 'http://'+process.argv[2];
  } 
  urlOpts.host = (process.argv[2]);
}

console.log(urlOpts);

http.get(urlOpts, function(res) {
  res.on('data', function(chunk) {
    console.log(chunk.toString());
  }).on('error', function(e) {
    console.log(e.message); 
  });
});
