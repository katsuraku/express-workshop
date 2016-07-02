var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// To access the req body when data has been POSTed to the server, need middleware.
// body-parser parses data in the request and makes it available in req.body
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.send("Hello World");
  console.log(req);
});

app.post("/create-post", function (req, res) {
  res.redirect('/');
});

app.get("/:something", function (req, res) {
  var something = req.params.something;
  res.send(something);
});

app.listen(3000, function () {
  console.log('Server is listening on port 3000. Ready to accept requests!');
});

