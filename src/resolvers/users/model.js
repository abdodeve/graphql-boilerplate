const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let UserSchema = new Schema({
  posts: [{ type: Schema.Types.ObjectId, ref: "posts" }],
  name: { type: String, required: true },
  email: { type: String },
  password: { type: String }
});

module.exports = mongoose.model("users", UserSchema);
