var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.send('Hello!');  
});

app.get("/posts", function (req, res) {
  res.sendFile(__dirname + '/data/posts.json');
});

app.post("/create-post", function (req, res) {
  fs.readFile(__dirname + '/data/posts.json', function (error, file) {

    var newPost = req.body.blogpost.trim();
    console.log('newPost: ', newPost);

    var currentPosts = JSON.parse(file);
    console.log('currentPosts: ', currentPosts);
    
    var timeStamp = Date.now();
    currentPosts[timeStamp] = newPost;

    var stringifiedPosts = JSON.stringify(currentPosts);

    fs.writeFile(__dirname + '/data/posts.json', stringifiedPosts, function (error) {
      if (error) {
        console.log('There was this error', error);
      }
    console.log('I wrote the new blogpost into the file');
 
    console.log('Updated posts list', stringifiedPosts);
    });
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

