const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let CommentSchema = new Schema({
  content: { type: String },
  published_at: { type: String }
});

module.exports = {
  model: mongoose.model("comments", CommentSchema),
  schema: CommentSchema
};
