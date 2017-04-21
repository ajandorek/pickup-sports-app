var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var methodOverride = require("method-override");
var express = require("express");
var logger = require("morgan");

var Sport = require("./models/Sport.js");

mongoose.Promise = Promise;

var app = express();
var PORT = process.env.PORT || 3000;

app.use(methodOverride('_method'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, function(){
    console.log(`App listening on PORT: ${PORT}`);
})