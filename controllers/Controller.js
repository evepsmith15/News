var express = require("express");
var router = express.Router();
var request = require("request");
var cheerio = require("cheerio");
var mongoose = require("mongoose");
mongoose.Promise = Promise;

var Note = require("../models/Comments.js");
var Article = require("../models/Articles.js");

//default
router.get("/", function(req, res) {
  res.render("index");
});

router.get("/save", function(req, res) {
  Article.find({}, function(error, doc) {
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

//