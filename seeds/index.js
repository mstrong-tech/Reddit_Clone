const mongoose = require("mongoose");
const mongooseeder = require("mongooseeder");
const models = require("../models");

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
    // Run your seeds here
    // Example:

    let users = [];
    // let posts = [];

    for (var i = 0; i < 10; i++) {
      let p = models.User.create({
        fname: faker.name.findName().split(" ")[0],
        lname: faker.name.findName().split(" ")[1],
        username: faker.internet.userName(),
        email: faker.internet.email()
      });
      users.push(p);
    }

    // models.User.find({}, {_id: 1}).then(arr => {
    //   arr.forEach(obj => {
    //     let p = models.Commentable.create({
    //       userId: obj._id,
    //       score: faker.random.number(),
    //       parentId: 0,
    //       text: faker.lorem.paragraph(),
    //       title: faker.lorem.sentence()
    //     });
    //     posts.push(p);
    //   });
    // });

    // let userAndPosts = users.concat(posts);

    return Promise.all(users);

    // come back
  }
});
