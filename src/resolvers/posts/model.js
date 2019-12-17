const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let PostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String },
  published: { type: Boolean }
});

module.exports = mongoose.model("posts", PostSchema);
