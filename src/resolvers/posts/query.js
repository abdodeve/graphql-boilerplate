const PostModel = require("./model");
const UserModel = require("../users/model");

/**
 * posts
 * Get all posts
 * @param {*} _
 * @param {*} args
 */
const posts = async (_, args) => {
  try {
    // fetch posts
    const allPosts = await PostModel.find({});

    return allPosts;
  } catch (error) {
    console.error("posts =>", error);
  }
};

/**
 * post
 * Get single post
 * @param {*} _
 * @param {*} args
 */
const post = async (_, args) => {
  try {
    // get the post
    const thePostDoc = await PostModel.findById(args.id);
    const thePostObject = thePostDoc.toObject({ getters: true });
    const theUserDoc = await UserModel.findById(thePostDoc.user_id);
    const theUserObject = theUserDoc.toObject({ getters: true });
    const post = { ...thePostObject, user: theUserObject };

    return post;
  } catch (error) {
    console.error("post =>", error);
  }
};

module.exports = {
  posts,
  post
};
