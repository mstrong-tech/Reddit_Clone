var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema(
  {
    title: String,
    text: String,
    score: Number,
    depth: 0,
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },

  {
    timestamps: true
  }
);

let Post = mongoose.model("Post", PostSchema);

module.exports = Post;
