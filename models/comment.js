var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CommentSchema = new Schema(
  {
    text: String,
    score: Number,
    depth: Number,
    post: {
      type: Schema.Types.ObjectId,
      ref: "Post"
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },

  {
    timestamps: true
  }
);

let Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
