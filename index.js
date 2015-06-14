var express = require('express');
var body_parser = require('body-parser');
var swig = require('swig');
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/blog', ['blog']);

var app = express();

var host_url = "http://127.0.0.1/";

function url_for (file) {
  return host_url + file;
}

//Start the server
var server = app.listen((process.env.PORT || 8080),function () {

  var host = server.address().address;
  var port = server.address().port;

  if (host == "0.0.0.0") {
    host = "127.0.0.1";
  }
  else if (host == "::::" && host != "127.0.0.1") {
    host = "tomperegrine.me";
  port = "";
  }

  host_url = "http://" + host + ":" + port + "/"; 
  console.log('Server listening at http://%s:%s', host, port);
});

app.engine('swig', swig.renderFile); //Set the template engine to be swig
app.set('view engine', 'swig'); //Tell express to use swiig
app.set('views', __dirname + '/templates'); //Set the directory of the templates

//Allows static files
app.use(express.static('public'));

//Refactor requests
app.use(body_parser.urlencoded({
    extended: false
}));

//Handles all requests
app.use(function (request, res, next) {
  console.log(request.method + request.url);
  next();
});

app.get('/', function (req, res) {
  res.render('text-page.swig', {
    url_for: url_for,
    text: '200 OK!'
  });
})

require('./routes/routes-api.js')(app, db);
require('./routes/routes-std.js')(app, url_for);
require('./routes/routes-blog.js')(app, db, url_for);