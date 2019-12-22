const { GraphQLServer } = require("graphql-yoga");
const dotenv = require("dotenv");
const DB = require("./config/database");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: ".env" });

/**
 * Connect to MongoDB.
 */
DB.connect();

let PostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String },
  published: { type: Boolean },
  user_id: { type: Schema.Types.ObjectId, ref: "users" }
});
const PostModel = mongoose.model("posts", PostSchema);

let UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String }
});
const UserModel = mongoose.model("users", UserSchema);

loadCreate = async () => {
  try {
    let userNew = new UserModel({
      name: "name1",
      email: "email",
      published: false
    });
    const userSaved = await userNew.save();

    let postNew = new PostModel({
      title: "Post1",
      content: "content11111111",
      published: false,
      user_id: userSaved._id
    });
    const postSaved = await postNew.save();

    console.log("postNew", postNew);
    return postNew;
  } catch (error) {
    console.error("postNew =>", error);
  }
};
// loadCreate();

loadFetch = async () => {
  try {
    const allPosts = await PostModel.findById("5dff5bdda370618170ddaf2b")
      .populate("user_id")
      .exec();
    console.log("allPosts", allPosts);
    return allPosts;
  } catch (error) {
    console.error("userSaved =>", error);
  }
};
loadFetch();
