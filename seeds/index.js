const mongoose = require("mongoose");
const mongooseeder = require("mongooseeder");
const models = require("../models");
const {User, Post, Comment} = require("../models");

//for new names, etc.
const faker = require("faker");

//for database
var env = process.env.NODE_ENV || "development";
var config = require("./../config/mongo")[env];

// Always use the MongoDB URL to allow
// easy connection in all environments
const mongodbUrl =
  process.env.NODE_ENV === "production"
    ? process.env[config.use_env_variable]
    : `mongodb://${config.host}/${config.database}`;

mongooseeder.seed({
  mongodbUrl: mongodbUrl,
  models: models,
  clean: true,
  mongoose: mongoose,
  seeds: () => {
    let users = [];

    for (var i = 0; i < 10; i++) {
      let p = new User({
        fname: faker.name.findName().split(" ")[0],
        lname: faker.name.findName().split(" ")[1],
        username: faker.internet.userName(),
        email: faker.internet.email()
      });
      users.push(p);
    }

    let posts = [];

    users.forEach(user => {
      let p = new Post({
        user: user,
        score: faker.random.number(),
        depth: 0,
        text: faker.lorem.paragraph(),
        title: faker.lorem.sentence()
      });
      posts.push(p);
    });

    let comments = [];

    posts.forEach(post => {
      let p = new Comment({
        user: users[0],
        score: faker.random.number(),
        depth: 1,
        post: post,
        text: faker.lorem.paragraph()
      });
      comments.push(p);
    });

    const promises = [];
    const collections = [users, posts, comments];

    collections.forEach(collection => {
      collection.forEach(model => {
        const promise = model.save();
        promises.push(promise);
      });
    });

    return Promise.all(promises);

    // come back
  }
});
