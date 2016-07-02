// `node server.js` in commmand line will start server 

var express = require('express');

// `express()` initialises the server
var app = express();


// Set up port for server to listen to with `.listen` method on server
// The method takes port number and callback to do once the server is running
// `app.listen()` returns an http.Server object. Internally it does an http.createServer and returns 

app.listen(3000, function() {
  console.log('Server is listening on port 3000. Ready to accept requests!');
});

