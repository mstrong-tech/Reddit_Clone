const mongoose = require("mongoose");
const mongooseeder = require("mongooseeder");
const models = require("../models");
const faker = require("faker");
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

    for (var i = 0; i < 10; i++) {
      let p = models.User.create({
        fname: faker.name.findName().split(" ")[0],
        lname: faker.name.findName().split(" ")[1],
        username: faker.internet.userName(),
        email: faker.internet.email()
      });
      users.push(p);
    }

    return Promise.all(users);

    // come back
  }
});
