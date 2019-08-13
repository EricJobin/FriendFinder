// Dependencies
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.static("app/data/images"))// this allows the server to serve images hosted in the app/data(/images) folder
app.use(express.json());

require("./app/routing/apiRoutes")(app); // Important to include this line, otherwise stuff doesn't work. Also need to put it before the bottom one where you've got the catch all * route
require("./app/routing/htmlRoutes")(app);

//Activate Server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});