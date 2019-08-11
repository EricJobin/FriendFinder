// Dependencies
var express = require("express");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000; // use process.env.PORT if uploading to something like Heroku where a port will be assigned depending on an .env file. Will use Port 3000 if no .env file

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});