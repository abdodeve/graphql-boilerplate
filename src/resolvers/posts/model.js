const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let PostSchema = new Schema({
  user_id: { type: String },
  title: { type: String, required: true },
  content: { type: String },
  published: { type: Boolean }
});

module.exports = mongoose.model("posts", PostSchema);
