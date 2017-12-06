var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CommentableSchema = new Schema(
  {
    title: String,
    userId: String,
    text: String,
    score: Integer,
    parentID: Integer
  },
  {
    timestamps: true
  }
);

let Commentable = mongoose.model("Commentable", CommentableSchema);

module.exports = Commentable;
