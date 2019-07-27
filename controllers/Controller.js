var express = require("express");
var router = express.Router();
var request = require("request");
var cheerio = require("cheerio");
var mongoose = require("mongoose");
mongoose.Promise = Promise;

var Note = require("../models/Comments.js");
var Article = require("../models/Articles.js");

//default route
router.get("/", function(req, res) {
  res.render("index");
});

//scrape route
router.get("/save", function(req, res) {
  Articles.find({}, function(error, doc) {
    if (error) {
      console.log(error);
    }
    else {
      var hbsArticleObject = {
        articles: doc
      };
      res.render("save", hbsArticleObject);
    }
  });
});

//create route 

//delete route 

//note route 

module.exports = router;
