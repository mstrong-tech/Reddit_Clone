var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const mongooseeder = require("mongooseeder");
const models = require("../models");
const User = models.User;
const Commentable = models.Commentable;

/* GET users listing. */
router.post("/newpost", function(req, res, next) {
  console.log("post started");
  User.find({ username: req.body.username }).then(result => {
    // console.log(result[0]._id)

    let newPost = {
      userId: result[0]._id,
      title: req.body.title,
      text: req.body.text,
      parentId: 0,
      score: 0
    };

    Commentable.create(newPost);
    res.send("respond with a resource");
  });
});

router.get("/newpost", (req, res, next) => {
  res.render("form");
});

module.exports = router;
