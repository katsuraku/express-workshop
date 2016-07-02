var express = require('express');
var app = express();

// Handler function to handle requests to the server. Always takes a request and a response object.
// Request object has everything in it like headers, cookies etc. 

app.get("/", function (req, res) {
  res.send("Hello World");
  console.log(req);
});

app.listen(3000, function () {
  console.log('Server is listening on port 3000. Ready to accept requests!');
});

