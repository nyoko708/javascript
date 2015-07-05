var http = require("http");
var fs = require("fs");
var urlOpts = {
 hosts: "localhost",
 path: "/",
 port: "8080",
 method: "POST"
};

var boundary = Date.now();
urlOpts.headers = {
  "Content-Type": 'multipart/form-data; boundary="'+boundary+'"'
};
