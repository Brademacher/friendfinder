var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Set the express app
var app = express();
var PORT = process.env.PORT || 3000;

// Set up the express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// route that sends the user to AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"))
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survery.html"))
})

app.get("/api/reservations", function (req, res) {
    return res.json(friends);
});

