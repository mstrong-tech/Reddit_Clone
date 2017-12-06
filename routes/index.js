const express = require("express");
const router = express.Router();

//database
const mongoose = require("mongoose");

//requiring the models
const models = require("../models");
const Commentable = models.Commentable;
const Post = models.Post;
const User = models.User;
const Comment = models.Comment;

/* GET home page. */
router.get("/", function(req, res, next) {
  Post.find({depth: 0}).then(posts => {
    res.render("index", {posts});
  });
});

router.get("/posts/:id", (req, res, next) => {
  Post.find({_id: req.params.id})
    .populate("user")
    .then(posts => {
      Comment.find({post: posts[0]}).then(comments => {
        res.render("post", {
          post: posts[0],
          comments: comments
        });
      });
    });
});

router.get("/posts/:id/newcomment", (req, res, next) => {
  res.render("newcommentform", {postid: req.params.id});
});

router.post("/posts/:id/newcomment", (req, res, next) => {
  Post.find({_id: req.params.id}).then(posts => {
    var post = posts[0];

    console.log("entered into post find");
    User.findOne({username: req.body.username}).then(user => {
      console.log(
        "entered into user find one and heres everything: " +
          req.body.text +
          post +
          user
      );
      new Comment({
        text: req.body.text,
        score: 0,
        depth: 1,
        post: post,
        user: user
      });

      Comment.save();

      res.redirect(`/posts/${req.params.id}`);
    });
  });
});

module.exports = router;
