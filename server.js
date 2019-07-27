// https://whispering-forest-67989.herokuapp.com/ link for heroku

var express = require('express'); // Express Server
var bodyParser = require('body-parser'); // Post Body Request
var exphbs = require('express-handlebars'); // Templating Engine
var logger = require("morgan"); // Logger
var db = require("./models"); // Require all models
var cheerio = require('cheerio'); // Web Scrapper
var mongoose = require('mongoose'); // MongoDB ORM

let PORT = process.env.PORT || 8080; // Set Default Port for Express and Heroku
let app = express(); // Initialize Express

app.use(logger("dev")); // Use morgan logger for logging requests
app.use(bodyParser.urlencoded({ extended: false })); // Use body-parser for handling form submissions
app.use(bodyParser.json());
app.use(express.static("public")); // Serve static content for the app from the "public" directory in the application directory.

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/Controller.js")(app);

app.listen(PORT, ()=>{
    console.log(`App listening on PORT ${PORT}`);
})