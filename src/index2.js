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
  published: { type: Boolean }
});
const PostModel = mongoose.model("posts", PostSchema);

let UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String },
  posts: [{ type: Schema.Types.ObjectId, ref: "posts" }]
});
const UserModel = mongoose.model("users", UserSchema);

let postNew = new PostModel({
  title: "t2",
  content: "content11111111",
  published: false
});

load = async () => {
  try {
    // Save
    const postSaved = await postNew.save();

    let userNew = new UserModel({
      name: "name1",
      email: "email",
      published: false,
      posts: postSaved._id
    });

    const userSaved = await userNew.save();
    console.log("userSaved", userSaved);
    return userSaved;
  } catch (error) {
    console.error("userSaved =>", error);
  }
};
// load = async () => {
//   try {
//     const allPosts = await UserModel.find({});
//     console.log("allPosts", allPosts);
//     return allPosts;
//   } catch (error) {
//     console.error("userSaved =>", error);
//   }
// };
load();
