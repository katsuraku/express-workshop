var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// fs.readFile(__dirname + '/data/posts.json', function (error, file) {
//  var parsedFile = JSON.parse(file);
//  console.log(file.toString());
//  });

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.send("Hello World");
  console.log(req);
});

app.post("/create-post", function (req, res) {
  console.log(req.body);
  var newPost = JSON.stringify(req.body);
  fs.writeFile(__dirname + '/data/posts.json', newPost, function (error) {
    if (error) {
      console.log('There was this error', error);
    }
    console.log('I wrote the new blogpost into the file');
  });
  res.redirect('/');
});

app.get("/:something", function (req, res) {
  var something = req.params.something;
  res.send(something);
});

app.listen(3000, function () {
  console.log('Server is listening on port 3000. Ready to accept requests!');
});

