var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var methodOverride = require("method-override");
var express = require("express");
var logger = require("morgan");
var Helpers = require("./app/components/utils/helpers");

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

mongoose.connect('mongodb://heroku_x9znsrps:7i3id4b3stul3ngb000h4s658u@ds029107.mlab.com:29107/heroku_x9znsrps');
//heroku string 'mongodb://heroku_x9znsrps:7i3id4b3stul3ngb000h4s658u@ds029107.mlab.com:29107/heroku_x9znsrps'

var db = mongoose.connection;

db.on('error', function (err) {
  console.log(`Mongoose Error: ${err}`)
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
})

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/api/events", function (req, res) {
  Sport.find({}).exec(function (err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

app.get("/api/events/:sport", function (req, res) {
  Sport.find({"sport": req.params.sport}).exec(function (err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});


app.post("/api/events", function (req, res) {
  Helpers.geoLocate(req.body.location)
    .then(function (results) {
      Sport.create({
        title: req.body.title,
        sport: req.body.sport,
        location: req.body.location,
        time: req.body.time,
        lat: results.lat,
        lng: results.lng
      }).then(obj=>res.json(obj));
    });
});

//Dev only
app.delete("/api/events/:id", function (req, res) {
  Sport.deleteOne({ "_id": req.params.id })
    .exec(function (err) {
      if (err) {
        console.log(err);
      } else {
        res.send("Event successfully removed.");
      }
    });
});


app.listen(PORT, function () {
  console.log(`App listening on PORT: ${PORT}`);
})