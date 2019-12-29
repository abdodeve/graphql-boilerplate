const mongoose = require("mongoose");
const CommentSchema = require("../comments/model").schema;

const Schema = mongoose.Schema;

let PostSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "users" },
  comments: [CommentSchema],
  title: { type: String, required: true },
  content: { type: String },
  published: { type: Boolean }
});

module.exports = mongoose.model("posts", PostSchema);
